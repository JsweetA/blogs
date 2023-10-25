import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as l,a as s,b as n,d as e,e as a}from"./app-4f88bd9e.js";const i={},r=a('<h3 id="编译器的流程以及parser的实现" tabindex="-1"><a class="header-anchor" href="#编译器的流程以及parser的实现" aria-hidden="true">#</a> 编译器的流程以及parser的实现</h3><p>编译一般的步骤由词法分析，语法分析，语义分析，中间代码生成，优化，目标代码生成等步骤。<br><img src="https://cdn.nlark.com/yuque/0/2023/png/27119990/1682166533169-9f54f5dc-23a5-4e6c-83ad-d1d6f29c3bda.png#averageHue=%23f0f0f0&amp;clientId=u9e1df5ee-a33e-4&amp;from=paste&amp;height=152&amp;id=u0cddac23&amp;originHeight=152&amp;originWidth=764&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;size=21518&amp;status=done&amp;style=none&amp;taskId=ud4459731-51a3-47ab-9796-f997cfa89b9&amp;title=&amp;width=764" alt="image.png" loading="lazy"></p><blockquote><p>可以看到，整个编译过程分为编译前端和编译后端。编译前端包含词法分析、语法分析和语义分析，它通常与目标平台无关，仅负责分析源代码。编译后端则通常与目标平台有关，编译后端涉及中间代码生成和优化以及目标代码生成。但是，编译后端并不一定会包含中间代码生成和优化这两个环节，这取决于具体的场景和实现。中间代码生成和优化这两个环节有时也叫“中端”。</p></blockquote><hr><p>对于<code>vue</code>来说，编译器的功能就是将模板语法编译成渲染器能识别的<code>render()</code>。但是这中间这个过程需要先将模板语法编译成模板AST，再将模板AST转换成JSAST，最后通过JSAST生成<code>render()</code>。<br><img src="https://cdn.nlark.com/yuque/0/2023/png/27119990/1682166877039-8dbcb3ee-db32-43fb-9f4d-94dd55c47136.png#averageHue=%23ebebeb&amp;clientId=u9e1df5ee-a33e-4&amp;from=paste&amp;height=166&amp;id=u23a0595e&amp;originHeight=166&amp;originWidth=752&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;size=21848&amp;status=done&amp;style=none&amp;taskId=ud6fd5607-8cc1-4c71-89fb-e58bc76f893&amp;title=&amp;width=752" alt="image.png" loading="lazy"></p>',5),u={href:"https://baike.baidu.com/item/%E9%A2%86%E5%9F%9F%E4%B8%93%E7%94%A8%E8%AF%AD%E8%A8%80/61027566?fromModule=lemma-qiyi_sense-lemma&fromtitle=DSL&fromid=60963557",target:"_blank",rel:"noopener noreferrer"},k=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 编译前</span>
<span class="token number">01</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
<span class="token number">02</span>   <span class="token operator">&lt;</span>h1 v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;ok&quot;</span><span class="token operator">&gt;</span>Vue Template<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
<span class="token number">03</span> <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token comment">// 通过parser编译后</span>
<span class="token number">01</span> <span class="token keyword">const</span> ast <span class="token operator">=</span> <span class="token punctuation">{</span>
<span class="token number">02</span>   <span class="token comment">// 逻辑根节点</span>
<span class="token number">03</span>   <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;Root&#39;</span><span class="token punctuation">,</span>
<span class="token number">04</span>   <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
<span class="token number">05</span>     <span class="token comment">// div 标签节点</span>
<span class="token number">06</span>     <span class="token punctuation">{</span>
<span class="token number">07</span>       <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;Element&#39;</span><span class="token punctuation">,</span>
<span class="token number">08</span>       <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span>
<span class="token number">09</span>       <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
<span class="token number">10</span>         <span class="token comment">// h1 标签节点</span>
<span class="token number">11</span>         <span class="token punctuation">{</span>
<span class="token number">12</span>           <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;Element&#39;</span><span class="token punctuation">,</span>
<span class="token number">13</span>           <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">&#39;h1&#39;</span><span class="token punctuation">,</span>
<span class="token number">14</span>           <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span>
<span class="token number">15</span>             <span class="token comment">// v-if 指令节点</span>
<span class="token number">16</span>             <span class="token punctuation">{</span>
<span class="token number">17</span>               <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;Directive&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 类型为 Directive 代表指令</span>
<span class="token number">18</span>               <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;if&#39;</span>，       <span class="token comment">// 指令名称为 if，不带有前缀 v-</span>
<span class="token number">19</span>               <span class="token literal-property property">exp</span><span class="token operator">:</span> <span class="token punctuation">{</span>
<span class="token number">20</span>                 <span class="token comment">// 表达式节点</span>
<span class="token number">21</span>                 <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;Expression&#39;</span><span class="token punctuation">,</span>
<span class="token number">22</span>                 <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&#39;ok&#39;</span>
<span class="token number">23</span>               <span class="token punctuation">}</span>
<span class="token number">24</span>             <span class="token punctuation">}</span>
<span class="token number">25</span>           <span class="token punctuation">]</span>
<span class="token number">26</span>         <span class="token punctuation">}</span>
<span class="token number">27</span>       <span class="token punctuation">]</span>
<span class="token number">28</span>     <span class="token punctuation">}</span>
<span class="token number">29</span>   <span class="token punctuation">]</span>
<span class="token number">30</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,2),m=s("code",null,"parser",-1),d={href:"https://baike.baidu.com/item/%E6%9C%89%E9%99%90%E7%8A%B6%E6%80%81%E8%87%AA%E5%8A%A8%E6%9C%BA/2850046?fr=aladdin",target:"_blank",rel:"noopener noreferrer"},b=s("code",null,"<",-1),v=s("code",null,">",-1),h=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">01</span> <span class="token comment">// 定义状态机的状态</span>
<span class="token number">02</span> <span class="token keyword">const</span> State <span class="token operator">=</span> <span class="token punctuation">{</span>
<span class="token number">03</span>   <span class="token literal-property property">initial</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>    <span class="token comment">// 初始状态</span>
<span class="token number">04</span>   <span class="token literal-property property">tagOpen</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>    <span class="token comment">// 标签开始状态</span>
<span class="token number">05</span>   <span class="token literal-property property">tagName</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>    <span class="token comment">// 标签名称状态</span>
<span class="token number">06</span>   <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>       <span class="token comment">// 文本状态</span>
<span class="token number">07</span>   <span class="token literal-property property">tagEnd</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>     <span class="token comment">// 结束标签状态</span>
<span class="token number">08</span>   <span class="token literal-property property">tagEndName</span><span class="token operator">:</span> <span class="token number">6</span>  <span class="token comment">// 结束标签名称状态</span>
<span class="token number">09</span> <span class="token punctuation">}</span>
<span class="token number">10</span> <span class="token comment">// 一个辅助函数，用于判断是否是字母</span>
<span class="token number">11</span> <span class="token keyword">function</span> <span class="token function">isAlpha</span><span class="token punctuation">(</span><span class="token parameter">char</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">12</span>   <span class="token keyword">return</span> char <span class="token operator">&gt;=</span> <span class="token string">&#39;a&#39;</span> <span class="token operator">&amp;&amp;</span> char <span class="token operator">&lt;=</span> <span class="token string">&#39;z&#39;</span> <span class="token operator">||</span> char <span class="token operator">&gt;=</span> <span class="token string">&#39;A&#39;</span> <span class="token operator">&amp;&amp;</span> char <span class="token operator">&lt;=</span> <span class="token string">&#39;Z&#39;</span>
<span class="token number">13</span> <span class="token punctuation">}</span>
<span class="token number">14</span>
<span class="token number">15</span> <span class="token comment">// 接收模板字符串作为参数，并将模板切割为 Token 返回</span>
<span class="token number">16</span> <span class="token keyword">function</span> <span class="token function">tokenize</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">17</span>   <span class="token comment">// 状态机的当前状态：初始状态</span>
<span class="token number">18</span>   <span class="token keyword">let</span> currentState <span class="token operator">=</span> State<span class="token punctuation">.</span>initial
<span class="token number">19</span>   <span class="token comment">// 用于缓存字符</span>
<span class="token number">20</span>   <span class="token keyword">const</span> chars <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token number">21</span>   <span class="token comment">// 生成的 Token 会存储到 tokens 数组中，并作为函数的返回值返回</span>
<span class="token number">22</span>   <span class="token keyword">const</span> tokens <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token number">23</span>   <span class="token comment">// 使用 while 循环开启自动机，只要模板字符串没有被消费尽，自动机就会一直运行</span>
<span class="token number">24</span>   <span class="token keyword">while</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">25</span>     <span class="token comment">// 查看第一个字符，注意，这里只是查看，没有消费该字符</span>
<span class="token number">26</span>     <span class="token keyword">const</span> char <span class="token operator">=</span> str<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token number">27</span>     <span class="token comment">// switch 语句匹配当前状态</span>
<span class="token number">28</span>     <span class="token keyword">switch</span> <span class="token punctuation">(</span>currentState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">29</span>       <span class="token comment">// 状态机当前处于初始状态</span>
<span class="token number">30</span>       <span class="token keyword">case</span> State<span class="token punctuation">.</span>initial<span class="token operator">:</span>
<span class="token number">31</span>         <span class="token comment">// 遇到字符 &lt;</span>
<span class="token number">32</span>         <span class="token keyword">if</span> <span class="token punctuation">(</span>char <span class="token operator">===</span> <span class="token string">&#39;&lt;&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">33</span>           <span class="token comment">// 1. 状态机切换到标签开始状态</span>
<span class="token number">34</span>           currentState <span class="token operator">=</span> State<span class="token punctuation">.</span>tagOpen
<span class="token number">35</span>           <span class="token comment">// 2. 消费字符 &lt;</span>
<span class="token number">36</span>           str <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token number">37</span>         <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isAlpha</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">38</span>           <span class="token comment">// 1. 遇到字母，切换到文本状态</span>
<span class="token number">39</span>           currentState <span class="token operator">=</span> State<span class="token punctuation">.</span>text
<span class="token number">40</span>           <span class="token comment">// 2. 将当前字母缓存到 chars 数组</span>
<span class="token number">41</span>           chars<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span>
<span class="token number">42</span>           <span class="token comment">// 3. 消费当前字符</span>
<span class="token number">43</span>           str <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token number">44</span>         <span class="token punctuation">}</span>
<span class="token number">45</span>         <span class="token keyword">break</span>
<span class="token number">46</span>       <span class="token comment">// 状态机当前处于标签开始状态</span>
<span class="token number">47</span>       <span class="token keyword">case</span> State<span class="token punctuation">.</span>tagOpen<span class="token operator">:</span>
<span class="token number">48</span>         <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isAlpha</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">49</span>           <span class="token comment">// 1. 遇到字母，切换到标签名称状态</span>
<span class="token number">50</span>           currentState <span class="token operator">=</span> State<span class="token punctuation">.</span>tagName
<span class="token number">51</span>           <span class="token comment">// 2. 将当前字符缓存到 chars 数组</span>
<span class="token number">52</span>           chars<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span>
<span class="token number">53</span>           <span class="token comment">// 3. 消费当前字符</span>
<span class="token number">54</span>           str <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token number">55</span>         <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>char <span class="token operator">===</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">56</span>           <span class="token comment">// 1. 遇到字符 /，切换到结束标签状态</span>
<span class="token number">57</span>           currentState <span class="token operator">=</span> State<span class="token punctuation">.</span>tagEnd
<span class="token number">58</span>           <span class="token comment">// 2. 消费字符 /</span>
<span class="token number">59</span>           str <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token number">60</span>         <span class="token punctuation">}</span>
<span class="token number">61</span>         <span class="token keyword">break</span>
<span class="token number">62</span>       <span class="token comment">// 状态机当前处于标签名称状态</span>
<span class="token number">63</span>       <span class="token keyword">case</span> State<span class="token punctuation">.</span>tagName<span class="token operator">:</span>
<span class="token number">64</span>         <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isAlpha</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">65</span>           <span class="token comment">// 1. 遇到字母，由于当前处于标签名称状态，所以不需要切换状态，</span>
<span class="token number">66</span>           <span class="token comment">// 但需要将当前字符缓存到 chars 数组</span>
<span class="token number">67</span>           chars<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span>
<span class="token number">68</span>           <span class="token comment">// 2. 消费当前字符</span>
<span class="token number">69</span>           str <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token number">70</span>         <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>char <span class="token operator">===</span> <span class="token string">&#39;&gt;&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">71</span>           <span class="token comment">// 1.遇到字符 &gt;，切换到初始状态</span>
<span class="token number">72</span>           currentState <span class="token operator">=</span> State<span class="token punctuation">.</span>initial
<span class="token number">73</span>           <span class="token comment">// 2. 同时创建一个标签 Token，并添加到 tokens 数组中</span>
<span class="token number">74</span>           <span class="token comment">// 注意，此时 chars 数组中缓存的字符就是标签名称</span>
<span class="token number">75</span>           tokens<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token number">76</span>             <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;tag&#39;</span><span class="token punctuation">,</span>
<span class="token number">77</span>             <span class="token literal-property property">name</span><span class="token operator">:</span> chars<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
<span class="token number">78</span>           <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token number">79</span>           <span class="token comment">// 3. chars 数组的内容已经被消费，清空它</span>
<span class="token number">80</span>           chars<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span>
<span class="token number">81</span>           <span class="token comment">// 4. 同时消费当前字符 &gt;</span>
<span class="token number">82</span>           str <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token number">83</span>         <span class="token punctuation">}</span>
<span class="token number">84</span>         <span class="token keyword">break</span>
<span class="token number">85</span>       <span class="token comment">// 状态机当前处于文本状态</span>
<span class="token number">86</span>       <span class="token keyword">case</span> State<span class="token punctuation">.</span>text<span class="token operator">:</span>
<span class="token number">87</span>         <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isAlpha</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">88</span>           <span class="token comment">// 1. 遇到字母，保持状态不变，但应该将当前字符缓存到 chars 数组</span>
<span class="token number">89</span>           chars<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span>
<span class="token number">90</span>           <span class="token comment">// 2. 消费当前字符</span>
<span class="token number">91</span>           str <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token number">92</span>         <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>char <span class="token operator">===</span> <span class="token string">&#39;&lt;&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">93</span>           <span class="token comment">// 1. 遇到字符 &lt;，切换到标签开始状态</span>
<span class="token number">94</span>           currentState <span class="token operator">=</span> State<span class="token punctuation">.</span>tagOpen
<span class="token number">95</span>           <span class="token comment">// 2. 从 文本状态 --&gt; 标签开始状态，此时应该创建文本 Token，并添加到 tokens 数组</span>
<span class="token number">96</span>           <span class="token comment">// 注意，此时 chars 数组中的字符就是文本内容</span>
<span class="token number">97</span>           tokens<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token number">98</span>             <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;text&#39;</span><span class="token punctuation">,</span>
<span class="token number">99</span>             <span class="token literal-property property">content</span><span class="token operator">:</span> chars<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
<span class="token number">100</span>           <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token number">101</span>           <span class="token comment">// 3. chars 数组的内容已经被消费，清空它</span>
<span class="token number">102</span>           chars<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span>
<span class="token number">103</span>           <span class="token comment">// 4. 消费当前字符</span>
<span class="token number">104</span>           str <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token number">105</span>         <span class="token punctuation">}</span>
<span class="token number">106</span>         <span class="token keyword">break</span>
<span class="token number">107</span>       <span class="token comment">// 状态机当前处于标签结束状态</span>
<span class="token number">108</span>       <span class="token keyword">case</span> State<span class="token punctuation">.</span>tagEnd<span class="token operator">:</span>
<span class="token number">109</span>         <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isAlpha</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">110</span>           <span class="token comment">// 1. 遇到字母，切换到结束标签名称状态</span>
<span class="token number">111</span>           currentState <span class="token operator">=</span> State<span class="token punctuation">.</span>tagEndName
<span class="token number">112</span>           <span class="token comment">// 2. 将当前字符缓存到 chars 数组</span>
<span class="token number">113</span>           chars<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span>
<span class="token number">114</span>           <span class="token comment">// 3. 消费当前字符</span>
<span class="token number">115</span>           str <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token number">116</span>         <span class="token punctuation">}</span>
<span class="token number">117</span>         <span class="token keyword">break</span>
<span class="token number">118</span>       <span class="token comment">// 状态机当前处于结束标签名称状态</span>
<span class="token number">119</span>       <span class="token keyword">case</span> State<span class="token punctuation">.</span>tagEndName<span class="token operator">:</span>
<span class="token number">120</span>         <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isAlpha</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">121</span>           <span class="token comment">// 1. 遇到字母，不需要切换状态，但需要将当前字符缓存到 chars 数组</span>
<span class="token number">122</span>           chars<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span>
<span class="token number">123</span>           <span class="token comment">// 2. 消费当前字符</span>
<span class="token number">124</span>           str <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token number">125</span>         <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>char <span class="token operator">===</span> <span class="token string">&#39;&gt;&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">126</span>           <span class="token comment">// 1. 遇到字符 &gt;，切换到初始状态</span>
<span class="token number">127</span>           currentState <span class="token operator">=</span> State<span class="token punctuation">.</span>initial
<span class="token number">128</span>           <span class="token comment">// 2. 从 结束标签名称状态 --&gt; 初始状态，应该保存结束标签名称 Token</span>
<span class="token number">129</span>           <span class="token comment">// 注意，此时 chars 数组中缓存的内容就是标签名称</span>
<span class="token number">130</span>           tokens<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token number">131</span>             <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;tagEnd&#39;</span><span class="token punctuation">,</span>
<span class="token number">132</span>             <span class="token literal-property property">name</span><span class="token operator">:</span> chars<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
<span class="token number">133</span>           <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token number">134</span>           <span class="token comment">// 3. chars 数组的内容已经被消费，清空它</span>
<span class="token number">135</span>           chars<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span>
<span class="token number">136</span>           <span class="token comment">// 4. 消费当前字符</span>
<span class="token number">137</span>           str <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token number">138</span>         <span class="token punctuation">}</span>
<span class="token number">139</span>         <span class="token keyword">break</span>
<span class="token number">140</span>     <span class="token punctuation">}</span>
<span class="token number">141</span>   <span class="token punctuation">}</span>
<span class="token number">142</span>
<span class="token number">143</span>   <span class="token comment">// 最后，返回 tokens</span>
<span class="token number">144</span>   <span class="token keyword">return</span> tokens
<span class="token number">145</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,2);function y(g,f){const p=o("ExternalLinkIcon");return c(),l("div",null,[r,s("blockquote",null,[s("p",null,[n("对于编译来说，vue编译出来的这种语言叫做"),s("a",u,[n("DSL（领域特定语言）"),e(p)]),n("，也就是针对某一种特定环境而产生的语言，类似的有HTML这些。")])]),k,s("p",null,[n("上面的代码片段就是"),m,n("所需要实现的功能。这个函数利用的算法是"),s("a",d,[n("有限状态自动机"),e(p)]),n("。它是通过逐步遍历模板字符串，然后进行对状态的逐步改变。比如当读取到"),b,n("时，说明状态是开启了一个新标签，直到遇见"),v,n("之前，这之间所遇到的所有字符串都将成为标签名，所以通过这种思想，可以把有限的状态列出来，读取时进行不同状态的转换，进行收集不同的数据。")]),h])}const S=t(i,[["render",y],["__file","模板编译器.html.vue"]]);export{S as default};
