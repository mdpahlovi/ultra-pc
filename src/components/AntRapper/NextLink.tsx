"use client";

import { theme } from "antd";
import Link, { LinkProps } from "next/link";

export default function NextLink(props: LinkProps & React.PropsWithChildren) {
    const { token } = theme.useToken();
    const { children, ...linkProps } = props;

    return (
        <Link {...linkProps} style={{ color: token.colorText }} className="block hover:underline">
            {children}
        </Link>
    );
}
