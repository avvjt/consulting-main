import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
	const controls = useAnimation();
	const [bgColor, setBgColor] = useState("#FF5733");
	const [textColor, setTextColor] = useState("#FFFFFF");
	const [text, setText] = useState("Consulting");

	// Define color and text options
	const colors = [
		{ bg: "#083400", text: "#87ea5c" },
		{ bg: "#370305", text: "#ffd5f0" },
		{ bg: "#8ce3e2", text: "#21231c" },
		{ bg: "#3b3418", text: "#ffea4b" },
	];

	const texts = [
		"Consulting",
		"Strategy",
		"Design",
		"Development",
		"Innovation",
	];

	let colorIndex = 0;
	let textIndex = 0;

	// Function to change colors and text
	const changeColorsAndText = () => {
		colorIndex = (colorIndex + 1) % colors.length;
		textIndex = (textIndex + 1) % texts.length;
		setBgColor(colors[colorIndex].bg);
		setTextColor(colors[colorIndex].text);
		setText(texts[textIndex]);
	};

	// Start animation loop
	useEffect(() => {
		const startAnimation = async () => {
			while (true) {
				changeColorsAndText();

				// Move text to the end position and fade in
				await controls.start({
					x: -200,
					opacity: 0,
					transition: {
						duration: 0,
					},
				});

				// Animate text to the right and fade in
				await controls.start({
					x: 100,
					opacity: 1,
					transition: {
						duration: 1,
						ease: "easeInOut",
					},
				});

				// Reset text position and fade out
				await controls.start({
					x: 50,
					opacity: 0,
					transition: {
						duration: 1,
						ease: "easeInOut",
					},
				});
			}
		};

		startAnimation();
	}, []);

	return (
		<section
			className="w-full h-screen flex justify-center items-center sticky top-0"
			style={{ backgroundColor: bgColor }}
		>
			<motion.h1
				className="heading tracking-[-1.3px] font-semibold font-FoundersGrotesk uppercase text-center"
				style={{
					fontSize: "16rem",
					color: textColor,
				}}
				animate={controls}
			>
				{text}
			</motion.h1>
		</section>
	);
}