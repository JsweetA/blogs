---
date: 2023-11-05
tag:
  - 面试
---

# 刷题笔记

### 前言

该文章是我个人在平台上进行刷题得到的一些感悟，针对于大佬文章进对自己知识点的一个补充。有兴趣的可以看看。若有问题，欢迎大家指点，我只是小菜鸡。

> 文章原链接:[最新的前端大厂面经（详解答案） - 掘金 (juejin.cn)](https://juejin.cn/post/7004638318843412493)
>
> 个人博客:[Jsweet 的博客 (jsweeta.github.io)](https://jsweeta.github.io/blogs/)

### 1.URL 的输入到浏览器解析的一系列事件

- 查缓存
- 域名解析
- tcp 连接
- http 连接
- 构建渲染树
- 渲染
- 关闭 tcp

> 详细请看：[史上最详细的经典面试题 从输入 URL 到看到页面发生了什么？ - 掘金 (juejin.cn)](https://juejin.cn/post/6844903832435032072)

##### 补充一：强制缓存和协商缓存

缓存分为：强制缓存（200）和协商缓存（304）

- 强制缓存：通过判断一些字段进行验证缓存是否失效，失效则**重新请求并缓存**，反之直接读取缓存信息。
  - Expires：有效期
  - Cache-Control：public,private,no-catch,no-store,max-age（有效期秒数）

> 那么就可能会出现，缓存本身其实是没失效，但是假如服务器自己更改了。那么就可能读取不到最新数据

- 协商缓存：顾名思义，客户端与服务端进行协商。**客户端**进行请求时，先发个请求**询问**服务器数据是否有变化。有则重新请求，无则读取缓存。
  - If-Modified-Since：用修改时间进行比较
  - If-None-Match：用哈希值进行比较（`Etag`）

**注意**：强制缓存是由服务器进行发起的，协商缓存是由客户端进行发起的。

##### 补充二：预检请求和询问请求

先说顺序：先预检请求 -> 询问请求（假如有的话） -> 真实请求

同理，三个请求就会有三个响应，所以会有**六个**`TCP`数据包

- 预检请求：针对于**非简单请求**的一个安全操作，是一个**浏览器的行为**。也就是所访问的服务器端，允不允许跨域。
- 询问请求：这是用于针对一些拥有**大数据包**的请求，**避免浪费资源**的一次询问操作，第一次询问是不带请求体，询问后如果允许，会返回`100 Continue`的响应码。客户端收到后，再进行发送实际的请求。

**注意**：预检请求时浏览器行为，也就是说，如果可以脱离浏览器环境，那么就不会有这个操作。而询问请求是一个优化策略，防止一些没必要的流量浪费。

> [跨域资源共享 CORS 详解 - 阮一峰的网络日志 (ruanyifeng.com)](https://www.ruanyifeng.com/blog/2016/04/cors.html)

**补充三：回流和重绘**

回流一定会引发重绘，但是重绘不会引发回流

- 回流：也叫做重新布局，一系列可能会导致盒子**布局**改变的都会触发回流。比如宽高，位置，内外边距等等。
- 重绘：重新填色，他与盒子的样式有关系，这里指的样式是指颜色那种东西，不会造成布局改变的

如何避免？

对于`css3`我并不是很熟，所以也不敢多说什么，大致优化策略是这样：

回流和重绘会导致性能下降的原因可以归咎于他会**抢占**浏览器主线程的运行时机，从而导致页面看起来卡顿。解决方法就是避免抢占，比如开启一些`GPU`加速之类的东西。（-.-）这些我不是很懂。后期补上。

> 因为这里涉及到了关于浏览器针对渲染分层的一些知识，什么渲染层啊，合成层啊啥啥啥的。

### 2.事件代理

由于每个**事件处理器**都会占用一定的内存，对于一些那种**列表类型**，但是都需要进行事件响应的，就可以进行一个事件代理，把 n 个消耗转换为 1 个消耗。

> 除了事件代理，还可以利用**防抖**和**节流**进行优化，后续补上。

### 3.关于 Object.create

> 以一个现有对象作为原型，创建一个新对象。 --MDN 官方解释

以一个现有对象为原型，创建一个新对象。那么可以利用它实现**寄生组合继承**,**new**

- **new**

```javascript
function myNew(fn, ...rest) {
	// 以fn的原型为基础，进行创建一个新的对象：之所以这么用，是考虑到当前这个fn可能继承了其他的。所以需要以他的原型为原型，如果不考虑继承，其实普通的obj也可以
	const obj = Object(fn.prototype);
	// 利用this指向改变的原理，通过call或者bind或者apply进行实例化构造
	const res = fn.call(obj, ...rest);
	// new 如果有返回值会以返回值为实例对象
	typeof res === "object" || typeof res === "function" ? res : obj;
}
```

**补充**：关于`this`指向的改变：xxx.fn(),`this`就指向 xxx，包括`call`，`bind`，`apply`都是进行一次包装使之当前的`fn`挂载到**需要被指向**的对象上，然后进行一次函数调用；

- **寄生组合继承**

第一步：子类负责调用父类的构造方法（也就是`Parent.call(this)`）

第二步：将父类的原型赋予到子类的原型上去

第三步：更新子类构造函数的指向

```javascript
function Parent(name) {
	this.name = name;
	this.say = () => {
		console.log(111);
	};
}
Parent.prototype.play = () => {
	console.log(222);
};
function Children(name) {
	// 调用父类构造方法：本质是this指向改变从而进行值的赋予
	Parent.call(this);
	this.name = name;
}

// 改变原型的指向
Children.prototype = Object.create(Parent.prototype);
// 改变构造器的指向：构造器本身是指向自己的，但是由于原型改变了，所以需要更新一下
Children.prototype.constructor = Children;
```

> 这里除了牵扯出这些知识，其实还可以引出**原型链**，**箭头函数和普通函数的区别**，**以及其他几种继承的缺点**

### 4.Vue nextTick 原理

简而言之，优先想办法把需要执行的事件插入到**微任务队列**，其次才是其他任务队列。

- **Promise**:`Promise.then`可以直接将事件推入微任务队列尾部。
- **MutationObserver**:它可以监听 dom 的变化，然后执行对应回调。
- **setImmediate**和**setTimeout**:利用浏览器事件循环进行塞入回调。

> 这次可接着询问：**浏览器事件循环**,**观察者模式/发布订阅模式**

---

# 手写题

### 1. 对象扁平化

思路:针对对象和数组分别进行判断递归进行组合，利用`Object.keys`

### 2. 判断括号字符串是否有效

题目链接：

思路:利用栈进行一个回滚操作进行判断

```javascript
var isValid = function (s) {
	// 构造哈希
	let state = {
		")": "(",
		"]": "[",
		"}": "{",
	};
	let stack = [];
	for (let t of s) {
		// 如果是左则直接进入栈
		if (t === "(" || t === "[" || t === "{") {
			stack.push(t);
		} else {
			// 否则弹出一个进行匹配，匹配失败直接false
			if (stack.pop() === state[t]) {
				continue;
			} else {
				return false;
			}
		}
	}
	if (stack.length === 0) return true;
	else return false;
};
```

### 3. 查找数组公共前缀

题目链接：[14. 最长公共前缀 - 力扣（LeetCode）](https://leetcode.cn/problems/longest-common-prefix/)

思路:该题求的只是公共前缀，可以利用`startsWith`进行暴力求解

```javascript
var longestCommonPrefix = function (strs) {
	let res = "";
	for (let i of strs[0]) {
		res += i;
		for (let str of strs) {
			if (!str.startsWith(res)) {
				return res?.substring(0, res.length - 1);
			}
		}
	}
	return strs[0];
};
```

### 4. 字符串最长的不重复子串

题目链接：[3. 无重复字符的最长子串 - 力扣（LeetCode）](https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/)

思路:滑动窗口，left 和 right 两个指针，向前前进，如果有相等的了，`left`就往前，反之`right`往后。然后记录最大值

```javascript
var lengthOfLongestSubstring = function (s) {
	// 左右指针和结果
	let left = 0,
		right = 0,
		res = 0;
	while (right < s.length) {
		// 初始值
		if (!right) right++;
		else {
			// 判断右边的是否在队列
			if (s.substring(left, right).includes(s[right])) {
				left++;
			} else {
				right++;
			}
		}
		res = res > right - left ? res : right - left;
	}
	return res;
};
```

### 5. 数组中第一个没出现的最小正整数

题目链接：[41. 缺失的第一个正数 - 力扣（LeetCode）](https://leetcode.cn/problems/first-missing-positive/)

思路 1：利用**哈希**进行遍历搜索，从 0-n

```javascript
var firstMissingPositive = function (nums) {
	const set = {};
	// 哈希记录
	for (let i of nums) set[i] = 1;
	// 假设都有，那么答案必是n + 1
	for (let i = 1; i <= nums.length + 1; i++) {
		if (!set[i]) return i;
	}
};
```

思路 2：借助假设都有，答案必是`n + 1`的条件，将数组中的正整数放置自己对应的位置，从而得到一个有序数组`[1,2,3,4]`,然后判断索引与值是否相等

### 6. 怎么在制定数据源里面生成一个长度为 n 的不重复随机数组

思路 1：哈希判断是否被用过，用过则接着选

思路 2：用一个删一个，保证数据源都是没用过的

思路 3：一样是用一个删一个，但是这个删是类似于`冒泡算法`一样，先取一个出来，然后逐步递减随机区间，并且依次将取出来的值替换掉（跟思路 2 一样），得以保证数据源都是没取过的。
