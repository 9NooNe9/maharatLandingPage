"use client";
import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/16/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Inputs = {
	name: string;
	number: number;
	subject: string;
	message: string;
};

const Contact = (props: Props) => {
	const { register, handleSubmit } = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (formData) => {
		window.location.href = `mailto:maharat1362@yahoo?subject=${formData.subject}&body=سلام من ${formData.name} هستم. ${formData.message} شماره تماس : (${formData.number})`;
	};

	return (
		<div
			className="min-h-screen w-[300px] md:w-auto relative flex flex-col text-center md:text-right xl:flex-row max-w-[2000px] 
		xl:px-10 justify-center xl:space-y-0 mx-auto items-center"
		>
			<h3 className="absolute top-16 md:top-24 uppercase tracking-[5px] text-gray-500 text-sm">
				ارتباط با ما
			</h3>

			<div className="relative flex flex-col space-y-6 top-12">
				<h4 className="text-xl font-semibold text-center text-wrap">
					برای اطلاعات بیشتر با پشتیبانی ما{" "}
					<span className="decoration-[#f7ab0a]/50 underline inline-block">
						تماس بگیرید :
					</span>
				</h4>

				<div className="space-y-4">
					<div className="flex flex-row items-center justify-center">
						<a href="tel:08634131563">
							<p className="mt-1 text-base">08634131563</p>
						</a>
						<a href="tel:08634131563">
							<PhoneIcon className="text-[#f7ab0a] h-5 w-5 animate-pulse mr-4" />
						</a>
					</div>
					<div className="flex flex-row items-center justify-center">
						<a href="mailto:maharat1362@yahoo.com">
							<p className="mt-1 text-base">
								maharat1362@yahoo.com
							</p>
						</a>
						<a href="mailto:maharat1362@yahoo.com">
							<EnvelopeIcon className="text-[#f7ab0a] h-5 w-5 animate-pulse mr-4" />
						</a>
					</div>
					<div className="flex flex-row items-center justify-center">
						<a href="http://maps.google.com/?q=شرکت قطعه سازی مهارت، 3RGQ+J4J Hajiabad Industrial Zone, Markazi Province">
							<p className="mt-1 text-[0.7rem]">
								6 کیلومتری جاده اراک قم شهرک صنعتی حاجی آباد
							</p>
						</a>
						<a href="http://maps.google.com/?q=شرکت قطعه سازی مهارت، 3RGQ+J4J Hajiabad Industrial Zone, Markazi Province">
							<MapPinIcon className="text-[#f7ab0a] h-5 w-5 animate-pulse mr-4" />
						</a>
					</div>
				</div>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col space-y-2 max-w-fit mx-auto"
				>
					<div className="flex space-x-2 space-x-reverse">
						<input
							{...register("name")}
							placeholder="نام و نام خانوادگی"
							className="contactInput w-32 md:w-auto"
							type="text"
						/>
						<input
							{...register("number")}
							placeholder="شماره تماس"
							className="contactInput w-32 md:w-auto"
							type="tel"
							pattern="09(0[1-2]|1[0-9]|3[0-9]|2[0-1])-?[0-9]{3}-?[0-9]{4}"
						/>
					</div>

					<input
						{...register("subject")}
						placeholder="موضوع"
						className="contactInput"
						type="text"
					/>

					<textarea
						{...register("message")}
						placeholder="توضیحات"
						className="contactInput min-w-40 min-h-24"
					></textarea>
					<button
						type="submit"
						className="bg-[#f7ab0a] py-3 px-10 rounded-md text-black font-bold text-[0.7rem]"
					>
						ارسال پیام
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
