(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{186:function(e,a,t){e.exports=t.p+"assets/img/aoneFlow1.798cb282.png"},187:function(e,a,t){e.exports=t.p+"assets/img/aoneFlow2.ad6e593d.png"},188:function(e,a,t){e.exports=t.p+"assets/img/aoneFlow3.43ea41b9.png"},208:function(e,a,t){"use strict";t.r(a);var r=t(0),s=Object(r.a)({},function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"step-aoneflow"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#step-aoneflow","aria-hidden":"true"}},[e._v("#")]),e._v(" Step AoneFlow")]),e._v(" "),r("h2",{attrs:{id:"项目阶段："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#项目阶段：","aria-hidden":"true"}},[e._v("#")]),e._v(" 项目阶段：")]),e._v(" "),r("pre",[r("code",[e._v("1. 开发阶段\n2. 测试阶段\n3. 发布阶段\n4. 线上bug阶段\n")])]),e._v(" "),r("h2",{attrs:{id:"基础分支："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基础分支：","aria-hidden":"true"}},[e._v("#")]),e._v(" 基础分支：")]),e._v(" "),r("pre",[r("code",[e._v("Master\nfeature*（多个）\nhotfix\nrelease/* (比如release/test。当然也可以直接使用test分支，具体看情况)\n")])]),e._v(" "),r("h2",{attrs:{id:"aone流程-改造-："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#aone流程-改造-：","aria-hidden":"true"}},[e._v("#")]),e._v(" aone流程(改造)：")]),e._v(" "),r("pre",[r("code",[e._v("1. 项目迭代开始时由组长从Master拉取新的feature分支，进入需求开发。\n2. 开发完成，使用feature进行自测，并发布到开发环境进行联调。\n3. 自测联调完成进入测试环节，从主干(master)上拉出一条新分支(release/test)，将所有本次要集成或发布的特性分支(featrue)依次合并过去，从而得到发布分支。(可以理解为，模拟主干的一次合并)\n4. 测试过程如果存在bug，需在原来的feature分支中进行修改，测试通过后再合并到(release/test)分支中，再进行测试，不允许在release上修改代码。\n5. 测试完成后将(release/*)合并到master，进行发布，由组长或指定小组长完成。\n6. 发版完成，验证通过，打tag，并通知其他正在(feature)开发的同事，拉取最新的(master)到自己(feature)开发分支中，保证feature代码始终是基于(master)最新代码开发。\n7. 如果遇到生产BUG，需要从(master)拉取(hotfix)进行修正，测试通过后合并到(master)；如有进行中的(feature)，也需要将最新代码合到(feature)中。\n")])]),e._v(" "),r("h2",{attrs:{id:"注意点："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#注意点：","aria-hidden":"true"}},[e._v("#")]),e._v(" 注意点：")]),e._v(" "),r("pre",[r("code",[e._v("1. (master)权限只有组长有\n2. 不可在(master)进行代码修改，所有修改都需要通过(feature)和(hotfix)来完成\n3. (feature)从(master)拉取\n4. (release/*)测试完成没有问题才能合并到(master)\n5. (master)上生产后，打tag(特性+日期)\n6. 同一个仓库代码上线后，如果存在进行中的(feature)特性，需要通知各负责人，更新代码。\n")])]),e._v(" "),r("h2",{attrs:{id:"分支命名方式："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#分支命名方式：","aria-hidden":"true"}},[e._v("#")]),e._v(" 分支命名方式：")]),e._v(" "),r("pre",[r("code",[e._v("feature/v1.0.0/需求特性\nhotfix/v1.0.0/需求特性+bug简述\ntag/需求特性/日期\n")])]),e._v(" "),r("h2",{attrs:{id:"流程图："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#流程图：","aria-hidden":"true"}},[e._v("#")]),e._v(" 流程图：")]),e._v(" "),r("h3",{attrs:{id:"规则一，开始工作前，从主干创建特性分支。"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#规则一，开始工作前，从主干创建特性分支。","aria-hidden":"true"}},[e._v("#")]),e._v(" 规则一，开始工作前，从主干创建特性分支。")]),e._v(" "),r("p",[r("img",{attrs:{src:t(186),alt:"1160f15dd7b077815c012db111bd5789ec15343b"}})]),e._v(" "),r("h3",{attrs:{id:"规则二，通过合并特性分支，形成发布分支。"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#规则二，通过合并特性分支，形成发布分支。","aria-hidden":"true"}},[e._v("#")]),e._v(" 规则二，通过合并特性分支，形成发布分支。")]),e._v(" "),r("p",[r("img",{attrs:{src:t(187),alt:"c99a7230062e4406a0cbee93f2e3e04f82f4091e"}})]),e._v(" "),r("h3",{attrs:{id:"规则三，发布到线上正式环境后，合并相应的发布分支到主干，在主干添加标签，同时删除该发布分支关联的特性分支。"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#规则三，发布到线上正式环境后，合并相应的发布分支到主干，在主干添加标签，同时删除该发布分支关联的特性分支。","aria-hidden":"true"}},[e._v("#")]),e._v(" 规则三，发布到线上正式环境后，合并相应的发布分支到主干，在主干添加标签，同时删除该发布分支关联的特性分支。")]),e._v(" "),r("p",[r("img",{attrs:{src:t(188),alt:"39505349fd747ed9e3f949ac71622aa2e88d26ad"}})])])},[],!1,null,null,null);a.default=s.exports}}]);