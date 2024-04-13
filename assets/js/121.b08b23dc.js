(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{475:function(t,e,s){"use strict";s.r(e);var r=s(1),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("题目: 用于集成、多模态和可扩展单细胞分析的字典学习"),s("br"),t._v("\nDOI: "),s("a",{attrs:{href:"https://doi.org/10.1038/s41587-023-01767-y",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://doi.org/10.1038/s41587-023-01767-y"),s("OutboundLink")],1),s("br"),t._v("\nCite: Hao, Y., Stuart, T., Kowalski, M.H. et al. Dictionary learning for integrative, multimodal and scalable single-cell analysis. "),s("em",[t._v("Nat Biotechnol")]),t._v(" (2023).")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("相关阅读")]),t._v(" "),s("p",[t._v("微信公众号："),s("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzkwMjM0MzA5MA==&mid=2247484097&idx=5&sn=e494a7e4bfacc44fc0c28389586ef48b&chksm=c0a7b21cf7d03b0aeb5704e834283c50ca19b2c3584c6fd262460098b5c87f95c70976974387&token=2087503041&lang=zh_CN#rd",target:"_blank",rel:"noopener noreferrer"}},[t._v("文献阅读：(Seurat V5) 用于集成、多模态和可扩展单细胞分析的字典学习"),s("OutboundLink")],1),t._v(" "),s("br"),t._v(" "),s("br"),t._v("\n站内文章：")]),t._v(" "),s("ol",[s("li",[s("RouterLink",{attrs:{to:"/pages/0d1fce/"}},[t._v("文献阅读 --- (Seurat V1) Spatial reconstruction of single-cell gene expression data")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/pages/f37280/"}},[t._v("文献阅读 --- (Seurat V2) Integrating single-cell transcriptomic data across different conditions, technologies, and species")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/pages/d26f9e/"}},[t._v("文献阅读 --- (Seurat V3) Comprehensive Integration of Single-Cell Data")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/pages/b4dfe0/"}},[t._v("文献阅读 --- (Seurat V4) Integrated analysis of multimodal single-cell data")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/pages/8c5839/"}},[t._v("文献阅读 --- (Seurat V5) Dictionary learning for integrative, multimodal and scalable single-cell analysis")])],1)])]),t._v(" "),s("p",[s("strong",[t._v("作者介绍：")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("Rahul Satija")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("img",{attrs:{src:"https://as.nyu.edu/content/dam/nyu-as/faculty/images/satija-rahul-photo.jpg",width:"200"}})])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("New York Genome Center")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("a",{attrs:{href:"mailto:rsatija@nygenome.org"}},[t._v("rsatija@nygenome.org")])])])])]),t._v(" "),s("h2",{attrs:{id:"abstract"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),s("p",[t._v("将单细胞测序图谱映射到综合参考数据集为无监督分析提供了强大的替代方案。然而，大多数参考数据集是根据单细胞 RNA 测序数据构建的，不能用于注释不测量基因表达的数据集。在这里，我们介绍 'bridge integration'，一种使用多组学数据集作为分子桥跨模态整合单细胞数据集的方法。多组学数据集中的每个细胞构成 'dictionary' 中的一个元素，用于重建单模态数据集并将其转换为共享空间。我们的程序准确地将转录组数据与染色质可及性、组蛋白修饰、DNA 甲基化和蛋白质水平的独立单细胞测量相结合。此外，我们还演示了如何将 dictionary learning 与 sketching 技术相结合，以提高计算可扩展性并协调来自测序和质谱流式实验的 860 万个人类免疫细胞图谱。我们的方法在 Seurat 工具包第 5 版 ("),s("a",{attrs:{href:"http://www.satijalab.org/seurat",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.satijalab.org/seurat"),s("OutboundLink")],1),t._v(") 中实施，扩大了单细胞参考数据集的实用性，并促进了不同分子模式之间的比较。")]),t._v(" "),s("h2",{attrs:{id:"results"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#results"}},[t._v("#")]),t._v(" Results")]),t._v(" "),s("h3",{attrs:{id:"figure-1-integrating-across-modalities-with-molecular-bridges"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#figure-1-integrating-across-modalities-with-molecular-bridges"}},[t._v("#")]),t._v(" Figure 1. Integrating across modalities with molecular bridges")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41587-023-01767-y/MediaObjects/41587_2023_1767_Fig1_HTML.png?as=webp",alt:"Figure 1"}})]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Figure 1. 跨模态和分子桥的整合")]),t._v(" "),s("p",[s("strong",[t._v("a.")]),t._v(" bridge integration workflow 的概括示意图。两个数据集分别测量了不同的模态（例如，scRNA-seq 和 scATAC-seq），可以通过第三个数据集进行协调，其中两种模态同时测量（例如，10x multiome）。我们使用多种可用作桥梁的多组学技术演示了 bridge integration，包括10x multiome、Paired-Tag、snmC2T、CITE-seq，每种技术都有助于与不同的分子模态进行集成。中间的方框列出了可用于生成 bridge 数据集的备选多组学技术。 "),s("br"),t._v(" "),s("strong",[t._v("b.")]),t._v(" bridge integration 过程中每个步骤的数学示意图。在补充方法中提供了完整的描述。为了清晰起见，此示意图中所示的矩阵名称与补充方法中定义的矩阵名称相同。")])]),t._v(" "),s("h3",{attrs:{id:"figure-2-mapping-scatac-seq-data-onto-scrna-seq-references"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#figure-2-mapping-scatac-seq-data-onto-scrna-seq-references"}},[t._v("#")]),t._v(" Figure 2. Mapping scATAC-seq data onto scRNA-seq references")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41587-023-01767-y/MediaObjects/41587_2023_1767_Fig2_HTML.png?as=webp",alt:"Figure 2"}})]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Figure 2. 将 scATAC-seq 数据映射到 scRNA-seq 参考数据上")]),t._v(" "),s("p",[s("strong",[t._v("a.")]),t._v(" 人类骨髓的 scRNA-seq 参考数据集的 UMAP 可视化，代表了 297,627 个已注释的 scRNA-seq profiles。 "),s("br"),t._v(" "),s("strong",[t._v("b.")]),t._v(" Granja et al. scATAC-seq 查询数据集的 UMAP 可视化，代表了 26,159 个 profiles，跨五个批次，其中三个批次富集了 CD34 表达的细胞。 "),s("br"),t._v(" "),s("strong",[t._v("c.")]),t._v(" bridge integration 后，query cells 基于 scRNA-seq 定义的细胞本体进行了注释，并且可以在同一嵌入中进行可视化。 "),s("br"),t._v(" "),s("strong",[t._v("d-f.")]),t._v(" Coverage plots 显示在将 query cells 按其预测注释分组后，在所选位点的染色质可及性。在每种情况下，预测的细胞标签与预期的可及性模式相符。 "),s("br"),t._v(" "),s("strong",[t._v("g.")]),t._v(" 我们构建了一个髓系分化的分化轨迹和拟时序排序。扩散图坐标（DC）中的拟时序排序涵盖了 scRNA-seq 和 scATAC-seq 细胞。 "),s("br"),t._v(" "),s("strong",[t._v("h.")]),t._v(" 我们观察到 MPO 基因表达动态与上游调控区域的可及性动态之间存在“滞后”，这在一个示例位点中得以展示（i中的黄色方框表示）。 "),s("br"),t._v(" "),s("strong",[t._v("i.")]),t._v(" MPO 调控位点的染色质可及性。在多潜能 LMPP 阶段，突出显示的区域变得可及。 "),s("br"),t._v(" "),s("strong",[t._v("j.")]),t._v(" MPO 在 RNA 水平上在髓系的 GMP 阶段高表达。 "),s("br"),t._v(" "),s("strong",[t._v("k.")]),t._v(" 我们在 236 个基因中发现了可及性和转录动态之间存在滞后的情况下的 KEGG 通路富集。"),s("br"),t._v(" "),s("strong",[t._v("l.")]),t._v(" 六个与细胞周期相关基因的拟时序下平滑的染色质可及性水平（红色）和滞后的相关基因表达（蓝色）随拟时序的变化。")])]),t._v(" "),s("h3",{attrs:{id:"figure-3-robustness-and-benchmarking-analysis-for-bridge-integration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#figure-3-robustness-and-benchmarking-analysis-for-bridge-integration"}},[t._v("#")]),t._v(" Figure 3. Robustness and benchmarking analysis for bridge integration")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41587-023-01767-y/MediaObjects/41587_2023_1767_Fig3_HTML.png?as=webp",alt:"Figure 3"}})]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Figure 3. bridge integration 的鲁棒性和基准分析")]),t._v(" "),s("p",[s("strong",[t._v("a.")]),t._v(" 基于多组学数据集中每个细胞类型的细胞数量，bridge integration 的细胞类型预测一致性。通过对多组学数据集进行连续降采样，重复进行 bridge integration，并将得到的查询注释与从完整数据集导出的注释进行比较，获得一致性结果。箱线图表示 21 种细胞类型的值范围。"),s("br"),t._v(" "),s("strong",[t._v("b.")]),t._v(" 在使用 bridge integration、multiVI、Cobolt 进行跨模态注释后，在 SIGLEC6 位点的 Coverage plots。只有由 bridge integration 分类为 ASDCs 的细胞在该位点表现出特定于细胞类型的可及性。附加位点显示在 Supplementary Fig.2e,f 中。 "),s("br"),t._v(" "),s("strong",[t._v("c.")]),t._v(" 基准测试分析。来自 10x multiome 数据集的 RNA 和 ATAC profiles 被不配对地进行了集成。条形图显示了每个 scATAC-seq 细胞与其匹配的 scRNA-seq 细胞之间的平均 Jaccard 相似性值 ± 标准偏差（n = 30,253 cell pairs）。结果在 Supplementary Fig. 3 中按各个细胞类型分开显示。还为 Paired-Tag 数据集显示了三种组蛋白修饰概要的结果：H3K27ac（n = 10,906 cells）、H3K27me3（n = 6,280 cells）和 H3K4me1（n = 12,638 cells）。在每种情况下，bridge integration 实现了最高的 Jaccard 相似性。"),s("br"),t._v(" "),s("strong",[t._v("d.")]),t._v(" 人类运动皮层的 scRNA-seq 参考数据集。 "),s("br"),t._v(" "),s("strong",[t._v("e-f.")]),t._v(" 将人类大脑皮层 single-cell DNA methylation profiles 通过以 snmC2T-seq多组学数据集作为 bridge 的方式映射到参考数据上。细胞根据原始研究中的甲基化导出的注释（e）或 bridge integration 中的 scRNA-seq 导出的标签进行着色（f）。更精细的参考源标签显示在 Supplementary Fig.3 中。")])]),t._v(" "),s("h3",{attrs:{id:"figure-4-using-dictionary-learning-for-massively-scalable-integration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#figure-4-using-dictionary-learning-for-massively-scalable-integration"}},[t._v("#")]),t._v(" Figure 4. Using dictionary learning for massively scalable integration")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41587-023-01767-y/MediaObjects/41587_2023_1767_Fig4_HTML.png?as=webp",alt:"Figure 4"}})]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Figure 4. 使用字典学习进行大规模可伸缩集成")]),t._v(" "),s("p",[s("strong",[t._v("a.")]),t._v(" atomic sketch integration 过程的示意图。在从每个数据集中选择一组代表性细胞后，这些细胞会被整合并用于重建所有细胞的协调表达谱 (harmonized profiles)。 "),s("br"),t._v(" "),s("strong",[t._v("b-c.")]),t._v(" UMAP 可视化图，显示了 1,525,710 个肺部和上呼吸道研究中的单细胞转录组测序谱，经过 atomic sketch integration 在 55 分钟内完成。细胞根据其原始研究进行了着色 (b) 或在整合后注释的细胞类型 (c)。"),s("br"),t._v(" "),s("strong",[t._v("d.")]),t._v(" 肺部离子细胞转录标记物 FOXI1 在整合数据集中的表达。"),s("br"),t._v(" "),s("strong",[t._v("e.")]),t._v(" 热图显示了在多个研究中一致的肺部离子细胞的顶级转录标记物。为对比，显示了在转录水平上最相似的肺部神经内分泌细胞 (PNECs)。每列代表来自单一细胞类型和单一研究的所有细胞的 pseudobulk 平均值。"),s("br"),t._v(" "),s("strong",[t._v("f.")]),t._v(" 离子细胞标记的基因本体 (GO) 富集术语。"),s("br"),t._v(" "),s("strong",[t._v("g.")]),t._v(" 从单细胞差异表达分析 (红色) 或 pseudobulk 分析 (蓝色) 中恢复的顶级转录标记的表达分布。")])]),t._v(" "),s("h3",{attrs:{id:"figure-5-community-scale-integration-of-sequencing-and-cytometry-immune-datasets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#figure-5-community-scale-integration-of-sequencing-and-cytometry-immune-datasets"}},[t._v("#")]),t._v(" Figure 5. 'Community-scale' integration of sequencing and cytometry immune datasets")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41587-023-01767-y/MediaObjects/41587_2023_1767_Fig5_HTML.png?as=webp",alt:"Figure 5"}})]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Figure 5. '社区规模' 整合测序和细胞免疫数据集")]),t._v(" "),s("p",[s("strong",[t._v("a.")]),t._v(" 在执行 atomic sketch integration 后，UMAP 可视化图显示了横跨 14 个研究和 639 名个体的 3,461,171 个人类 PBMC scRNA-seq profiles。"),s("br"),t._v(" "),s("strong",[t._v("b.")]),t._v(" CD14+ 单核细胞中 COVID-19 响应模块的表达。每列代表来自 506 名个体之一的 CD14+\n单核细胞的 pseudobulk 平均值。模块的表达与个体内的疾病严重程度相关，颜色尺度显示在热图上方。"),s("br"),t._v(" "),s("strong",[t._v("c.")]),t._v(" 使用已发表的 CITE-seq 数据集作为多组学桥梁，将横跨 119 名个体的 5,170,249 个附加 CyTOF profiles 进行了映射。每个 CyTOF profile 都用 scRNA-seq 定义的细胞类型之一进行了注释。"),s("br"),t._v(" "),s("strong",[t._v("d.")]),t._v(" 跨模态整合使得在 scRNA-seq 定义的细胞景观上探索细胞表面和细胞内蛋白标记成为可能。以细胞内 FOXP3 水平为例，该标记在注释的调节性 T 细胞中富集，验证了我们映射的准确性。为减少重叠绘制，每个可视化中显示了 20 万个细胞。"),s("br"),t._v(" "),s("strong",[t._v("e.")]),t._v(" 热图显示 CyTOF 数据集中 34 个蛋白标记的表达。每列代表将细胞按个体和参考来源的注释分组后的 pseudobulk 平均值。")])])])}),[],!1,null,null,null);e.default=a.exports}}]);