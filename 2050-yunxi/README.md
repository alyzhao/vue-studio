# notes

## vue mixin, component, use 的区别

balabala

## Array.slice

`Array.prototype.slice(begin, end)` 返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。原始数组不会被修改。

slice 不修改原数组，只会返回一个浅复制了原数组中的元素的一个新数组。原数组的元素会按照下述规则拷贝：

- 如果该元素是个对象引用 （不是实际的对象），slice 会拷贝这个对象引用到新的数组里。 两个对象引用都引用了同一个对象。 如果被引用的对象发生改变，则新的和原来的数组中的这个元素也会发生改变。
- 对于字符串、数字及布尔值来说（不是 String、Number 或者 Boolean 对象），slice 会拷贝这些值到新的数组里。 在别的数组里修改这些字符串或数字或是布尔值，将不会影响另一个数组

## webpack-dev-server 供内网访问

在 `dev sever` 的启动项上加上 `--host 0.0.0.0`

## swiper 的常用配置

balabala

## axios 挂载到 Vue 全局

`Vue.prototype.axios = axios`

## css3 中 display: block 无效

使用 `visibility: hidden` 影藏, 使用 `visibility: visible` 显示

## visibility, display 的区别

入口文件中写入 `Vue.prototype.axios = axios`

# Schedule

1. vuex 选择语言