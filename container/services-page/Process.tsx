import Image from "next/image";
import { useState, useEffect, useRef } from "react";

import { AnimatePresence, motion } from "framer-motion";

interface ProcessItem {
	id: number;
	phase: string;
	name: string;
	src: string;
	review: string;
	button: string;
}

export default function Process() {
	const [activeAccordion, setActiveAccordion] = useState(1);
	const [serviceProcessItems, setserviceProcessItems] = useState<ProcessItem[]>([]);

	const toggleAccordion = (itemId: any) => {
		setActiveAccordion((prev) => (prev === itemId ? null : itemId));
	};

	useEffect(() => {
		fetchProcessItems();
	}, []);

	const fetchProcessItems = async () => {
		try {
			const response = await fetch("https://admin-kappa-swart.vercel.app/api/process");
			if (response.ok) {
				const data = await response.json();
				setserviceProcessItems(data);
				// Set the first item as active if there are items
				if (data.length > 0) {
					setActiveAccordion(data[0].id);
				}
			}
		} catch (error) {
			console.error("Error fetching process items:", error);
		}
	};

	const container = useRef(null);

	return (
		<div className="w-full" ref={container}>
      <div className="w-full flex flex-col items-center justify-center bg-about">
        <div
          className="bg-[#f1f1f1] relative z-20 w-[90%] py-[20px] rounded-t-[10px]"
          data-scroll
          data-scroll-speed="-.1"
        />
      </div>

		<section className="w-full relative z-30 padding-y rounded-t-[20px] bg-background">

			<div className="w-full border-t border-[#21212155]">
				<p className="w-[80%] sm:w-full xm:w-full sub-heading font-normal padding-x font-NeueMontreal text-secondry padding-y">
					From Vision to Victory: The Story of Influidity’s Growth, Innovation, and the Milestones That Made Us Who We Are Today&nbsp;
					<span className="xl:link-flash lg:link-flash md:link-flash cursor-pointer">
						eye-catching&nbsp;
					</span>

					<span className="xl:link-flash lg:link-flash md:link-flash cursor-pointer">

					</span>

				</p>
			</div>

			{serviceProcessItems.map((item) => (
				<div
					key={item.id}
					className={`w-full flex py-[10px] flex-col ${item.id == 1
							? "border-y border-[#21212155]"
							: "border-b border-[#21212155]"
						}`}>
					<div className="w-full flex items-center justify-between py-[10px] padding-x">
						<div className="w-[50%] sm:w-full xm:w-full">
							<h3 className="paragraph font-normal font-NeueMontreal text-secondry">
								{item.phase}
							</h3>
						</div>
						<div className="w-[40%] sm:w-full xm:w-full">
							<h3 className="paragraph font-normal font-NeueMontreal text-secondry">
								{item.name}
							</h3>
						</div>
						<div className="w-[10%] sm:w-full xm:w-full flex items-end justify-end">
							<button
								className={`paragraph font-normal font-NeueMontreal uppercase transition-all duration-200 ease-in-out ${activeAccordion === item.id
										? "text-gray-300"
										: "text-secondry link-flash"
									}`}
								onClick={() => toggleAccordion(item.id)}>
								{item.button}
							</button>
						</div>
					</div>
					<div
						className={`w-full flex justify-between padding-x sm:flex-col xm:flex-col`}>
						<div className="w-[50%] sm:hidden xm:hidden" />
						<div className="w-[40%] sm:w-full xm:w-full">
							<AnimatePresence>
								{activeAccordion === item.id && (
									<motion.div
										initial={{ opacity: 0, height: 0 }}
										animate={{ opacity: 1, height: "auto" }}
										exit={{ opacity: 0, height: 0 }}
										transition={{
											ease: [0.4, 0, 0.2, 1],
											duration: 1.3,
										}}>
										<div className="flex flex-col gap-[20px] py-[30px]">
											<div className="w-[130px] h-[130px]">
												<img
													src="/phase1.png"
													alt="clientImg"
													className="w-full h-full object-cover rounded-[10px]"
												/>
											</div>
											<div>
												<p className="paragraph tracking-wider font-normal font-NeueMontreal text-secondry">
													{item.review}
												</p>
											</div>
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
						<div className="w-[10%]" />
					</div>
				</div>
			))}
		</section>
		</div>
	);
}
