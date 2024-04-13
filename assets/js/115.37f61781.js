(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{467:function(t,e,a){"use strict";a.r(e);var s=a(1),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("题目: 使用 CellChat 推理和分析细胞-细胞通信"),a("br"),t._v("\nDOI: "),a("a",{attrs:{href:"https://doi.org/10.1038/s41467-021-21246-9",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://doi.org/10.1038/s41467-021-21246-9"),a("OutboundLink")],1),a("br"),t._v("\nCite: Jin, S., Guerrero-Juarez, C.F., Zhang, L. et al. Inference and analysis of cell-cell communication using CellChat. Nat Commun 12, 1088 (2021).")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("相关阅读")]),t._v(" "),a("p",[t._v("微信公众号："),a("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzkwMjM0MzA5MA==&mid=2247484186&idx=1&sn=51beec6d56abb62cd654e5bab4c2e381&chksm=c0a7b3c7f7d03ad1ec72e339191c016e088614065012c2096a4561e0dccf28809fc495aee867&token=1341494096&lang=zh_CN#rd",target:"_blank",rel:"noopener noreferrer"}},[t._v("文献阅读：使用 CellChat 推理和分析细胞-细胞通信"),a("OutboundLink")],1),t._v(" "),a("br"),t._v(" "),a("br")]),t._v(" "),a("p",[t._v("本站文章：")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://tigerz.online/pages/2737d2/",target:"_blank",rel:"noopener noreferrer"}},[t._v("文献阅读 --- Inference and analysis of cell-cell communication using CellChat"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://tigerz.online/pages/f26000/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CellChat：Inference and analysis of cell-cell communication"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://tigerz.online/pages/794f06/",target:"_blank",rel:"noopener noreferrer"}},[t._v("文献阅读 --- Inferring neuron-neuron communications from single-cell transcriptomics through NeuronChat"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://tigerz.online/pages/7a726f/",target:"_blank",rel:"noopener noreferrer"}},[t._v("NeuronChat：Inferring neuron-neuron communications from single-cell transcriptomics"),a("OutboundLink")],1)])])]),t._v(" "),a("p",[a("strong",[t._v("作者介绍：")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Qing Nie")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:"https://faculty.sites.uci.edu/qnie/files/2016/04/QN2015.jpg",width:"200"}})])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("University of California, Irvine")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"mailto:qnie@uci.edu"}},[t._v("qnie@uci.edu")])])])])]),t._v(" "),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),a("p",[t._v("理解细胞间的全局通信需要细胞间信号链接的准确表示，并对这些链接进行有效的系统级分析。我们建立了一个配体、受体及其辅助因子之间的相互作用的数据库，准确地代表已知的异聚分子复合物。然后，我们开发了 CellChat，这是一种能够从 scRNA-seq 数据中定量推断和分析细胞间通信网络的工具。CellChat 使用网络分析和模式识别方法预测细胞的主要信号输入和输出，以及这些细胞和信号如何协调功能。通过多种学习和定量对比，CellChat 对信号通路进行了分类，并在不同的数据集上描述了保守的和特定的通路。将 CellChat 技术应用于小鼠和人类皮肤数据集，显示了它提取复杂信号模式的能力。我们的多功能和易于使用的工具包 CellChat 和一个基于网络的浏览器（"),a("a",{attrs:{href:"http://www.cellchat.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.cellchat.org/"),a("OutboundLink")],1),t._v("）将帮助发现新的细胞间通信，并在不同的组织中建立细胞-细胞通信图谱。")]),t._v(" "),a("h2",{attrs:{id:"results"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#results"}},[t._v("#")]),t._v(" Results")]),t._v(" "),a("h3",{attrs:{id:"fig-1-overview-of-cellchat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fig-1-overview-of-cellchat"}},[t._v("#")]),t._v(" Fig.1 Overview of CellChat")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41467-021-21246-9/MediaObjects/41467_2021_21246_Fig1_HTML.png?as=webp",alt:"Fig.1"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Fig.1 CellChat 概述")]),t._v(" "),a("p",[a("strong",[t._v("a.")]),t._v(" 配体-受体相互作用数据库的概述。CellChatDB 考虑了已知的配体-受体复合物的组成，包括配体和受体的多聚复合物，以及几种辅助因子类型：可溶性激动剂、拮抗剂、共刺激和共抑制膜结合受体。CellChatDB 包含 2021 种已验证的 L-R 对，包括 60% 的分泌相互作用（secreting interactions）。此外，有 48% 的相互作用涉及异质分子复合物。"),a("br"),t._v(" "),a("strong",[t._v("b.")]),t._v(" 单细胞数据输入与预处理。CellChat 将细胞的基因表达数据和细胞注释的 meta 信息（也可以运行无标签模式）作为输入，预处理会先在每个类群细胞中鉴定过表达的基因。"),a("br"),t._v(" "),a("strong",[t._v("c.")]),t._v(" 细胞通讯模型计算：CellChat 对通信概率进行建模，并识别重要通信。① 交叉引用配体-受体相互作用数据库；②使用质量作用定律（law of mass action）定量细胞通讯概率；③ 推断统计学和生物学上显著的细胞通信。"),a("br"),t._v(" "),a("strong",[t._v("d.")]),t._v(" 细胞通讯结果可视化提供了三种模式：层次图（hierarchy plot）， 圈图 (Circle plot)，气泡图（bubble plot）。"),a("br"),t._v(" "),a("strong",[t._v("e.")]),t._v(" 细胞通讯模式分析。CellChat 通过图论、模式识别和流形学习等方法对网络进行定量测量，从而更好地解释细胞间通信网络。使用网络中心性分析识别细胞的信号角色，发现主要的细胞通讯模式，信号通路拓扑和功能相似性的分类。除了分析单个数据集，CellChat 还可以跨不同条件识别共享的和特定于上下文的信号，如不同的发育阶段和生物条件。")])]),t._v(" "),a("h3",{attrs:{id:"fig-2-cellchat-analysis-of-the-communications-between-skin-cells-during-wound-repair"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fig-2-cellchat-analysis-of-the-communications-between-skin-cells-during-wound-repair"}},[t._v("#")]),t._v(" Fig.2 CellChat analysis of the communications between skin cells during wound repair")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41467-021-21246-9/MediaObjects/41467_2021_21246_Fig2_HTML.png?as=webp",alt:"Fig.2"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Fig.2 伤口修复过程中皮肤细胞间通讯的 CellChat 分析")]),t._v(" "),a("p",[t._v("作者利用最近发表的胚胎发育和成年伤口愈合阶段的小鼠皮肤 scRNA-seq 数据来展示 CellChat 的功能。作者首先在第 12 天的小鼠皮肤伤口组织的 scRNA-seq 数据集上运行 CellChat 分析。该数据集包含 21,898 个细胞，这些细胞分为 25 个细胞组，包括 9 个成纤维细胞（FIB），5 个骨髓（MYL）和 6 个内皮（ENDO）组以及其他几种细胞类型，例如 T 细胞（TC），B 细胞（BC），树突状细胞（DC）和淋巴管内皮细胞（LYME）。 CellChat 在 25 个细胞亚群中发现 60 个重要的配体-受体对，并且分布在 25 个信号传导通路中，包括TGFβ，非经典 WNT（ncWNT），TNF，SPP1，PTN，PDGF，CXCL，CCL 和 MIF 途径。根据网络中心性分析发现，myeloid cell 是作用于 fibroblasts 的 TGFβ 配体的最主要来源。\n"),a("br"),a("br"),t._v(" "),a("strong",[t._v("a.")]),t._v(" Hierarchical plot 显示了推断出的 TGFβ 信号的细胞间通信网络。左图和右图分别突出了对 fibroblast 状态和其他 non-fibroblast 皮肤细胞状态的自分泌和旁分泌信号。实圆和开圆分别代表 source 和 target。圆的大小与每个细胞组中的细胞数量成正比，边的宽度表示通信概率。边的颜色与信号 source 相一致。"),a("br"),t._v(" "),a("strong",[t._v("b.")]),t._v(" 热图基于计算出的 TGFβ 信号网络的四个网络中心性度量，显示了每个细胞组的相对重要性。"),a("br"),t._v(" "),a("strong",[t._v("c.")]),t._v(" 伤口 TGFβ 信号通路主要由 Tgfb1 配体及其多聚体 Tgfbr1/Tgfbr2 受体所主导。"),a("br"),t._v(" "),a("strong",[t._v("d-f.")]),t._v(" 推断出的 ncWNT 信号网络。与 TGFβ 相比，ncWNT 信号网络只有一个配体（Wnt5a），只有一群 fibroblasts（FIB-D）主要驱动 fibroblast-to-fibroblast，fibroblast-to-endothelial，fibroblast-to-myeloid signaling。"),a("br"),t._v(" "),a("strong",[t._v("g.")]),t._v(" 推断出的分泌细胞的传出通信模式，显示了推断出的潜在模式与细胞群之间的对应关系，以及信号通路。细胞流的厚度表明了细胞群或信号通路对每个潜在模式的贡献。传出通信模式揭示了大部分输出的 fibroblast signaling 以模式#4为特征，它代表多种途径，包括但不限于 ncWNT、SPP1、MK 和 PROS。所有输出的 myeloid cell signaling 通路均以模式#2为特征，代表 TGFβ、TNF、CSF、IL1 和 RANKL等通路。"),a("br"),t._v(" "),a("strong",[t._v("h.")]),t._v(" 推断出的目标细胞的传入通信模式。传入的 fibroblast signaling 通路由两种模式#1和#3主导，其中包括 TGFβ、ncWNT、PDGF、TNF、MK和PTN等信号通路。大多数进入的myeloid cell signaling 通路以模式#4为特征，由脑脊液和CXCL通路驱动。"),a("br"),t._v(" "),a("strong",[t._v("i.")]),t._v(" 根据其功能相似性将信号通路投射到二维图像上。每个点代表一个信号通路的通信网络。点的大小与整体通信概率成正比。不同的颜色代表不同的信号通路组。"),a("br"),t._v(" "),a("strong",[t._v("j.")]),t._v(" 两种不同的相似度度量被用来量化推断网络之间的相似性。这些例子显示了具有相似的主要 sources/targets 的功能相似性，以及具有相似的网络拓扑的结构相似性。"),a("br"),t._v(" "),a("strong",[t._v("k.")]),t._v(" 根据其结构的相似性将信号通路投射到二维图像上。")])]),t._v(" "),a("h3",{attrs:{id:"fig-3-application-of-cellchat-to-continuous-cell-states-along-pseudotemporal-trajectories-during-embryonic-skin-development"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fig-3-application-of-cellchat-to-continuous-cell-states-along-pseudotemporal-trajectories-during-embryonic-skin-development"}},[t._v("#")]),t._v(" Fig.3 Application of CellChat to continuous cell states along pseudotemporal trajectories during embryonic skin development")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41467-021-21246-9/MediaObjects/41467_2021_21246_Fig3_HTML.png?as=webp",alt:"Fig.3"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Fig.3 CellChat 在胚胎皮肤发育过程中沿拟时序轨迹的连续细胞状态中的应用")]),t._v(" "),a("p",[a("strong",[t._v("a.")]),t._v(" 左图：扩散映射将 dermal skin cells 投影到低维空间中，并展示了从 fibroblasts 到DC (dermal condensate) cells 的真皮分化。根据它们在该空间中的位置，将细胞分组。右图：密度图显示每个类群中所选标记基因表达的分布。"),a("br"),t._v(" "),a("strong",[t._v("b.")]),t._v(" 扩散图显示 epidermal trajectory 和相关标记基因表达的分布。"),a("br"),t._v(" "),a("strong",[t._v("c.")]),t._v(" Hierarchical plot 显示 WNT 信号通路中，dermal 和 epidermal 的相互作用。左右部分分别显示自分泌和旁分泌信号传导到 dermal trajectory 和 epidermal trajectory。圆的大小与每个细胞组中的细胞数量成正比，边缘宽度表示通信概率。"),a("br"),t._v(" "),a("strong",[t._v("e.")]),t._v(" 小提琴图显示了参与所推断的 WNT 信号网络的信号基因的表达分布。"),a("br"),t._v(" "),a("strong",[t._v("f.")]),t._v(" 通过 ncWNT 信号通路产生的 dermal 和 epidermal 的相互作用。"),a("br"),t._v(" "),a("strong",[t._v("g.")]),t._v(" alluvial plot 显示的分泌细胞的输出信号模式，显示了推断的潜在模式与细胞群之间的对应关系，以及信号通路。流的厚度表明了细胞群或信号通路对每个潜在模式的贡献。每个模式的高度与其相关的细胞群或信号通路的数量成正比。输出模式揭示了发送细胞如何相互协调，以及它们如何与某些信号通路协调来驱动通信。"),a("br"),t._v(" "),a("strong",[t._v("h.")]),t._v(" 靶细胞的输入信号模式。传入模式显示了目标细胞如何相互协调，以及它们如何与特定的信号通路协调，以响应传入信号。")])]),t._v(" "),a("h3",{attrs:{id:"fig-4-application-of-cellchat-to-communications-between-spatially-colocalized-cell-populations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fig-4-application-of-cellchat-to-communications-between-spatially-colocalized-cell-populations"}},[t._v("#")]),t._v(" Fig.4 Application of CellChat to communications between spatially colocalized cell populations")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41467-021-21246-9/MediaObjects/41467_2021_21246_Fig4_HTML.png?as=webp",alt:"Fig.4"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Fig.4 CellChat 在空间共域细胞群间通信中的应用")]),t._v(" "),a("p",[a("strong",[t._v("a.")]),t._v(" 在 E14.5 时，hair follicle (HF) 发育过程中的 placode, pre-DC, DC1 and DC2 cells 的空间图。DC: dermal condensate。"),a("br"),t._v(" "),a("strong",[t._v("b.")]),t._v(" 任何一对细胞群之间显著配体-受体对的数量。边的宽度与配体-受体对的指示数量成正比。"),a("br"),t._v(" "),a("strong",[t._v("c.")]),t._v(" 推断出的 FGF 和 WNT 信号网络。圆的大小与每个细胞组中的细胞数量成正比，边的宽度表示通信概率。"),a("br"),t._v(" "),a("strong",[t._v("d.")]),t._v(" 所有重要的配体-受体对，有助于信号从 placode 发送到三种 DC 状态。点的颜色和大小代表计算出的通信概率和 p 值。p 值由 one-sided permutation test 计算得出。"),a("br"),t._v(" "),a("strong",[t._v("e.")]),t._v(" 分泌细胞的输出通信模式，显示了所推断的潜在模式与细胞群之间的对应关系，以及信号通路。"),a("br"),t._v(" "),a("strong",[t._v("f.")]),t._v(" 目标细胞的输入通信模式。"),a("br"),t._v(" "),a("strong",[t._v("g.")]),t._v(" 推断的 Pros1-Axl 信号网络，以及 Pros1 配体、Axl 受体和细胞迁移标记物 Thy1 的 scRNA-seq 表达分布。边的宽度表示通信的概率。"),a("br"),t._v(" "),a("strong",[t._v("h.")]),t._v(" RNAscope 数据（n =4 个独立实验）显示 E14.5 胚胎小鼠皮肤中 Edn3（红色）、Axl（绿色）和 Thy1（白色）转录本的空间分布。Epithelial placode 和\ndermal condensate (DC) 用虚线进行注释和概述。右下角的实心白色弯曲箭头标记了 CellChat 预测的 Pros1-Axl 信号。DAPI（蓝绿色）染色核。"),a("br"),t._v(" "),a("strong",[t._v("i.")]),t._v(" 推断的 Edn3-Ednrb 信号网络，以及黑素细胞标记物 Dct、Edn3 配体及其受体 Ednrb 的 scRNA-seq 表达分布。DC: dermal condensate; MELA: melanocytes。"),a("br"),t._v(" "),a("strong",[t._v("j.")]),t._v(" RNAscope 数据（n = 4 个独立实验）显示了 E14.5 胚胎小鼠皮肤早期发育毛囊中 Dct（绿色）、Edn3（红色）和 Ednrb（白色）转录本的空间分布。箭头表示可能的黑素细胞数量。右上角的实心白色弯曲箭头标记了皮肤空间内预测的 Edn3-Ednrb 信号。")])]),t._v(" "),a("h3",{attrs:{id:"fig-5-comparison-analysis-of-epidermal-dermal-communications-between-different-skin-developmental-stages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fig-5-comparison-analysis-of-epidermal-dermal-communications-between-different-skin-developmental-stages"}},[t._v("#")]),t._v(" Fig.5 Comparison analysis of epidermal-dermal communications between different skin developmental stages")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41467-021-21246-9/MediaObjects/41467_2021_21246_Fig5_HTML.png?as=webp",alt:"Fig.5"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Fig.5 不同皮肤发育阶段的表皮-真皮通讯比较分析")]),t._v(" "),a("p",[a("strong",[t._v("a.")]),t._v(" embryonic skin 在 E13.5 和 E14.5 的细胞组成示意图。不同的细胞群体按颜色编码匹配。FIB-A: fibroblast type A; FIB-B: fibroblast type B; FIB-P: proliferative fibroblasts. MYL: myeloid cell; ENDO: endothelial cell; MELA: melanocytes。"),a("br"),t._v(" "),a("strong",[t._v("b.")]),t._v(" 将来自 E13.5 和 E14.5 的信号通路联合投影并聚类到共享的二位流形中，根据它们的功能相似性进行分类。圈形和正方形符号分别代表来自 E13.5 和 E14.5 的信号网络。每个点或正方形表示一个信号通路的通讯网络，大小与总通讯概率成比例。不同颜色代表不同组信号途径。"),a("br"),t._v(" "),a("strong",[t._v("c.")]),t._v(" 每个路径组的放大视图。"),a("br"),t._v(" "),a("strong",[t._v("d.")]),t._v(" 根据它们在共享二位流形中两两欧几里得距离对重叠信号途径进行排名。"),a("br"),t._v(" "),a("strong",[t._v("e.")]),t._v(" 推断出在 E13.5 时 WNT 信号网络左右部分显示向真皮层和表皮层自分泌及旁分泌传导方式，圈大小与每个细胞群中的细胞数量成比例，边宽度表示通讯概率。"),a("br"),t._v(" "),a("strong",[t._v("f.")]),t._v(" 每个配体-受体对于 E13.5 整体 WNT 信号网络的相对贡献。"),a("br"),t._v(" "),a("strong",[t._v("g.")]),t._v(" E13.5 时 WNT 信号基因表达分布。"),a("br"),t._v(" "),a("strong",[t._v("h.")]),t._v(" 推断出在 E14.5 时的 WNT 信号网络。"),a("br"),t._v(" "),a("strong",[t._v("i.")]),t._v(" 每个配体-受体对于 E14.5 的相对贡献。"),a("br"),t._v(" "),a("strong",[t._v("j.")]),t._v(" E14.5 时 WNT 信号基因表达分布。"),a("br"),t._v(" "),a("strong",[t._v("k.")]),t._v(" 所有显著性信号途径根据它们在推断网络中信息流总量差异进行排名。红色标记为富集于 E13.5，黑色标记为同样富集于 E13.5 和 E14.5，绿色标记为更富集于 E14.5。"),a("br"),t._v(" "),a("strong",[t._v("l.")]),t._v(" 点图显示了分泌细胞在 E13.5 和 E14.5 之间传出信号模式的比较。点大小与从模式识别分析计算得到的贡献得分成正比。更高的贡献得分意味着该信号通路在相应细胞群中更加丰富。")])]),t._v(" "),a("h3",{attrs:{id:"fig-6-joint-identification-of-conserved-and-context-specific-communication-patterns-between-two-skin-states"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fig-6-joint-identification-of-conserved-and-context-specific-communication-patterns-between-two-skin-states"}},[t._v("#")]),t._v(" Fig.6 Joint identification of conserved and context-specific communication patterns between two skin states")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41467-021-21246-9/MediaObjects/41467_2021_21246_Fig6_HTML.png?as=webp",alt:"Fig.6"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Fig.6 两种皮肤状态之间的保守性和环境特异性通信模式的联合识别")]),t._v(" "),a("p",[a("strong",[t._v("a.")]),t._v(" 细胞组成的示意图，显示了在 E13.5 期间的胚胎形态发生和在第 12 天创伤诱导修复期间皮肤的不同细胞群。不同的细胞群按颜色编码。"),a("br"),t._v(" "),a("strong",[t._v("b.")]),t._v(" 将来自 E13.5 和创伤信号通路联合投影并聚类到共享二维流形上，根据推断网络结构相似性进行分类。圆形和正方形符号分别代表来自 E13.5 和创伤的信号网络。每个圆或正方形表示一个信号通路的通讯网络。圆或正方形大小与该信号网络总通讯概率成比例。不同颜色代表不同组信号途径。"),a("br"),t._v(" "),a("strong",[t._v("c.")]),t._v(" 放大每个路径组视图。"),a("br"),t._v(" "),a("strong",[t._v("d.")]),t._v(" 基于它们在共享二维流型中成对欧几里得距离重叠排名较高距离更大意味着差异更大，在 E13.5 和创伤之间重叠的信号途径被排名列出，并且根据它们在 MK 信号途径中推断出来。"),a("br"),t._v(" "),a("strong",[t._v("e-f.")]),t._v(" Hierarchical plot 显示了 E13.5 和 创伤时期 MK 信号通路之间推断出来细胞间通信网络 。圈的大小与每个细胞组中的细胞数量成比例，边宽度表示通讯概率。"),a("br"),t._v(" "),a("strong",[t._v("g.")]),t._v(" 所有重要信号途径都基于 E13.5 和创伤之间推断网络中整体信息流的差异进行排名。信号网络的总体信息流通过总结该网络中所有通讯概率来计算。红色着色的顶部信号途径在 E13.5  中更丰富，绿色底部着色的则在创伤期间更丰富。")])]),t._v(" "),a("h3",{attrs:{id:"fig-7-identification-of-major-signaling-changes-in-diseased-human-skin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fig-7-identification-of-major-signaling-changes-in-diseased-human-skin"}},[t._v("#")]),t._v(" Fig.7 Identification of major signaling changes in diseased human skin")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41467-021-21246-9/MediaObjects/41467_2021_21246_Fig7_HTML.png?as=webp",alt:"Fig.7"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Fig.7 对病人皮肤中主要信号变化的识别")]),t._v(" "),a("p",[a("strong",[t._v("a.")]),t._v(" scRNA-seq 在特应性皮炎患者的非损伤（NL，正常）和损伤（LS，疾病）人体皮肤细胞上的示意图。"),a("br"),t._v(" "),a("strong",[t._v("b.")]),t._v(" 将来自 NL 和 LS 皮肤的信号通路联合投影和聚类到共享二维流形中，根据推断网络的功能相似性。圆形和方形符号分别代表来自 NL 和 LS 的信号网络。每个点或正方形表示一个信号通路的通讯网络。点或正方形大小与通讯概率成比例。不同颜色代表不同组信号途径。"),a("br"),t._v(" "),a("strong",[t._v("c.")]),t._v(" 基于推断网络中 NL 和 LS 之间整体信息流差异对显著信号途径进行排名。一个信号网络的总信息流通过汇总该网络中所有通讯概率计算得出。顶部用红色标记的信号途径富集于 NL 皮肤中，而绿色标记的则富集于 LS 皮肤中。"),a("br"),t._v(" "),a("strong",[t._v("d.")]),t._v(" 比较了 NL 和 LS 皮肤之间显著的配体-受体对，这有助于信号传递 from Inflam.FIB (i.e., inflammatory fibroblasts) to dendritic cells (DC) and T cells (TC) including cDC1, cDC2, LS, Inflam.DC, TC, Inflam.TC, CD40LG + TC, and NKT subpopulations。突出显示了先前使用免疫荧光染色验证的 CCL19-CCR7 信号通路。点的颜色反映通讯概率，点的大小表示计算得出的 p 值。空白处表示通讯概率为零。p 值是用 one-sided permutation test 计算得出的。"),a("br"),t._v(" "),a("strong",[t._v("e.")]),t._v(" Ligand CCL19 及其受体 CCR7 在 NL（红色）和 LS（绿色）皮肤中表达分布情况。"),a("br"),t._v(" "),a("strong",[t._v("f.")]),t._v(" 层次聚类图显示了 CCL19-CCR7 信号传递在 LS 皮肤中推断到细胞间交流网络，左右两部分分别展示自分泌和旁分泌信号传递至成纤维细胞和免疫细胞，圆的大小与每个细胞组中的细胞数量成比例，边的宽度代表通讯概率。请注意，CellChat 预测 NL 皮肤中没有显着的 CCL19-CCR7 信号传递。")])])])}),[],!1,null,null,null);e.default=r.exports}}]);