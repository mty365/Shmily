import{_ as e,c as o,o as d,R as t}from"./chunks/framework.6Zk1sI6T.js";const h=JSON.parse('{"title":"安装 nodejs","description":"","frontmatter":{},"headers":[],"relativePath":"guide/setup-runtime/nodejs.md","filePath":"guide/setup-runtime/nodejs.md","lastUpdated":1702113381000}'),i={name:"guide/setup-runtime/nodejs.md"},c=t('<h1 id="安装-nodejs" tabindex="-1">安装 nodejs <a class="header-anchor" href="#安装-nodejs" aria-label="Permalink to &quot;安装 nodejs&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">🎞️ 视频教程</p><p><a href="https://www.bilibili.com/video/BV1t94y1E7VT/" target="_blank" rel="noreferrer">https://www.bilibili.com/video/BV1t94y1E7VT/</a></p></div><ul><li><p>查看项目中 <code>package.json</code> 中 <code>engines</code> 字段获取项目所需 <code>nodejs</code> 版本</p><ul><li>如果没有 <code>engines</code> 字段，从官网 <code>https://nodejs.org/</code> 下载 <code>LTS</code> 版本</li></ul></li><li><p>从 <code>https://nodejs.org/dist/</code> 下载相应版本的 <code>nodejs</code></p><ul><li>Windows 平台 <ul><li>(推荐) <code>node-v99.99.9-x64.msi</code> 标准安装程序</li><li>(不推荐) <code>node-v99.9.9-win-x64.7z / .zip</code> 绿色版, 需要自己配置 <code>Path</code> 环境变量</li><li>(不推荐) <code>./win-x64/node.exe</code> 绿色单文件, 不含 <code>npm</code></li></ul></li></ul></li><li><p>安装过程，选项全部默认</p></li></ul>',3),s=[c];function n(l,a,r,p,_,u){return d(),o("div",null,s)}const j=e(i,[["render",n]]);export{h as __pageData,j as default};