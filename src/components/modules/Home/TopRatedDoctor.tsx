
import { Card, CardHeader, } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

type Doctor = {
  name: string;
  specialty: string;
  experience: number; // years
  rating: number; // out of 5
  photo?: string;
};

const topDoctors: Doctor[] = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    experience: 12,
    rating: 4.9,
    photo: "/doctors/sarah.jpg",
  },
  {
    name: "Dr. Michael Lee",
    specialty: "Neurologist",
    experience: 10,
    rating: 4.8,
    photo: "/doctors/michael.jpg",
  },
  {
    name: "Dr. Priya Singh",
    specialty: "Orthopedic Surgeon",
    experience: 8,
    rating: 4.7,
    photo: "/doctors/priya.jpg",
  },
  {
    name: "Dr. John Doe",
    specialty: "General Medicine",
    experience: 15,
    rating: 4.9,
    photo: "/doctors/john.jpg",
  },
];

export default function TopRatedDoctor() {
  return (
    <section className="bg-border dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-teal-600 dark:text-teal-400">
          Top Rated Doctors
        </h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Meet our highly rated doctors and book your consultation with ease.
        </p>

        <div className="mt-10 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {topDoctors.map((doctor) => (
            <Card key={doctor.name} className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center space-y-4">
                <Avatar className="w-20 h-20">
                  {doctor.photo ? (
                    <AvatarImage src={doctor.photo} alt={doctor.name} loading="lazy" />

                  ) : (
                    <AvatarFallback>{doctor.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                  )}
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                    {doctor.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{doctor.specialty}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {doctor.experience} yrs experience
                  </p>
                </div>
                <div className="flex items-center gap-1 text-yellow-400">
                  <Star className="w-4 h-4" />
                  <span className="text-gray-800 dark:text-gray-100 font-medium">{doctor.rating}</span>
                </div>
                <Button className="bg-teal-600 text-white hover:bg-teal-700 w-full mt-2">
                  Book Appointment
                </Button>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
