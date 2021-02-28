function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
        })
    } else {
        obj[key] = value
    }
    return obj
} // Made by Yago Estévez (Twitter: @yagoestevez.com)

/***********************
  Menu Component
 ***********************/

const Menu = (props) => {
    return React.createElement(
        "div",
        { className: `menu-container ${props.showMenu}` },
        React.createElement("div", { className: "overlay" }),
        React.createElement(
            "div",
            { className: "menu-items" },
            React.createElement(
                "ul",
                null,
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "a",
                        { href: "#welcome-section", onClick: props.toggleMenu },
                        "HOME"
                    )
                ),

                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "a",
                        { href: "#about", onClick: props.toggleMenu },
                        "Layer7 소개"
                    )
                ),

                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "a",
                        { href: "#projects", onClick: props.toggleMenu },
                        "Our Works"
                    )
                ),

                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "a",
                        { href: "#contact", onClick: props.toggleMenu },
                        "지원하기"
                    )
                )
            ),

            React.createElement(SocialLinks, null)
        )
    )
}

/***********************
     Nav Component
    ***********************/

const Nav = (props) => {
    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            "nav",
            { id: "navbar" },
            React.createElement(
                "div",
                { className: "nav-wrapper" },
                React.createElement(
                    "p",
                    { className: "brand" },
                    "",

                    React.createElement("strong", null, "Layer7")
                ),

                React.createElement(
                    "a",
                    {
                        onClick: props.toggleMenu,
                        className:
                            props.showMenu === "active"
                                ? "menu-button active"
                                : "menu-button",
                    },

                    React.createElement("span", null)
                )
            )
        )
    )
}

/***********************
     Header Component
    ***********************/

const Header = (props) => {
    return React.createElement(
        "header",
        { id: "welcome-section" },
        React.createElement("div", { className: "forest" }),
        React.createElement("div", { className: "silhouette" }),
        React.createElement("div", { className: "moon" }),
        React.createElement(
            "div",
            { className: "container" },
            React.createElement(
                "h1",
                null,
                React.createElement("span", { className: "line" }, "Layer7"),
                React.createElement("span", { className: "line" }, "We hack"),
                React.createElement(
                    "span",
                    { className: "line" },
                    React.createElement("span", { className: "color" }, "the"),
                    " universe!"
                )
            ),

            React.createElement(
                "div",
                { className: "buttons" },
                React.createElement("a", { href: "#projects" }, "our works"),
                React.createElement(
                    "a",
                    { href: "#contact", className: "cta" },
                    "join now"
                )
            )
        )
    )
}

/***********************
     About Component
    ***********************/

const About = (props) => {
    return React.createElement(
        "section",
        { id: "about" },
        React.createElement(
            "div",
            { className: "wrapper" },
            React.createElement(
                "article",
                null,
                React.createElement(
                    "div",
                    { className: "title" },
                    React.createElement("h3", null, "Layer7 소개"),
                    React.createElement("p", { className: "separator" })
                ),

                React.createElement(
                    "div",
                    { className: "desc full" },
                    React.createElement(
                        "h4",
                        { className: "subtitle" },
                        "SLOGAN"
                    ),
                    React.createElement("p", null, "열정, 책임감, 친근함"),

                    React.createElement(
                        "p",
                        null,
                        "공부하고자 하는 열정, 보안인으로써의 책임감, 학교 선후배로써의 친근함은 동아리의 지향점입니다."
                    )
                ),

                React.createElement(
                    "div",
                    { className: "title" },
                    React.createElement("h3", null, "Layer7의 역사"),
                    React.createElement("p", { className: "separator" })
                ),

                React.createElement(
                    "div",
                    { className: "desc" },
                    React.createElement(
                        "h4",
                        { className: "subtitle" },
                        "HOW WE STARTED IT"
                    ),
                    React.createElement("p", null, ""),

                    React.createElement(
                        "p",
                        null,
                        "Layer7은 선린인터넷고등학교가 서울시 최초 IT 특성화 고등학교로 지정된 2001년 부터 학교와 함께해 왔습니다. 보안에 관심 있는 학생들끼리 모여 동아리를 만들고, 해킹이라는 흔치 않은 분야에서 서로가 서로를 도우며 보안을 공부해왔습니다. 체계적인 커리큘럼과 동아리원들의 열정, 책임감은 19년이라는 역사를 뒷받침해왔습니다."
                    )
                ),

                React.createElement(
                    "div",
                    { className: "desc" },
                    React.createElement("h4", { className: "subtitle" }, "NOW"),
                    React.createElement("p", null, ""),

                    React.createElement(
                        "p",
                        null,
                        "세계 해커들의 올림픽이라는 데프콘, 국방부에서 주관하는 WITHCON 등 유명 대회에서 수상하고, 국제 해킹 컨퍼런스 코드게이트 등에서 준비한 프로젝트를 발표하며, 시스템, 웹, 임베디드에 아우른 다양한 분야에서 실적을 내고 있습니다."
                    )
                )
            )
        )
    )
}

