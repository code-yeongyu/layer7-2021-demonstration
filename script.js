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
    React.createElement("a", { href: repo, target: "_blank", rel: "noopener noreferrer" }, "View source ",
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
      img: 'https://github.com/code-yeongyu/layer7_web_gallery/blob/master/assets/kgw.png?raw=true',
      tech: "python",
      link: "https://adkim.tistory.com/65" },

    React.createElement("small", null, "파이썬을 사용한 랜섬웨어 만둘기!"),


    React.createElement("p", null, "킹왕짱 랜섬웨어로 사랑을 쟁취해봅시다 ㅎㅎ")),




    React.createElement(Project, {
      title: "Stock Price Checker.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/StockPriceChecker.jpg',
      tech: "js node css",
      link: "https://yagoestevez-stock-price-checker.glitch.me/",
      repo: "https://github.com/yagoestevez/fcc-stock-price-checker" },

    React.createElement("small", null, "Built using Node, Express, MongoDB, JS + jQuery + Axios, CSS + Bootstrap and Pug."),


    React.createElement("p", null, "Another full-stack website to check the current value of any requested stock in the market.")),




    React.createElement(Project, {
      title: "Personal Library.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/PersonalLibrary.jpg',
      tech: "js node css",
      link: "https://yagoestevez-personal-library.glitch.me/",
      repo: "https://github.com/yagoestevez/fcc-personal-library" },

    React.createElement("small", null, "Built using Node, Express, MongoDB, JS + jQuery, CSS + Bootstrap and Pug."),
    React.createElement("p", null, "A full-stack website to store book titles and comments to each book into a remote database.")),




    React.createElement(Project, {
      title: "Issue Tracker.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/IssueTracker.jpg',
      tech: "js node css",
      link: "https://yagoestevez-issue-tracker.glitch.me/",
      repo: "https://github.com/yagoestevez/fcc-issue-tracker" },

    React.createElement("small", null, "Built using Node, Express, MongoDB, JS + jQuery, CSS + Bootstrap and Pug."),
    React.createElement("p", null, "Yet another full-stack app to save and manage technical issues to be fixed.")),

    React.createElement(Project, {
      title: "Metric-Imperial Converter.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/MetricImperialConverter.jpg',
      tech: "js node css",
      link: "https://yagoestevez-metric-imperial-converter.glitch.me/",
      repo: "https://github.com/yagoestevez/fcc-metric-imperial-converter/" },

    React.createElement("small", null, "Built using Node, Express, JS + jQuery, CSS + Bootstrap and Pug."),
    React.createElement("p", null, "Another full-stack for converting values from the Internation System of Units (Metric) into the imperial units.")),




    React.createElement(Project, {
      title: "URL Shortener Microservice.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/Cortala.jpg',
      tech: "js node css",
      link: "https://cortala.glitch.me/example",
      repo: "https://github.com/yagoestevez/cortala" },

    React.createElement("small", null, "Built using Node, Express, CSS + Bootstrap and Pug."),
    React.createElement("p", null, "A microservice which takes a raw URL and makes it a short link to make it easy to sent it through the Internet.")),




    React.createElement(Project, {
      title: "Exercise Tracker.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/ExerciseTracker.jpg',
      tech: "js vue node css",
      link: "https://yagoestevez-exercise-tracker.glitch.me",
      repo: "https://github.com/yagoestevez/exercise-tracker" },

    React.createElement("small", null, "Built using Node, Express, VueJS + Vue Router and CSS + Bootstrap."),
    React.createElement("p", null, "A service which lets the users save their daily exercise (or anything) into a log for them to check it later.")),




    React.createElement(Project, {
      title: "Bar Chart.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/BarChart.jpg',
      tech: "js d3 css",
      link: "https://codepen.io/yagoestevez/full/wxjmrB/",
      repo: "https://github.com/yagoestevez/fcc-barchart" },

    React.createElement("small", null, "Built using CSS, JS and D3.js."),
    React.createElement("p", null, "A bar chart representing the evolution of the US GDP.")),

    React.createElement(Project, {
      title: "Treemap Diagram.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/TreemapDiagram.jpg',
      tech: "js d3 css",
      link: "https://codepen.io/yagoestevez/full/bjZygz/",
      repo: "https://github.com/yagoestevez/fcc-treemap-diagram" },

    React.createElement("small", null, "Built using CSS, JS and D3.js."),
    React.createElement("p", null, "A treemap diagram representing groups of pledges and sales from a particular category.")),



    React.createElement(Project, {
      title: "Choropleth Map.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/ChoroplethMap.jpg',
      tech: "js d3 css",
      link: "https://codepen.io/yagoestevez/full/NBeaWK/",
      repo: "https://github.com/yagoestevez/fcc-choropleth-map" },

    React.createElement("small", null, "Built using CSS, JS and D3.js."),
    React.createElement("p", null, "A choropleth map representing the educational attainment by county in the U.S.")),

    React.createElement(Project, {
      title: "Random Quoting Machine.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/QuotingMachine.jpg',
      tech: "js vue css",
      link: "https://codepen.io/yagoestevez/full/bxgEyd/",
      repo: "https://github.com/yagoestevez/random-quoting-machine" },

    React.createElement("small", null, "Built using VueJS, Axios and CSS + Bootstrap."),
    React.createElement("p", null, "A random quoting app which retrieves pictures and quotes from two different APIs.")),

    React.createElement(Project, {
      title: "Calculator.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/Calculator.jpg',
      tech: "js react css",
      link: "https://codepen.io/yagoestevez/full/ERVONM/",
      repo: "https://github.com/yagoestevez/the-calcoolator" },

    React.createElement("small", null, "Built using React and CSS."),
    React.createElement("p", null, "A project on which I built a virtual calculator with its usual features.")),

    React.createElement(Project, {
      title: "Pomodoro Timer.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/TomateTimer.jpg',
      tech: "js react css",
      link: "https://codepen.io/yagoestevez/full/dqJGVa",
      repo: "https://github.com/yagoestevez/tomate-time" },

    React.createElement("small", null, "Built using React, CSS and lots of SVG."),
    React.createElement("p", null, "A cute and animated Pomodoro clock to help the users improve their productivity.")),

    React.createElement(Project, {
      title: "TicTacToe Game.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/TicTacToe.jpg',
      tech: "js react css",
      link: "https://codepen.io/yagoestevez/full/KRevzB/",
      repo: "https://github.com/yagoestevez/TicTacToe" },

    React.createElement("small", null, "Built using React, CSS and SVG."),
    React.createElement("p", null, "A TicTacToe game with a basic AI algorithm made for the legacy front-end projects on FreeCodeCamp.")),




    React.createElement(Project, {
      title: "Twitch Clone.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/Twitch.jpg',
      tech: "js vue sass",
      link: "https://codepen.io/yagoestevez/full/xjwVPq/" },


    React.createElement("small", null, "Built using VueJS, Axios and Scss."),
    React.createElement("p", null, "Simple Twitch clone using the new Twitch Helix API and made for the legacy front-end projects on FreeCodeCamp.")),




    React.createElement(Project, {
      title: "Weather App.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/WeatherApp.jpg',
      tech: "js vue css",
      link: "https://codepen.io/yagoestevez/full/zWbGmZ/" },


    React.createElement("small", null, "Built using VueJS, Axios and CSS."),
    React.createElement("p", null, "App that present the users with the current local weather for their location.")),

    React.createElement(Project, {
      title: "Tribute.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/Tribute.jpg',
      tech: "js sass",
      link: "https://codepen.io/yagoestevez/full/aaaOxL/",
      repo: "https://github.com/yagoestevez/tribute-to-aaron-swartz" },

    React.createElement("small", null, "Built using vanilla Javascript and Scss."),
    React.createElement("p", null, "Tribute page to Aaron Swartz, a static website built with SCSS and plain Javascript.")),



    React.createElement(Project, {
      title: "Survey Form.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/SurveyForm.jpg',
      tech: "js sass",
      link: "https://codepen.io/yagoestevez/full/bjVgjX/",
      repo: "https://github.com/yagoestevez/membership-form" },

    React.createElement("small", null, "Built using vanilla Javascript and Scss."),
    React.createElement("p", null, "An animated survey form.")),

    React.createElement(Project, {
      title: "Landing Page Example.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/LandingPage.jpg',
      tech: "js sass",
      link: "https://codepen.io/yagoestevez/full/pOBLeK/",
      repo: "https://github.com/yagoestevez/tomate-timer-landing-page" },

    React.createElement("small", null, "Built using vanilla Javascript and Scss."),
    React.createElement("p", null, "A landing page for the Pomodoro Timer I made (shown previously in this section).")),

    React.createElement(Project, {
      title: "Technical Documentation Page.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/Documentify.jpg',
      tech: "js react css",
      link: "https://codepen.io/yagoestevez/full/QxOLKX/",
      repo: "https://github.com/yagoestevez/documentify" },

    React.createElement("small", null, "Built using React and CSS."),
    React.createElement("p", null, "A technical documentation page made for a little React library I published on NPM."))))));







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
    React.createElement("p", { className: "subtitle" }, "Please, use the form below or send an email to ",
    '',
    React.createElement("span", { className: "mail" }, "layer7",

    React.createElement("i", { className: "fas fa-at at" }), "sunrint.hs.kr"), ":"),
    //React.createElement("a", { href: "http://sunrin.site/layer7", target: "_blank", rel: "noopener noreferrer" }, "지원하기")
    ),





    React.createElement(SocialLinks, null)))));




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