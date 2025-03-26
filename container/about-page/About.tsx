import { backgroundAbout } from "@/public";
import { BackgroundImg } from "@/components";

export default function About() {
	return (
		<section className="w-full relative z-30 padding-y rounded-t-[20px] bg-background">

			<div className="w-full flex flex-col bg-background">
				<div className="w-full border-t border-[#21212155] pt-[20px]">
					<div className="padding-x padding-y">
						<h1 className="sub-heading font-medium font-NeueMontreal text-secondry">
							Like the Friend Who Always Had the Answers
							<br className="sm:hidden xm:hidden" />
						</h1>
					</div>
				</div>
			</div>
			<div className="padding-x pt-[100px] lg:pt-[80px] md:pt-[60px] sm:pt-[40px] xm:pt-[40px]">
				<BackgroundImg src={backgroundAbout} />
			</div>
		</section>
	);
}
