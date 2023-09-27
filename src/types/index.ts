export type SocialButtonProps = {
    provider: "google" | "github";
} & React.PropsWithChildren;

export type AntCardProps = {
    image: string;
    width: number;
    height: number;
    className?: string;
    imageClassName?: string;
} & React.PropsWithChildren;

export type SectionProps = {
    title?: string;
    className?: string;
} & React.PropsWithChildren;
