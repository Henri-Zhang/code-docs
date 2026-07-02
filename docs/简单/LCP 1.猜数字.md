---
title: LCP 1.猜数字
---

## 题目描述

小 A 和 小 B 在玩猜数字。小 B 每次从 1, 2, 3 中随机选择一个，小 A 每次也从 1, 2, 3 中选择一个猜。他们一共进行三次这个游戏，请返回 小 A 猜对了几次？

输入的 guess 数组为 小 A 每次的猜测，answer 数组为 小 B 每次的选择。guess 和 answer 的长度都等于 3。

**示例 1：**

> 输入：guess = [1,2,3], answer = [1,2,3]  
> 输出：3  
> 解释：小 A 每次都猜对了。

**示例 2：**

> 输入：guess = [2,2,3], answer = [3,2,1]  
> 输出：1  
> 解释：小 A 只猜对了第二次。

限制：

guess 的长度 = 3  
answer 的长度 = 3  
guess 的元素取值为 {1, 2, 3} 之一。  
answer 的元素取值为 {1, 2, 3} 之一。

来源：[LeetCode](https://leetcode-cn.com/problems/guess-numbers)

## 思路

仔细读完题目，就能明白。这不就是两数组对应元素比较小，算下最后相等的数目嘛。

## 解法

```javascript
/**
 * @param {number[]} guess
 * @param {number[]} answer
 * @return {number}
 */
var game = function(guess, answer) {
  return (
    (guess[0] === answer[0]) +
    (guess[1] === answer[1]) +
    (guess[2] === answer[2])
  );
};
```
