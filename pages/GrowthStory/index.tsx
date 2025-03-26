"use client";
import {
	Capibilyties,
	Clientsservices,
	Expectations,
	Process,
	Archive,
	Heroservices,
	Heropresentation,
	Publication,
} from "@/container";
import { useEffect } from "react";
import { Curve, Ready } from "@/components";

export default function Services() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);
	return (
		<>
			<Curve backgroundColor={"#f1f1f1"}>
				<Heropresentation />
				<Publication/>
				<Process />
				<Archive />
				<Ready />
			</Curve>
		</>
	);
}
