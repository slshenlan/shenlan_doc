import{A as s,a0 as p,a1 as i,a2 as u,a3 as c,a4 as l,a5 as d,a6 as f,a7 as m,a8 as A,a9 as h,aa as g,d as P,u as v,j as y,x as C,ab as w,ac as _,ad as b,ae as E}from"./chunks/framework.3d018db5.js";import{t as R}from"./chunks/theme.90a3bd63.js";function r(e){if(e.extends){const a=r(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const o=r(R),D=P({name:"VitePressApp",setup(){const{site:e}=v();return y(()=>{C(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),w(),_(),b(),o.setup&&o.setup(),()=>E(o.Layout)}});async function j(){const e=O(),a=x();a.provide(i,e);const t=u(e.route);return a.provide(c,t),a.component("Content",l),a.component("ClientOnly",d),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:a,router:e,siteData:f}),{app:a,router:e,data:t}}function x(){return m(D)}function O(){let e=s,a;return A(t=>{let n=h(t);return n?(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),s&&(e=!1),g(()=>import(n),[])):null},o.NotFound)}s&&j().then(({app:e,router:a,data:t})=>{a.go().then(()=>{p(a.route,t.site),e.mount("#app")})});export{j as createApp};
