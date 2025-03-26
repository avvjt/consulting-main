"use client";
import { useEffect } from "react";
import { Curve, Ready } from "@/components";
import { Heroinsights, Heropresentation, Publication, Publicationinsights } from "@/container";
import Form from "@/container/insights-page/Form";

export default function Insights() {
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
				<Publication />
				<Heroinsights />
				<Ready />
			</Curve>
		</>
	);
}
