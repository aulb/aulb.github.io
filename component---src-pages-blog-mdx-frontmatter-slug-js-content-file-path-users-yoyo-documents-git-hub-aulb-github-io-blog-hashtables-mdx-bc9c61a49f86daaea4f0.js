"use strict";(self.webpackChunkalbert_wtf=self.webpackChunkalbert_wtf||[]).push([[233],{3905:function(e,t,n){n.d(t,{ah:function(){return u}});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=l.createContext({}),u=function(e){var t=l.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),h=u(n),d=r,p=h["".concat(c,".").concat(d)]||h[d]||s[d]||a;return n?l.createElement(p,o(o({ref:t},m),{},{components:n})):l.createElement(p,o({ref:t},m))}));m.displayName="MDXCreateElement"},1184:function(e,t,n){n.r(t),n.d(t,{Head:function(){return s},default:function(){return m}});var l=n(3905),r=n(7294);function a(e){const t=Object.assign({h1:"h1",p:"p",code:"code",ul:"ul",li:"li",em:"em"},(0,l.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.h1,null,"Note: 01/18/2023 This is an example of an unfinished blogpost. Nothing to read here."),"\n",r.createElement(t.p,null,"I've been studying interview questions for the past couple of weeks. One that I came across quite a few time was the infamous describe (and or implement) the inner workings of hash tables."),"\n",r.createElement(t.p,null,"I thought it'd be interesting to explore this problem with my favourite programming language Python."),"\n",r.createElement(t.h1,null,"What is a Hash Table?"),"\n",r.createElement(t.p,null,"In Python, hash tables are called dictionaries, and they are a key/value pair storage."),"\n",r.createElement(t.h1,null,"How to implement a simple hash table"),"\n",r.createElement(t.p,null,"Using Python's data structure."),"\n",r.createElement(t.h1,null,"Inner working of dictionaries"),"\n",r.createElement(t.h1,null,"Basic Fields"),"\n",r.createElement(t.p,null,r.createElement(t.code,null,"ma_used"),"\n",r.createElement(t.code,null,"ma_fill"),"\n",r.createElement(t.code,null,"ma_mask"),"\n",r.createElement(t.code,null,"ma_table")),"\n",r.createElement(t.p,null,"How does this hash function work exactly???\nWhy ",r.createElement(t.code,null,"ma_fill")," the same number when a key is deleted? Whats the purpose?"),"\n",r.createElement(t.h1,null,"What do you get from objects?"),"\n",r.createElement(t.h1,null,"What did I learn from reading?"),"\n",r.createElement(t.h1,null,"Inserting"),"\n",r.createElement(t.h1,null,"Deleting"),"\n",r.createElement(t.p,null,"Never resized down on deletion\nThis usage pattern is quite infrequent, thus why is the one pursued\nno-resize-on-deletion policy"),"\n",r.createElement(t.h1,null,"Exploring mapping and collision, I'm sure this gets asked tons of time."),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Chaining: Each slot is the head of a linked list containing all the items that hash to that slot (my school taught me this)\nMemory allocation is a slow operation, yep malloc"),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Linear scan: When hit a collision\nSome complicated"),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Python scan:\n",r.createElement(t.em,null,"trick here"),"\nWhy 5? Great question."),"\n"),"\n"),"\n",r.createElement(t.h1,null,"Resizing"),"\n",r.createElement(t.p,null,"Load factor\n-We know from the readings that the table size is always a power of two- not true\nn/(2/3),"),"\n",r.createElement(t.p,null,"re organize??? no"),"\n",r.createElement(t.p,null,"resizing when 2/3d full\nma_used * 4 for fewer elements\nma_used * 2 for more than 50k keys"),"\n",r.createElement(t.h1,null,"Tricks"),"\n",r.createElement(t.p,null,"Memory tradeoff\nquestion: are the dictionaries the same size?"),"\n",r.createElement(t.h1,null,"Iterating through, yield, generators"),"\n",r.createElement(t.p,null,"Turns out that generators in Python is memory efficient as well"),"\n",r.createElement(t.p,null,"I learned that they do a bunch of weird things"))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(a,e)):a(e)},i=n(8678),c=n(9357);const u=e=>{let{data:t,children:n}=e;return console.log({data:t}),r.createElement(i.Z,{pageTitle:t.mdx.frontmatter.title},r.createElement("p",null,t.mdx.frontmatter.date),n)},s=e=>{let{data:t}=e;return r.createElement(c.Z,{title:t.mdx.frontmatter.title})};function m(e){return r.createElement(u,e,r.createElement(o,e))}},1619:function(e,t,n){var l=n(7294),r=n(2712),a=n(1883);t.Z=()=>{const e=(0,r.Z)(),{github:t,instagram:n,linkedin:o,goodreads:i}=e;return l.createElement("div",null,l.createElement(a.Link,{to:t,target:"_blank"},"github")," • ",l.createElement(a.Link,{to:n,target:"_blank"},"instagram")," • ",l.createElement(a.Link,{to:o,target:"_blank"},"linkedin")," • ",l.createElement(a.Link,{to:i,target:"_blank"},"goodreads"),l.createElement("br",null),l.createElement(a.Link,{to:"/copyright"},"©")," 2014 - ",(new Date).getFullYear())}},8678:function(e,t,n){var l=n(7294),r=n(5292),a=n(2712),o=n(1883),i=n(1619);t.Z=e=>{let{children:t,pageTitle:n=null}=e;const c=(0,a.Z)();return l.createElement("div",{className:r.n},l.createElement(o.Link,{to:"/",className:"header"},l.createElement("header",{className:r.y},null==n?null==c?void 0:c.title:n)),l.createElement("main",null,t),l.createElement(i.Z,null))}},9357:function(e,t,n){var l=n(7294),r=n(2712);t.Z=e=>{let{title:t}=e;const n=(0,r.Z)();return l.createElement("title",null,null==t?"":t+" | ",null==n?void 0:n.title)}},2712:function(e,t,n){var l=n(1883);t.Z=()=>(0,l.useStaticQuery)("1644373542").site.siteMetadata},5292:function(e,t,n){n.d(t,{n:function(){return l},y:function(){return r}});var l="layout-module--container--78b04",r="layout-module--siteTitle--86bf1"}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-frontmatter-slug-js-content-file-path-users-yoyo-documents-git-hub-aulb-github-io-blog-hashtables-mdx-bc9c61a49f86daaea4f0.js.map