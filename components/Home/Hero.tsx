import { Button } from "antd";
import Image from "next/image";
import { Carousel } from "antd";
import styles from "@/styles/Home.module.css";

const items = [
    {
        key: "1",
        title: "Web and mobile payment built for developers",
        content:
            "Our innovative web and mobile payment solutions make transactions fast, secure, and effortless for both you and your customers. Say goodbye to the hassle of traditional payment methods and embrace the future of seamless payments.",
    },
    {
        key: "2",
        title: "Work better together. Schedule meetings",
        content:
            "Collaborate and achieve your goals as a team. Join forces, share ideas and leverage each others strengths to reach new heights together. Let's work together and create a brighter future for us all.",
    },
    {
        key: "3",
        title: "The best app to increase your productivity",
        content:
            "Boost your productivity and streamline your workday with our cutting-edge app. Stay organized, prioritize tasks, and never miss a deadline. Get more done in less time and achieve your goals faster than ever before.",
    },
];

export default function Hero() {
    return (
        <Carousel autoplay>
            {items.map((item) => {
                return (
                    <div key={item.key} className={styles.containerFluid}>
                        <div className={styles.content}>
                            <h1>{item.title}</h1>
                            <p>{item.content}</p>
                            <div className={styles.btnHolder}>
                                <Button type="primary" size="large" shape="round">
                                    Learn More
                                </Button>
                                <Button size="large" shape="round">
                                    Watch a Demo
                                </Button>
                            </div>
                        </div>
                        <Image src="/images/[1]-hero.jpg" alt="" className={styles.heroImage} width={556} height={330} />
                    </div>
                );
            })}
        </Carousel>
    );
}
