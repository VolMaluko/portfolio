/** @format */

"use client";
import { motion } from "motion/react";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { Button } from "../ui/button";

export function Hero() {
	return (
		<section
			id='hero'
			className='relative min-h-screen flex items-center justify-center overflow-hidden pt-16'>
			{/* Animated Background Grid */}
			<div className='absolute inset-0 bg-[linear-gradient(to_right,#1e293b_0.7px,transparent_0.7px),linear-gradient(to_bottom,#1e293b_0.7px,transparent_0.7px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_30%_50%_at_50%_50%,#000_20%,transparent_140%)]' />

			{/* Glowing Orbs */}
			<div className='absolute bottom-2 left-1/5 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl animate-pulse' />
			<div className='absolute bottom-1/4 right-1 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse delay-1000' />
			<div className='absolute top-1 left-3/6 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl animate-pulse' />
			<div className='absolute bottom-1/4 left-1 w-96 h-96 bg-yellow-100/20 rounded-full blur-3xl animate-pulse delay-1000' />

			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}>
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
						className='inline-block mb-6 px-4 py-2 bg-linear-to-r from-cyan-700/10 to-blue-300/10 border border-cyan-800/20 rounded-full'>
						<span className='text-cyan-400'>Desenvolvedor Front End</span>
					</motion.div>

					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}
						className='mb-6'>
						<span className='block text-slate-400 mb-2'>Olá, eu sou</span>
						<span className='block bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent'>
							Volnei Carlos Danielli Junior
						</span>
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6 }}
						className='text-slate-400 max-w-2xl mx-auto mb-8'>
						Especializado em React, Next.js e tecnologias modernas. Criando
						experiências web incríveis com código limpo.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.8 }}
						className='flex flex-wrap gap-4 justify-center mb-12'>
						<Button className='bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 border-0'>
							Ver Projetos
						</Button>
						<Button
							variant='outline'
							className='border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10'>
							Entre em Contato
						</Button>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1 }}
						className='flex gap-6 justify-center'>
						{[
							{ icon: Github, href: "https://github.com/VolMaluko" },
							{
								icon: Linkedin,
								href: "https://www.linkedin.com/in/volnei-danielli",
							},
							{ icon: Mail, href: "#contact" },
						].map((social, index) => (
							<motion.a
								key={index}
								href={social.href}
								target={social.icon === Mail ? undefined : "_blank"}
								whileHover={{ scale: 1.1, y: -2 }}
								whileTap={{ scale: 0.95 }}
								className='w-12 h-12 rounded-full bg-slate-800/50 border border-cyan-500/20 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors'>
								<social.icon size={20} />
							</motion.a>
						))}
					</motion.div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.2, repeat: Infinity, duration: 2 }}
					className='absolute bottom-8 left-1/2 -translate-x-1/2'>
					<ArrowDown className='text-cyan-400' size={24} />
				</motion.div>
				<br />
				<br />
				<br />
			</div>
		</section>
	);
}
