'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Stethoscope, Heart, Brain, Bone, Pill } from "lucide-react";

const specialties = [
  { name: "Cardiology", description: "Heart care specialists.", icon: Heart },
  { name: "Neurology", description: "Brain and nervous system.", icon: Brain },
  { name: "Orthopedics", description: "Bone and joint care.", icon: Bone },
  { name: "General Medicine", description: "Everyday health & wellness.", icon: Stethoscope },
  { name: "Pharmacy", description: "Medicines and prescriptions.", icon: Pill },
];

export default function SpecialitiesSection() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-teal-600 dark:text-teal-400">
          Our Specialties
        </h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Explore our top medical specialties and find the right doctor for your needs.
        </p>

        <div className="mt-10 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {specialties.map(({ name, description, icon: Icon }) => (
            <Card
              key={name}
              className="hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader className="flex flex-col items-center">
                <div className="bg-teal-100 dark:bg-teal-900 rounded-full p-4 mb-3">
                  <Icon className="text-teal-600 dark:text-teal-400 w-6 h-6" />
                </div>
                <CardTitle className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  {name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300 text-center">
                  {description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
