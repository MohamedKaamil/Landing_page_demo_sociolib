"use client";

import { Facebook, Twitter, Youtube, Mail, Phone } from "lucide-react";
import Link from "next/link";

/**
 * Footer replicates the closing section of the original template.
 * It uses a dark background and three columns: company info with
 * social icons, office details with contact information, and
 * navigation links. At the bottom a small bar displays a credit and
 * basic legal links. The colours and spacing align with the overall
 * scheme defined in Tailwind config. Social icons are supplied by
 * lucide‑react to avoid external font dependencies.
 */
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12 pt-20 pb-16">
        {/* Column: Logo & description */}
        <div>
          <Link href="#" className="inline-block mb-4">
            {/* Use the same logo image as in the header */}
            <img
              src="https://demo.sociolib.com/mulk/wp-content/uploads/sites/7/2021/10/mulk.png"
              alt="Mulk logo"
              width={120}
              height={28}
            />
          </Link>
          <p className="mb-10 max-w-xs text-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-white transition"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="hover:text-white transition"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="hover:text-white transition"
              aria-label="YouTube"
            >
              <Youtube size={20} />
            </a>
          </div>
        </div>
        {/* Column: Office info */}
        <div>
          <h6 className="text-white font-semibold mb-6">OFFICE</h6>
          <p className="text-md mb-6">
            Amphitheatre Parkway, Mountain <br /> View,California, 94043
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-md">
              <Mail size={18} /> mail@mulk.agency
            </li>
            <li className="flex items-center gap-2 text-md">
              <Phone size={18} /> +123 456 789
            </li>
          </ul>
        </div>
        {/* Column: Menu & Links */}
        <div className="grid grid-cols-2 gap-10">
          <div>
            <h6 className="text-white font-semibold mb-6">MENU</h6>
            <ul className="space-y-2 text-md">
              <li>
                <Link href="#process" className="hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="text-white font-semibold mb-6">LINKS</h6>
            <ul className="space-y-2 text-md lg:mb-20">
              <li>
                <Link href="#" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-12 pt-6 pb-4 text-sm text-white-500 flex flex-col md:flex-row items-center justify-between px-4">
        <span className="mb-4 md:mb-0">Powered by SocioLib.</span>
        <div className="space-x-4">
          <Link href="#" className="hover:text-white transition">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-white transition">
            Our Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}