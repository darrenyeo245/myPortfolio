import Link from "next/link";

export function Footer() {
    const links = [
        {name: "Home", url: "/"},
        {name: "Contact Me", url: "/contact"}
    ];
    return (
        <footer
            className="p-5 bottom-0 left-0 right-0 text-text border-accent z-50">
            <div className="flex items-center px-4">
                <small className="flex-1">© 2025 Darren Yeo</small>
                <nav className="flex-1 flex justify-center gap-4 align-middle">
                    {links.map(link => (
                        <Link key={link.name} href={link.url}>
                            {link.name}
                        </Link>
                    ))}
                </nav>
                <div className="flex-1"></div>
            </div>
        </footer>
    )
}