"use client";
import { useEffect } from "react";
import { Curve, Ready } from "@/components";
import {
	Heropresentation,
	Projectspresentation,
	Publication,
} from "@/container";
import dynamic from "next/dynamic";
import ReadyConsulting from "@/components/ReadyConsulting";

function Presentation() {
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
				<Projectspresentation />
				<ReadyConsulting />
			</Curve>
		</>
	);
}

export default dynamic (() => Promise.resolve(Presentation), {ssr: false})