/***********************
     Project Component
    ***********************/

const Project = (props) => {
    const tech = {
        sass: "fab fa-sass",
        css: "fab fa-css3-alt",
        js: "fab fa-js-square",
        react: "fab fa-react",
        vue: "fab fa-vuejs",
        d3: "far fa-chart-bar",
        python: "fab fa-python",
        c: "fab fa-cuttlefish",
        html: "fab fa-html5",
        node: "fab fa-node",
    }

    const link = props.link || "http://"
    const repo = props.repo || "http://"

    return React.createElement(
        "div",
        { className: "project" },
        React.createElement(
            "a",
            {
                className: "project-link",
                href: link,
                target: "_blank",
                rel: "noopener noreferrer",
            },
            React.createElement("img", {
                className: "project-image",
                src: props.img,
                alt: "Screenshot of " + props.title,
            })
        ),

        React.createElement(
            "div",
            { className: "project-details" },
            React.createElement(
                "div",
                { className: "project-tile" },
                React.createElement(
                    "p",
                    { className: "icons" },
                    props.tech.split(" ").map((t) =>
                        React.createElement("i", {
                            className: tech[t],
                            key: t,
                        })
                    )
                ),

                props.title,
                " "
            ),

            props.children,
            React.createElement(
                "div",
                { className: "buttons" },
                React.createElement(
                    "a",
                    {
                        href: repo,
                        target: "_blank",
                        rel: "noopener noreferrer",
                    },
                    "Show post ",
                    React.createElement("i", {
                        className: "fas fa-external-link-alt",
                    })
                )
            )
        )
    )
}

/***********************
     Projects Component
    ***********************/

