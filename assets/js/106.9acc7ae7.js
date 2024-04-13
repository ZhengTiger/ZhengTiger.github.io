(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{459:function(t,e,s){"use strict";s.r(e);var a=s(1),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("题目: 整合跨越不同条件、技术、物种的单细胞转录组数据"),s("br"),t._v("\nDOI: "),s("a",{attrs:{href:"https://doi.org/10.1038/nbt.4096",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://doi.org/10.1038/nbt.4096"),s("OutboundLink")],1),s("br"),t._v("\nCite: Butler, A., Hoffman, P., Smibert, P. et al. Integrating single-cell transcriptomic data across different conditions, technologies, and species. Nat Biotechnol 36, 411–420 (2018).")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("相关阅读")]),t._v(" "),s("p",[t._v("微信公众号："),s("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzkwMjM0MzA5MA==&mid=2247484097&idx=2&sn=4ca1c8d5c5a6d1bd8d28dba44cdba538&chksm=c0a7b21cf7d03b0a0eaed81a403dee4bf6f06c61dfdd98fd76b96e1e0c064b7a703f7a82b134&token=2087503041&lang=zh_CN#rd",target:"_blank",rel:"noopener noreferrer"}},[t._v("文献阅读：(Seurat V2) 整合跨越不同条件、技术、物种的单细胞转录组数据"),s("OutboundLink")],1),t._v(" "),s("br"),t._v(" "),s("br"),t._v("\n站内文章：")]),t._v(" "),s("ol",[s("li",[s("RouterLink",{attrs:{to:"/pages/0d1fce/"}},[t._v("文献阅读 --- (Seurat V1) Spatial reconstruction of single-cell gene expression data")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/pages/f37280/"}},[t._v("文献阅读 --- (Seurat V2) Integrating single-cell transcriptomic data across different conditions, technologies, and species")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/pages/d26f9e/"}},[t._v("文献阅读 --- (Seurat V3) Comprehensive Integration of Single-Cell Data")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/pages/b4dfe0/"}},[t._v("文献阅读 --- (Seurat V4) Integrated analysis of multimodal single-cell data")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/pages/8c5839/"}},[t._v("文献阅读 --- (Seurat V5) Dictionary learning for integrative, multimodal and scalable single-cell analysis")])],1)])]),t._v(" "),s("p",[s("strong",[t._v("作者介绍：")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("Rahul Satija")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("img",{attrs:{src:"https://as.nyu.edu/content/dam/nyu-as/faculty/images/satija-rahul-photo.jpg",width:"200"}})])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("New York Genome Center")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("a",{attrs:{href:"mailto:rsatija@nygenome.org"}},[t._v("rsatija@nygenome.org")])])])])]),t._v(" "),s("h2",{attrs:{id:"abstract"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),s("p",[t._v("计算 single-cell RNA-seq (scRNA-seq) 方法已成功应用于代表单一条件、技术或物种的实验中，以发现和定义细胞表型。然而，识别多个数据集中存在的细胞亚群仍然具有挑战性。在这里，我们介绍了一种基于共同变异源整合 scRNA-seq 数据集的分析策略，从而能够识别跨数据集的共享群体并进行下游比较分析。我们应用在 R 工具包 Seurat ("),s("a",{attrs:{href:"http://satijalab.org/seurat/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://satijalab.org/seurat/"),s("OutboundLink")],1),t._v(") 中实施的这种方法来比对静息和刺激条件下的外周血单核细胞的 scRNA-seq 数据集，使用两种分析技术对造血祖细胞进行测序，以及从人类和小鼠胰岛生成的胰腺细胞图谱 ('atlases')。在每种情况下，我们都会跨数据集共同学习不同或过渡的细胞状态，同时通过集成分析提高统计能力。我们的方法有助于 scRNA-seq 数据集的一般比较，有可能加深我们对不同细胞状态如何响应扰动、疾病和进化的理解。")]),t._v(" "),s("h2",{attrs:{id:"results"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#results"}},[t._v("#")]),t._v(" Results")]),t._v(" "),s("h3",{attrs:{id:"figure-1-overview-of-seurat-alignment-of-single-cell-rna-seq-data-sets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#figure-1-overview-of-seurat-alignment-of-single-cell-rna-seq-data-sets"}},[t._v("#")]),t._v(" Figure 1. Overview of Seurat alignment of single-cell RNA-seq data sets")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fnbt.4096/MediaObjects/41587_2018_Article_BFnbt4096_Fig1_HTML.jpg?as=webp",alt:"Figure 1"}})]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Figure 1. 单细胞 RNA-seq 数据集的 Seurat 比对概述")]),t._v(" "),s("p",[s("strong",[t._v("(a)")]),t._v(" 药物治疗后的病例-对照研究中，对异质细胞群体进行了 scRNAseq。四种细胞类型由不同符号表示，而药物治疗则由颜色编码。在标准工作流程中，细胞通常会根据细胞类型和药物治疗进行聚类，这给下游的比较分析带来了挑战。"),s("br"),t._v(" "),s("strong",[t._v("(b)")]),t._v(" Seurat 对齐过程使用典型关联分析（canonical correlation analysis, CCA）来识别数据集之间共享的相关结构（即，典型关联向量，canonical correlation vectors, CC），并使用动态时间规整（dynamic time warping, DTW）来对齐这些维度。在对齐后，细胞被嵌入到共享的低维空间中（这里用 t-SNE 在 2D 中可视化）。"),s("br"),t._v(" "),s("strong",[t._v("(c)")]),t._v(" 在对齐后，单一的整合聚类可以在不同条件下识别保守的细胞类型，允许进行比较分析，以确定细胞类型比例的变化，以及对药物治疗的细胞类型特定的转录反应。")])]),t._v(" "),s("h3",{attrs:{id:"figure-2-integrated-analysis-of-resting-and-stimulated-pbmcs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#figure-2-integrated-analysis-of-resting-and-stimulated-pbmcs"}},[t._v("#")]),t._v(" Figure 2. Integrated analysis of resting and stimulated PBMCs")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fnbt.4096/MediaObjects/41587_2018_Article_BFnbt4096_Fig2_HTML.jpg?as=webp",alt:"Figure 2"}})]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Figure 2. 静息和受刺激的 PBMCs 的整合分析")]),t._v(" "),s("p",[s("strong",[t._v("(a-c)")]),t._v(" 14,039 个人类 PBMCs 分别在 control 和 IFN-β 刺激条件下，在对齐前(a) 和对齐后(b)。对齐后，不同刺激条件下的细胞根据共享的细胞类型分组在一起，允许一个单一的联合聚类 (c) 来检测 13 个免疫群体。 "),s("br"),t._v(" "),s("strong",[t._v("(d)")]),t._v(" 整合分析揭示了细胞类型特异性标志物（Cell-type-specific markers）、独立于细胞类型的 IFN-β 统一的标志物（Uniform IFN-β markers）、以及不同细胞类型特异性的 IFN-β 标志物（\nCell-type-specific IFN-β markers）。每个圆圈的大小反映了在一个 cluster 中被检测到基因的细胞的百分比，颜色强度反映了每个 cluster 内的平均表达水平。 "),s("br"),t._v(" "),s("strong",[t._v("(e)")]),t._v(" 受刺激细胞和未受刺激细胞每个 cluster（n = 13 clusters）的细胞比例（8 个供体的中位数）。 "),s("br"),t._v(" "),s("strong",[t._v("(f)")]),t._v(" DC 和 pDC 对 IFN-β 的异质反应的例子。每一列代表单个患者中单细胞的平均基因表达。"),s("br"),t._v(" "),s("strong",[t._v("(g)")]),t._v(" IFN-β 细胞类型特异性反应的相关性热图（n = 430 genes）。来自髓系和淋巴系的细胞表现出高度相关的反应，但浆细胞样树突状细胞（pDC）表现出独特的 IFN-β 反应。")])]),t._v(" "),s("h3",{attrs:{id:"figure-3-comparative-analysis-of-mouse-hematopoietic-progenitors-across-scrna-seq-technologies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#figure-3-comparative-analysis-of-mouse-hematopoietic-progenitors-across-scrna-seq-technologies"}},[t._v("#")]),t._v(" Figure 3. Comparative analysis of mouse hematopoietic progenitors across scRNA-seq technologies")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fnbt.4096/MediaObjects/41587_2018_Article_BFnbt4096_Fig3_HTML.jpg?as=webp",alt:"Figure 3"}})]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Figure 3. 跨 scRNA-seq 技术对小鼠造血祖细胞的比较分析")]),t._v(" "),s("p",[s("strong",[t._v("(a-c)")]),t._v(" 使用 MARS-Seq (2,686) 和 SMART-Seq2（SS2; 765）对 3,451 个造血祖细胞的 t-SNE 图，在对齐之前(a) 和对齐之后(b,c)。对齐后，细胞根据共享的祖细胞类型聚集在一起，而不考虑测序技术。"),s("br"),t._v(" "),s("strong",[t._v("(c-d)")]),t._v(" 来自 SMART-Seq2 数据集的细胞被映射到最近的 MARS-Seq cluster 和相关谱系上（from Paul et al.）。t-SNE 图中的细胞用指定的谱系着色 (c)。映射 SMART-Seq2 谱系分配（from Nestorawa et al.）和 MARS-Seq clusters(d) 之间的对应关系。"),s("br"),t._v(" "),s("strong",[t._v("(e-f)")]),t._v(" 热图显示了在 MARS-Seq 和 SMART-Seq2 数据集中谱系特异性基因的表达模式。每一列代表在细胞按原始的 MARS-Seq cluster 分配(e) 或映射到 MARS-Seq cluster(f) 分组后的平均表达量。"),s("br"),t._v(" "),s("strong",[t._v("(g-h)")]),t._v(" 在两个数据集中，红细胞的综合扩散图显示了一个对齐的发育轨迹(g)，具有保守的 '拟时序' 动力学(h)。"),s("br"),t._v(" "),s("strong",[t._v("(i)")]),t._v(" 散点图比较了两个数据集每个基因在发育轨迹上的表达范围（绝对值）。")])]),t._v(" "),s("h3",{attrs:{id:"figure-4-joint-identification-of-cell-types-across-human-and-mouse-islet-scrna-seq-atlases"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#figure-4-joint-identification-of-cell-types-across-human-and-mouse-islet-scrna-seq-atlases"}},[t._v("#")]),t._v(" Figure 4. Joint identification of cell types across human and mouse islet scRNA-seq atlases")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fnbt.4096/MediaObjects/41587_2018_Article_BFnbt4096_Fig4_HTML.jpg?as=webp",alt:"Figure 4"}})]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Figure 4. 人类和小鼠胰岛 scRNA-seq 图谱中细胞类型的联合鉴定")]),t._v(" "),s("p",[s("strong",[t._v("(a-c)")]),t._v(" 来自人类 (n=8,424 cells) 和小鼠 (n=1,767 cells) 供体的 10,191 个胰岛细胞，在对齐前(a) 和对齐后(b) 的 t-SNE 图。对齐后，基于共享细胞类型跨物种进行细胞分组，允许联合聚类 (c) 检测到 10 个细胞群。"),s("br"),t._v(" "),s("strong",[t._v("(d-e)")]),t._v(" 对人类 (d) 和小鼠 (e) 之间共享的细胞类型标记物的无监督识别。跨物种联合 DE 检测鉴定的基因的单细胞表达热图。"),s("br"),t._v(" "),s("strong",[t._v("(f)")]),t._v(" 小提琴图显示了人类（n=2,431 cells）和小鼠（n=762 cells）细胞类群中选择基因的基因表达分布，以及人类（n=126 cells）和小鼠（n=10 cells）应激细胞类群的基因表达分布。"),s("br"),t._v(" "),s("strong",[t._v("(g)")]),t._v(" 在两个物种的 'ER-stress' 亚群中上调的前 n = 100 基因在内质网未折叠蛋白应激反应的成分中强烈富集。使用 GOplot R 包可视化 GO 富集。")])]),t._v(" "),s("h3",{attrs:{id:"figure-5-benchmarking-alignment-and-batch-correction-methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#figure-5-benchmarking-alignment-and-batch-correction-methods"}},[t._v("#")]),t._v(" Figure 5. Benchmarking alignment and batch correction methods")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fnbt.4096/MediaObjects/41587_2018_Article_BFnbt4096_Fig5_HTML.jpg?as=webp",alt:"Figure 5"}})]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Figure 5. 基准测试对齐和批次校正方法")]),t._v(" "),s("p",[s("strong",[t._v("(a,d,g,j,m)")]),t._v(" ComBat 校正后的 t-SNE 图。 "),s("br"),t._v(" "),s("strong",[t._v("(b,e,h,k,n)")]),t._v(" limma 校正后的 t-SNE 图。 "),s("br"),t._v(" "),s("strong",[t._v("(c,f,i,l,o)")]),t._v(" 在使用 Seurat、ComBat、limma 校正后以及未经校正的情况下，校正分数的条形图。Seurat 对齐在这五个示例中表现优于其他方法。")])])])}),[],!1,null,null,null);e.default=r.exports}}]);