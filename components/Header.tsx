"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

const Header = ({}: Props) => {
	return (
		<header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center overflow-hidden">
			<motion.div
				initial={{
					x: 500,
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 1.5,
				}}
				className="flex flex-row items-center"
			>
				{/* social icons */}
				<SocialIcon
					url="https://instagram.com/maharat_1983"
					fgColor="gray"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://ir.linkedin.com/in/iman-farahani-7193b1202?trk=people-guest_people_search-card"
					fgColor="gray"
					bgColor="transparent"
				/>
				<SocialIcon
					network="whatsapp"
					url="https://https://wa.me/+989123670680"
					fgColor="gray"
					bgColor="transparent"
				/>
				<SocialIcon
					network="email"
					url="mailto:maharat1362@yahoo.com"
					fgColor="gray"
					bgColor="transparent"
				/>
			</motion.div>

			<motion.div
				initial={{
					x: -500,
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 1.5,
				}}
				className="flex flex-row items-center text-gray-300 cursor-pointer"
			>
				<a
					className="flex flex-row items-center md:mt-2 xl:mt-0 xl:mb-2"
					href="tel:08634131563"
				>
					<svg
						className="ml-3 ltr:mr-3 ltr:ml-0 w-7 h-7 mt-2 md:mt-0 text-gray-400"
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 20 20"
					>
						<path
							fill="currentColor"
							d="M17.256 12.253c-.096-.667-.611-1.187-1.274-1.342c-2.577-.604-3.223-2.088-3.332-3.734C12.193 7.092 11.38 7 10 7s-2.193.092-2.65.177c-.109 1.646-.755 3.13-3.332 3.734c-.663.156-1.178.675-1.274 1.342l-.497 3.442C2.072 16.907 2.962 18 4.2 18h11.6c1.237 0 2.128-1.093 1.953-2.305zM10 15.492c-1.395 0-2.526-1.12-2.526-2.5s1.131-2.5 2.526-2.5s2.526 1.12 2.526 2.5s-1.132 2.5-2.526 2.5M19.95 6c-.024-1.5-3.842-3.999-9.95-4C3.891 2.001.073 4.5.05 6s.021 3.452 2.535 3.127c2.941-.381 2.76-1.408 2.76-2.876C5.345 5.227 7.737 4.98 10 4.98s4.654.247 4.655 1.271c0 1.468-.181 2.495 2.76 2.876C19.928 9.452 19.973 7.5 19.95 6"
						/>
					</svg>
					<p className="uppercase hidden md:inline-flex text-sm text-gray-400 mt-4 md:mt-1">
						08634131563
					</p>
				</a>
			</motion.div>
		</header>
	);
};

export default Header;
