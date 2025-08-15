import { brandingImages } from "../assets/assets";

export default function About() {
    return (
        <section className="grid grid-cols-1 md:[grid-template-columns:3fr_2fr] gap-8 p-8 md:p-16 items-center justify-center bg-bg-dark">
            <div className="flex flex-col gap-8">
                <div>
                    <h2 className="eyebrow">About</h2>
                    <h3 className="lead text-bg-light">MARCI METZGER</h3>
                </div>
                <p className="text-muted text-lg md:text-xl lg:text-2xl">Realtor for nearly 3 decades!</p>

                <ul className="grid grid-cols-3 gap-8 md:gap-6" aria-label="Key results">
                    <li>
                        <span className="stat">28.5M</span>
                        <span className="label">Sales in 2021</span>
                    </li>
                    <li>
                        <span className="stat">90+</span>
                        <span className="label">Clients served</span>
                    </li>
                    <li>
                        <span className="stat">~30</span>
                        <span className="label">Years in real estate</span>
                    </li>
                </ul>
            </div>
            <figure className="w-full flex flex-col gap-2 items-center md:items-start">
                <img
                    src={brandingImages.avatar}
                    alt="Marci Metzger headshot"
                    loading="eager"
                    className="w-full lg:w-3/4 h-auto rounded-lg shadow-lg"
                />
                <figcaption className="text-sm text-muted">
                    Marci Metzger — The Ridge Realty Group
                </figcaption>
            </figure>
        </section>
    )
}