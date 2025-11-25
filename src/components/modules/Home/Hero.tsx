"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function HeroSection() {
  return (
    <section className="bg-background dark:bg-gray-900">
      <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left: Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-teal-600 dark:text-teal-400">
            AI-Powered Healthcare
          </h1>
          <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg md:text-xl">
            Discover top-rated doctors tailored to your needs. Book consultations, explore health plans, and manage your wellness effortlessly.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/consultation">
              <Button className="bg-teal-600 text-white hover:bg-teal-700">
                Book Consultation
              </Button>
            </Link>
            <Link href="/health-plans">
              <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50 dark:hover:bg-gray-700">
                Explore Health Plans
              </Button>
            </Link>
          </div>
        </div>

        {/* Right: Card / Illustration */}
        <div className="flex-1">
          <Card className="p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Find Your Doctor in Seconds
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Our AI recommends top doctors based on your needs, location, and health plan.
            </p>
            <Link href="/consultation">
              <Button className="bg-teal-600 text-white hover:bg-teal-700">
                Start Now
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
}
