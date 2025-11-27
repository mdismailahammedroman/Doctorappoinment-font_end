"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

type Testimonial = {
  name: string;
  role: string;
  rating: number;
  photo?: string;
  message: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Emily Clark",
    role: "Patient",
    rating: 5,
    photo: "/patients/emily.jpg",
    message: "The AI-powered recommendations helped me find the perfect doctor. Booking appointments is so easy!",
  },
  {
    name: "James Wilson",
    role: "Patient",
    rating: 4.8,
    photo: "/patients/james.jpg",
    message: "I love the personalized health plans. It really made managing my health stress-free.",
  },
  {
    name: "Sophia Lee",
    role: "Patient",
    rating: 4.9,
    photo: "/patients/sophia.jpg",
    message: "Amazing service! The consultation process is smooth, and the doctors are very professional.",
  },
  {
    name: "Michael Brown",
    role: "Patient",
    rating: 4.7,
    photo: "/patients/michael.jpg",
    message: "Highly recommend! The platform is easy to use, and the doctors are top-notch.",
  },
];

export default function SlidingTestimonials() {
  return (
    <section className="py-24 bg-border dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-600">
          What Our Patients Say
        </h2>
        <p className="mt-3 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Hear from our happy patients who experienced our AI-powered healthcare platform.
        </p>

        <div className="mt-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <Card className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-shadow duration-300 mx-2">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="w-16 h-16 mb-4">
                      {testimonial.photo ? (
                       <AvatarImage src={testimonial.photo} alt={testimonial.name} loading="lazy" />

                      ) : (
                        <AvatarFallback>{testimonial.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                      )}
                    </Avatar>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                    <div className="flex items-center mt-2 mb-4 justify-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.round(testimonial.rating) ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{testimonial.message}</p>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