const Projects = (props) => {
    return React.createElement(
        "section",
        { id: "projects" },
        React.createElement(
            "div",
            { className: "projects-container" },
            React.createElement(
                "div",
                { className: "heading" },
                React.createElement("h3", { className: "title" }, "Our Works"),
                React.createElement("p", { className: "separator" })
            ),

            React.createElement(
                "div",
                { className: "projects-wrapper" },

                React.createElement(
                    Project,
                    {
                        title: "플레이스테이션4 해킹 가이드 제작",
                        img: "./1.png",
                        tech: "",
                        link: "https://ggyul-e.tistory.com/20",
                        repo: "https://ggyul-e.tistory.com/20",
                    },

                    React.createElement(
                        "small",
                        null,
                        '레이어7 20기 부장님의 "진짜 해킹"'
                    ),

                    React.createElement(
                        "p",
                        null,
                        "콘솔 게임기인 플레이스테이션4의 구조와 해킹 방법을 설명합니다!"
                    )
                ),

                React.createElement(
                    Project,
                    {
                        title: "네이트온 해킹",
                        img: "./2.png",
                        tech: "",
                        link: "https://jmsl7.tistory.com/31",
                        repo: "https://jmsl7.tistory.com/31",
                    },

                    React.createElement(
                        "small",
                        null,
                        "김도연, 너가 감히 우릴 배신해?"
                    ),

                    React.createElement(
                        "p",
                        null,
                        "그렇게 시작된 레쎄 부원들의 은밀하고 위대한 김도연 고백 프로젝트"
                    )
                ),

                React.createElement(
                    Project,
                    {
                        title: "플래시 게임 해킹",
                        img: "./3.jpg",
                        tech: "",
                        link: "https://jmsl7.tistory.com/31",
                        repo: "https://jmsl7.tistory.com/31",
                    },

                    React.createElement("small", null, '"김도연한테 져봐"'),
                    React.createElement("p", null, '"그게 뭔데"'),
                    React.createElement("p", null, '"그거 어떻게 하는건데"')
                ),

                React.createElement(
                    Project,
                    {
                        title: "칼리를 이용한 모의 해킹",
                        img: "./4.jpg",
                        tech: "",
                        link: "https://sungmin-04.tistory.com/24",
                        repo: "https://sungmin-04.tistory.com/24",
                    },

                    React.createElement(
                        "small",
                        null,
                        "아직도 윈도우 xp를 사용하는 사람이 있다??"
                    ),
                    React.createElement(
                        "p",
                        null,
                        "윈도우 xp를 사용하는 김도연의 pc를 좀비pc로 만들어보자"
                    )
                ),

                React.createElement(
                    Project,
                    {
                        title: "Heap Exploitation",
                        img: "./5.png",
                        tech: "",
                        link: "https://normaldy.tistory.com/63",
                        repo: "https://normaldy.tistory.com/63",
                    },

                    React.createElement(
                        "small",
                        null,
                        "힙을 exploit해서 도연이의 힙을 걷어차주자!"
                    )
                ),

                React.createElement(
                    Project,
                    {
                        title: "웹 개발 및 취약점 분석",
                        img: "./6.png",
                        tech: "",
                        link: "https://disso1p1.tistory.com/64",
                        repo: "https://disso1p1.tistory.com/64",
                    },

                    React.createElement(
                        "small",
                        null,
                        "도연이는 사람인가 문어인가"
                    )
                )
            )
        )
    )
}

/***********************
     Contact Component
    ***********************/

const Contact = (props) => {
    return React.createElement(
        "section",
        { id: "contact" },
        React.createElement(
            "div",
            { className: "container" },
            React.createElement(
                "div",
                { className: "heading-wrapper" },
                React.createElement(
                    "div",
                    { className: "heading" },
                    React.createElement(
                        "p",
                        { className: "title" },
                        "Want to ",
                        React.createElement("br", null),
                        "contact me?"
                    ),

                    React.createElement("p", { className: "separator" }),
                    React.createElement(
                        "p",
                        { className: "subtitle" },
                        "Please, send an email to ",
                        "",
                        React.createElement(
                            "span",
                            { className: "mail" },
                            "kkhhss0290",

                            React.createElement("i", {
                                className: "fas fa-at at",
                            }),
                            "gmail.com"
                        ),
                        React.createElement("p", { className: "subtitle" }, ""),
                        React.createElement(
                            "p",
                            { className: "subtitle" },
                            "지원 사이트는 현재 준비 중입니다."
                        ),
                        React.createElement(
                            "span",
                            { className: "subtitle" },
                            "made by "
                        ),
                        React.createElement(
                            "a",
                            {
                                href: "https://github.com/Choih0401",
                                target: "_blank",
                                rel: "noopener noreferrer",
                            },
                            "Choih0401"
                        ),
                        React.createElement(
                            "span",
                            { className: "subtitle" },
                            ","
                        ),
                        React.createElement(
                            "a",
                            {
                                href: "https://github.com/code-yeongyu",
                                target: "_blank",
                                rel: "noopener noreferrer",
                            },
                            "YeonGyu Kim"
                        )
                        // React.createElement(
                        //     "a",
                        //     {
                        //         href: "http://funnyga.me:14105",
                        //         target: "_blank",
                        //         rel: "noopener noreferrer",
                        //     },
                        //     "지원하기"
                        // )
                    ),

                    React.createElement(SocialLinks, null)
                )
            )
        )
    )
}

