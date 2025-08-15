export default function Hero() {
    return (
        <section className="min-h-screen bg-black/70 flex justify-center items-center gap-4 lg:gap-8 p-8 md:p-16">
            <div className="flex flex-col gap-4 p-4 text-center">
                <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] font-source-sans m-0">
                    Pahrump's Trusted Realtor
                </h1>
                <p className="text-xl font-source-sans text-muted">
                    Realtor for nearly 3 decades — local expertise you can count on.
                </p>
                <div className="flex gap-2 md:gap-4 flex-wrap justify-center">
                    <a
                        className="btn bg-bg-light text-bg-dark"
                        href="#search"
                    >
                        Find Your Dream Home
                    </a>
                    <a
                        className="btn btn-ghost"
                        href="tel:12069196886"
                    >
                        Call (206) 919-6886
                    </a>
                </div>
            </div>
        </section>
    )
}