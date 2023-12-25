import { NextPage } from "next";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Experience from "../../components/Experience";

const Home: NextPage = () => {
	return (
		<main className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll scroll-smooth z-0">
			{/* Header */}
			<Header />
			{/* Hero */}
			<section id="hero" className="snap-start">
				<Hero />
			</section>
			{/* About */}
			<section id="about" className="snap-center">
				<About />
			</section>
			{/* experience */}
			{/* <section id="experience" className="snap-center">
				<Experience />
			</section> */}
			{/* Skills */}

			{/* Projects */}

			{/* contact us */}
		</main>
	);
};

export default Home;
