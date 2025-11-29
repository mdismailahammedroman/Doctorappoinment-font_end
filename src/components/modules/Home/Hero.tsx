"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Hero() {
    return (
        <section className="bg-linear-to-r from-teal-500 via-teal-400 to-teal-600 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950">
            <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center gap-10">

                {/* Left */}
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                        AI-Powered Healthcare
                    </h1>

                    <p className="mt-4 text-gray-800 dark:text-gray-200 text-lg md:text-xl max-w-lg">
                        Discover top-rated doctors tailored to your needs. Book consultations and manage your health effortlessly.
                    </p>

                    {/* CTA */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Link href="/consultation">
                            <Button className="
  bg-teal-700 
  text-white 
  hover:bg-teal-800
  focus-visible:ring-2 
  focus-visible:ring-white/80
  dark:focus-visible:ring-teal-300
">
                                Book Consultation
                            </Button>

                        </Link>

                        <Link href="/health-plans">
                            <Button
                                variant="outline"
                                className="border-teal-700 text-teal-700 hover:bg-teal-100 dark:hover:bg-gray-800"
                            >
                                Explore Health Plans
                            </Button>
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-8">
                        <div>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">1.2K+</p>

                            <p className="text-gray-700 dark:text-gray-300">Patients Served</p>
                        </div>

                        <div>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">150+</p>
                            <p className="text-gray-700 dark:text-gray-300">Doctors Available</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <Star className="text-yellow-400 w-5 h-5" />
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">4.9</p>
                            <p className="text-gray-700 dark:text-gray-300">Rating</p>
                        </div>
                    </div>
                </div>

                {/* Right */}
                <div className="flex-1">
                    <Card className="p-6 shadow-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                            Find Your Doctor in Seconds
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            Our AI recommends top doctors based on your needs, location, and health plan.
                        </p>
                        <Link href="/consultation">
                            <Button className="bg-teal-700 text-white hover:bg-teal-800 w-full">
                                Start Now
                            </Button>
                        </Link>
                    </Card>
                </div>

            </div>
        </section>
    );
}
