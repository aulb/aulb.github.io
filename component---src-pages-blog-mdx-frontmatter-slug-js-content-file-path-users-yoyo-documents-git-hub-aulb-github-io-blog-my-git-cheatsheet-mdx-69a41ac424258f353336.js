"use strict";(self.webpackChunkalbert_wtf=self.webpackChunkalbert_wtf||[]).push([[396],{3905:function(e,t,n){n.d(t,{ah:function(){return s}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=s(n),d=r,f=h["".concat(c,".").concat(d)]||h[d]||m[d]||o;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));u.displayName="MDXCreateElement"},3162:function(e,t,n){n.r(t),n.d(t,{Head:function(){return m},default:function(){return u}});var a=n(3905),r=n(7294);function o(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2"},(0,a.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.h1,null,"How to learn Git?"),"\n",r.createElement(t.p,null,"How does one even start learning how to use a version control system (git specifically)? You can certainly learn the basics of git commands by enforcing good committing habits and versioning for solo side projects. But how does one go from basics to intermediate or even advanced? Find a job that uses it and start collaborating!"),"\n",r.createElement(t.p,null,'At my first development job, I was exposed to no version control. Everything was on a honor system of "please stay away from this code, I\'m working on it atm". I was fortunate enough that by my next job I was slowly being exposed to a step up, slightly more complicated commands such as rebasing.'),"\n",r.createElement(t.p,null,"I was a perfectionist and wanted to do everything right the first time, shy-ing away from trying new commands out. The moment I ran into my first big git conflicts was an eye opener, everything started to make sense. Running into problems such as ending up in a detached head state, somehow losing stashed changes, and accidental git merges were extremely helpful in understanding. I learn what HEAD, upstream, and various other terminologies in the version control world."),"\n",r.createElement(t.p,null,"Those experiences gave me confidence to start partnerning up with friends on side projects and employ my new git skills to work. This way I can safely discover niched git commands, clutter my remote repo with tests and not have to worry about affecting any work-related code."),"\n",r.createElement(t.h1,null,"My Git Cheatsheet"),"\n",r.createElement(t.p,null,"Rule of cheatsheets, you gotta make it yourself for it to make sense."),"\n",r.createElement(t.p,null,"These were the git commands that I find useful during my development time. It might not make any sense to any reader but it helps me to go back to this page and refresh my memory. The most important git trick I learned is to not be scared to nuke a complicated branch and start clean. Cherry-picking commits from the failed branch is always an option."),"\n",r.createElement(t.h2,null,"Dry running a commit to check of what it'll do."),"\n",r.createElement(t.p,null,"The `—dry-run` flag exist and its a good thing to use when I wasn't sure of what the commands would do."),"\n",r.createElement(t.h2,null,"Amending to previous commit"),"\n",r.createElement(t.p,null,"Instead of doing `git rebase -i <branch>` then `fixup` do `git commit —amend —no-edit`"),"\n",r.createElement(t.h2,null,"Check latest commit statuses and files"),"\n",r.createElement(t.p,null,"Useful to get the hash too. \\\n`git log —stat` \\\n`git log —oneline`"),"\n",r.createElement(t.h2,null,"Making new branch from specific branch"),"\n",r.createElement(t.p,null,"When I first started, I used to forget to checkout from a specific branch and would always build on top of what I was working on previously. It was messy :( \\\n`git checkout -b <new_name> <optional: which_branch>`"),"\n",r.createElement(t.h2,null,"Renaming local git branch"),"\n",r.createElement(t.p,null,"`git branch -m <new_name>`"),"\n",r.createElement(t.h2,null,"Deleting remote branch and push a new local branch"),"\n",r.createElement(t.p,null,"`git push origin <old_name> <new_name>`"),"\n",r.createElement(t.h2,null,"Remove local branch"),"\n",r.createElement(t.p,null,"`git branch -d <local_branch_name>`"),"\n",r.createElement(t.h2,null,"Remove remote branch"),"\n",r.createElement(t.p,null,"`git push origin —d <remote_branch_name>`"),"\n",r.createElement(t.h2,null,"Renaming local files"),"\n",r.createElement(t.p,null,"Instead of renaming the file directly, its better to use the command below to help git notice that a renaming operation has been performed.\n`git mv <old_filename> <new_filename>`"),"\n",r.createElement(t.h2,null,"Github specific feature!"),"\n",r.createElement(t.p,null,'Though this isn\'t a git command, it was one of the feature I found useful from the most popular git service. One of my pull request was heavy in terms of whitespace linting, diluting the meat of why the request was made in the first place. Fortunately github build a whole slew of features to help with pull requests, one of which was directly relevant to my case. Add `?w=1` when viewing the diffs. More here over at <a href="https://github.com/blog/967-github-secrets">github secrets</a>.'),"\n",r.createElement(t.p,null,"\x3c!-- Renaming files/folders with git\nhttps://blog.filippo.io/git-fixup-amending-an-older-commit/\nhttp://fle.github.io/git-tip-keep-your-branch-clean-with-fixup-and-autosquash.html --\x3e"))}var l=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(o,e)):o(e)},i=n(8678),c=n(9357);const s=e=>{let{data:t,children:n}=e;return console.log({data:t}),r.createElement(i.Z,{pageTitle:t.mdx.frontmatter.title},r.createElement("p",null,t.mdx.frontmatter.date),n)},m=e=>{let{data:t}=e;return r.createElement(c.Z,{title:t.mdx.frontmatter.title})};function u(e){return r.createElement(s,e,r.createElement(l,e))}},1619:function(e,t,n){var a=n(7294),r=n(2712),o=n(1883);t.Z=()=>{const e=(0,r.Z)(),{github:t,instagram:n,linkedin:l,goodreads:i}=e;return a.createElement("div",null,a.createElement(o.Link,{to:t,target:"_blank"},"github")," • ",a.createElement(o.Link,{to:n,target:"_blank"},"instagram")," • ",a.createElement(o.Link,{to:l,target:"_blank"},"linkedin")," • ",a.createElement(o.Link,{to:i,target:"_blank"},"goodreads")," • ",a.createElement(o.Link,{to:"/copyright"},"©")," 2014 - ",(new Date).getFullYear())}},8090:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r=n(2712);var o=e=>{let{pageTitle:t}=e;const n=(0,r.Z)();return a.createElement("h1",{className:"header-module--siteTitle--0667c"},null==t?null==n?void 0:n.title:t)}},8678:function(e,t,n){var a=n(7294),r=n(5292),o=n(2712),l=n(1883),i=n(1619),c=n(8090);t.Z=e=>{let{children:t,pageTitle:n=null}=e;const s=(0,o.Z)();return a.createElement("div",{className:r.n},a.createElement(l.Link,{to:"/"},a.createElement(c.Z,{pageTitle:n,data:s})),a.createElement("main",{className:r.D},t),a.createElement(i.Z,null))}},9357:function(e,t,n){var a=n(7294),r=n(2712);t.Z=e=>{let{title:t}=e;const n=(0,r.Z)();return a.createElement("title",null,null==t?"":t+" | ",null==n?void 0:n.title)}},2712:function(e,t,n){var a=n(1883);t.Z=()=>(0,a.useStaticQuery)("1644373542").site.siteMetadata},5292:function(e,t,n){n.d(t,{D:function(){return r},n:function(){return a}});var a="layout-module--container--78b04",r="layout-module--main--e5529"}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-frontmatter-slug-js-content-file-path-users-yoyo-documents-git-hub-aulb-github-io-blog-my-git-cheatsheet-mdx-69a41ac424258f353336.js.map