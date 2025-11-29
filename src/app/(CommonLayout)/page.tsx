import Hero from "@/components/modules/Home/Hero";
import SpecialitiesSection from "@/components/modules/Home/SpecialitiesSection";
import Steps from "@/components/modules/Home/Steps";
import Testimonials from "@/components/modules/Home/Testimonials";
import TopRatedDoctor from "@/components/modules/Home/TopRatedDoctor";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>AI-Powered Healthcare | Find Top Doctors</title>
        <meta
          name="description"
          content="Discover top-rated doctors, book consultations, explore health plans, and manage your wellness effortlessly."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yourdomain.com/" />

        {/* Open Graph / Social */}
        <meta property="og:title" content="AI-Powered Healthcare" />
        <meta
          property="og:description"
          content="Find top doctors and manage your health effortlessly."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta
          property="og:image"
          content="https://yourdomain.com/og-image.png"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI-Powered Healthcare" />
        <meta
          name="twitter:description"
          content="Find top doctors and manage your health effortlessly."
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/og-image.png"
        />
      </Head>

      <main className="antialiased">
        <Hero />
        <SpecialitiesSection />
        {/* <TopRatedDoctor /> */}
        {/* <Steps /> */}
        {/* <Testimonials /> */}
      </main>
    </>
  );
}
