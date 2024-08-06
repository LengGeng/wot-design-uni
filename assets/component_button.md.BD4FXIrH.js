import{_ as s,c as i,J as a,a9 as d,E as h,o as e}from"./chunks/framework.BIHpRIPm.js";const y=JSON.parse('{"title":"Button 按钮","description":"","frontmatter":{},"headers":[],"relativePath":"component/button.md","filePath":"component/button.md","lastUpdated":1722920682000}'),n={name:"component/button.md"},l=d(`<h1 id="button-按钮" tabindex="-1">Button 按钮 <a class="header-anchor" href="#button-按钮" aria-label="Permalink to &quot;Button 按钮&quot;">​</a></h1><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to &quot;基本用法&quot;">​</a></h2><p>基本按钮。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;主要按钮&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;success&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;成功按钮&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;info&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;信息按钮&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;warning&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;警告按钮&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;危险按钮&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="禁用" tabindex="-1">禁用 <a class="header-anchor" href="#禁用" aria-label="Permalink to &quot;禁用&quot;">​</a></h2><p>设置 <code>disabled</code> 属性。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> disabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;默认按钮&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="幽灵按钮" tabindex="-1">幽灵按钮 <a class="header-anchor" href="#幽灵按钮" aria-label="Permalink to &quot;幽灵按钮&quot;">​</a></h2><p>设置 <code>plain</code> 属性。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> plain</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;主要按钮&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="细边框幽灵按钮" tabindex="-1">细边框幽灵按钮 <a class="header-anchor" href="#细边框幽灵按钮" aria-label="Permalink to &quot;细边框幽灵按钮&quot;">​</a></h2><p>设置 <code>hairline</code> 属性。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> plain</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> hairline</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;主要按钮&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="按钮大小" tabindex="-1">按钮大小 <a class="header-anchor" href="#按钮大小" aria-label="Permalink to &quot;按钮大小&quot;">​</a></h2><p>设置 <code>size</code> ，支持 &#39;small&#39;、&#39;medium&#39;、&#39;large&#39;，默认为 &#39;medium&#39;。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;small&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;小号按钮&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;medium&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;中号按钮&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;large&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;大号按钮&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="加载中按钮" tabindex="-1">加载中按钮 <a class="header-anchor" href="#加载中按钮" aria-label="Permalink to &quot;加载中按钮&quot;">​</a></h2><p>设置 <code>loading</code> 属性，让按钮处于加载中状态。加载中的按钮是禁止点击的。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> loading</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;加载中&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="文字按钮" tabindex="-1">文字按钮 <a class="header-anchor" href="#文字按钮" aria-label="Permalink to &quot;文字按钮&quot;">​</a></h2><p>将 <code>type</code> 设置为 <code>text</code>。文字按钮不支持其他颜色。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;文字按钮&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="图标按钮" tabindex="-1">图标按钮 <a class="header-anchor" href="#图标按钮" aria-label="Permalink to &quot;图标按钮&quot;">​</a></h2><p>将 <code>type</code> 设置为 <code>icon</code>，同时设置 <code>icon</code> 属性，icon为图标的类名，可以直接使用 <code>Icon 图标</code> 章节中的图标类名。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;icon&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> icon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;picture&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="带图标的按钮" tabindex="-1">带图标的按钮 <a class="header-anchor" href="#带图标的按钮" aria-label="Permalink to &quot;带图标的按钮&quot;">​</a></h2><p>设置 <code>icon</code> 属性，不需要设置 <code>type</code> 为 <code>icon</code>，即可以直接使用带图标的按钮。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> icon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;edit-outline&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>结合<code>classPrefix</code>可以使用自定义图标，参见 <a href="/component/icon.html#自定义图标">Icon 自定义图标</a>。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> classPrefix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;fish&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> icon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;kehuishouwu&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;可回收&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="块状按钮" tabindex="-1">块状按钮 <a class="header-anchor" href="#块状按钮" aria-label="Permalink to &quot;块状按钮&quot;">​</a></h2><p>设置 <code>block</code> 属性。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> block</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;主要按钮&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th><th>最低版本</th></tr></thead><tbody><tr><td>type</td><td>按钮类型</td><td>string</td><td>primary / success / info / warning / error / text / icon</td><td>primary</td><td>-</td></tr><tr><td>round</td><td>圆角按钮</td><td>boolean</td><td>-</td><td>true</td><td>-</td></tr><tr><td>plain</td><td>幽灵按钮</td><td>boolean</td><td>-</td><td>false</td><td>-</td></tr><tr><td>hairline</td><td>是否细边框</td><td>boolean</td><td>-</td><td>false</td><td>-</td></tr><tr><td>loading</td><td>加载中按钮</td><td>boolean</td><td>-</td><td>false</td><td>-</td></tr><tr><td>block</td><td>块状按钮</td><td>boolean</td><td>-</td><td>false</td><td>-</td></tr><tr><td>size</td><td>按钮尺寸</td><td>string</td><td>small / medium / large</td><td>medium</td><td>-</td></tr><tr><td>disabled</td><td>禁用按钮</td><td>boolean</td><td>-</td><td>false</td><td>-</td></tr><tr><td>icon</td><td>图标类名</td><td>string</td><td>-</td><td>-</td><td>-</td></tr><tr><td>loading-color</td><td>加载图标颜色</td><td>string</td><td>-</td><td>-</td><td>-</td></tr><tr><td>open-type</td><td>微信开放能力</td><td>string</td><td>-</td><td>-</td><td>-</td></tr><tr><td>hover-stop-propagation</td><td>指定是否阻止本节点的祖先节点出现点击态</td><td>boolean</td><td>-</td><td>false</td><td>-</td></tr><tr><td>lang</td><td>指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文</td><td>string</td><td>zh_CN / zh_TW</td><td>en</td><td>-</td></tr><tr><td>session-from</td><td>会话来源，open-type=&quot;contact&quot;时有效</td><td>string</td><td>-</td><td>-</td><td>-</td></tr><tr><td>session-message-title</td><td>会话内消息卡片标题，open-type=&quot;contact&quot;时有效</td><td>string</td><td>-</td><td>当前标题</td><td>-</td></tr><tr><td>session-message-path</td><td>会话内消息卡片点击跳转小程序路径，open-type=&quot;contact&quot;时有效</td><td>string</td><td>-</td><td>当前分享路径</td><td>-</td></tr><tr><td>send-message-img</td><td>会话内消息卡片图片，open-type=&quot;contact&quot;时有效</td><td>string</td><td>-</td><td>截图</td><td>-</td></tr><tr><td>app-parameter</td><td>打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效</td><td>string</td><td>-</td><td>-</td><td>-</td></tr><tr><td>show-message-card</td><td>是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示&quot;可能要发送的小程序&quot;提示，用户点击后可以快速发送小程序消息，open-type=&quot;contact&quot;时有效</td><td>boolean</td><td>-</td><td>false</td><td>-</td></tr><tr><td>classPrefix</td><td>类名前缀，用于使用自定义图标，参见<a href="/component/icon.html#自定义图标">icon</a></td><td>string</td><td>-</td><td>&#39;wd-icon&#39;</td><td>0.1.27</td></tr><tr><td>button-id</td><td>按钮的唯一标识，可用于设置隐私同意授权按钮的id</td><td>string</td><td>-</td><td>-</td><td>1.3.6</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><table><thead><tr><th>事件名称</th><th>说明</th><th>参数</th><th>最低版本</th></tr></thead><tbody><tr><td>click</td><td>点击事件</td><td><code>event</code></td><td>-</td></tr><tr><td>getuserinfo</td><td>获取用户信息</td><td><code>detail</code></td><td>-</td></tr><tr><td>contact</td><td>客服消息回调，open-type=&quot;contact&quot;时有效</td><td><code>detail</code></td><td>-</td></tr><tr><td>getphonenumber</td><td>获取用户手机号回调，open-type=getPhoneNumber时有效</td><td><code>detail</code></td><td>-</td></tr><tr><td>error</td><td>当使用开放能力时，发生错误的回调，open-type=launchApp时有效</td><td><code>detail</code></td><td>-</td></tr><tr><td>launchapp</td><td>打开 APP 成功的回调，open-type=launchApp时有效</td><td><code>detail</code></td><td>-</td></tr><tr><td>opensetting</td><td>在打开授权设置页后回调，open-type=openSetting时有效</td><td><code>detail</code></td><td>-</td></tr></tbody></table><h2 id="外部样式类" tabindex="-1">外部样式类 <a class="header-anchor" href="#外部样式类" aria-label="Permalink to &quot;外部样式类&quot;">​</a></h2><table><thead><tr><th>类名</th><th>说明</th><th>最低版本</th></tr></thead><tbody><tr><td>custom-class</td><td>根节点样式</td><td>-</td></tr></tbody></table>`,39);function p(k,o,r,E,g,c){const t=h("frame");return e(),i("div",null,[a(t),l])}const b=s(n,[["render",p]]);export{y as __pageData,b as default};
