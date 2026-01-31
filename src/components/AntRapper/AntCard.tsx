import { Card } from "antd";
import Image from "next/image";
import type { AntCardProps } from "@/types";

export default function AntCard({ children, className, imageClassName, image, width, height }: AntCardProps) {
    return (
        <Card
            className={className}
            cover={
                <div className={`rounded-t-lg bg-white ${imageClassName}`}>
                    <Image src={image} alt="" loading="lazy" className="w-full" width={width} height={height} />
                </div>
            }
        >
            {children}
        </Card>
    );
}
