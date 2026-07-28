import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import About from "./components/About";
import Resume from "./components/Resume";
import { SITE_CONFIG, SITE_CONTENT } from "./config/site";

export default function App() {
  return (
    <>
      <Header
        siteLogo={SITE_CONFIG.siteLogo}
        logoAlt={`${SITE_CONTENT.hero.name} logo`}
        navLinks={SITE_CONFIG.navLinks}
      />

      <main className="mx-auto max-w-5xl px-5">
        <Hero {...SITE_CONTENT.hero} />
        <Experience experience={SITE_CONTENT.experience} />
        <Projects projects={SITE_CONTENT.projects} />
        <Resume resumeHref={SITE_CONTENT.hero.resumeHref} />
        <About {...SITE_CONTENT.about} name={SITE_CONTENT.hero.name} />
      </main>

      <Footer author={SITE_CONFIG.author} socialLinks={SITE_CONFIG.socialLinks} />
    </>
  );
}
