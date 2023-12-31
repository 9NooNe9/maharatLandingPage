"use client";
import React, { useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import { motion, useAnimate } from "framer-motion";
import firstLogo from "../public/images/logo-maharat.png";
import secondLogo from "../public/images/logo-fanavarn.png";

type Props = {};

const Hero = (props: Props) => {
	const [logo, setLogo] = useState(true);
	const [loadAnimation, setLoadAnimation] = useState(true);
	const [scope, animate] = useAnimate();
	const changeLogoFan = () => {
		// setTimeout();
		animate([
			[".mainLogo", { rotateY: [0, 22, 45, 67, 90] }, { duration: 0.2 }],
		]);
		setTimeout(() => {
			setLogo(false);
			setLoadAnimation(false);
		}, 200);
	};
	const changeLogoMah = () => {
		animate([
			[".subLogo", { rotateY: [0, 22, 45, 67, 90] }, { duration: 0.2 }],
		]);
		setTimeout(() => {
			setLogo(true);
		}, 200);
	};

	const initial = loadAnimation ? { rotateY: 0 } : { rotateY: 90 };

	const rotate = loadAnimation
		? {
				rotateY: [
					0, 22, 45, 67, 90, 112, 135, 157, 180, 202, 225, 247, 270,
					292, 315, 337, 360, 337, 315, 292, 270, 247, 225, 202, 180,
					157, 135, 112, 90, 67, 45, 22, 0, 0, 22, 45, 67, 90, 112,
					135, 157, 180, 202, 225, 247, 270, 292, 315, 337, 360, 337,
					315, 292, 270, 247, 225, 202, 180, 157, 135, 112, 90, 67,
					45, 22, 0,
				],
		  }
		: {
				rotateY: [90, 67, 45, 22, 1],
		  };

	const transition = loadAnimation
		? {
				duration: 1.5,
		  }
		: {
				duration: 0.2,
		  };
	const [text, count] = useTypewriter({
		words: [
			"شرکت قطعه سازی مهارت",
			"تولید بوش سیلندر و سیت",
			"از 1362",
			"اولین تولید کننده به روش سانتریفیوژ",
		],
		loop: true,
		delaySpeed: 2000,
	});
	return (
		<div
			ref={scope}
			className="h-screen flex flex-col space-y-5 items-center justify-center text-center overflow-hidden pb-10"
		>
			<BackgroundCircles />
			{logo ? (
				<motion.img
					onClick={changeLogoFan}
					initial={initial}
					animate={rotate}
					transition={transition}
					className="mainLogo relative rounded-full h-32 w-32 mx-auto object-fill bg-white"
					src={firstLogo.src}
					alt="logo"
				/>
			) : (
				<motion.img
					initial={{
						rotateY: 90,
					}}
					animate={{
						rotateY: [90, 67, 45, 22, 0],
					}}
					transition={{
						duration: 0.2,
					}}
					onClick={changeLogoMah}
					className="subLogo relative rounded-full h-32 w-32 mx-auto object-fill bg-white"
					src={secondLogo.src}
					alt="logo"
				/>
			)}
			<div className="z-20">
				<h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[5px] mb-10">
					گروه صنعتی مهارت فناوران
				</h2>
				<h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold scroll-px-10">
					<span className="ml-3 ltr:ml-0 ltr:mr-3">{text}</span>
					<Cursor cursorColor="#f7ab0a" />
				</h1>

				<div className="pt-5">
					<Link href={"#about"}>
						<button className="heroButton">درباره ما</button>
					</Link>
					<Link href={"#experience"}>
						<button className="heroButton">محصولات</button>
					</Link>
					<Link href={"#skills"}>
						<button className="heroButton">گواهی نامه ها</button>
					</Link>
					<Link href={"#contact"}>
						<button className="heroButton">ارتباط با ما</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Hero;
