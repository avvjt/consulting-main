"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";



// Shooting stars configuration
const stars = [
	{ top: 0, right: 0, delay: 0, duration: 8 },
	{ top: 0, right: 80, delay: 0.2, duration: 6 },
	{ top: 80, right: 0, delay: 0.4, duration: 4 },
];

export default function Hero() {
	return (
		<section
			className="w-full h-screen sm:mb-[-10px] xm:mb-[-10px] relative overflow-hidden"
			data-scroll
			data-scroll-speed="-.3"
		>
			{/* Shooting Stars */}
			{stars.map((star, index) => (
				<span
					key={index}
					className="shooting-star"
					style={{
						top: `${star.top}px`,
						right: `${star.right}px`,
						animationDelay: `${star.delay}s`,
						animationDuration: `${star.duration}s`,
					}}
				/>
			))}

			{/* Existing Hero Content */}
			<div className="w-full h-full flex flex-col justify-between items-center">
  <div />
  <div className="w-full flex flex-col justify-between items-center h-[75vh] sm:h-[85vh] xm:h-[85vh]">
    <div className="w-full flex justify-center gap-[20px] pl-[50px] md:pl-[30px] sm:pl-[20px] xm:pl-[20px]">
      <div>
        <h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase text-center">
          <br />
          <div className="flex items-center gap-[5px] justify-center">
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              transition={{
                ease: [0.86, 0, 0.07, 0.995],
                duration: 1,
                delay: 1.5,
              }}
              className="leading-[130px]"
            ></motion.span>
            <h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase mb-5">
              We are
            </h1>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} // Start hidden and slightly below
            animate={{ opacity: 1, y: 0 }} // Animate to visible and original position
            transition={{
              ease: "easeOut",
              duration: 1,
              delay: 1.5, // Delay the animation to start after "We are"
            }}
            className="text-center"
          >
            Influidity Solution
          </motion.div>
        </h1>
      </div>
      <div></div>
    </div>
  </div>
</div>

			<style jsx global>{`
        @keyframes animate {
          0% {
            transform: rotate(315deg) translateX(0);
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: rotate(315deg) translateX(-1500px);
            opacity: 0;
          }
        }

        .shooting-star {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #000;
          border-radius: 50%;
          box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.1),
            0 0 0 8px rgba(0, 0, 0, 0.1),
            0 0 20px rgba(0, 0, 0, 1);
          animation: animate 3s linear infinite;
          z-index: 0;
        }

        .shooting-star::before {
          content: '';
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 300px;
          height: 1px;
          background: linear-gradient(90deg, #000, transparent);
        }
      `}</style>
		</section>
	);
}
