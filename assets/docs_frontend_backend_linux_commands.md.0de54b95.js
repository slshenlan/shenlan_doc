import{_ as e,E as o,o as c,c as r,k as n,a as s,J as l,w as p,S as t}from"./chunks/framework.3d018db5.js";const _=JSON.parse('{"title":"命令查询","description":"","frontmatter":{},"headers":[],"relativePath":"docs/frontend/backend/linux/commands.md","filePath":"docs/frontend/backend/linux/commands.md","lastUpdated":1729236017000}'),i={name:"docs/frontend/backend/linux/commands.md"},C=t(`<h1 id="命令查询" tabindex="-1">命令<a href="https://www.linuxcool.com/" target="_blank" rel="noreferrer">查询</a> <a class="header-anchor" href="#命令查询" aria-label="Permalink to &quot;命令[查询](https://www.linuxcool.com/)&quot;">​</a></h1><h2 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-label="Permalink to &quot;常用命令&quot;">​</a></h2><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#显示用户当前所处的工作目录</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pwd</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 创建空白的目录</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mkdir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xxx</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mkdir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xxx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xxx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xxx</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mkdir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/xxx/xxx/xxx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 用于创建空白文件</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">touch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 删除文件或目录</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-rf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">XXX</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 用于复制文件</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xxx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xxx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 用于复制目录</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-r</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Dir1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Dir2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 移动文件或将文件重命名</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mv</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">File1.cfg</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">File2.cfg</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mv</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">File2.cfg</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查找文件</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">find</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">nginx.conf</span><span style="color:#89DDFF;">&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="vi-的基本操作" tabindex="-1">vi 的基本操作 <a class="header-anchor" href="#vi-的基本操作" aria-label="Permalink to &quot;vi 的基本操作&quot;">​</a></h2><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查看文件详情</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cat</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">myfile</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 动态查看文件</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tail</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-f</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">fileName</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 打开文件</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vi</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">myfile</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#进入「插入模式（Insert mode）</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#存盘并退出 vi</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ESC</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">:wq</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#不存盘强制退出 vi</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">:q!</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="环境变量配置" tabindex="-1">环境变量配置 <a class="header-anchor" href="#环境变量配置" aria-label="Permalink to &quot;环境变量配置&quot;">​</a></h2>`,6),y=n("h2",{id:"系统常用命令",tabindex:"-1"},[s("系统常用命令 "),n("a",{class:"header-anchor",href:"#系统常用命令","aria-label":'Permalink to "系统常用命令"'},"​")],-1),u=n("h2",{id:"系统状态检测命令",tabindex:"-1"},[s("系统状态检测命令 "),n("a",{class:"header-anchor",href:"#系统状态检测命令","aria-label":'Permalink to "系统状态检测命令"'},"​")],-1);function b(d,m,A,D,f,E){const a=o("font");return c(),r("div",null,[C,n("ol",null,[n("li",null,[s("打开环境变量文件 "),l(a,{color:"#20940c"},{default:p(()=>[s("vi /etc/profile")]),_:1})]),n("li",null,[s("配置环境变量 "),l(a,{color:"#20940c"},{default:p(()=>[s(" export JAVA_HOME=/root/j d k-XXX_lin ux-x64")]),_:1})]),n("li",null,[l(a,{color:"#20940c"},{default:p(()=>[s("export PATH=$JAVA HOME/bin:$PATH")]),_:1})]),n("li",null,[s("刷新配置 "),l(a,{color:"#20940c"},{default:p(()=>[s("source /etc/profile")]),_:1})])]),y,n("ul",null,[n("li",null,[l(a,{color:"#20940c"},{default:p(()=>[s("echo")]),_:1}),s(" 用于在终端输出字符串或变量提取后的值")]),n("li",null,[l(a,{color:"#20940c"},{default:p(()=>[s("date")]),_:1}),s(" 用于显示及设置系统的时间或日期")])]),u,n("ul",null,[n("li",null,[l(a,{color:"#20940c"},{default:p(()=>[s("ifconfig")]),_:1}),s(" 用于获取网卡配置与网络状态等信息")]),n("li",null,[l(a,{color:"#20940c"},{default:p(()=>[s("uname")]),_:1}),s(" 用于查看系统内核与系统版本等信息")]),n("li",null,[l(a,{color:"#20940c"},{default:p(()=>[s("uptime")]),_:1}),s(" 用于查看系统的负载信息")]),n("li",null,[l(a,{color:"#20940c"},{default:p(()=>[s("free")]),_:1}),s(" 用于显示当前系统中内存的使用量信息")]),n("li",null,[l(a,{color:"#20940c"},{default:p(()=>[s("who")]),_:1}),s(" 用于查看当前登入主机的用户终端信息")]),n("li",null,[l(a,{color:"#20940c"},{default:p(()=>[s("w")]),_:1}),s(" 命令 显示已登录用户")]),n("li",null,[l(a,{color:"#20940c"},{default:p(()=>[s("last")]),_:1}),s(" 用于查看所有系统的登录记录")]),n("li",null,[l(a,{color:"#20940c"},{default:p(()=>[s("history")]),_:1}),s(" 用于显示历史执行过的命令")]),n("li",null,[l(a,{color:"#20940c"},{default:p(()=>[s("sosreport")]),_:1}),s(" 命令 用于收集系统配置及架构信息并输出诊断文档")]),n("li",null,[l(a,{color:"#20940c"},{default:p(()=>[s("df")]),_:1}),s(" 显示磁盘空间使用情况")]),n("li",null,[l(a,{color:"#20940c"},{default:p(()=>[s("dh")]),_:1}),s(" 统计文件大小，目录则取总用量")]),n("li",null,[l(a,{color:"#20940c"},{default:p(()=>[s("lsblk")]),_:1}),s(" 命令 – 查看系统的磁盘")])])])}const x=e(i,[["render",b]]);export{_ as __pageData,x as default};
