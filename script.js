function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // Made by Yago Estévez (Twitter: @yagoestevez.com)


/***********************
  Menu Component
 ***********************/

const Menu = props => {
  return (
    React.createElement("div", { className: `menu-container ${props.showMenu}` },
    React.createElement("div", { className: "overlay" }),
    React.createElement("div", { className: "menu-items" },
    React.createElement("ul", null,
    React.createElement("li", null,
    React.createElement("a", { href: "#welcome-section", onClick: props.toggleMenu }, "HOME")),



    React.createElement("li", null,
    React.createElement("a", { href: "#about", onClick: props.toggleMenu }, "ABOUT")),



    React.createElement("li", null,
    React.createElement("a", { href: "#projects", onClick: props.toggleMenu }, "PORTFOLIO")),



    React.createElement("li", null,
    React.createElement("a", { href: "#contact", onClick: props.toggleMenu }, "CONTACT"))),




    React.createElement(SocialLinks, null))));



};


/***********************
     Nav Component
    ***********************/

const Nav = props => {
  return (
    React.createElement(React.Fragment, null,
    React.createElement("nav", { id: "navbar" },
    React.createElement("div", { className: "nav-wrapper" },
    React.createElement("p", { className: "brand" }, "",

    React.createElement("strong", null, "Layer7")),

    React.createElement("a", {
      onClick: props.toggleMenu,
      className: props.showMenu === 'active' ? 'menu-button active' : 'menu-button' },

    React.createElement("span", null))))));





};



/***********************
     Header Component
    ***********************/

const Header = props => {
  return (
    React.createElement("header", { id: "welcome-section" },
    React.createElement("div", { className: "forest" }),
    React.createElement("div", { className: "silhouette" }),
    React.createElement("div", { className: "moon" }),
    React.createElement("div", { className: "container" },
    React.createElement("h1", null,
    React.createElement("span", { className: "line" }, "Layer7"),
    React.createElement("span", { className: "line" }, "We hack"),
    React.createElement("span", { className: "line" },
    React.createElement("span", { className: "color" }, "the"), " universe!")),


    React.createElement("div", { className: "buttons" },
    React.createElement("a", { href: "#projects" }, "our works"),
    React.createElement("a", { href: "#contact", className: "cta" }, "join now")))));






};


/***********************
     About Component
    ***********************/

const About = props => {
  return (
    React.createElement("section", { id: "about" },
    React.createElement("div", { className: "wrapper" },
    React.createElement("article", null,
    React.createElement("div", { className: "title" },
    React.createElement("h3", null, "Layer7 소개"),
    React.createElement("p", { className: "separator" })),

    React.createElement("div", { className: "desc full" },
    React.createElement("h4", { className: "subtitle" }, "SLOGAN"),
    React.createElement("p", null, "열정, 책임감, 친근함"),



    React.createElement("p", null, "공부하고자 하는 열정, 보안인으로써의 책임감, 학교 선후배로써의 친근함은 동아리의 지향점입니다.")),






    React.createElement("div", { className: "title" },
    React.createElement("h3", null, "Layer7의 역사"),
    React.createElement("p", { className: "separator" })),

    React.createElement("div", { className: "desc" },
    React.createElement("h4", { className: "subtitle" }, "HOW WE STARTED IT"),
    React.createElement("p", null, ""),




    React.createElement("p", null, "Layer7은 선린인터넷고등학교가 서울시 최초 IT 특성화 고등학교로 지정된 2001년 부터 학교와 함께해 왔습니다. 보안에 관심 있는 학생들끼리 모여 동아리를 만들고, 해킹이라는 흔치 않은 분야에서 서로가 서로를 도우며 보안을 공부해왔습니다. 체계적인 커리큘럼과 동아리원들의 열정, 책임감은 20년이라는 역사를 뒷받침해왔습니다.")),




    React.createElement("div", { className: "desc" },
    React.createElement("h4", { className: "subtitle" }, "NOW"),
    React.createElement("p", null, ""),





    React.createElement("p", null, "세계 해커들의 올림픽이라는 데프콘, 국방부에서 주관하는 WITHCON 등 유명 대회에서 수상하고, 국제 해킹 컨퍼런스 코드게이트 등에서 준비한 프로젝트를 발표하며, 시스템, 웹, 임베디드에 아우른 다양한 분야에서 실적을 내고 있습니다."))))));








};


