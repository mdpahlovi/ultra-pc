import { Button } from "antd";
import Image from "next/image";
import { Carousel } from "antd";
import { hero_items } from "@/exports/data";

export default function Hero() {
    return (
        <Carousel autoplay>
            {hero_items.map(({ key, title, content }) => (
                <div key={key} className="grid items-center gap-10 md:grid-cols-2 lg:gap-24">
                    <div className="max-w-2xl space-y-6">
                        <h1>{title}</h1>
                        <p>{content}</p>
                        <div className="flex flex-wrap gap-6">
                            <Button type="primary" shape="round">
                                Learn More
                            </Button>
                            <Button shape="round">Watch a Demo</Button>
                        </div>
                    </div>
                    <Image src="/images/[1]-hero.png" alt="" className="hidden w-full md:block" width={600} height={360} />
                </div>
            ))}
        </Carousel>
    );
}
