import { NextPage } from "next";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Experience from "../../components/Experience";
import Skills from "../../components/Skills";

const Home: NextPage = () => {
	return (
		<main className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll scroll-smooth z-0">
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

			<section id="skills" className="snap-center">
				<Skills />
			</section>
			{/* Projects */}

			{/* contact us */}
		</main>
	);
};

export default Home;
