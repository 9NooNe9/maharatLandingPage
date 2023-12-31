"use client";
import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

const array = {
	bosh: {
		title: "بوش سیلندر",
		description: `این واحد با بهره گیری از ۵ دستگاه کوره القایی با ظرفیت های 
	مختلف و دستگاه های پیشرفتـه ریخته گری گریز از مرکز قادر به
	تولید انواع بوش سیلندر به وزن ها و ابعاد مختلف و قطعات سبک و
	نیمه سنگین می باشد. کلیه مراحل فرآیند ریخته گری از ورود مواد
	اولیه تا خروج محصول نهایی تحت کنترل بسیار دقیق قرار می گیرد
	و در این راستا کیفیت مواد ورودی، ترکیب شیمیایی مذاب، درجه
	حرارت و روند جوانه زنی با استفاده از امکانات آزمایشگاهی در
	محدوده تعیین شده کنترل و نگهداری می شوند انواع بوش سیلندر
	های موجود در مهارت :`,
		atributes: [
			"سنگ خورده",
			"خشن تراش خورده",
			"تمام شده",
			"خام",
			"داخل تراش",
		],
	},
	sit: {
		title: "سیت دود و هوا",
		description:
			"سیت های دود و هوااز زمان تاسیس شرکت مهارت سیتهای دود و هوا ی چدنی بصورت شاخه ای جهت استفاده در سرسیلندر انواع خودرو تولید می گردیده است ولیکن با توجه بـه تغییرات در نوع موتورها و گاز سوز شدن خودروهـا واحد تحقیق و توسعه شرکت برآن شدکه جهت بهبود کیفیت برای اولین بـار درکشور سیتهای فولادی را به روش گریز از مرکز تولید نماید.",
		atributes: ["سیت دود", "سیت هوا"],
	},
};

type Props = {};

const Experience = (props: Props) => {
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
			className="h-screen flex relative overflow-hidden flex-col text-left 
		md:flex-row max-w-full px-4 md:px-10 justify-evenly mx-auto items-center"
		>
			<h3 className="absolute top-16 md:top-24 uppercase tracking-[8px] text-gray-500 text-sm">
				محصولات
			</h3>

			<div className="w-full mt-10 md:mt-28 flex space-x-5 overflow-x-scroll p-5 snap-x snap-mandatory scroll-smooth">
				<ExperienceCard infos={array.bosh} />
				<ExperienceCard infos={array.sit} />
				{/* <ExperienceCard infos={array.bosh} />
				<ExperienceCard infos={array.sit} /> */}
			</div>
		</motion.div>
	);
};

export default Experience;
