/** @format */

"use client";
import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useState } from "react";

export function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
	};

	const contactInfo = [
		{
			icon: Mail,
			label: "Email",
			value: "volneicdjunior@gmail.com",
			href: "mailto:volneicdjunior@gmail.com",
		},
		{
			icon: Phone,
			label: "Telefone",
			value: "+55 (47) 9925-19723",
			href: "tel:+5547992519723",
		},
		{
			icon: MapPin,
			label: "Localização",
			value: "Balneário Camboriú, SC Brasil",
			href: "www.google.com/maps/place/Balneário+Camboriú,+SC/data=!4m2!3m1!1s0x94d8b65cc2e52aad:0x2dc004f5e6adebc4?sa=X&ved=1t:242&ictx=111",
		},
	];

	return (
		<section id='contact' className='py-24 relative'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='text-center mb-16'>
					<h2 className='mb-4 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
						Entre em Contato
					</h2>
					<div className='w-20 h-1 bg-linear-to-r from-cyan-500 to-blue-600 mx-auto rounded-full' />
				</motion.div>

				<div className='grid lg:grid-cols-2 gap-12'>
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='space-y-8'>
						<div>
							<h3 className='mb-4 text-slate-100'>Vamos Conversar</h3>
							<p className='text-slate-400'>
								Estou sempre aberto a discutir novos projetos, ideias criativas
								ou oportunidades de fazer parte da sua visão.
							</p>
						</div>

						<div className='space-y-6'>
							{contactInfo.map((info, index) => (
								<motion.a
									key={info.label}
									href={info.href}
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6, delay: index * 0.1 }}
									className='flex items-center gap-4 p-4 bg-slate-900/50 border border-cyan-500/20 rounded-xl hover:border-cyan-500/50 transition-colors group'>
									<div className='w-12 h-12 bg-linear-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform'>
										<info.icon className='text-cyan-400' size={20} />
									</div>
									<div>
										<div className='text-slate-400'>{info.label}</div>
										<div className='text-slate-200'>{info.value}</div>
									</div>
								</motion.a>
							))}
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='relative'>
						<div className='absolute inset-0 bg-linear-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl' />
						<form
							onSubmit={handleSubmit}
							className='relative p-8 bg-slate-900/50 border border-cyan-500/20 rounded-2xl space-y-6'>
							<div>
								<label htmlFor='name' className='block text-slate-300 mb-2'>
									Nome
								</label>
								<Input
									id='name'
									type='text'
									placeholder='Seu nome'
									value={formData.name}
									onChange={(e) =>
										setFormData({ ...formData, name: e.target.value })
									}
									className='bg-slate-800/50 border-cyan-500/20 text-slate-100 placeholder:text-slate-500 focus:border-cyan-500/50'
									required
								/>
							</div>

							<div>
								<label htmlFor='email' className='block text-slate-300 mb-2'>
									Email
								</label>
								<Input
									id='email'
									type='email'
									placeholder='seu@email.com'
									value={formData.email}
									onChange={(e) =>
										setFormData({ ...formData, email: e.target.value })
									}
									className='bg-slate-800/50 border-cyan-500/20 text-slate-100 placeholder:text-slate-500 focus:border-cyan-500/50'
									required
								/>
							</div>

							<div>
								<label htmlFor='message' className='block text-slate-300 mb-2'>
									Mensagem
								</label>
								<Textarea
									id='message'
									placeholder='Sua mensagem...'
									rows={6}
									value={formData.message}
									onChange={(e) =>
										setFormData({ ...formData, message: e.target.value })
									}
									className='bg-slate-800/50 border-cyan-500/20 text-slate-100 placeholder:text-slate-500 focus:border-cyan-500/50 resize-none'
									required
								/>
							</div>

							<Button
								type='submit'
								className='w-full bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 border-0'>
								<Send size={16} className='mr-2' />
								Enviar Mensagem
							</Button>
						</form>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='mt-20 pt-8 border-t border-cyan-500/20 text-center text-slate-400'>
					<p>
						Se serviu de inspiração para o seu portfolio, entre em contato :D
						vamos trocar experiências!
					</p>
				</motion.div>
			</div>
		</section>
	);
}
