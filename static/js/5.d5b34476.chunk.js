(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[5],{172:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(1),c=n(5),r=n(21),o=function(e){var t=e.data;return Object(a.jsxs)("article",{className:"degree-container",children:[Object(a.jsxs)("header",{children:[Object(a.jsx)("h4",{className:"degree",children:t.degree}),Object(a.jsxs)("p",{className:"school",children:[Object(a.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]}),Object(a.jsx)("ul",{className:"points",children:t.points.map((function(e){return Object(a.jsx)("li",{children:e},e)}))})]})},s=function(e){var t=e.data;return Object(a.jsxs)("div",{className:"education",children:[Object(a.jsx)("div",{className:"link-to",id:"education"}),Object(a.jsx)("div",{className:"title",children:Object(a.jsx)("h3",{children:"Education"})}),t.map((function(e){return Object(a.jsx)(o,{data:e},e.school)}))]})};s.defaultProps={data:[]};var l=s,u=function(e){var t=e.data;return Object(a.jsxs)("article",{className:"jobs-container",children:[Object(a.jsxs)("header",{children:[Object(a.jsxs)("h4",{children:[Object(a.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),Object(a.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),Object(a.jsx)("ul",{className:"points",children:t.points.map((function(e){return Object(a.jsx)("li",{children:e},e)}))})]})},m=function(e){var t=e.data;return Object(a.jsxs)("div",{className:"experience",children:[Object(a.jsx)("div",{className:"link-to",id:"experience"}),Object(a.jsx)("div",{className:"title",children:Object(a.jsx)("h3",{children:"Experience"})}),t.map((function(e){return Object(a.jsx)(u,{data:e},e.company)}))]})};m.defaultProps={data:[]};var d=m;function p(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e){return(y="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){return!t||"object"!==y(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=b(e);if(t){var i=b(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return j(this,n)}}var g=n(51),O=n(49),v=function(e){var t=e.handleClick,n=e.active,i=e.label;return Object(a.jsx)("button",{className:"skillbutton ".concat(n[i]?"skillbutton-active":""),type:"button",onClick:function(){return t(i)},children:i})},x=function(e){var t=e.data,n=e.categories,i=t.category,c=t.competency,r=t.title,o={background:n.filter((function(e){return i.includes(e.name)})).map((function(e){return e.color}))[0]},s=Object(O.a)(Object(O.a)({},o),{},{width:"".concat(String(Math.min(100,Math.max(c/5*100,0))),"%")});return Object(a.jsxs)("div",{className:"skillbar clearfix",children:[Object(a.jsx)("div",{className:"skillbar-title",style:o,children:Object(a.jsx)("span",{children:r})}),Object(a.jsx)("div",{className:"skillbar-bar",style:s}),Object(a.jsxs)("div",{className:"skill-bar-percent",children:[c," / 5"]})]})};x.defaultProps={categories:[]};var S=x,w=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(r,e);var t,n,i,c=f(r);function r(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(t=c.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,a){return Object(O.a)(Object(O.a)({},n),{},Object(g.a)({},a,e===a&&!t.buttons[a]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return Object(O.a)(Object(O.a)({},e),{},Object(g.a)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=r,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return Object(a.jsx)(S,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return Object(a.jsx)(v,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"skills",children:[Object(a.jsx)("div",{className:"link-to",id:"skills"}),Object(a.jsx)("div",{className:"title",children:Object(a.jsx)("h3",{children:"Skills"})}),Object(a.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),Object(a.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&p(t.prototype,n),i&&p(t,i),r}(i.Component);w.defaultProps={skills:[],categories:[]};var k=w,D=function(e){var t=e.data,n=e.last;return Object(a.jsxs)("li",{className:"course-container",children:[Object(a.jsxs)("a",{href:t.link,children:[Object(a.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),Object(a.jsx)("p",{className:"course-name",children:t.title})]}),!n&&Object(a.jsx)("div",{className:"course-dot",children:Object(a.jsx)("p",{className:"course-name",children:" \u2022"})})]})};D.defaultProps={last:!1};var N=D,M=function(e){var t,n=e.data;return Object(a.jsxs)("div",{className:"courses",children:[Object(a.jsx)("div",{className:"link-to",id:"courses"}),Object(a.jsx)("div",{className:"title",children:Object(a.jsx)("h3",{children:"Selected Courses"})}),Object(a.jsx)("ul",{className:"course-list",children:(t=n,t.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(e,n){return Object(a.jsx)(N,{data:e,last:n===t.length-1},e.title)})))})]})};M.defaultProps={data:[]};var P=M,L=function(){return Object(a.jsxs)("div",{className:"references",children:[Object(a.jsx)("div",{className:"link-to",id:"references"}),Object(a.jsx)("div",{className:"title",children:Object(a.jsx)(c.b,{to:"/contact",children:Object(a.jsx)("h3",{children:"References are available upon request"})})})]})},A=[{title:"Introduction to Deep Learning",number:"IN2346",link:"https://niessner.github.io/I2DL/",university:"TUM"},{title:"Statistical Learning",number:"MA4802",link:"https://www.helmholtz-muenchen.de/icb/teaching/courses/stat-learning/index.html",university:"TUM"},{title:"TUM Data Innovation Lab",number:"MA8113",link:"https://www.di-lab.tum.de/tum-di-lab/",university:"TUM"},{title:"Foundations in Data Analysis",number:"MA4800",link:"",university:"TUM"},{title:"Mathematical foundations of machine learning",number:"MA4801",link:"https://www-m5.ma.tum.de/Allgemeines/MA4801_2020S",university:"TUM"},{title:"Introduction: Algorithms and data structures",number:"IN0007",link:"https://campus.tum.de/tumonline/WBMODHB.wbShowMHBReadOnly?pKnotenNr=452818",university:"TUM"},{title:"Computational Statistics",number:"MA3402",link:"https://campus.tum.de/tumonline/wbLv.wbShowLVDetail?pStpSpNr=950400947&pSpracheNr=1",university:"TUM"},{title:"Nonlinear Optimization",number:"MA3503",link:"https://www-m1.ma.tum.de/bin/view/Lehrstuhl/MUlbrichNonlinearOptAdvWS1819",university:"TUM"},{title:"Fundamentals of Mathematical Statistics",number:"MA5441",link:"https://campus.tum.de/tumonline/pl/ui/$ctx;design=pl;header=max;lang=de/wbModHBReport.wbGenHTMLForBeschr?pKnotenNr=1720332&pSemesterNr=192&pLangCode=DE",university:"TUM"},{title:"Machine Learning",number:"IN2064",link:"https://www.cs.cit.tum.de/daml/lehre/wintersemester-202122/machine-learning/",university:"TUM"}],T=[{school:"Technical University of Munich",degree:"M.S. Mathematics",link:"https://www.tum.de",year:2022,points:["Focus: Mathematics in Data Science and Data Science","Highlights: TUM Data Innovation Lab with VW DATA:LAB","Selected courses are listed below"]},{school:"Technical University of Munich",degree:"B.S. Mathematics, with Computer Science as minor",link:"https://www.tum.de",year:2020,points:["Bachelor Thesis: \u201eData Analysis in the NFL: Statistical learning methods applied to the passing game of the New Orleans Saints\u201c"]},{school:"University of Mannheim",degree:"B.S. Business Administration",link:"https://www.uni-mannheim.de",year:2016,points:["I completed two full semester before I decided to switch to mathematics at TUM"]}],C=[{company:"VW Machine Learning Research Lab",position:"Master's Thesis Student",link:"https://argmax.ai",daterange:"March. 2022 - today",points:["Writing my Master's thesis at VW Machine Learning Research Lab.","Topic: Variational state space models for industrial demand prediction."]},{company:"ferblick",position:"Co-Founder",link:"https://ferblick.com",daterange:"Dez. 2020 - Aug. 2021",points:["Responsible for Data Analysis and Machine Learning","Our vision was to use Computer Vision to make human-driven assembly processes measurable and to provide the data and the software for further analysis and process optimization"]},{company:"KPMG Germany",position:"Data Scientist Intern",link:"https://home.kpmg/de/de/home/themen/uebersicht/kpmg-impact.html",daterange:"Sept. 2020 - Nov. 2020",points:["During my internship as a Data Scientist in the Value Chain Transformation department of KPMG Germany I co-developed a NLP pipeline that is capable of extracting specific informations from unstructured documents, I worked at the development of a cloud based Business Intelligence Tool and I used unsupervised Machine Learning methods to provide insights into a Customer Analytics survey.","After the internship I was invited to join KPMGs highQ young talent program."]},{company:"ASAP Group",position:"Research and development engineer Intern",link:"https://www.asap.de",daterange:"Feb. 2019 -  Dez. 2019",points:["During my time at the ASAP Group I co-developed a pipeline to integrate neuronal networks in existing car hardware, a test automation tool and a pipeline in order to evaluate the performance of an autonomous driving system."]}],I=n(17);var R=n(24);var U,B=[{title:"Python",competency:5,category:["Languages","Python"]},{title:"Jax",competency:4,category:["Python"]},{title:"Variational Inference",competency:4,category:["Tools"]},{title:"Streamlit",competency:4,category:["Python"]},{title:"Javascript",competency:1,category:["Web Development","Languages"]},{title:"Node.JS",competency:1,category:["Web Development"]},{title:"React",competency:1,category:["Web Development"]},{title:"Bash",competency:3,category:["Tools","Languages"]},{title:"Amazon Web Services",competency:2,category:["Web Development","Tools","Data Science"]},{title:"PostgreSQL/SQLite3/SQL",competency:4,category:["Web Development","Databases","Languages"]},{title:"Data Mining",competency:3,category:["Data Science"]},{title:"Git",competency:5,category:["Tools"]},{title:"Google Cloud Compute",competency:2,category:["Tools","Web Development"]},{title:"Numpy",competency:5,category:["Data Science","Data Engineering","Python"]},{title:"Tensorflow + Keras",competency:3,category:["Data Science","Python"]},{title:"HTML + SASS/SCSS/CSS",competency:2,category:["Web Development","Languages"]},{title:"MATLAB",competency:3,category:["Languages"]},{title:"R",competency:5,category:["Languages"]},{title:"Data Visualization",competency:4,category:["Data Science"]},{title:"Pandas",competency:5,category:["Data Engineering","Data Science","Python"]},{title:"Matplotlib",competency:5,category:["Data Engineering","Data Science","Python"]},{title:"Scikit-Learn",competency:5,category:["Data Engineering","Data Science","Python"]},{title:"Docker",competency:5,category:["Data Engineering","Data Science"]},{title:"Spacy",competency:4,category:["Python","Data Science"]},{title:"Deep Learning",competency:5,category:["Python","Data Science"]},{title:"Machine Learning",competency:5,category:["Python","Data Science"]},{title:"PyTorch / PyTorchlightning",competency:5,category:["Data Science","Python"]},{title:"Scrum",competency:4,category:["Tools"]},{title:"Java",competency:3,category:["Languages"]},{title:"Seaborn",competency:5,category:["Python","Data Science"]},{title:"Plotly",competency:5,category:["Python","Data Science"]},{title:"ggplot",competency:4,category:["Data Science"]},{title:"Reinforcement Learning",competency:4,category:["Data Science","Python"]},{title:"Computer Vision",competency:4,category:["Data Science","Python"]},{title:"Natural Language Processing",competency:4,category:["Data Science","Python"]},{title:"Clustering",competency:4,category:["Data Science","Python"]}].map((function(e){return Object(O.a)(Object(O.a)({},e),{},{category:e.category.sort()})})),E=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],W=(U=new Set(B.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return Object(I.a)(e)}(U)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(U)||Object(R.a)(U)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:E[t]}})),G=["Education","Experience","Skills","Courses","References"];t.default=function(){return Object(a.jsx)(r.a,{title:"Resume",description:"Felix Bok resume",children:Object(a.jsxs)("article",{className:"post",id:"resume",children:[Object(a.jsx)("header",{children:Object(a.jsxs)("div",{className:"title",children:[Object(a.jsx)("h2",{"data-testid":"heading",children:Object(a.jsx)(c.b,{to:"resume",children:"Resume"})}),Object(a.jsx)("div",{className:"link-container",children:G.map((function(e){return Object(a.jsx)("h4",{children:Object(a.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),Object(a.jsx)(l,{data:T}),Object(a.jsx)(d,{data:C}),Object(a.jsx)(k,{skills:B,categories:W}),Object(a.jsx)(P,{data:A}),Object(a.jsx)(L,{})]})})}},49:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(51);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},51:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=5.d5b34476.chunk.js.map