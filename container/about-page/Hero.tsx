"use client";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -500]);

  // Split the text into lines for staggered animation
  const textLines = [
    `Influidity Solution wasn't just founded,it was crafted with purpose in 2017. A vision to empower businesses not with theories, but with real, working strategies that evolve, adapt, and create lasting impact.`,
  
    `We believe growth isn't a formula, it's a force. One that demands agility, bold decisions, and partners who understand the weight of ambition. That's where we come in.`,
  
    `No templates. No shortcuts. Just a relentless pursuit of what works. Because when a business moves right, it doesn't just grow, it sets the pace for what's next.`,
  ];

  // Animation controls for each line
  const controls = textLines.map(() => useAnimation());

  useEffect(() => {
    // Function to animate lines sequentially
    const animateLines = async () => {
      for (let i = 0; i < textLines.length; i++) {
        await controls[i].start((index) => ({
          opacity: 1,
          transition: { delay: index * 0.002, duration: 0.8 },
        }));
      }
    };

    animateLines();
  }, [controls, textLines]);

  return (
    <section className="w-full relative z-30 padding-y rounded-t-[20px] bg-background">
      <div className="w-full flex flex-col justify-between">
        <div className="w-full flex flex-col">
          <div className="w-full border-t border-[#21212155] pt-[160px]">
            <div className="w-full flex justify-between padding-x sm:flex-col xm:flex-col gap-[20px]">
              <div className="w-[30%] sm:w-full xm:w-full mt-1 flex justify-center">
                <h3 className="font-semibold text-secondry text-6xl font-NeueMontreal">
                  About us
                </h3>
              </div>

              <motion.div
                className="w-[70%] sm:w-full xm:w-full mt-10"
                style={{ y }}
              >
                <div className="flex flex-col gap-y-[20px]">
                  {textLines.map((line, lineIndex) => (
                    <motion.div
                      key={lineIndex}
                      initial={{ opacity: 0 }}
                      animate={controls[lineIndex]}
                    >
                      <p className="text-xl font-NeueMontreal text-secondry">
                        {line.split("").map((char, charIndex) => (
                          <motion.span
                            key={charIndex}
                            custom={charIndex}
                            initial={{ opacity: 0 }}
                            animate={controls[lineIndex]}
                          >
                            {char}
                          </motion.span>
                        ))}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}