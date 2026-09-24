export const profile = {
	fullName: 'Yufei Zhang',
	shortName: 'Yufei',
	title: 'Ph.D. Student | Quantum-Inspired Algorithms & Optimization',
	institute: 'Beijing Institute of Technology',
	location: 'Beijing, China',
	author_name: 'Yufei Zhang',
	intro:
		'I study quantum-inspired algorithms, combinatorial optimization, diffusion stochastic processes, and learning-based operations research.',
	research_areas: [
		{
			title: 'Quantum-Inspired Algorithms',
			description:
				'Algorithmic ideas inspired by quantum computation, with an emphasis on practical classical methods and evidence-driven evaluation.',
			field: 'physics',
		},
		{
			title: 'Combinatorial Optimization',
			description:
				'Mathematical formulations and efficient algorithms for discrete decision problems, including QUBO and Ising models.',
			field: 'mathematics',
		},
		{
			title: 'Diffusion Stochastic Processes',
			description:
				'Stochastic dynamics, diffusion processes, and their computational role in modeling, sampling, and optimization.',
			field: 'physics',
		},
		{
			title: 'Learning-Based Operations Research',
			description:
				'Machine-learning methods for modeling, accelerating, and improving combinatorial optimization and decision-making workflows.',
			field: 'computer-science',
		},
	],
}

export const profileZh = {
	fullName: 'Yufei Zhang',
	shortName: '雨飞',
	title: '物理学博士研究生 · 量子启发算法与优化',
	institute: '北京理工大学',
	location: '中国·北京',
	author_name: 'Yufei Zhang',
	intro:
		'我的研究聚焦量子启发算法、组合优化、随机扩散过程以及学习驱动的运筹优化，关注方法的可验证性、可复现性与实际计算价值。',
	research_areas: [
		{
			title: '量子启发算法',
			description:
				'从量子计算中汲取算法思想，设计可在经典硬件上高效运行、并能经受严格实验检验的实用方法。',
			field: 'physics',
		},
		{
			title: '组合优化',
			description:
				'研究离散决策问题的数学建模与高效求解，包括 QUBO、Ising 模型及其算法实现。',
			field: 'mathematics',
		},
		{
			title: '随机扩散过程',
			description:
				'研究随机动力学与扩散过程，以及它们在建模、采样和优化中的计算作用。',
			field: 'physics',
		},
		{
			title: '学习驱动的运筹优化',
			description:
				'利用机器学习改进组合优化与决策流程，探索建模、加速和求解质量之间的平衡。',
			field: 'computer-science',
		},
	],
}

// Keep unknown contact and academic-profile URLs empty until they are verified.
export const social = {
	email: 'zyf230822@gmail.com',
	email_secondary: 'zhangyufei@bit.edu.cn',
	linkedin: '', // TODO: add a verified LinkedIn URL.
	x: '',
	bluesky: '',
	github: 'https://github.com/ninjaduck7',
	gitlab: '',
	scholar: '', // TODO: add a verified Google Scholar profile.
	inspire: '',
	arxiv: '',
	orcid: '', // TODO: add a verified ORCID profile.
}

export const template = {
	website_url: 'https://ninjaduck7.github.io',
	menu_left: false,
	transitions: true,
	lightTheme: 'academic-light',
	darkTheme: 'academic-dark',
	excerptLength: 220,
	postPerPage: 6,
	base: '/Felix.github.io',
}

export const seo = {
	default_title: 'Yufei Zhang | Research and Open Source',
	default_description:
		'Personal academic homepage of Yufei Zhang: quantum-inspired algorithms, combinatorial optimization, diffusion stochastic processes, and learning-based operations research.',
	default_image: `${template.base}/profile-picture.png`,
}

export const seoZh = {
	default_title: 'Yufei Zhang | 学术研究与开源项目',
	default_description:
		'Yufei Zhang 的个人学术主页：聚焦量子启发算法、组合优化、随机扩散过程与学习驱动的运筹优化。',
	default_image: `${template.base}/profile-picture.png`,
}
