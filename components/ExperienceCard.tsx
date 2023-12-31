import React from "react";
import bush from "../public/images/bosh.jpg";
import { motion } from "framer-motion";

type Props = {
	infos: { title: string; description: string; atributes: string[] };
};

const ExperienceCard = (props: Props) => {
	return (
		<article
			className="text-right flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 
    w-[330px] md:w-[600px] xl:w-[1000px] snap-center bg-[#292929] p-5 hover:opacity-100 
    opacity-60 cursor-pointer transition-opacity duration-200 overflow-hidden"
		>
			<motion.img
				initial={{
					y: 100,
					opacity: 0,
				}}
				transition={{
					duration: 1.5,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
				}}
				viewport={{ once: true }}
				className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
				src={bush.src}
				alt="bosh"
			/>
			<motion.div
				initial={{
					y: 100,
					opacity: 0,
				}}
				transition={{
					duration: 1.5,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
				}}
				viewport={{ once: true }}
				className="px-0 md:px-10"
			>
				<h4 className="text-2xl font-light">{props.infos.title}</h4>
				<p className="font-thin text-[0.6rem] md:text-sm mt-1 pl-5">
					{props.infos.description}
				</p>
				<ul className="list-disc mt-3 space-y-3 mr-5 text-[0.6rem] md:text-sm">
					{props.infos.atributes.map((atribute) => (
						<li key={atribute}>{atribute}</li>
					))}
				</ul>
			</motion.div>
		</article>
	);
};

export default ExperienceCard;
