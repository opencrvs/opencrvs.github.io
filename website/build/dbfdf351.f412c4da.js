(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{125:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),i=(n(0),n(136)),a=n(137),s={id:"login",title:"Login"},c={unversionedId:"support_functions/login",id:"support_functions/login",isDocsHomePage:!1,title:"Login",description:"This functionality supports users logging in for the first time as well as the ongoing secure identification and provision of access to users.",source:"@site/docs/support_functions/Login_8db5ac07d5ed48599beebedfb58dd273.mdx",slug:"/support_functions/login",permalink:"/opencrvs-core/docs/support_functions/login",version:"current",sidebar:"docs",previous:{title:"Record verification",permalink:"/opencrvs-core/docs/core_functions/recordVerification"},next:{title:"Performance management",permalink:"/opencrvs-core/docs/support_functions/performanceManagement"}},u=[{value:"Configuration",id:"configuration",children:[]},{value:"User Stories",id:"user-stories",children:[]},{value:"Functionality",id:"functionality",children:[{value:"Set security questions",id:"set-security-questions",children:[]},{value:"Login with username &amp; password",id:"login-with-username--password",children:[]},{value:"Unlock application with PIN",id:"unlock-application-with-pin",children:[]},{value:"Forgot username or password",id:"forgot-username-or-password",children:[]}]}],l={toc:u};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This functionality supports users logging in for the first time as well as the ongoing secure identification and provision of access to users."),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"The frequency of when the user is required to login with username and password can be configured."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Recommended:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"In countries where connectivity is good, you can set this more frequently e.g. the user must login with username and password every week."),Object(i.b)("li",{parentName:"ul"},"In countries where connectivity is less good, you can set this less frequently so that users can unlock the application primarily using the PIN.")),Object(i.b)("p",null,"NB. Security considerations should be taken into account when making this decision."),Object(i.b)("h2",{id:"user-stories"},"User Stories"),Object(i.b)("p",null,"As ",Object(i.b)("strong",{parentName:"p"},"a user"),", I want to be able to be able to login to the application so that I can conduct my work."),Object(i.b)("p",null,"As ",Object(i.b)("strong",{parentName:"p"},"a user"),", I want to be able to be able to reset my password in case I forget it, so that I can log back in and continue working."),Object(i.b)("p",null,"As ",Object(i.b)("strong",{parentName:"p"},"a user"),", I want to be able to reset my username in case I forget it, so that I can log back in and continue working."),Object(i.b)("p",null,"As ",Object(i.b)("strong",{parentName:"p"},"a use"),"r I want to be able to easily access the application without using my username and password every time, so that I can save time."),Object(i.b)("h2",{id:"functionality"},"Functionality"),Object(i.b)("h3",{id:"set-security-questions"},"Set security questions"),Object(i.b)("p",null,"The first the time user logs in they use a username and password that is generated for them based on their first and last name. On first login, the user is required to:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Choose a new secure password"),Object(i.b)("li",{parentName:"ol"},"Set 3 security questions that can be used to verify identity at a later point"),Object(i.b)("li",{parentName:"ol"},"Confirm their details and update as required")),Object(i.b)("img",{alt:"docImage_setPassword",src:Object(a.a)("assets/support_functions/Login_8db5ac07d5ed48599beebedfb58dd273/docImage_setPassword.png")}),Object(i.b)("img",{alt:"docImage_secuirtyQuestions",src:Object(a.a)("assets/support_functions/Login_8db5ac07d5ed48599beebedfb58dd273/docImage_secuirtyQuestions.png")}),Object(i.b)("h3",{id:"login-with-username--password"},"Login with username & password"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"First login")),Object(i.b)("p",null,"Once the username and password is set, the user will login for the first time. This login process is the same from this point forward and will be required at a frequency as per the configuration made. In Zambia, this is set to request login details once per week."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Two-factor Authentication:")," When the user logs in with their username and password, they will be sent a 6 digit verification code to the mobile phone number associated with their account. Upon entering this code, the user will be taken to the homepage of their application, dependent on their ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../system_overview/user_types/overviewUserTypes"}),"User types"),"."),Object(i.b)("h3",{id:"unlock-application-with-pin"},"Unlock application with PIN"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"First login")),Object(i.b)("p",null,"The first time the user logs into the application with their username and password, they will be prompted to enter a 4 digit PIN. This PIN will allow them to quickly access the application when the application locks itself, preventing access by anyone other than the user and meaning the user does not need to enter their username and password and authenticate every time they use the app."),Object(i.b)("img",{alt:"docImage_pin",src:Object(a.a)("assets/support_functions/Login_8db5ac07d5ed48599beebedfb58dd273/docImage_pin.png")}),Object(i.b)("h3",{id:"forgot-username-or-password"},"Forgot username or password"),Object(i.b)("p",null,'If the user forgets their username or password, they can create a new one by following the "Can\'t Login" steps from the login screen.'),Object(i.b)("p",null,"The user is required to:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Provide the phone number associated with the account"),Object(i.b)("li",{parentName:"ol"},"Enter a verification code sent to them on SMS"),Object(i.b)("li",{parentName:"ol"},"Answer one of the 3 security questions we asked them to create during the onboarding process")),Object(i.b)("p",null,"Upon successful completion of these steps, the user can create a new password or is sent a reminder of their username."))}p.isMDXComponent=!0},136:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,f=p["".concat(a,".").concat(b)]||p[b]||d[b]||i;return n?o.a.createElement(f,s(s({ref:t},u),{},{components:n})):o.a.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},137:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}));var r=n(22),o=n(138);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,s=void 0!==a&&a,c=i.absolute,u=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(s)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+l:l}(i,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},138:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))}}]);