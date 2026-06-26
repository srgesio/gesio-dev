import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex flex-row items-center justify-center rounded-lg font-sans text-base leading-6 text-center transition-all duration-200 select-none active:scale-95 cursor-pointer",
    {
        variants: {
            variant: {
                primary: "bg-zinc-900 border border-zinc-800 text-white hover:bg-zinc-800 hover:border-zinc-700 dark:bg-zinc-950 dark:hover:bg-zinc-900",
                secondary: "bg-transparent border border-zinc-200 text-zinc-900 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-950",
                ghost: "bg-zinc-950/80 border border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900",
                inverse: "bg-zinc-100 text-zinc-950 hover:bg-zinc-200 shadow-lg shadow-white/5",
            },
            size: {
                default: "gap-4 font-semibold px-4 py-2",
                icon: "p-2",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "default",
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
    size,
    className = "",
    children,
    ...props
}: ButtonTypeProps | AnchorTypeProps) {
    const combinedClasses = cn(buttonVariants({ variant, size }), className);

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


