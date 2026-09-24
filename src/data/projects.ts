export interface Project {
	name: string
	description: string
	descriptionZh: string
	language: string
	href: string
	tags: string[]
	tagsZh: string[]
	details?: { label: string; labelZh: string; href: string }[]
	notePath?: string
}

// Keep only projects ready for public display. Descriptions are maintained in both languages.
export const projects: Project[] = [
	{
		name: 'Permutation Groups, Young Diagrams, and Characters',
		description:
			'Calculation and visualization of irreducible character tables for the symmetric group S_n.',
		descriptionZh: '用于计算与可视化对称群 S_n 不可约特征标的工具。',
		language: 'HTML',
		href: 'https://github.com/ninjaduck7/PermutationGroup-YoungDiagram-Character',
		tags: ['group theory', 'visualization'],
		tagsZh: ['群论', '可视化'],
	},
	{
		name: 'TensorCircuit-NG QNTK Figure 2 Reproduction',
		description:
			'An upstream TensorCircuit-NG contribution reproducing Figure 2 QNTK diagnostics with backend-aware JAX and PyTorch runs.',
		descriptionZh: '在 TensorCircuit-NG 上游项目中完成的开源贡献：复现 Figure 2 的 QNTK 诊断，并支持面向后端的 JAX 与 PyTorch 运行。',
		language: 'Python',
		href: 'https://github.com/tensorcircuit/tensorcircuit-ng',
		tags: ['quantum machine learning', 'QNTK', 'reproducibility'],
		tagsZh: ['量子机器学习', 'QNTK', '可复现性'],
		notePath: '/blog/tensorcircuit-qntk-figure2-contribution',
		details: [
			{ label: 'PR #131: Figure 2 reproduction', labelZh: 'PR #131：Figure 2 复现', href: 'https://github.com/tensorcircuit/tensorcircuit-ng/pull/131' },
			{ label: 'PR #132: contributor documentation', labelZh: 'PR #132：贡献者文档', href: 'https://github.com/tensorcircuit/tensorcircuit-ng/pull/132' },
		],
	},
]