/***********************  
     Footer Component
    ***********************/

const Footer = (props) => {
    return React.createElement(
        "footer",
        null,
        React.createElement(
            "div",
            { className: "wrapper" },
            React.createElement("h3", null, "THANKS FOR VISITING"),
            React.createElement(
                "p",
                null,
                "\xA9 ",
                new Date().getFullYear(),
                " Layer7"
            ),
            React.createElement(SocialLinks, null)
        )
    )
}

/***********************
     Social Links Component
    ***********************/

const SocialLinks = (props) => {
    return React.createElement(
        "div",
        { className: "social" },
        React.createElement(
            "a",
            {
                href: "http://layer7.kr",
                target: "_blank",
                rel: "noopener noreferrer",
                title: "",
            },

            " ",
            React.createElement("i", { className: "fas fa-globe" })
        ),

        React.createElement(
            "a",
            {
                id: "profile-link",
                href:
                    "https://github.com/code-yeongyu/layer7-2021-demonstration",
                target: "_blank",
                rel: "noopener noreferrer",
                title: "",
            },

            " ",
            React.createElement("i", { className: "fab fa-github" })
        ),

        React.createElement(
            "a",
            {
                href: "https://www.facebook.com/letsgolayer7",
                target: "_blank",
                rel: "noopener noreferrer",
                title: "",
            },

            " ",
            React.createElement("i", { className: "fab fa-facebook-square" })
        )
    )
}

/***********************
     Main Component
    ***********************/

class App extends React.Component {
    constructor(...args) {
        super(...args)
        _defineProperty(this, "state", {
            menuState: false,
        })
        _defineProperty(
            this,
            "toggleMenu",

            () => {
                this.setState((state) => ({
                    menuState: !state.menuState
                        ? "active"
                        : state.menuState === "deactive"
                        ? "active"
                        : "deactive",
                }))
            }
        )
    }

    render() {
        return React.createElement(
            React.Fragment,
            null,
            React.createElement(Menu, {
                toggleMenu: this.toggleMenu,
                showMenu: this.state.menuState,
            }),
            React.createElement(Nav, {
                toggleMenu: this.toggleMenu,
                showMenu: this.state.menuState,
            }),
            React.createElement(Header, null),
            React.createElement(About, null),
            React.createElement(Projects, null),
            React.createElement(Contact, null),
            React.createElement(Footer, null)
        )
    }

    componentDidMount() {
        const navbar = document.querySelector("#navbar")
        const header = document.querySelector("#welcome-section")
        const forest = document.querySelector(".forest")
        const silhouette = document.querySelector(".silhouette")
        let forestInitPos = -300

        window.onscroll = () => {
            let scrollPos =
                document.documentElement.scrollTop || document.body.scrollTop

            if (scrollPos <= window.innerHeight) {
                silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`
                forest.style.bottom = `${parseInt(
                    forestInitPos + scrollPos / 6
                )}px`
            }

            if (scrollPos - 100 <= window.innerHeight)
                header.style.visibility =
                    header.style.visibility === "hidden" && "visible"
            else header.style.visibility = "hidden"

            if (scrollPos + 100 >= window.innerHeight)
                navbar.classList.add("bg-active")
            else navbar.classList.remove("bg-active")
        }
        ;(function navSmoothScrolling() {
            const internalLinks = document.querySelectorAll('a[href^="#"]')
            for (let i in internalLinks) {
                if (internalLinks.hasOwnProperty(i)) {
                    internalLinks[i].addEventListener("click", (e) => {
                        e.preventDefault()
                        document
                            .querySelector(internalLinks[i].hash)
                            .scrollIntoView({
                                block: "start",
                                behavior: "smooth",
                            })
                    })
                }
            }
        })()
    }
}

ReactDOM.render(React.createElement(App, null), document.getElementById("app"))
