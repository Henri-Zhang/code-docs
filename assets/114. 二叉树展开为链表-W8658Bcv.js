import{i as e,o as t,r as n,t as r}from"./app-D0A3AbRw.js";var i=JSON.parse(`{"path":"/%E4%B8%AD%E7%AD%89/114.%20%E4%BA%8C%E5%8F%89%E6%A0%91%E5%B1%95%E5%BC%80%E4%B8%BA%E9%93%BE%E8%A1%A8.html","title":"114. 二叉树展开为链表","lang":"en-US","frontmatter":{"title":"114. 二叉树展开为链表"},"git":{"updatedTime":1782957907000,"contributors":[{"name":"henri.zhang","username":"","email":"henrizhang@henri.ren","commits":1}],"changelog":[{"hash":"8d79224d4d10074455191a2d84f7bcd470bf1dff","time":1782957907000,"email":"henrizhang@henri.ren","author":"henri.zhang","message":"first"}]},"filePathRelative":"中等/114. 二叉树展开为链表.md"}`),a={name:`114. 二叉树展开为链表.md`};function o(r,i,a,o,s,c){return t(),n(`div`,null,[...i[0]||=[e(`<h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述"><span>题目描述</span></a></h2><p>给定一个二叉树，<code>原地</code>将它展开为链表。</p><p>例如，给定二叉树</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">    1</span>
<span class="line">   / \\</span>
<span class="line">  2   5</span>
<span class="line"> / \\   \\</span>
<span class="line">3   4   6</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将其展开为：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">1</span>
<span class="line"> \\</span>
<span class="line">  2</span>
<span class="line">   \\</span>
<span class="line">    3</span>
<span class="line">     \\</span>
<span class="line">      4</span>
<span class="line">       \\</span>
<span class="line">        5</span>
<span class="line">         \\</span>
<span class="line">          6</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路"><span>思路</span></a></h2><p>大体思路就是左子树移到右子树的位置，右子树接在之后。每一棵子树也要同样展开，就是<code>递归</code>。</p><h2 id="解法" tabindex="-1"><a class="header-anchor" href="#解法"><span>解法</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Definition for a binary tree node.</span>
<span class="line"> * function TreeNode(val) <span class="token punctuation">{</span></span>
<span class="line"> *     this.val = val;</span>
<span class="line"> *     this.left = this.right = null;</span>
<span class="line"> * <span class="token punctuation">}</span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span></span>
<span class="line"> * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span> Do not return anything, modify root in-place instead.</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">var</span> <span class="token function-variable function">flatten</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root <span class="token operator">||</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">.</span>left <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> root<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> right <span class="token operator">=</span> root<span class="token punctuation">.</span>right<span class="token punctuation">;</span></span>
<span class="line">  root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">flatten</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">let</span> tail <span class="token operator">=</span> root<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">while</span> <span class="token punctuation">(</span>tail<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    tail <span class="token operator">=</span> tail<span class="token punctuation">.</span>right<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  tail<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">flatten</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> root<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};