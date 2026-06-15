import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex flex-row items-center justify-center gap-4 rounded-lg font-sans font-semibold text-base leading-6 text-center transition-all duration-200 select-none px-4 py-2",
    {
        variants: {
            variant: {
                primary: "bg-zinc-900 border border-zinc-800 text-white hover:bg-zinc-800 hover:border-zinc-700 dark:bg-zinc-950 dark:hover:bg-zinc-900",
                secondary: "bg-transparent border border-zinc-200 text-zinc-900 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-950",
            },
        },
        defaultVariants: {
            variant: "primary",
        },
    }
);

type BaseProps = VariantProps<typeof buttonVariants> & {
    as?: "button" | "a" | "link";
    className?: string;
    children: React.ReactNode;
};

type ButtonTypeProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorTypeProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href?: string };

export default function Button({
    as = "button",
    variant,
    className = "",
    children,
    ...props
}: ButtonTypeProps | AnchorTypeProps) {
    const combinedClasses = cn(buttonVariants({ variant }), className);

    if (as === "link") {
        const { href, ...linkProps } = props as AnchorTypeProps;
        return (
            <Link className={combinedClasses} href={href ?? "#"} {...linkProps}>
                {children}
            </Link>
        );
    }

    if (as === "a") {
        const { href, ...anchorProps } = props as AnchorTypeProps;
        return (
            <a className={combinedClasses} href={href} {...anchorProps}>
                {children}
            </a>
        );
    }

    const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;
    return (
        <button className={combinedClasses} {...buttonProps}>
            {children}
        </button>
    );
}


