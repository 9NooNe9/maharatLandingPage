"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Experience = (props: Props) => {
	return (
		<motion.div
			initial={{}}
			className="h-screen flex relative overflow-hidden flex-col text-left 
		md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
		>
			<h3 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-2xl">
				محصولات
			</h3>

			<div>{/* کارت محصولات */}9</div>
		</motion.div>
	);
};

export default Experience;
