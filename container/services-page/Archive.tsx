import { background } from "@/public";
import { achiveItems } from "@/constants";
import { BackgroundImg } from "@/components";
import { TextMask } from "@/animation";

export default function Archive() {
	return (
		<section className="w-full relative z-30 padding-y rounded-t-[20px] bg-background">
			<div className="padding-x w-full">
				<BackgroundImg src={background} />
			</div>
		</section>
	);
}
