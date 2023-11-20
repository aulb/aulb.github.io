"use strict";(self.webpackChunkalbert_wtf=self.webpackChunkalbert_wtf||[]).push([[233],{3905:function(e,t,n){n.d(t,{ah:function(){return u}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),h=u(n),d=l,p=h["".concat(c,".").concat(d)]||h[d]||s[d]||a;return n?r.createElement(p,o(o({ref:t},m),{},{components:n})):r.createElement(p,o({ref:t},m))}));m.displayName="MDXCreateElement"},1184:function(e,t,n){n.r(t),n.d(t,{Head:function(){return s},default:function(){return m}});var r=n(3905),l=n(7294);function a(e){const t=Object.assign({h1:"h1",p:"p",code:"code",ul:"ul",li:"li",em:"em"},(0,r.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.h1,null,"Note: 01/18/2023 This is an example of an unfinished blogpost. Nothing to read here."),"\n",l.createElement(t.p,null,"I've been studying interview questions for the past couple of weeks. One that I came across quite a few time was the infamous describe (and or implement) the inner workings of hash tables."),"\n",l.createElement(t.p,null,"I thought it'd be interesting to explore this problem with my favourite programming language Python."),"\n",l.createElement(t.h1,null,"What is a Hash Table?"),"\n",l.createElement(t.p,null,"In Python, hash tables are called dictionaries, and they are a key/value pair storage."),"\n",l.createElement(t.h1,null,"How to implement a simple hash table"),"\n",l.createElement(t.p,null,"Using Python's data structure."),"\n",l.createElement(t.h1,null,"Inner working of dictionaries"),"\n",l.createElement(t.h1,null,"Basic Fields"),"\n",l.createElement(t.p,null,l.createElement(t.code,null,"ma_used"),"\n",l.createElement(t.code,null,"ma_fill"),"\n",l.createElement(t.code,null,"ma_mask"),"\n",l.createElement(t.code,null,"ma_table")),"\n",l.createElement(t.p,null,"How does this hash function work exactly???\nWhy ",l.createElement(t.code,null,"ma_fill")," the same number when a key is deleted? Whats the purpose?"),"\n",l.createElement(t.h1,null,"What do you get from objects?"),"\n",l.createElement(t.h1,null,"What did I learn from reading?"),"\n",l.createElement(t.h1,null,"Inserting"),"\n",l.createElement(t.h1,null,"Deleting"),"\n",l.createElement(t.p,null,"Never resized down on deletion\nThis usage pattern is quite infrequent, thus why is the one pursued\nno-resize-on-deletion policy"),"\n",l.createElement(t.h1,null,"Exploring mapping and collision, I'm sure this gets asked tons of time."),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Chaining: Each slot is the head of a linked list containing all the items that hash to that slot (my school taught me this)\nMemory allocation is a slow operation, yep malloc"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Linear scan: When hit a collision\nSome complicated"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Python scan:\n",l.createElement(t.em,null,"trick here"),"\nWhy 5? Great question."),"\n"),"\n"),"\n",l.createElement(t.h1,null,"Resizing"),"\n",l.createElement(t.p,null,"Load factor\n-We know from the readings that the table size is always a power of two- not true\nn/(2/3),"),"\n",l.createElement(t.p,null,"re organize??? no"),"\n",l.createElement(t.p,null,"resizing when 2/3d full\nma_used * 4 for fewer elements\nma_used * 2 for more than 50k keys"),"\n",l.createElement(t.h1,null,"Tricks"),"\n",l.createElement(t.p,null,"Memory tradeoff\nquestion: are the dictionaries the same size?"),"\n",l.createElement(t.h1,null,"Iterating through, yield, generators"),"\n",l.createElement(t.p,null,"Turns out that generators in Python is memory efficient as well"),"\n",l.createElement(t.p,null,"I learned that they do a bunch of weird things"))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(a,e)):a(e)},i=n(8678),c=n(9357);const u=e=>{let{data:t,children:n}=e;return console.log({data:t}),l.createElement(i.Z,{pageTitle:t.mdx.frontmatter.title},l.createElement("p",null,t.mdx.frontmatter.date),n)},s=e=>{let{data:t}=e;return l.createElement(c.Z,{title:t.mdx.frontmatter.title})};function m(e){return l.createElement(u,e,l.createElement(o,e))}},1619:function(e,t,n){var r=n(7294),l=n(2712),a=n(1883);t.Z=()=>{const e=(0,l.Z)(),{github:t,instagram:n,linkedin:o,goodreads:i}=e;return r.createElement("div",null,r.createElement(a.Link,{to:t,target:"_blank"},"github")," • ",r.createElement(a.Link,{to:n,target:"_blank"},"instagram")," • ",r.createElement(a.Link,{to:o,target:"_blank"},"linkedin")," • ",r.createElement(a.Link,{to:i,target:"_blank"},"goodreads")," • ",r.createElement(a.Link,{to:"/copyright"},"©")," 2014 - ",(new Date).getFullYear()," •  Last updated: November 2023")}},8090:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294),l=n(2712);var a=e=>{let{pageTitle:t}=e;const n=(0,l.Z)();return r.createElement("h1",{className:"header-module--siteTitle--0667c"},null==t?null==n?void 0:n.title:t)}},8678:function(e,t,n){var r=n(7294),l=n(5292),a=n(2712),o=n(1883),i=n(1619),c=n(8090);t.Z=e=>{let{children:t,pageTitle:n=null}=e;const u=(0,a.Z)();return r.createElement("div",{className:l.n},r.createElement(o.Link,{to:"/"},r.createElement(c.Z,{pageTitle:n,data:u})),r.createElement("main",{className:l.D},t),r.createElement(i.Z,null))}},9357:function(e,t,n){var r=n(7294),l=n(2712);t.Z=e=>{let{title:t}=e;const n=(0,l.Z)();return r.createElement("title",null,null==t?"":t+" | ",null==n?void 0:n.title)}},2712:function(e,t,n){var r=n(1883);t.Z=()=>(0,r.useStaticQuery)("1644373542").site.siteMetadata},5292:function(e,t,n){n.d(t,{D:function(){return l},n:function(){return r}});var r="layout-module--container--78b04",l="layout-module--main--e5529"}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-frontmatter-slug-js-content-file-path-users-yoyo-documents-git-hub-aulb-github-io-blog-hashtables-mdx-f4f03db983729c413780.js.map