---
title: BootstrapValidator
date: 2020-10-25 21:08:18
categories: 前端
---

​	在_isExcluded()方法里，当元素具有属性data-bv-excluded="false"时，可不排除此字段。

​	这种情况适用于某个被隐藏的字段，如使用了chosen组件，实际的选择框会被隐藏，而默认的options.excluded为[":disabled", ":hidden", ":not(:visible)"]，会跳过该字段的校验，为了不影响其他隐藏的字段，增加该属性，在校验时不排除此字段即可。