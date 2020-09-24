(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{214:function(a,t,e){"use strict";e.r(t);var n=e(0),r=Object(n.a)({},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"阿里-aoneflow代码分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#阿里-aoneflow代码分支","aria-hidden":"true"}},[a._v("#")]),a._v(" 阿里-AoneFlow代码分支")]),a._v(" "),e("p",[e("em",[a._v("摘要：")]),a._v(" 阿里有很多的研发团队，不同事业部使用的发布流程、分支策略并非整齐划一，但总体上看是比较规整的。其中有一种主流的发布模式以及对应的分支使用方式，称为“AoneFlow”。这套工作模式思路独特，在阿里以外的地方并不多见。本文围绕这些实践，聊一聊分支管理的话题。")]),a._v(" "),e("h2",{attrs:{id:"细数分支模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#细数分支模式","aria-hidden":"true"}},[a._v("#")]),a._v(" 细数分支模式")]),a._v(" "),e("p",[a._v("说到分支管理模式，我们最耳熟能详的莫过于 TrunkBased 和 GitFlow。\nTrunkBased 模式是持续集成思想所崇尚的工作方式，它由单个主干分支和许多发布分支组成，每个发布分支在特定版本的提交点上从主干创建出来，用来进行上线部署和 Hotfix。在 TrunkBased 模式中，没有显性的特性分支。当然实际上 Git 的分布式特征天生允许每个人有本地分支，TrunkBased 也并非排斥短期的特性分支存在，只不过在说这种模式的时候，大家通常都不会明确强调它罢了。\n虽然近年来有许多不错的案例，但 TrunkBased 模式并没有一统天下。它的缺点比较明显，太多的团队同时工作在主干上，到发布的时候就可能出现灾难（尤其是多版本并行开发的情况）。弥补的措施是 FeatureToggle 以及频繁的集成和足够的测试覆盖，这对开发团队的能力提出了比较高的要求。目前 TrunkBased 模式主要用在不需要同时维护多个历史版本的 SaaS 型项目，特别是经过微服务改造的各种小型服务上。\nTrunkBased 模式有两种常见演进版本。OneFlow 模式参考了 TrunkBased 的许多思想，对操作流程做了更严格的定义，增加了 Hotfix 分支等内容。多主干模式（通常是双主干，固定的开发分支和固定的发布分支），算是 TrunkBased 采用固定发布分支的特例，在提升团队的微服务落地能力这篇文章里介绍过，不再赘述。\nGitFlow 模式是若干模式的集大成者，包含一个主干分支、一个开发分支、许多的特性分支、许多的发布分支和 Hotfix 分支，以及许多繁琐的合并规则。它有一个 Git 插件，不过早就没人维护了。由于对每个阶段的每项操作定义十分明确，它曾经是很多重视流程的企业眼里的香馍馍。但它使用起来并不是很容易，大量的合并冲突和对集成测试不友好也是它被诟病最多的地方。\n对，还有 GithubFlow 模式，不过这种策略无非是在 TrunkBased 的基础上，增加了个人仓库和 Pull Request 合并代码的操作，与在同一个仓库里增加个人分支的做法类似，从实用的意义来说，它更合适分布式团队。GithubFlow 也有演进版本，例如强调了多环境部署和将仓库或分支与环境关联的 GitlabFlow 模式。\n要么简单粗暴如 TrunkBased，要么繁琐复杂如 GitFlow。难到真没有其他选择了吗？")]),a._v(" "),e("h2",{attrs:{id:"另辟蹊径的-aoneflow"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#另辟蹊径的-aoneflow","aria-hidden":"true"}},[a._v("#")]),a._v(" 另辟蹊径的 AoneFlow")]),a._v(" "),e("p",[a._v("在 AoneFlow 上你能看到许多其他分支模式的影子。它基本上兼顾了 TrunkBased 的“易于持续集成”和 GitFlow 的“易于管理需求”特点，同时规避掉 GitFlow 的那些繁文缛节。\n看一下具体套路。AoneFlow 只使用三种分支类型：主干分支、特性分支、发布分支，以及三条基本规则。")]),a._v(" "),e("h2",{attrs:{id:"规则一，开始工作前，从主干创建特性分支。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#规则一，开始工作前，从主干创建特性分支。","aria-hidden":"true"}},[a._v("#")]),a._v(" 规则一，开始工作前，从主干创建特性分支。")]),a._v(" "),e("p",[a._v("AoneFlow 的特性分支基本借鉴 GitFlow，没有什么特别之处。每当开始一件新的工作项（比如新的功能或是待解决的问题）的时候，从代表最新已发布版本的主干上创建一个通常以feature/前缀命名的特性分支，然后在这个分支上提交代码修改。也就是说，每个工作项（可以是一个人完成，或是多个人协作完成）对应一个特性分支，所有的修改都不允许直接提交到主干。\n"),e("img",{attrs:{src:"https://img.linux.net.cn/data/attachment/album/201804/10/141601xywozy3evodycmxe.png",alt:"1160f15dd7b077815c012db111bd5789ec15343b"}})]),a._v(" "),e("h2",{attrs:{id:"规则二，通过合并特性分支，形成发布分支。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#规则二，通过合并特性分支，形成发布分支。","aria-hidden":"true"}},[a._v("#")]),a._v(" 规则二，通过合并特性分支，形成发布分支。")]),a._v(" "),e("p",[a._v("AoneFlow 的发布分支设计十分巧妙，可谓整个体系的精髓。GitFlow 先将已经完成的特性分支合并回公共主线（即开发分支），然后从公共主线拉出发布分支。TrunkBased 同样是等所有需要的特性都在主干分支上开发完成，然后从主干分支的特定位置拉出发布分支。而 AoneFlow 的思路是，从主干上拉出一条新分支，将所有本次要集成或发布的特性分支依次合并过去，从而得到发布分支。发布分支通常以release/前缀命名。\n这条规则很简单，不过实际的玩法就相当丰富了。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://img.linux.net.cn/data/attachment/album/201804/10/141601rk9gt5sc9fgqfro4.png",alt:"c99a7230062e4406a0cbee93f2e3e04f82f4091e"}})]),a._v(" "),e("p",[a._v("首先，发布分支的用途可以很灵活。基础玩法是将每条发布分支与具体的环境相对应，比如release/test分支对应部署测试环境，release/prod分支对应线上正式环境等等，并与流水线工具相结合，串联各个环境上的代码质量扫描和自动化测试关卡，将产出的部署包直接发布到相应环境上。进阶点的玩法是将一个发布分支对应多个环境，比如把灰度发布和正式发布串在一起，中间加上人工验收的步骤。高级的玩法呢，要是按迭代计划来关联特性分支，创建出以迭代演进的固定发布分支，再把一系列环境都串在这个发布分支的流水线上，就有点经典持续集成流水线的味道了。再或者做一个将所有特性分支都关联在一起的发布分支，专门用于对所有提交做集成测试，就玩出了 TrunkBased 的效果。当然，这些花哨的高级玩法是我臆想的，阿里的发布分支一般都还是比较中规中矩。\n其次，发布分支的特性组成是动态的，调整起来特别容易。在一些市场瞬息万变的互联网企业，以及采用“敏捷运作”的乙方企业经常会遇到这种情况，已经完成就等待上线的需求，随时可能由于市场策略调整或者甲方的一个临时决定，其中某个功能忽然要求延迟发布或者干脆不要了。再或者是某个特性在上线前发现存在严重的开发问题，需要排除。按往常的做法，这时候就要来手工“剔代码”了，将已经合并到开发分支或者主干分支的相关提交一个个剔除出去，做过的同学都知道很麻烦。在 AoneFlow 的模式下，重建发布分支只是分分钟的事，将原本的发布分支删掉，从主干拉出新的同名发布分支，再把需要保留的各特性分支合并过来就搞定。这一系列动作能够在很大程度上实现自动化，而且不会在仓库留下一堆剔除代码的记录，干净无污染。\n此外，发布分支之间是松耦合的，这样就可以有多个集成环境分别进行不同的特性组合的集成测试，也能方便的管理各个特性进入到不同环境上部署的时机。松耦合并不代表没有相关性，由于测试环境、集成环境、预发布环境、灰度环境和线上正式环境等发布流程通常是顺序进行的，在流程上可以要求只有通过前一环境验证的特性，才能传递到下一个环境做部署，形成漏斗形的特性发布流。阿里有统一平台来自动化完成特性组合在发布分支间的迁移，在下面讲工具的部分里会再介绍。")]),a._v(" "),e("h2",{attrs:{id:"规则三，发布到线上正式环境后，合并相应的发布分支到主干，在主干添加标签，同时删除该发布分支关联的特性分支。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#规则三，发布到线上正式环境后，合并相应的发布分支到主干，在主干添加标签，同时删除该发布分支关联的特性分支。","aria-hidden":"true"}},[a._v("#")]),a._v(" 规则三，发布到线上正式环境后，合并相应的发布分支到主干，在主干添加标签，同时删除该发布分支关联的特性分支。")]),a._v(" "),e("p",[a._v("当一条发布分支上的流水线完成了一次线上正式环境的部署，就意味着相应的功能真正的发布了，此时应该将这条发布分支合并到主干。为了避免在代码仓库里堆积大量历史上的特性分支，还应该清理掉已经上线部分特性分支。与 GitFlow 相似，主干分支上的最新版本始终与线上版本一致，如果要回溯历史版本，只需在主干分支上找到相应的版本标签即可。\n"),e("img",{attrs:{src:"https://img.linux.net.cn/data/attachment/album/201804/10/141601tgag4w41gz1a5w1g.png",alt:"39505349fd747ed9e3f949ac71622aa2e88d26ad"}})]),a._v(" "),e("p",[a._v("除了基本规则，还有一些实际操作中不成文的技巧。比如上线后的 Hotfix，正常的处理方法应该是，创建一条新的发布分支，对应线上环境（相当于 Hotfix 分支），同时为这个分支创建临时流水线，以保障必要的发布前检查和冒烟测试能够自动执行。但其实还有一种简便方法是，将线上正式环境对应的发布分支上关联的特性分支全部清退掉，在这个发布分支上直接进行修改，改完利用现成的流水线自动发布。如果非得修一个历史版本的 Bug 怎么办呢？那就老老实实的在主干分支找到版本标签位置，然后从那个位置创建 Hotfix 分支吧，不过由于阿里的产品大多是线上 SaaS 业务，这样的场景并不多见。\n正是这些简单的规则，组成了 AoneFlow 独树一帜的核心套路。\nAoneFlow 中每一个看似简单的步骤都并非凭空臆造，而是经历大量产品团队反复磨砺后积累下来的经验。接下来，我会说说 AoneFlow 的技术门槛以及阿里内部的应对之道。")]),a._v(" "),e("h2",{attrs:{id:"aoneflow-的体验优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aoneflow-的体验优化","aria-hidden":"true"}},[a._v("#")]),a._v(" AoneFlow 的体验优化")]),a._v(" "),e("p",[a._v("谙熟武侠之道的人都懂得，掌握一个门派的看家武艺，除了要会招式，还得有深厚的内功和趁手的兵器。否则拿了辟邪剑谱，也只能望谱兴叹。\n阿里团队的内功和兵器，实际上是良好的代码习惯和齐全的配套工具。\n这里说的习惯，除了开发流程和代码分支的管理方式以外，还包括日常开发中的一些约定俗成的规约。阿里的许多开发规约是有“文献”记载的，主要收录在 《阿里巴巴 Java 开发手册》 里面。它的内容现在已经公开了，所以早就不算是秘密。\n举一个具体的例子。在 AoneFlow 的流程中，每次重建发布分支的时候都会重新合并然后编译代码，产生新的部署包。然而，即使代码的内容是一样的，如果工程中依赖了一些会改变的第三方软件包，依然可能导致打包出的产品行为不完全一致。因此，在阿里的代码规约中就明确地指出了，用于线上发布的代码，不可以使用包含“SNAPSHOT 版本”（即未正式发布版本）的依赖包，从而确保每次构建出的产物都是一致的。类似这样的细节还有很多，好的开发习惯是确保软件质量的必要前提。\n工具可以使得团队协作更加平滑。虽然只要弄懂原理，AoneFlow 中每个分支创建、合并、更改步骤使用单纯的 Git 命令就能玩转。但其中的一些操作（比如为每个发布分支选出恰当的特性分支组合进行合并）手工执行极易出错，而且让团队的个人重复这些日常琐事的命令操作，并不是令人愉悦的事情。\n在阿里内部，使用 AoneFlow 流程的团队基本上不用自己运行 Git 来处理分支的事情，而是由阿里巴巴集团内部名叫 Aone 的协同研发平台（以下简称平台）接管。这个承担集团 80% 产品从需求和用户故事提出到部署上线完整研发流程的平台，内置了许多以服务组件的形式嵌入的研发提效工具，其中的发布组件为 AoneFlow 的用户体验添色不少。比较显著的辅助“功效”包括以下几个方面。")]),a._v(" "),e("h3",{attrs:{id:"首先是整体流程的自动化。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#首先是整体流程的自动化。","aria-hidden":"true"}},[a._v("#")]),a._v(" 首先是整体流程的自动化。")]),a._v(" "),e("p",[a._v("由于是内部工具，平台的功能高度内聚。对于项目而言，从提出原始需求，将需求拆分为任务，然后根据任务在线创建特性分支，再聚合生成发布分支，同时根据模板自动创建测试环境，直到后期的运维保障都可以一站式的搞定。\n这个流程已经远远超出了代码分支管理的范畴。但正是因为如此，平台对于 AoneFlow，向前做到了将特性分支和需求项关联起来，确保了特性分支的命名规范性；向后做到了将发布分支与部署行为关联起来，确保了各环境版本来源的可靠性。打通了端到端交付的任督二脉。")]),a._v(" "),e("h3",{attrs:{id:"其次是发布分支的流水线。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其次是发布分支的流水线。","aria-hidden":"true"}},[a._v("#")]),a._v(" 其次是发布分支的流水线。")]),a._v(" "),e("p",[a._v("作为一种流程自动化的手段，CI/CD 流水线是许多现代交付团队中常见的标配实践。在 AoneFlow 的代码生命周期里涉及许多分支，当这些分支被创建或更新时，往往需要伴随其他的一系列行为。流水线能够将这些日常开发过程中的代码分支与其所表达的深层意图（比如提交代码即进行集成测试）联系起来。特别是发布分支，AoneFlow 的每个发布分支通常关联具体的部署环境，当有新代码合并进分支时，就应该及时对代码进行检查和部署。\n理想情况下，每条不同的分支都应该有与其作用相匹配的一条流水线来为它服务。AoneFlow 的发布分支是相对固定的，因此相比 GitFlow 更易于进行持续集成。理论上任何流水线工具都能够配合 AoneFlow 使用，不过，阿里的统一平台提供流水线对代码评审、安全检查、在线部署等功能的整合，还是为 AoneFlow 在内部团队的使用优化增色不少。")]),a._v(" "),e("h3",{attrs:{id:"还有一项很有用的辅助是分支关联的管理。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#还有一项很有用的辅助是分支关联的管理。","aria-hidden":"true"}},[a._v("#")]),a._v(" 还有一项很有用的辅助是分支关联的管理。")]),a._v(" "),e("p",[a._v("特性分支与发布分支的关联关系维护是一个 AoneFlow 特有的问题。记住每个发布分支分别来自哪些特性分支对于需要基于现有特性组合进行改变的时候十分有意义。比如当需要将某个特性从特定发布分支退出时，通常会将除了该特性以外的其他特性所在分支进行一次合并，以替换原有的发布分支。人为的记录这些信息并不轻松，要是通过平台进行展示和辅助就会方便许多。\n当某些功能组合在一个低级别的发布环境（如集成测试环境）验证完成后，我们希望将它的内容直接迁移到高级别的环境（如预发布环境）对应的发布分支上。这样可以确保线上的版本一定是经过预发验证的，预发的版本一定是经过集成验证的，以此类推，使得各个发布分支形成串联。同样的，使用普通的 Git 命令就能实现这个操作，只不过用可视化工具会让流程更加直观。\n除此以外，平台提供代码仓库各个分支状况的统一展示，包括分支所对应部署环境的机器信息、操作记录等全都一览无余。正是这些“高附加值”的辅助，使得 AoneFlow 得以扬长避短，成为阿里团队支撑复杂项目首选的利器。")]),a._v(" "),e("h2",{attrs:{id:"写在最后"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#写在最后","aria-hidden":"true"}},[a._v("#")]),a._v(" 写在最后")]),a._v(" "),e("p",[a._v("代码分支模式的选择并没有绝对的正确和错误之分，关键是与项目的规模和发布节奏相匹配。阿里协同研发平台在经过众多实践历练后，总结出了一套独创的分支管理方法，通过兼备灵活高效与简单实用的流程，保障阿里旗下众多产品的交付。当你还在犹豫于琳琅满目的分支模式，既舍不得 GitFlow 的并行特性开发，又放不下 TrunkBased 的持续集成友好时，AoneFlow 也许是一个值得考虑的选择。\n目前，云效对 AoneFlow 的支持已经比较完备，大家可自行前往探索。地址："),e("a",{attrs:{href:"https://www.aliyun.com/product/yunxiao",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.aliyun.com/product/yunxiao"),e("OutboundLink")],1)]),a._v(" "),e("p",[e("a",{attrs:{href:"https://linux.cn/thread-17638-1-1.html",title:"来源",target:"_blank",rel:"noopener noreferrer"}},[a._v("来源"),e("OutboundLink")],1)])])},[],!1,null,null,null);t.default=r.exports}}]);