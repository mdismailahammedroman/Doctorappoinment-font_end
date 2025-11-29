"use client";

import { Card } from "@/components/ui/card";
import { User, Calendar, ClipboardCheck, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: <User className="w-7 h-7 text-white" />,
    title: "Create Account",
    description: "Sign up quickly to access personalized healthcare services.",
  },
  {
    icon: <Calendar className="w-7 h-7 text-white" />,
    title: "Book Consultation",
    description: "Select a doctor and schedule an appointment at your convenience.",
  },
  {
    icon: <ClipboardCheck className="w-7 h-7 text-white" />,
    title: "Get Recommendations",
    description: "Receive AI-powered treatment plans and health advice tailored to you.",
  },
  {
    icon: <CheckCircle className="w-7 h-7 text-white" />,
    title: "Track Progress",
    description: "Monitor your health and manage follow-ups effortlessly.",
  },
];

export default function ModernSteps() {
  return (
    <section className="py-24 bg-linear-to-b from-teal-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-600 text-center">
          How It Works
        </h2>
        <p className="mt-3 text-gray-700 dark:text-gray-300 text-center max-w-xl mx-auto">
          Follow these simple steps to start your AI-powered healthcare journey with ease.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="flex flex-col items-center text-center p-6 hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-800 rounded-xl"
            >
              <div className="w-16 h-16 bg-linear-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center mb-4 shadow-md">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                {step.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
