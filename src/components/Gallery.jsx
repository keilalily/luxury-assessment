import { photoGallery } from "../assets/assets";

export default function Gallery() {
    
    return (
        <section className="flex flex-col gap-4 p-8 lg:p-16 bg-black">
            <h2 className="eyebrow">Photo Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(photoGallery).map(([title, src]) => (
                    <img
                        src={src}
                        alt={title}
                        className="object-contain"
                    />
                ))}
            </div>
        </section>
    )
}