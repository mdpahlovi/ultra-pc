import type { ReactNode } from "react";

export default function Section({ title, children }: { title: string; children: ReactNode }) {
    return (
        <div className="spaceT">
            <h2 className="secHeader">{title}</h2>
            {children}
        </div>
    );
}
