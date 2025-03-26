"use client";
import { useEffect } from "react";
import { Curve, Marquee, Ready } from "@/components";
import { About, Cards, Clients, Hero, Projects, VideoHome } from "@/container";
import TrustedPartners from "@/container/home-page/TrustedPartner";
import WhatDefinesUs from "@/container/home-page/WhatDefinesUs";
import RotatingArrow from "@/container/home-page/RotatingArrow";
import Statistics from "@/container/home-page/Statistics";

export default function Home() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);

	return (
		<>
			<Curve backgroundColor={"#f1f1f1"}>

				<Hero />
				<div className="w-full bg-marquee z-10 relative rounded-t-[20px] padding-y">
					<Marquee
						title="What We Do​"
						className="pb-[50px] lg:pb-[40px] md:pb-[30px] sm:pb-[20px] xm:pb-[15px] text-[540px] leading-[330px] lg:text-[380px] lg:leading-[240px] md:text-[300px] md:leading-[160px] sm:text-[230px] sm:leading-[140px] xm:text-[130px] xm:leading-[80px]"
					/>
				</div>
				<About />
				<VideoHome />
				<Projects />
				<Clients />
				<Cards />
				<Statistics />
				<Ready />
			</Curve>
		</>
	);
}
