import { NextPage } from "next";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Experience from "../../components/Experience";
// import Skills from "../../components/Skills";
import Contact from "../../components/Contact";

const Home: NextPage = () => {
	return (
		<main
			className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
		overflow-y-scroll overflow-x-hidden scroll-smooth z-0 scrollbar-none md:scrollbar-thin scrollbar-track-gray-400/20 
		scrollbar-thumb-[#f7ab0a]/80"
		>
			<Header />

			<section id="hero" className="snap-start">
				<Hero />
			</section>

			<section id="about" className="snap-center">
				<About />
			</section>

			<section id="experience" className="snap-center">
				<Experience />
			</section>

			{/* <section id="skills" className="snap-center">
				<Skills />
			</section> */}

			<section id="contact" className="snap-start">
				<Contact />
			</section>
		</main>
	);
};

export default Home;