/***********************
     Project Component
    ***********************/

const Project = props => {
  const tech = {
    sass: 'fab fa-sass',
    css: 'fab fa-css3-alt',
    js: 'fab fa-js-square',
    react: 'fab fa-react',
    vue: 'fab fa-vuejs',
    d3: 'far fa-chart-bar',
    python: 'fab fa-python',
    c: 'fab fa-cuttlefish',
    html: 'fab fa-html5',
    node: 'fab fa-node' };


  const link = props.link || 'http://';
  const repo = props.repo || 'http://';

  return (
    React.createElement("div", { className: "project" },
    React.createElement("a", { className: "project-link", href: link, target: "_blank", rel: "noopener noreferrer" },
    React.createElement("img", { className: "project-image", src: props.img, alt: 'Screenshot of ' + props.title })),

    React.createElement("div", { className: "project-details" },
    React.createElement("div", { className: "project-tile" },
    React.createElement("p", { className: "icons" },
    props.tech.split(' ').map((t) =>
    React.createElement("i", { className: tech[t], key: t }))),


    props.title, ' '),

    props.children,
    React.createElement("div", { className: "buttons" },
    React.createElement("a", { href: repo, target: "_blank", rel: "noopener noreferrer" }, "Show post ",
    React.createElement("i", { className: "fas fa-external-link-alt" }))))));





};



/***********************
     Projects Component
    ***********************/

const Projects = props => {
  return (
    React.createElement("section", { id: "projects" },
    React.createElement("div", { className: "projects-container" },
    React.createElement("div", { className: "heading" },
    React.createElement("h3", { className: "title" }, "Our Works"),
    React.createElement("p", { className: "separator" })),






    React.createElement("div", { className: "projects-wrapper" },
    React.createElement(Project, {
      title: "킹왕짱 랜섬웨어",
      img: './kgw.png',
      tech: "python",
      link: "https://adkim.tistory.com/65",
      repo: "https://adkim.tistory.com/65"
     },

    React.createElement("small", null, "파이썬을 사용한 랜섬웨어 만둘기!"),


    React.createElement("p", null, "킹왕짱 랜섬웨어로 사랑을 쟁취해봅시다 ㅎㅎ")),




    React.createElement(Project, {
      title: "복합기 해킹",
      img: './kjt.png',
      tech: "c python",
      link: "https://sunrinjuntae.tistory.com/163",
      repo: "https://sunrinjuntae.tistory.com/163" },

    React.createElement("small", null, "Layer7 19기 부장님의 \"리얼 해킹\""),


    React.createElement("p", null, "실제 복합기를 해킹, 원리를 기술적으로 설명해봅니다 :D "),
    React.createElement("p", null, "(패스워드 : HelloLayer7)")),




    React.createElement(Project, {
      title: "테트리스 핵",
      img: './lsh.png',
      tech: "c python",
      link: "https://cg10036.tistory.com/129",
      repo: "https://cg10036.tistory.com/129" },

    React.createElement("small", null, "\"테트리스 져봐\""),
    React.createElement("p", null, "\"그게 뭔데\""),
    React.createElement("p", null, "\"그거 어떻게 하는건데\"")),




    React.createElement(Project, {
      title: "메시지 스니핑",
      img: './kms.png',
      tech: "c python",
      link: "https://gnemek20.tistory.com/6",
      repo: "https://gnemek20.tistory.com/6" },

    React.createElement("small", null, "만약 좋아하는 친구의 문자를 읽을 수 있다면?"),
    React.createElement("p", null, "다른 사람 스마트폰의 문자를 읽을 수 있는 악성코드를 만들고 보여줍니다.")),

    React.createElement(Project, {
      title: "비밀번호 해킹",
      img: 'https://github.com/code-yeongyu/layer7_web_gallery/blob/master/assets/kmg.png?raw=true',
      tech: "c python",
      link: "https://mg-princess.tistory.com/entry/%EC%8B%9C%EC%97%B0%ED%9A%8C-%EB%B9%84%EB%B0%80%EB%B2%88%ED%98%B8-%ED%95%B4%ED%82%B9",
      repo: "https://mg-princess.tistory.com/entry/%EC%8B%9C%EC%97%B0%ED%9A%8C-%EB%B9%84%EB%B0%80%EB%B2%88%ED%98%B8-%ED%95%B4%ED%82%B9" },

    React.createElement("small", null, "눈을 떠보니 스팀 계좌에 잔액이 2원?"),
    React.createElement("p", null, "어떤 놈인지는 모르겠지만 레이어식 복수로 혼내주자!")),




    React.createElement(Project, {
      title: "끄투 핵",
      img: 'https://github.com/code-yeongyu/layer7_web_gallery/blob/master/assets/kyg.png?raw=true',
      tech: "python",
      link: "https://mengmota.blogspot.com/2020/04/blog-post.html",
      repo: "https://mengmota.blogspot.com/2020/04/blog-post.html" },

    React.createElement("small", null, "아니 \"가장사랑스러운너에게축복을\" 이런 단어는 어디서 찾는거야"),
    React.createElement("p", null, "거기 너 나랑 밥 내기 끄투 대결하자!")),

))));







};



