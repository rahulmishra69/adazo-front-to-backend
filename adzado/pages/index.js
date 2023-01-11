// Next
import Head from "next/head";

// Layout
import Layout from "../components/@core/layouts/Layout";
import Footer from "../components/@core/layouts/Footer";

// Sections
import Hero from "../components/@core/pages/home/Hero";
import Features from "../components/@core/pages/home/Features";
import Pricing from "../components/@core/pages/home/Pricing";
import SectionOne from "../components/@core/pages/home/SectionOne.js";
import Stats from "../components/@core/pages/home/Stats";
import Testimonials from "../components/@core/pages/home/Testimonials";
import CTA from "../components/@core/pages/shared/CTA";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Adzado</title>
        <meta
          name="description"
          content="Exclusive Verified Leads that pay off in new business! inbound calls and leads for insurance, financial services, and other industries."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="pt-10 lg:pt-28">
        <Hero />
        <Features />
        <Pricing />
        <SectionOne />
        <Stats />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </Layout>
  );
};

export default Home;
