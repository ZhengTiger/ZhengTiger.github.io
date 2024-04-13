(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{462:function(t,e,s){"use strict";s.r(e);var a=s(1),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("题目: 单细胞数据综合整合"),s("br"),t._v("\nDOI: "),s("a",{attrs:{href:"https://doi.org/10.1016/j.cell.2019.05.031",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://doi.org/10.1016/j.cell.2019.05.031"),s("OutboundLink")],1),s("br"),t._v("\nCite: Stuart T, Butler A, Hoffman P, et al. Comprehensive Integration of Single-Cell Data. "),s("em",[t._v("Cell")]),t._v(". 2019;177(7):1888-1902.e21.")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("相关阅读")]),t._v(" "),s("p",[t._v("微信公众号："),s("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzkwMjM0MzA5MA==&mid=2247484097&idx=3&sn=b45f934b3ad34ffebd4b334c68a873f5&chksm=c0a7b21cf7d03b0aa3b4eb4b082d1885dc8e5025ee01f86a5db8876293440ae43e4ccca90046&token=2087503041&lang=zh_CN#rd",target:"_blank",rel:"noopener noreferrer"}},[t._v("文献阅读：(Seurat V3) 单细胞数据综合整合"),s("OutboundLink")],1),t._v(" "),s("br"),t._v(" "),s("br"),t._v("\n站内文章：")]),t._v(" "),s("ol",[s("li",[s("RouterLink",{attrs:{to:"/pages/0d1fce/"}},[t._v("文献阅读 --- (Seurat V1) Spatial reconstruction of single-cell gene expression data")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/pages/f37280/"}},[t._v("文献阅读 --- (Seurat V2) Integrating single-cell transcriptomic data across different conditions, technologies, and species")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/pages/d26f9e/"}},[t._v("文献阅读 --- (Seurat V3) Comprehensive Integration of Single-Cell Data")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/pages/b4dfe0/"}},[t._v("文献阅读 --- (Seurat V4) Integrated analysis of multimodal single-cell data")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/pages/8c5839/"}},[t._v("文献阅读 --- (Seurat V5) Dictionary learning for integrative, multimodal and scalable single-cell analysis")])],1)])]),t._v(" "),s("p",[s("strong",[t._v("作者介绍：")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("Rahul Satija")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("img",{attrs:{src:"https://as.nyu.edu/content/dam/nyu-as/faculty/images/satija-rahul-photo.jpg",width:"200"}})])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("New York Genome Center")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("a",{attrs:{href:"mailto:rsatija@nygenome.org"}},[t._v("rsatija@nygenome.org")])])])])]),t._v(" "),s("h2",{attrs:{id:"abstract"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),s("p",[t._v('单细胞转录组学改变了我们表征细胞状态的能力，但深入的生物学理解需要的不仅仅是簇的分类列表。随着测量不同细胞模式的新方法出现，一个关键的分析挑战是整合这些数据集以更好地了解细胞身份和功能。在这里，我们开发了一种将不同数据集锚定 ("anchor") 在一起的策略，使我们不仅能够跨 scRNA-seq 技术，而且能够跨不同模式整合单细胞测量。在证明了整合 scRNA-seq 数据的现有方法的改进后，我们将 scRNA-seq 实验与 scATAC-seq 结合起来，以探索密切相关的中间神经元亚群中的染色质差异，并将蛋白质表达测量结果投影到骨髓图谱上，以表征淋巴细胞群体。最后，我们协调原位基因表达和 scRNA-seq 数据集，允许对空间基因表达模式进行转录组范围的填充 (imputation)。我们的工作提出了一种整合参考和跨数据集信息传输的策略。')]),t._v(" "),s("h2",{attrs:{id:"results"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#results"}},[t._v("#")]),t._v(" Results")]),t._v(" "),s("h3",{attrs:{id:"figure-1-schematic-overview-of-reference-assembly-integration-in-seurat-v3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#figure-1-schematic-overview-of-reference-assembly-integration-in-seurat-v3"}},[t._v("#")]),t._v(' Figure 1. Schematic Overview of Reference "Assembly" Integration in Seurat v3')]),t._v(" "),s("p",[s("img",{attrs:{src:"https://www.cell.com/cms/attachment/0b5769d4-0da2-4420-b360-d3586d09f450/gr1_lrg.jpg",alt:"Figure 1"}})]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v('Figure 1. Seurat v3 中 Reference "Assembly" Integration 的示意图概述')]),t._v(" "),s("p",[s("strong",[t._v("(A)")]),t._v(" 表示两个数据集，参考数据集（reference）和查询数据集（query），每个数据集都来自单独的单细胞实验。这两个数据集共享来自相似生物状态的细胞，但查询数据集包含一个独特的细胞群（用黑色表示）。 "),s("br"),t._v(" "),s("strong",[t._v("(B)")]),t._v(" 我们执行典型相关分析（canonical correlation analysis, CCA），然后对典型相关向量进行 L2 normalization，将数据集投射到由跨数据集共享相关结构定义的子空间中。 "),s("br"),t._v(" "),s("strong",[t._v("(C)")]),t._v(" 在共享空间中，我们识别参考数据集和查询数据集之间的 MNN（mutual nearest neighbors）对。这些应该代表数据集之间共享生物状态的细胞（灰色线），并用作指导数据集整合的锚点（anchors）。原则上，独特细胞群中的细胞（黑色）不应参与锚点，但在实践中，我们观察到低频次的“错误”锚点（红色线）。 "),s("br"),t._v(" "),s("strong",[t._v("(D)")]),t._v(" 对于每对锚点，我们根据每个数据集的邻域结构中锚点的一致性分配分数。 "),s("br"),t._v(" "),s("strong",[t._v("(E)")]),t._v(" 我们利用锚点及其分数为每个查询细胞计算“校正”向量，转换其表达量，使其可以作为整合参考的一部分进行联合分析。")])]),t._v(" "),s("h3",{attrs:{id:"figure-2-comparison-of-multi-dataset-integration-methods-for-scrna-seq"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#figure-2-comparison-of-multi-dataset-integration-methods-for-scrna-seq"}},[t._v("#")]),t._v(" Figure 2. Comparison of Multi-dataset Integration Methods for scRNA-Seq")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://www.cell.com/cms/attachment/56d08099-208b-4cac-a8a4-e6fb69d95f26/gr2_lrg.jpg",alt:"Figure 2"}})]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Figure 2. 针对 scRNA-Seq 的多数据集整合方法的比较")]),t._v(" "),s("p",[s("strong",[t._v("(A–H)")]),t._v(" 使用 Seurat v3（A and E）、Seurat v2（B and F）、mnnCorrect（C and G）和Scanorama（D and H）进行整合后，根据数据集（A–D）和细胞类型（E–H）着色的八个胰岛细胞数据集的 UMAP 图。为了考验这些方法对于非重叠细胞群的稳健性，每个数据集在整合之前都保留了一个单一的细胞类型。 "),s("br"),t._v(" "),s("strong",[t._v("(I-J)")]),t._v(" anchor scores（I）和 counts（J）的分布，根据错误锚点（锚点对中的不同细胞类型）和正确锚点（锚点对中的相同细胞类型）进行分离。 "),s("br"),t._v(" "),s("strong",[t._v("(K-L)")]),t._v(" 用于评估四种方法在两个主要属性上的整合性能的指标：跨数据集的细胞“混合”（K）和保留数据集内局部结构（L）。")])]),t._v(" "),s("h3",{attrs:{id:"figure-3-transferring-cell-state-classifications-across-datasets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#figure-3-transferring-cell-state-classifications-across-datasets"}},[t._v("#")]),t._v(" Figure 3. Transferring Cell State Classifications across Datasets")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://www.cell.com/cms/attachment/6fa78f6e-92a2-49e1-b140-5572bffdb181/gr3_lrg.jpg",alt:"Figure 3"}})]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Figure 3. 跨数据集传输细胞状态分类")]),t._v(" "),s("p",[s("strong",[t._v("(A)")]),t._v(" 示意图，其中识别的锚点允许在参考数据集和查询数据集之间传递离散标签。 "),s("br"),t._v(" "),s("strong",[t._v("(B)")]),t._v(' 一个细胞类型保留评估的混淆矩阵，其中从参考数据集中删除了胰腺 alpha 细胞。在查询中，细胞类型少于两个细胞的情况未显示出来。查询中的 alpha 细胞始终获得最低的分类分数，并被标记为 "Unassigned"。'),s("br"),t._v(" "),s("strong",[t._v("(C)")]),t._v(" 在人类胰岛和小鼠视网膜中的 166 个 test/training 数据集上的分类基准测试。"),s("br"),t._v(" "),s("strong",[t._v("(D)")]),t._v(" 一个细胞类型保留实验（如 B 中所述）的预测分数分布。错误分类调用与较低的预测分数相关。"),s("br"),t._v(" "),s("strong",[t._v("(E)")]),t._v(" 将 scRNA-seq 数据与分类过的 scATAC-seq 细胞共同可视化（左）。我们在小鼠视觉皮层的 scRNA-seq 数据（reference）和从 scATAC-seq（query）数据集中得出的基因活性矩阵之间识别了 anchors，并转移了类别注释（右）。"),s("br"),t._v(" "),s("strong",[t._v("(F)")]),t._v(" 我们通过将每个细胞类型内的细胞汇集在一起，创建了 pseudo-bulk ATAC-seq 表达谱。每个细胞类型都在其附近的经典标记基因处显示出富集的可及性。染色质可及性轨迹在每个汇集组中都归一化到测序深度（RPKM）。每个位点的 y 轴最大值因不同位点的最大读数深度固有差异而不同。"),s("br"),t._v(" "),s("strong",[t._v("(G)")]),t._v(" 我们在 PV 特异性可及性峰中搜索过表达的 DNA motifs，并识别 Mef2c 和 Rora motifs 为最丰富的 motifs。"),s("br"),t._v(" "),s("strong",[t._v("(H)")]),t._v(" Mef2c 和 Rora 在 scRNA-seq 中也在 PV interneurons 中表达上调。")])]),t._v(" "),s("h3",{attrs:{id:"figure-4-imputing-immunophenotypes-in-a-transcriptomic-atlas-of-the-human-bone-marrow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#figure-4-imputing-immunophenotypes-in-a-transcriptomic-atlas-of-the-human-bone-marrow"}},[t._v("#")]),t._v(" Figure 4. Imputing Immunophenotypes in a Transcriptomic Atlas of the Human Bone Marrow")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://www.cell.com/cms/attachment/4d941d26-4868-439f-a350-e7d5b58f0c0f/gr4_lrg.jpg",alt:"Figure 4"}})]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Figure 4. 人类骨髓转录组图谱的免疫表型填充")]),t._v(" "),s("p",[s("strong",[t._v("(A)")]),t._v(" 使用一个包含 35,543 个骨髓细胞和 25 种表面蛋白的 CITE-seq 数据集进行的免疫表型推断交叉验证。"),s("br"),t._v(" "),s("strong",[t._v("(B)")]),t._v(" 预测准确性与用于确定 anchors 的转录组特征数量之间的关系。"),s("br"),t._v(" "),s("strong",[t._v("(C)")]),t._v(" 我们整合了由 HCA 生成的 274,932 个骨髓细胞，并对细胞类型进行了注释。利用 CITE-seq 骨髓细胞，我们预测了整合 HCA 数据集中的蛋白质表达水平，并观察到与已知细胞类型一致的表达模式。"),s("br"),t._v(" "),s("strong",[t._v("(D)")]),t._v(" 预测的 CD8+ CD69+ 细胞在所有八个供体中上调了一组炎性细胞因子和趋化因子基因。图中显示了每个人类供体的平均 RNA 表达值。"),s("br"),t._v(" "),s("strong",[t._v("(E)")]),t._v(" 我们对 scRNA-seq 数据中鉴定的 CD69+ 标记基因进行了验证，通过对 FACS 分离的 CD8+ CD69+/- 细胞进行大规模 RNA 测序，揭示出一组类似的差异表达基因。"),s("br"),t._v(" "),s("strong",[t._v("(F)")]),t._v(" 我们按照 HCA 和 CITE-seq 数据集中 CD69 表达对 CD8+ 记忆细胞进行了排序，并沿着这个 CD69 轴计算了每个基因的自相关性（Moran's I）。CD69+ 标记基因在 HCA 数据集中一致地显示出更高的 Moran's I 值，反映了数量级更大的细胞数量带来的增加的统计功率。")])]),t._v(" "),s("h3",{attrs:{id:"figure-5-spatial-patterns-of-gene-expression-in-the-mouse-brain"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#figure-5-spatial-patterns-of-gene-expression-in-the-mouse-brain"}},[t._v("#")]),t._v(" Figure 5. Spatial Patterns of Gene Expression in the Mouse Brain")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://www.cell.com/cms/attachment/d4c74763-4e74-431e-af81-696381213069/gr5_lrg.jpg",alt:"Figure 5"}})]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Figure 5. 小鼠大脑中基因表达的空间模式")]),t._v(" "),s("p",[s("strong",[t._v("(A)")]),t._v(" scRNA-seq 和 STARmap 数据集之间数据 transfer 的示意图。在使用两个实验中都测量到的基因子集识别 anchors 后，我们随后将测序数据 transfer 到 STARmap 细胞，预测新的空间表达模式。"),s("br"),t._v(" "),s("strong",[t._v("(B)")]),t._v(" 对展现出预测的表达模式和原始 STARmap 测量的八个基因的留一交叉验证。"),s("br"),t._v(" "),s("strong",[t._v("(C)")]),t._v(" Rorb、Syt6、Lamp5 和 Sox10 的基因表达模式，由 osmFISH（一种高度敏感的单分子分析技术）在小鼠体感皮层中测量得到。"),s("br"),t._v(" "),s("strong",[t._v("(D)")]),t._v(" 对四个原始未被 STARmap 分析的基因的预测表达模式。"),s("br"),t._v(" "),s("strong",[t._v("(E)")]),t._v(" 在两个 STARmap 重复中每个预测基因表达模式的 Moran's I 值，这是空间自相关性的一种度量。突显了 VLMCs、内皮细胞和血管周围巨噬细胞的标记基因，反映了在仅一个重复中有空间限制的罕见细胞亚群。"),s("br"),t._v(" "),s("strong",[t._v("(F)")]),t._v(" 从 SMART-seq2 数据集 transferred 的预测细胞类型的横向压缩的 STARmap 细胞。"),s("br"),t._v(" "),s("strong",[t._v("(G)")]),t._v(" 每个预测的 STARmap 细胞类型中细胞类型标记基因的表达（结合了两个重复的数据）。")])])])}),[],!1,null,null,null);e.default=r.exports}}]);