/** @format */

"use client";
import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Projects() {
	const projects = [
		{
			title: "E-Commerce Platform",
			description:
				"Plataforma completa de e-commerce com Next.js, integração de pagamento e painel administrativo.",
			image: "https://images.unsplash.com/photo-1557821552-17105176677c",
			tags: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
			github: "#",
			demo: "#",
		},
		{
			title: "Dashboard Analytics",
			description:
				"Dashboard interativo para análise de dados em tempo real com gráficos e métricas avançadas.",
			image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
			tags: ["React", "D3.js", "Node.js", "MongoDB"],
			github: "#",
			demo: "#",
		},
		{
			title: "Social Media App",
			description:
				"Aplicativo de rede social com feed em tempo real, chat e notificações push.",
			image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113",
			tags: ["React Native", "Firebase", "Redux", "WebSocket"],
			github: "#",
			demo: "#",
		},
		{
			title: "AI Content Generator",
			description:
				"Ferramenta de geração de conteúdo utilizando IA para criar textos e imagens automaticamente.",
			image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
			tags: ["Next.js", "OpenAI", "PostgreSQL", "Prisma"],
			github: "#",
			demo: "#",
		},
		{
			title: "Task Management System",
			description:
				"Sistema completo de gerenciamento de tarefas com Kanban board e colaboração em equipe.",
			image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
			tags: ["React", "TypeScript", "Supabase", "DnD"],
			github: "#",
			demo: "#",
		},
		{
			title: "Portfolio Builder",
			description:
				"Plataforma para criação de portfólios profissionais com templates customizáveis.",
			image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d",
			tags: ["Next.js", "Tailwind", "MDX", "Vercel"],
			github: "#",
			demo: "#",
		},
	];

	return (
		<section id='projects' className='py-24 relative'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='text-center mb-16'>
					<h2 className='mb-4 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
						Projetos em Destaque
					</h2>
					<div className='w-20 h-1 bg-linear-to-r from-cyan-500 to-blue-600 mx-auto rounded-full' />
				</motion.div>

				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{projects.map((project, index) => (
						<motion.div
							key={project.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							className='group relative flex flex-col h-full'>
							<div className='absolute inset-0 bg-linear-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all' />
							<div className='relative bg-slate-900/50 border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all flex flex-col h-full'>
								<div className='relative aspect-video overflow-hidden'>
									<ImageWithFallback
										src={project.image}
										alt={project.title}
										className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
									/>
									<div className='absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60' />
								</div>

								<div className='p-6 flex flex-col flex-1'>
									<h3 className='mb-3 text-slate-100'>{project.title}</h3>
									<p className='text-slate-400 mb-4'>{project.description}</p>

									<div className='flex flex-wrap gap-2 mb-6'>
										{project.tags.map((tag) => (
											<span
												key={tag}
												className='px-3 py-1 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-cyan-400'>
												{tag}
											</span>
										))}
									</div>

									<div className='flex gap-3 mt-auto'>
										<Button
											variant='outline'
											size='sm'
											className='flex-1 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10'>
											<Github size={16} className='mr-2' />
											Código
										</Button>
										<Button
											size='sm'
											className='flex-1 bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 border-0'>
											<ExternalLink size={16} className='mr-2' />
											Demo
										</Button>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
