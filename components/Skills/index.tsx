/** @format */

"use client";
import { motion } from "motion/react";

export function Skills() {
	const skillCategories = [
		{
			title: "Frontend",
			skills: [
				{ name: "React", level: 48 },
				{ name: "Next.js", level: 48 },
				{ name: "TypeScript", level: 30 },
				{ name: "Tailwind CSS", level: 30 },
				{ name: "HTML/CSS", level: 60 },
			],
		},
		{
			title: "Backend",
			skills: [
				{ name: "Node.js", level: 15 },
				{ name: "Express", level: 12 },
				{ name: "PostgreSQL", level: 20 },
				{ name: "MongoDB", level: 28 },
				{ name: "GraphQL", level: 15 },
			],
		},
		{
			title: "Ferramentas & Outros",
			skills: [
				{ name: "Git & GitHub", level: 60 },
				{ name: "Docker", level: 7 },
				{ name: "AWS", level: 7 },
				{ name: "Figma", level: 60 },
				{ name: "CI/CD", level: 0 },
			],
		},
	];

	return (
		<section id='skills' className='py-24 relative'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='text-center mb-16'>
					<h2 className='mb-4 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
						Habilidades Técnicas
					</h2>
					<div className='w-20 h-1 bg-linear-to-r from-cyan-500 to-blue-600 mx-auto rounded-full' />
				</motion.div>

				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{skillCategories.map((category, categoryIndex) => (
						<motion.div
							key={category.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
							className='relative group'>
							<div className='absolute inset-0 bg-linear-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all' />
							<div className='relative p-8 bg-slate-900/50 border border-cyan-500/20 rounded-2xl hover:border-cyan-500/50 transition-colors'>
								<h3 className='mb-6 text-slate-100'>{category.title}</h3>
								<div className='space-y-5'>
									{category.skills.map((skill, skillIndex) => (
										<div key={skill.name}>
											<div className='flex justify-between mb-2'>
												<span className='text-slate-300'>{skill.name}</span>
												<span className='text-cyan-400'>{skill.level}%</span>
											</div>
											<div className='h-2 bg-slate-800 rounded-full overflow-hidden'>
												<motion.div
													initial={{ width: 0 }}
													whileInView={{ width: `${skill.level}%` }}
													viewport={{ once: true }}
													transition={{
														duration: 1,
														delay: categoryIndex * 0.2 + skillIndex * 0.1,
														ease: "easeOut",
													}}
													className='h-full bg-linear-to-r from-cyan-500 to-blue-600 rounded-full'
												/>
											</div>
										</div>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
