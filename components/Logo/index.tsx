import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className="z-1">
            <span className="flex flex-col lg:flex-row font-extrabold lg:text-[2rem] text-2xl lg:leading-10 leading-6 lg:gap-2">Gésio
                <span className="block lg:inline font-extralight lg:text-[2rem] text-base leading-4 lg:leading-10">
                    de Moura
                </span>
            </span>
        </Link>
    );
}