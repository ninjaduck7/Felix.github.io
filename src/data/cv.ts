import type { Education, Experience, Publication, Skill } from '@/types/cv'

// TODO: Add verified roles, organizations, dates, and descriptions.
export const experiences: Experience[] = []

export const education: Education[] = [
	{
		school: 'Beijing Institute of Technology',
		time: 'Sep 2025 - Present',
		degree: 'Ph.D. in Physics',
		location: 'Beijing, China',
	},
	{
		school: 'Southwest University',
		time: 'Sep 2021 - Jun 2025',
		degree: 'B.Sc. in Physics',
		location: 'Chongqing, China',
	},
]

export const educationZh: Education[] = [
	{
		school: '北京理工大学',
		time: '2025.09 – 至今',
		degree: '物理学博士研究生',
		location: '中国·北京',
	},
	{
		school: '西南大学',
		time: '2021.09 – 2025.06',
		degree: '物理学学士',
		location: '中国·重庆',
	},
]

export const skills: Skill[] = [
	{
		title: 'Scientific computing',
		description: 'Python, Jupyter, numerical experiments, and reproducible evaluation.',
	},
	{
		title: 'GPU programming',
		description: 'CUDA, Triton, TileLang, profiling, and correctness-first benchmarking.',
	},
	{
		title: 'Optimization research',
		description: 'Quantum-inspired algorithms, combinatorial optimization, diffusion processes, and learning-based operations research.',
	},
]

export const skillsZh: Skill[] = [
	{
		title: '科学计算',
		description: 'Python、Jupyter、数值实验与可复现性评估。',
	},
	{
		title: 'GPU 编程',
		description: 'CUDA、Triton、TileLang、性能分析与正确性优先的基准测试。',
	},
	{
		title: '优化研究',
		description: '量子启发算法、组合优化、扩散过程与学习驱动的运筹优化。',
	},
]

// TODO: Add publications only after titles, author order, venues, years, and URLs are verified.
export const publications: Publication[] = []
