/** @format */

"use client";
import { motion } from "motion/react";
import { Code2, Rocket, Users, Award } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function About() {
	const stats = [
		{ icon: Code2, label: "Projetos Concluídos", value: "15+" },
		{ icon: Rocket, label: "Anos de Experiência", value: "1+" },
		{ icon: Rocket, label: "Anos de Experiência", value: "1+" },
		{ icon: Rocket, label: "Anos de Experiência", value: "1+" },
	];

	return (
		<section id='about' className='py-24 relative'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='text-center mb-16'>
					<h2 className='mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
						Sobre Mim
					</h2>
					<div className='w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full' />
				</motion.div>

				<div className='grid lg:grid-cols-2 gap-12 items-center mb-20'>
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='relative'>
						<div className='absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-2xl' />
						<div className='relative aspect-square rounded-2xl overflow-hidden border border-cyan-500/20'>
							<ImageWithFallback
								src='https://images.unsplash.com/photo-1498050108023-c5249f4df085'
								alt='Developer workspace'
								className='w-full h-full object-cover'
							/>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='space-y-6'>
						<p className='text-slate-300'>
							Sou um desenvolvedor apaixonado por criar soluções web inovadoras
							e eficientes. Possuo pouca experiência em React, Next.js e
							tecnologias modernas, mas estou todos os dias aprendendo. e
							evoluindo como pessoa e profissional
						</p>
						<p className='text-slate-300'>
							Meu foco está em tentar escrever códigos limpos, escaláveis e
							performáticos, sempre buscando as melhores práticas e mantendo-me
							atualizado com as tendências do mercado de desenvolvimento web.
						</p>
						<div className='flex flex-wrap gap-3'>
							{["React", "Next.js", "TypeScript", "Tailwind CSS"].map(
								(tech) => (
									<span
										key={tech}
										className='px-4 py-2 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-cyan-400'>
										{tech}
									</span>
								)
							)}
						</div>
					</motion.div>
				</div>

				<div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
					{stats.map((stat, index) => (
						<motion.div
							key={stat.label}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							className='relative group'>
							<div className='absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all' />
							<div className='relative p-6 bg-slate-900/50 border border-cyan-500/20 rounded-xl text-center hover:border-cyan-500/50 transition-colors'>
								<stat.icon className='w-8 h-8 mx-auto mb-3 text-cyan-400' />
								<div className='mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
									{stat.value}
								</div>
								<div className='text-slate-400'>{stat.label}</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
