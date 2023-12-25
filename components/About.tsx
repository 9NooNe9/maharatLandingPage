"use client";
import React from "react";
import { motion } from "framer-motion";
import pic from "../public/images/rikhtegari.jpg";

type Props = {};

const About = (props: Props) => {
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			whileInView={{
				opacity: 1,
			}}
			transition={{
				duration: 1.5,
			}}
			className="flex flex-col relative h-screen text-center md:text-left 
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center overflow-x-hidden"
		>
			<h3 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-2xl">
				درباره ما
			</h3>

			<motion.img
				initial={{
					x: 200,
					opacity: 0,
				}}
				transition={{
					duration: 1.2,
				}}
				whileInView={{
					x: 0,
					opacity: 1,
				}}
				viewport={{ once: true }}
				src={pic.src}
				className="-mb-20 mt-20 md:mb-0 md:mt-0 flex-shrink-0 w-56 h-56 rounded-full
         object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[400px]"
			/>

			<motion.div
				initial={{
					x: -200,
					opacity: 0,
				}}
				whileInView={{
					x: 0,
					opacity: 1,
				}}
				transition={{
					duration: 1.5,
				}}
				viewport={{ once: true }}
				className="space-y-10 px-0 md:px-10 text-center md:text-right"
			>
				<h4 className="text-2xl">
					کمی درباره{" "}
					<span className="rtl underline decoration-[#f7ab0a]/50">
						مجموعه
					</span>{" "}
					ما
				</h4>
				<p className="text-sm md:text-base">
					شرایط خطیر کنونی مسئولیت سنگینی را برای هر ایرانی به خصوص
					صنعتگران این مرز و بوم ایجاد نموده است و راهی وجود ندارد به
					جز اینکه برای رسیدن به یک شرایط اجتماعی پایدار و افزایش
					توانمندی اقتصادی از تمام ظرفیت های خود به بهترین شکل ممکن
					استفاده نماییم وبرای تضمین آرامش خود و نسل های آینده با تمام
					قدرت به میدان بیاییم.
				</p>
			</motion.div>
		</motion.div>
	);
};

export default About;
