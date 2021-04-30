---
date: 2021-3-10
updated: 2021-3-10
---

# LL(1) 文法的实现

文法实现可以分为递归和非递归（表驱动）的实现方法，二者性能表现如下：

|          | 递归的预测分析法 | 表驱动的预测分析法                   |
| -------- | ---------------- | ------------------------------------ |
| 程序规模 | 程序规模较大     | 程序规模较小，需加载分析表（表较小） |
| 直观性   | 较好             | 较差                                 |
| 效率     | 较低             | 分析程序正比于代码长度               |
| 自动生成 | 较难             | 较易                                 |

## 递归下降预测分析程序

## 表驱动的预测分析程序

输入缓冲区和分析栈

### 下推自动机

## 错误处理

### 错误检测

两种情况下我们可以检测到错误：

- 栈顶的**终结符**和当前输入符号不匹配
- 栈顶**非终结符**和当前输入符号在预测分析表对应项中的信息为空

### 错误恢复

#### 恐慌模式

忽略输入中的一些符号，直到遇到同步此法单元（synchronizing token）集合中的某个词法单元。

## 实现步骤

1. 构造文法
2. 改造文法：消除二义性、消除左递归、消除回溯
3. 求每个变量的FIRST集和FOLLOW集，从而求出每个候选式的SELECT集
4. 检查文法是否为LL(1)文法。若是，则构造预测分析表
5. 实现算法
   - 对于递归的预测分析，根据预测分析表为每一个运算符编写一个过程
   - 对于表驱动预测分析，实现表驱动的分析算法