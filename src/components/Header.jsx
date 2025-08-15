import { brandingImages } from "../assets/assets"

export default function Header() {
    return (
        <header className="fixed w-full flex items-center justify-center bg-bg-light z-50 shadow-lg">
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="cursor-pointer"
            >
                <img
                    src={brandingImages.logo}
                    alt="Logo"
                    className="h-16 md:h-20"
                />
            </button>
        </header>
    )
}