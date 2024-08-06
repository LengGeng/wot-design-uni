import{_ as s,c as i,J as a,a9 as d,E as h,o as e}from"./chunks/framework.BIHpRIPm.js";const u=JSON.parse('{"title":"Backtop 回到顶部 1.2.21","description":"","frontmatter":{},"headers":[],"relativePath":"component/backtop.md","filePath":"component/backtop.md","lastUpdated":1722920682000}'),l={name:"component/backtop.md"},n=d(`<h1 id="backtop-回到顶部-1-2-21" tabindex="-1">Backtop 回到顶部 <code>1.2.21</code> <a class="header-anchor" href="#backtop-回到顶部-1-2-21" aria-label="Permalink to &quot;Backtop 回到顶部 \`1.2.21\`&quot;">​</a></h1><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to &quot;基本用法&quot;">​</a></h2><p>由于返回顶部需要实时监听滚动条位置，但是在uniapp的组件中不能获取页面的滚动信息， 所以只能在页面的<code>onPageScroll</code>生命周期中获取滚动条位置，再通过<code>Props</code>传递给组件。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-backtop</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :scrollTop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;scrollTop&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-backtop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> scrollTop</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onPageScroll</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">e</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  scrollTop.value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> e.scrollTop</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><h2 id="自定义图标" tabindex="-1">自定义图标 <a class="header-anchor" href="#自定义图标" aria-label="Permalink to &quot;自定义图标&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-backtop</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :scrollTop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;scrollTop&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;TOP&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-backtop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="自定义样式" tabindex="-1">自定义样式 <a class="header-anchor" href="#自定义样式" aria-label="Permalink to &quot;自定义样式&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-backtop</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :scrollTop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;scrollTop&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> customStyle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;background: #007aff;color:white;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-backtop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th><th>最低版本</th></tr></thead><tbody><tr><td>scrollTop</td><td>页面滚动距离</td><td>number</td><td>-</td><td>-</td><td>-</td></tr><tr><td>top</td><td>距离顶部多少距离时显示，单位<code>px</code></td><td>number</td><td>-</td><td>300</td><td>-</td></tr><tr><td>duration</td><td>返回顶部滚动时间，单位<code>ms</code></td><td>number</td><td>-</td><td>100</td><td>-</td></tr><tr><td>zIndex</td><td>组件z-index属性</td><td>number</td><td>-</td><td>10</td><td>-</td></tr><tr><td>iconStyle</td><td>自定义<code>icon</code>样式</td><td>string</td><td>-</td><td>-</td><td>-</td></tr><tr><td>shape</td><td>按钮形状</td><td>string</td><td>square</td><td>circle</td><td>-</td></tr><tr><td>bottom</td><td>距离屏幕顶部的距离，单位<code>px</code></td><td>number</td><td>-</td><td>100</td><td>-</td></tr><tr><td>right</td><td>距离屏幕右边距离，单位<code>px</code></td><td>number</td><td>-</td><td>20</td><td>-</td></tr></tbody></table><h2 id="外部样式类" tabindex="-1">外部样式类 <a class="header-anchor" href="#外部样式类" aria-label="Permalink to &quot;外部样式类&quot;">​</a></h2><table><thead><tr><th>类名</th><th>说明</th><th>最低版本</th></tr></thead><tbody><tr><td>custom-class</td><td>根节点样式</td><td>-</td></tr><tr><td>custom-style</td><td>根节点样式</td><td>-</td></tr></tbody></table>`,13);function p(k,r,o,c,E,g){const t=h("frame");return e(),i("div",null,[a(t),n])}const b=s(l,[["render",p]]);export{u as __pageData,b as default};
