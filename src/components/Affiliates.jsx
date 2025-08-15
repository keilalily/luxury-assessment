import { partners } from "../assets/assets"

export default function Affiliates() {
    return (
        <section className="grid grid-cols-4 place-items-center p-6 md:p-8 bg-white">
            {Object.entries(partners).map(([title, src]) => (
                <img
                    key={title}
                    src={src}
                    alt={title}
                    className="h-12 md:h-16 object-contain"
                />
            ))}
        </section>
    )
}