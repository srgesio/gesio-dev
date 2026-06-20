import Logo from "../Logo";
import Button from "../Button";

export default function Footer() {
    return (
        <footer
            className="flex items-center z-1 justify-between w-full px-4 md:px-6 py-6"
        >
            <div className="flex items-center">
                <Logo />
            </div>
            <nav className="flex items-center gap-4">
                <Button as="link" href="/links">Links</Button>
            </nav>
        </footer>
    );
}



