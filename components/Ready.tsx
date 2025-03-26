"use client";
import Link from "next/link";
import { useRef } from "react";
import { TextMask } from "@/animation";
import { ArrowUpRight } from "lucide-react";
import { Eyes, RoundButton, Rounded } from "@/components";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Ready() {
    const container = useRef(null);
    const phrase = ["Your business deserves", "more than", "good advice"];

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"],
    });
    const mq = useTransform(scrollYProgress, [0, 1], [0, -700]);

    return (
        <section
            className="w-full relative z-30 min-h-screen sm:h-screen xm:h-screen border-b-0 rounded-3xl bg-about padding-y rounded-t-[20px]"
            ref={container}>
            <div className="w-full h-full flex justify-center gap-[50px] items-center flex-col">
                <div className="flex flex-col gap-[10px]">
                    <h1 className="text-[200px] leading-[150px] lg:text-[160px] lg:leading-[120px] md:text-[130px] md:leading-[100px] sm:text-[90px] sm:leading-[70px] xm:text-[60px] xm:leading-[50px] tracking-[-2.5px] text-center font-bold font-FoundersGrotesk text-secondry uppercase pointer-events-none">
                        <TextMask>{phrase}</TextMask>
                    </h1>
                </div>
                <div className="flex flex-col items-center gap-[10px]">
                    <div className="flex items-center justify-between bg-secondry cursor-pointer rounded-full group">
                        <RoundButton
                            href="/contact"
                            title="Get Impactful Solutions"
                            className="bg-white text-black"
                            bgcolor="#000"
                            style={{ color: "#fff" }}
                        />
                    </div>
                </div>
            </div>
            <motion.div
                className="w-full absolute top-[50%] transform translate-y-[-50%] gap-[30px] flex items-center justify-center"
                style={{ y: mq }}>
                {/* <Eyes className="w-[200px] h-[200px] md:w-[170px] md:h-[170px] sm:w-[150px] sm:h-[150px] xm:w-[150px] xm:h-[150px] sm:flex-col xm:flex-col" /> */}
            </motion.div>
        </section>
    );
}