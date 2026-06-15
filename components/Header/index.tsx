import Logo from "../Logo";
import ScrollVisibilityWrapper from "../ScrollVisibilityWrapper";
import Button from "../Button";

export default function Header() {
    return (
        <ScrollVisibilityWrapper
            as="header"
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full px-4 md:px-6 py-6"
        >
            <div className="flex items-center">
                <Logo />
            </div>
            <nav className="flex items-center gap-4">
                <Button as="link" href="#">Experiências</Button>
                <Button as="link" href="#" className="hidden md:flex">Projetos</Button>
            </nav>
        </ScrollVisibilityWrapper>
    );
}



