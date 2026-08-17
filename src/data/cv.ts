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

// TODO: Add publications only after titles, author order, venues, years, and URLs are verified.
export const publications: Publication[] = []
