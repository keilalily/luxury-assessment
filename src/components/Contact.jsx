import { useState } from "react";

export default function Contact() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted!");
    };

    return (
        <section id="contact" className="p-8 md:p-16 bg-bg-light text-bg-dark">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Contact Info */}
                <div className="flex flex-col gap-6">
                    <div>
                        <h2 className="eyebrow">Call or Visit</h2>
                        <h3 className="lead">Marci Metzger — The Ridge Realty Group</h3>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p>
                            <strong>Address:</strong> 3190 HW-160, Suite F, Pahrump, Nevada 89048, United States
                        </p>
                        <p>
                            <strong>Phone: </strong>
                            <a href="tel:12069196886" className="text-accent">
                                (206) 919-6886
                            </a>
                        </p>
                        <p>
                            <strong>Office Hours:</strong> Open daily — 8:00 am – 7:00 pm
                            <br />
                            <small className="text-gray-500">
                                Appointments outside office hours available upon request. Just call!
                            </small>
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-3">
                        <a
                            className="btn bg-bg-dark text-bg-light"
                            href="tel:12069196886"
                        >
                            Call Now
                        </a>
                        <a
                            className="btn text-bg-dark border-1 border-muted"
                            href="https://wa.me/12069196886"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Message on WhatsApp
                        </a>
                    </div>
                </div>

                {/* Contact Form */}
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4 bg-white border border-gray-200 rounded-xl p-6 shadow-md"
                >
                    <h4 className="text-lg font-semibold">Send Message</h4>

                    <label className="input-label">
                        Name
                        <input
                            required
                            type="text"
                            name="name"
                            autoComplete="name"
                            className="input"
                        />
                    </label>

                    <label className="input-label">
                        Email*
                        <input
                            required
                            type="email"
                            name="email"
                            autoComplete="email"
                            className="input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>

                    <label className="input-label">
                        Message
                        <textarea
                            name="message"
                            rows="3"
                            placeholder="How can we help?"
                            className="input"
                        ></textarea>
                    </label>

                    <button
                        type="submit"
                        className="bg-bg-dark text-bg-light text-base md:text-lg px-6 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={!email.trim()}
                    >
                        Send
                    </button>
                </form>
            </div>
        </section>
    );
}
