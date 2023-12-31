"use client";
import React from "react";
import { motion } from "framer-motion";
import logo from "../public/images/logo-fanavarn.png";

type Props = {
	directionLeft?: boolean;
};

const Skill = ({ directionLeft }: Props) => {
	return (
		<div className="group relative flex cursor-pointer">
			<motion.img
				initial={{
					x: 200,
					opacity: 1,
				}}
				transition={{
					duration: 1,
				}}
				whileInView={{
					x: 0,
					opacity: 1,
				}}
				src={logo.src}
				className="rounded-full border border-gray-500 bg-white object-cover 
        w-12 h-12 xl:w-24 xl:h-24 filter"
			/>
		</div>
	);
};

export default Skill;
