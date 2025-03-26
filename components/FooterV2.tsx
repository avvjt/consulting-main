"use client"; // Mark as Client Component
import React from "react";
import { Star } from "lucide-react";
import SocialLinks from "./SocialLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";

const FooterV2 = () => {
  const pathname = usePathname(); // Get the current route

  // Normalize the pathname by removing trailing slashes
  const normalizedPathname = pathname?.replace(/\/+$/, "") || "/";

  // List of links
  const links = [
    { href: "/", label: "Home" },
    { href: "/influidity", label: "Influidity" },
    { href: "/consulting", label: "Consulting" },
    { href: "/growthstory", label: "Growth Story" },
    {
      href: "https://linktr.ee/AtomicMari", // External URL
      label: "Portfolio",
      target: "_blank", // Open in a new tab
    },
    { href: "/career", label: "Career" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-white p-8 overflow-hidden rounded-2xl border">
      <div className="relative w-full p-8 bg-black text-white rounded-3xl min-h-screen pt-10">
        <SocialLinks />

        {/* "Send me back up" Button */}
        <div
          onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
          className="top-0 right-0 absolute p-3 bg-white text-black rounded-2xl m-1 cursor-pointer"
        >
          <p>Sh*t I&apos;ve gone too far, send me back up</p>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          {/* Navigation */}
          <nav className="flex justify-between items-start mb-20">
            <div className="ml-10 mt-10">
              <h1 className="text-4xl mb-4">
                Do you like
                <br />
                what you see?
              </h1>
              <button className="bg-[#71edbc] text-black px-6 py-2 rounded-full flex items-center gap-2">
                <Link href="/contact">Start a project</Link>
                <span className="transform rotate-45">↑</span>
              </button>
              <a
                href="https://g.co/kgs/Z53ci41"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 mt-4 cursor-pointer"
              >
                <span className="text-lg">4.99</span>
                <span className="text-sm text-gray-400 font-NeueMontreal">
                  from 100 reviews
                </span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#71edbc" color="#71edbc" />
                  ))}
                </div>
              </a>

            </div>

            <div className="flex gap-20">
              {/* Quick Links */}
              <div>
                <h2 className="text-gray-500 mr-10 mb-4 mt-8">Quick Links</h2>
                <ul className="space-y-2">
                  {links.map((link) => {
                    // Normalize the link's href by removing trailing slashes
                    const normalizedHref = link.href.replace(/\/+$/, "");

                    // Hide the link if it's the current page
                    if (normalizedPathname === normalizedHref) {
                      return null; // Don't render the link
                    }

                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className={`hover:text-primary transition-colors ${normalizedPathname === normalizedHref
                            ? "text-primary font-bold underline"
                            : ""
                            }`}
                        >
                          {link.label}
                          {/* Visual indicator for active link */}
                          {normalizedPathname === normalizedHref && (
                            <span className="ml-2">●</span>
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Get in Touch */}
              <div>
                <h2 className="text-gray-500 mb-4 mt-8">Get in touch</h2>
                <ul className="space-y-2">
                  <li>
                    <a href="tel:+918337998888">+91 8337998888</a>
                  </li>
                  <li>
                    <a href="mailto:connect@influidity.com">connect@influidity.com</a>
                  </li>
                  <li className="mt-4 leading-none">
                    <a
                      href="https://maps.app.goo.gl/9Midw98xvAsTSyvS7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block leading-tight"
                    >
                      <span className="block">823, 8th Floor, DLF Cybercity</span>
                      <span className="block">Idco Info Park, Technology Corridor,</span>
                      <span className="block">Chandaka Industrial Estate, Patia,</span>
                      <span className="block">Bhubaneswar, Odisha 751024</span>
                    </a>
                  </li>
                </ul>
              </div>


            </div>
          </nav>

          {/* Bottom Text */}
          <div className="text-8xl font-medium mt-[8rem]">
            Making Noise Since 2017
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center mt-20 text-sm text-gray-500">
            <div className="flex items-center gap-4">
              <span>Influidity</span>
              <span>© Made by Influidity solutions</span>
              <span>Company Reg Number 0000000</span>
            </div>
            <div className="flex items-center gap-4">
              <span>All Rights Reserved</span>
              <span>Privacy Policy (you really care?)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterV2;