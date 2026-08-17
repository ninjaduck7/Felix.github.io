export interface Project {
	name: string
	description: string
	language: string
	href: string
	tags: string[]
}

// Descriptions and languages are based on the public GitHub repository metadata.
export const projects: Project[] = [
	{
		name: 'Tensor Network Basics',
		description:
			'Final project for the Spring 2026 Open Quantum Systems course at the School of Physics, Beijing Institute of Technology.',
		language: 'Jupyter Notebook',
		href: 'https://github.com/ninjaduck7/Tensor-network-basics',
		tags: ['tensor networks', 'open quantum systems'],
	},
	{
		name: 'Permutation Groups, Young Diagrams, and Characters',
		description:
			'Calculation and visualization of irreducible character tables for the symmetric group S_n.',
		language: 'HTML',
		href: 'https://github.com/ninjaduck7/PermutationGroup-YoungDiagram-Character',
		tags: ['group theory', 'visualization'],
	},
	{
		name: 'Oner Formula Generator',
		description:
			'A browser-based formula generator. The public repository is available for source inspection and experimentation.',
		language: 'HTML',
		href: 'https://github.com/ninjaduck7/Oner_formula_generator',
		tags: ['web', 'tooling'],
	},
	{
		name: 'Solid-State Physics Review',
		description:
			'A Python GUI for reviewing chapter exercises in solid-state physics.',
		language: 'Python',
		href: 'https://github.com/ninjaduck7/SWU_solid_phy_final',
		tags: ['physics', 'education'],
	},
	{
		name: 'MS VS Code',
		description:
			'An experimental PowerShell project published as open source on GitHub.',
		language: 'PowerShell',
		href: 'https://github.com/ninjaduck7/MS_VS_CODE',
		tags: ['PowerShell', 'experiment'],
	},
]
