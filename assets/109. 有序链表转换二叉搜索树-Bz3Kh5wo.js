import{i as e,o as t,r as n,t as r}from"./app-CGTfufOf.js";var i=JSON.parse(`{"path":"/%E4%B8%AD%E7%AD%89/109.%20%E6%9C%89%E5%BA%8F%E9%93%BE%E8%A1%A8%E8%BD%AC%E6%8D%A2%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91.html","title":"109. 有序链表转换二叉搜索树","lang":"en-US","frontmatter":{"title":"109. 有序链表转换二叉搜索树"},"git":{"updatedTime":1782957907000,"contributors":[{"name":"henri.zhang","username":"","email":"henrizhang@henri.ren","commits":1}],"changelog":[{"hash":"8d79224d4d10074455191a2d84f7bcd470bf1dff","time":1782957907000,"email":"henrizhang@henri.ren","author":"henri.zhang","message":"first"}]},"filePathRelative":"中等/109. 有序链表转换二叉搜索树.md"}`),a={name:`109. 有序链表转换二叉搜索树.md`};function o(r,i,a,o,s,c){return t(),n(`div`,null,[...i[0]||=[e(`<h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述"><span>题目描述</span></a></h2><p>给定一个单链表，其中的元素按升序排序，将其转换为高度平衡的二叉搜索树。</p><p>本题中，一个高度平衡二叉树是指一个二叉树每个节点的左右两个子树的高度差的绝对值不超过 1。</p><p><strong>示例:</strong></p><blockquote><p>给定的有序链表： [-10, -3, 0, 5, 9],</p><p>一个可能的答案是：[0, -3, 9, -10, null, 5], 它可以表示下面这个高度平衡二叉搜索树：</p><pre><code>    0
   / \\
  -3 9
  / /
-10 5
</code></pre></blockquote><p>来源：<a href="https://leetcode-cn.com/problems/convert-sorted-list-to-binary-search-tree" target="_blank" rel="noopener noreferrer">LeetCode</a></p><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路"><span>思路</span></a></h2><p>递归+二叉树。给出的链表已经是有序的了，需要建一棵平衡树，显然需要取中间的节点为根建树，然后左边又是一个有序链表，同样建树作为左子树，右边同理。</p><p>需要注意几点。一是找到中间节点后，要将左边链表切断。二是注意处理边界情况，否则很可能陷入死循环。</p><h2 id="解法" tabindex="-1"><a class="header-anchor" href="#解法"><span>解法</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Definition for singly-linked list.</span>
<span class="line"> * function ListNode(val) <span class="token punctuation">{</span></span>
<span class="line"> *     this.val = val;</span>
<span class="line"> *     this.next = null;</span>
<span class="line"> * <span class="token punctuation">}</span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Definition for a binary tree node.</span>
<span class="line"> * function TreeNode(val) <span class="token punctuation">{</span></span>
<span class="line"> *     this.val = val;</span>
<span class="line"> *     this.left = this.right = null;</span>
<span class="line"> * <span class="token punctuation">}</span></span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">getMiddle</span> <span class="token operator">=</span> <span class="token parameter">head</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> middle <span class="token operator">=</span> head<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">let</span> tail <span class="token operator">=</span> head<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">let</span> preMiddle <span class="token operator">=</span> head<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">while</span> <span class="token punctuation">(</span>tail <span class="token operator">&amp;&amp;</span> tail<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    preMiddle <span class="token operator">=</span> middle<span class="token punctuation">;</span></span>
<span class="line">    middle <span class="token operator">=</span> middle<span class="token punctuation">.</span>next<span class="token punctuation">;</span></span>
<span class="line">    tail <span class="token operator">=</span> tail<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 切断链表</span></span>
<span class="line">  preMiddle<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> middle<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span></span>
<span class="line"> * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">var</span> <span class="token function-variable function">sortedListToBST</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>head<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> middle <span class="token operator">=</span> <span class="token function">getMiddle</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>middle<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">!==</span> middle<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">sortedListToBST</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">sortedListToBST</span><span class="token punctuation">(</span>middle<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> root<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};