import{_ as s,o as a,c as n,S as l}from"./chunks/framework.3d018db5.js";const u=JSON.parse('{"title":"echart","description":"","frontmatter":{},"headers":[],"relativePath":"docs/exception-handling/e-chart.md","filePath":"docs/exception-handling/e-chart.md","lastUpdated":1729236017000}'),e={name:"docs/exception-handling/e-chart.md"},p=l(`<h1 id="echart" tabindex="-1">echart <a class="header-anchor" href="#echart" aria-label="Permalink to &quot;echart&quot;">​</a></h1><h2 id="vue3-tooltip-无法正常显示" tabindex="-1">vue3 tooltip 无法正常显示 <a class="header-anchor" href="#vue3-tooltip-无法正常显示" aria-label="Permalink to &quot;vue3 tooltip 无法正常显示&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// echarts 实例赋值给 ref 响应式 Proxy对象，会导致tooltip不显示</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 解决方案</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> myChart </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">shallowRef</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 配置</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> options </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">tooltip</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">show</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">trigger</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">axis</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &quot;item&quot; || &quot;axis&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,3),o=[p];function t(r,c,i,y,D,C){return a(),n("div",null,o)}const h=s(e,[["render",t]]);export{u as __pageData,h as default};
