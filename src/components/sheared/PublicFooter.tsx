"use client";

import Link from "next/link";
import { Facebook, Instagram, Mail, Phone, Twitter } from "lucide-react";

export default function PublicFooter() {
  return (
    <footer className="border-t bg-gray-50 dark:bg-gray-900 mt-10">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold text-teal-600">Medly-Healthcare</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              Your AI-powered healthcare companion for smart medical decisions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-3 uppercase text-gray-800 dark:text-gray-200">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li><Link href="#" className="hover:text-teal-600">Consultation</Link></li>
              <li><Link href="#" className="hover:text-teal-600">Health Plans</Link></li>
              <li><Link href="#" className="hover:text-teal-600">Medicine</Link></li>
              <li><Link href="#" className="hover:text-teal-600">Diagnostics</Link></li>
              <li><Link href="#" className="hover:text-teal-600">NGOs</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold mb-3 uppercase text-gray-800 dark:text-gray-200">Support</h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li><Link href="#" className="hover:text-teal-600">About Us</Link></li>
              <li><Link href="#" className="hover:text-teal-600">Contact</Link></li>
              <li><Link href="#" className="hover:text-teal-600">Terms & Conditions</Link></li>
              <li><Link href="#" className="hover:text-teal-600">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold mb-3 uppercase text-gray-800 dark:text-gray-200">Get in Touch</h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-center space-x-2"><Phone size={16} /> <span>+1 234 567 890</span></li>
              <li className="flex items-center space-x-2"><Mail size={16} /> <span>support@medly.com</span></li>
            </ul>

            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-gray-500 hover:text-teal-600"><Facebook size={20} /></Link>
              <Link href="#" className="text-gray-500 hover:text-teal-600"><Twitter size={20} /></Link>
              <Link href="#" className="text-gray-500 hover:text-teal-600"><Instagram size={20} /></Link>
            </div>
          </div>

        </div>

        <div className="border-t mt-8 pt-6 text-sm text-center text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Medly-Healthcare. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
