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
