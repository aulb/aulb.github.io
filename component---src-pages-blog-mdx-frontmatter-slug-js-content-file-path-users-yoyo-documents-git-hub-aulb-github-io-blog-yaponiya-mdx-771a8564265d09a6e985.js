"use strict";(self.webpackChunkalbert_wtf=self.webpackChunkalbert_wtf||[]).push([[503],{3905:function(e,t,n){n.d(t,{ah:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),h=c(n),p=r,d=h["".concat(s,".").concat(p)]||h[p]||u[p]||l;return n?a.createElement(d,o(o({ref:t},m),{},{components:n})):a.createElement(d,o({ref:t},m))}));m.displayName="MDXCreateElement"},5029:function(e,t,n){n.r(t),n.d(t,{Head:function(){return u},default:function(){return m}});var a=n(3905),r=n(7294);function l(e){const t=Object.assign({h3:"h3",p:"p",h1:"h1",strong:"strong",ul:"ul",li:"li",h2:"h2"},(0,a.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.h3,null,"Note: 01/18/2023: This is an old post, this website is now defunct :("),"\n",r.createElement(t.p,null,"Come visit ",r.createElement("a",{href:"http://yaponiya.reblws.me"},"yaponiya"),"."),"\n",r.createElement(t.h1,null,"🐝 Demo Demo"),"\n",r.createElement("div",{class:"capContainer"},r.createElement("img",{class:"blogpic",src:"/photos/yapopics/5yUtILqOed.gif"}),r.createElement("div",{class:"caption"},r.createElement(t.p,null,"Simple kanji ordering and sorting"))),"\n",r.createElement("div",{class:"capContainer"},r.createElement("img",{class:"blogpic",src:"/photos/yapopics/WaHbGeUHa2.gif"}),r.createElement("div",{class:"caption"},r.createElement(t.p,null,"Simple kanji lookup!"))),"\n",r.createElement(t.h1,null,"🐝 Inspiration"),"\n",r.createElement(t.p,null,"I wanted to do a Japanese related side project. I had a few different ideas floating such as automatic grammar tagger (might bee too hardcore tbh) and perhaps something like kanji frequency, thats when I came across Kaisuu. It was simple and fun. The only downside was that the kanjis weren't sortable any other way. I thought it would be fun to fork the idea, extend it a little bit, and learn new framework (REACT). That gave rise to ",r.createElement("a",{href:"http://yaponiya.reblws.me"},r.createElement(t.strong,null,"Yaponiya"))," (Япония) the Russian word for Japan."),"\n",r.createElement(t.h1,null,"🐝 Webapp Features"),"\n",r.createElement(t.p,null,"The main feature of the website is to see the individual kanji flicker as tweets are being tweeted out in realtime. This is done by clicking the Twitter logo at the top. Its fun to see which ones flicker the most. In addition to that we thought of and implemented some additional features such as:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"🌸 Kanji sorting, in ascending or descending order"),"\n",r.createElement(t.li,null,"🌸 Kanjis ordering, in different ways by categories"),"\n",r.createElement(t.li,null,"🌸 Small information about the kanji, making each kanji clickable"),"\n"),"\n",r.createElement(t.p,null,"The ordering was mainly to see the blocks of kanjis and see which ones are used the most. Unsurprisingly the lower level kanjis are most used (by grade and JLPT)."),"\n",r.createElement(t.h1,null,"🐝 Technical Challenges"),"\n",r.createElement(t.p,null,"Here are some of the technical (challenges) highlights and things that can be improved from this project. Me and my project partner learned a great deal of things throughout the project and its fun to document these. One major thing we missed out is probably testing, powerful yet forgettable for projects like this."),"\n",r.createElement(t.p,null,"Also an extra resource: ",r.createElement("a",{href:"https://github.com/matiassingers/awesome-readme"},'"How To Make a Good README"'),"."),"\n",r.createElement(t.h2,null,"🐊 Project Managing"),"\n",r.createElement(t.p,null,'Project managing is hard. Being a product owner with crystal clear vision takes skill. We were gonna have different buttons for "modes" to show NHK News frequency, realtime counting and reordering. With each iteration it became clearer on what to do. Keeping it stupidly simple and reiterate (or add) should\'ve been the approach right from the start.'),"\n",r.createElement(t.h2,null,"🐊 Managing Callback Hell"),"\n",r.createElement(t.p,null,"Almost every website’s basic tutorial (looking at you ",r.createElement("a",{href:"http://mongoosejs.com/docs/api.html"},"mongoose"),") nests callback like crazy. We initially followed when we were making our API. Callbacks upon callbacks making writing reusable components really hard. Even error handling was also getting out of control for our simple API. We followed this guide here ",r.createElement("a",{href:"https://github.com/justsml/escape-from-callback-mountain"},'"Escape From Callback Hell"')," to help tidy up our API."),"\n",r.createElement(t.h2,null,"🐊 React and Ajax"),"\n",r.createElement(t.p,null,"React is no doubt very powerful. It helped us simplify a lot of state management. However React might not be the silver bullet for every application. Our web app contains tons (2136 to be exact) of tiny cards that constantly needs to be updated. Real time stream updates kills the browser every single time. We learned that as long as it feels real time, in our case we set the stream interval to 1.5s, its good enough."),"\n",r.createElement(t.p,null,"We still have yet to find a graceful way to halt initial rendering before the first ajax request is finished. Something to think about for future apps."),"\n",r.createElement(t.h2,null,"🐊 Immutable.js"),"\n",r.createElement(t.p,null,"We converted our web app from having native JavaScript objects, mutating states as interaction happen, to Immutable.js objects. The idea seems fantastic, we saw the use case and how chaotic native objects could lead us to. We ran into a couple problems upon switching. Immutable objects uses special syntax for accessing and  manipulation, leading to many frustrations over simple errors. Immutable also is a little difficult to debug, compounding said frustrations."),"\n",r.createElement(t.p,null,"For future references, immutable might cause ",r.createElement("a",{href:"https://softwareengineering.stackexchange.com/questions/309452/redux-memory-consumption"},"performance issues")," and should be considered for heavy applications."),"\n",r.createElement(t.h2,null,"🐊 CORS"),"\n",r.createElement(t.p,null,"We wanted to originally host our app over on github pages. We later hit ",r.createElement("a",{href:"https://en.wikipedia.org/wiki/Cross-origin_resource_sharing"},"CORS")," since github pages is served over https and our API over http. This was bandage fixed by migrating the app to our server. A better solution would probably be to try and convert our API to https."),"\n",r.createElement(t.h2,null,"🐊 React Router"),"\n",r.createElement(t.p,null,'We also ran into problems where our kanji urls would not load properly. Our react router is simple. Serve "/" as the main page and "/kanji/{character}" as the kanji page. Since "/kanji/{character}" is not a valid file compared to "/" (index.html), apache threw a 404. We fixed this by simply redirecting all hits to "/" and let the router parse the incoming url and figure out.'),"\n",r.createElement(t.p,null,r.createElement("a",{href:"https://www.youtube.com/watch?v=VCVjbrt30tY"},"Deliver"),"ed with ",r.createElement("a",{href:"https://github.com/reblws"},"reblws"),"."))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(l,e)):l(e)},i=n(8678),s=n(9357);const c=e=>{let{data:t,children:n}=e;return console.log({data:t}),r.createElement(i.Z,{pageTitle:t.mdx.frontmatter.title},r.createElement("p",null,t.mdx.frontmatter.date),n)},u=e=>{let{data:t}=e;return r.createElement(s.Z,{title:t.mdx.frontmatter.title})};function m(e){return r.createElement(c,e,r.createElement(o,e))}},1619:function(e,t,n){var a=n(7294),r=n(2712),l=n(1883);t.Z=()=>{const e=(0,r.Z)(),{github:t,instagram:n,linkedin:o,goodreads:i}=e;return a.createElement("div",null,a.createElement(l.rU,{to:t,target:"_blank"},"github")," • ",a.createElement(l.rU,{to:n,target:"_blank"},"instagram")," • ",a.createElement(l.rU,{to:o,target:"_blank"},"linkedin")," • ",a.createElement(l.rU,{to:i,target:"_blank"},"goodreads"),a.createElement("br",null),"© 2014 - ",(new Date).getFullYear())}},8678:function(e,t,n){var a=n(7294),r=n(5292),l=n(2712),o=n(1883),i=n(1619);t.Z=e=>{let{children:t,pageTitle:n=null}=e;const s=(0,l.Z)();return a.createElement("div",{className:r.n},a.createElement(o.rU,{to:"/",className:"header"},a.createElement("header",{className:r.y},null==n?null==s?void 0:s.title:n)),a.createElement("main",null,t),a.createElement(i.Z,null))}},9357:function(e,t,n){var a=n(7294),r=n(2712);t.Z=e=>{let{title:t}=e;const n=(0,r.Z)();return a.createElement("title",null,null==t?"":t+" | ",null==n?void 0:n.title)}},2712:function(e,t,n){var a=n(1883);t.Z=()=>(0,a.K2)("1644373542").site.siteMetadata},5292:function(e,t,n){n.d(t,{n:function(){return a},y:function(){return r}});var a="layout-module--container--78b04",r="layout-module--siteTitle--86bf1"}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-frontmatter-slug-js-content-file-path-users-yoyo-documents-git-hub-aulb-github-io-blog-yaponiya-mdx-771a8564265d09a6e985.js.map