import Link from "next/link";
import { Facebook, Instagram, Mail, Phone, Twitter } from "lucide-react";

export default function PublicFooter() {
  return (
    <footer className="border-t bg-ring">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold text-teal-700 dark:text-teal-400">Medly-Healthcare</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
              Your AI-powered healthcare companion for smart medical decisions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-3 uppercase text-gray-900 dark:text-gray-100">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-300">
              <li><Link href="#" className="hover:text-teal-700">Consultation</Link></li>
              <li><Link href="#" className="hover:text-teal-700">Health Plans</Link></li>
              <li><Link href="#" className="hover:text-teal-700">Medicine</Link></li>
              <li><Link href="#" className="hover:text-teal-700">Diagnostics</Link></li>
              <li><Link href="#" className="hover:text-teal-700">NGOs</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold mb-3 uppercase text-gray-900 dark:text-gray-100">
              Support
            </h3>
            <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-300">
              <li><Link href="#" className="hover:text-teal-700">About Us</Link></li>
              <li><Link href="#" className="hover:text-teal-700">Contact</Link></li>
              <li><Link href="#" className="hover:text-teal-700">Terms & Conditions</Link></li>
              <li><Link href="#" className="hover:text-teal-700">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold mb-3 uppercase text-gray-900 dark:text-gray-100">
              Get in Touch
            </h3>
            <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-300">
              <li className="flex items-center space-x-2">
                <Phone size={16} /> <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} /> <span>support@medly.com</span>
              </li>
            </ul>

            <div className="flex space-x-4 mt-4">
              <Link href="#" aria-label="Facebook" className="text-gray-700 dark:text-gray-300 hover:text-teal-700">
                <Facebook size={20} />
              </Link>
              <Link href="#" aria-label="Twitter" className="text-gray-700 dark:text-gray-300 hover:text-teal-700">
                <Twitter size={20} />
              </Link>
              <Link href="#" aria-label="Instagram" className="text-gray-700 dark:text-gray-300 hover:text-teal-700">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

        </div>

        <div className="border-t mt-8 pt-6 text-sm text-center text-gray-700 dark:text-gray-300">
          © {new Date().getFullYear()} Medly-Healthcare. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