/***********************
     Contact Component
    ***********************/

const Contact = props => {
  return (
    React.createElement("section", { id: "contact" },
    React.createElement("div", { className: "container" },
    React.createElement("div", { className: "heading-wrapper" },
    React.createElement("div", { className: "heading" },
    React.createElement("p", { className: "title" }, "Want to ",
    React.createElement("br", null), "contact me?"),


    React.createElement("p", { className: "separator" }),
    React.createElement("p", { className: "subtitle" }, "Please, send an email to ",
    '',
    React.createElement("span", { className: "mail" }, "layer7",

    React.createElement("i", { className: "fas fa-at at" }), "sunrint.hs.kr"), 
    React.createElement("p", { className: "subtitle" }, "사이트 준비 중입니다."),
    //React.createElement("a", { href: "http://sunrin.site/layer7", target: "_blank", rel: "noopener noreferrer" }, "지원하기")
    ),





    React.createElement(SocialLinks, null))))));




};



/***********************  
     Footer Component
    ***********************/

const Footer = props => {
  return (
    React.createElement("footer", null,
    React.createElement("div", { className: "wrapper" },
    React.createElement("h3", null, "THANKS FOR VISITING"),
    React.createElement("p", null, "\xA9 ", new Date().getFullYear(), " Layer7"),
    React.createElement(SocialLinks, null))));



};




/***********************
     Social Links Component
    ***********************/

const SocialLinks = props => {
  return (
    React.createElement("div", { className: "social" },
    React.createElement("a", {
      href: "https://twitter.com/",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "" },

    ' ',
    React.createElement("i", { className: "fab fa-twitter" })),

    React.createElement("a", {
      id: "profile-link",
      href: "https://github.com/",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "" },

    ' ',
    React.createElement("i", { className: "fab fa-github" })),

    React.createElement("a", {
      href: "https://codepen.io/",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "" },

    ' ',
    React.createElement("i", { className: "fab fa-codepen" }))));



};



/***********************
     Main Component
    ***********************/

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      menuState: false });_defineProperty(this, "toggleMenu",


    () => {
      this.setState(state => ({
        menuState: !state.menuState ?
        'active' :
        state.menuState === 'deactive' ?
        'active' :
        'deactive' }));

    });}

  render() {
    return (
      React.createElement(React.Fragment, null,
      React.createElement(Menu, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }),
      React.createElement(Nav, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }),
      React.createElement(Header, null),
      React.createElement(About, null),
      React.createElement(Projects, null),
      React.createElement(Contact, null),
      React.createElement(Footer, null)));


  }

  componentDidMount() {
    const navbar = document.querySelector('#navbar');
    const header = document.querySelector('#welcome-section');
    const forest = document.querySelector('.forest');
    const silhouette = document.querySelector('.silhouette');
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
      header.style.visibility = header.style.visibility === 'hidden' && 'visible';else
      header.style.visibility = 'hidden';

      if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');else
      navbar.classList.remove('bg-active');
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: 'start',
              behavior: 'smooth' });

          });
        }
      }
    })();
  }}



ReactDOM.render(React.createElement(App, null), document.getElementById('app'));