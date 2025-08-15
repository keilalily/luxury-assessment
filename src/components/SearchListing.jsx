import { useState } from "react";
import { brandingImages } from "../assets/assets";

const typeOptions = ["Any", "Residential", "Commercial", "Land"];

const sortOptions = [
    "Newest",
    "Oldest",
    "Least Expensive to Most",
    "Most Expensive to Least",
    "Bedrooms (Low to High)",
    "Bedrooms (High to Low)",
    "Bathrooms (Low to High)",
    "Bathrooms (High to Low)",
];

const bedOptions = [
    "Any Number",
    "Studio",
    "1+",
    "2+",
    "3+",
    "4+",
    "5+",
    "6+",
];

const bathOptions = ["Any Number", "1+", "2+", "3+", "4+", "5+", "6+"];

export default function SearchListing() {
    const [formData, setFormData] = useState({
        location: "",
        type: "",
        sort: "",
        beds: "",
        baths: "",
        min: "",
        max: "",
    });

    const isFormValid = Object.values(formData).every((value) => value.trim() !== "");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section
            id="search"
            className="flex items-center justify-center min-h-screen bg-no-repeat bg-center bg-cover text-bg-dark p-8 md:p-16"
            style={{ backgroundImage: `url(${brandingImages.searchBG})` }}
        >
            <div className="bg-bg-light p-8 flex flex-col gap-6 w-full">
                <div>
                    <h2 className="eyebrow">Find Your Dream Home</h2>
                    <h3 className="lead">SEARCH LISTINGS</h3>
                </div>

                <form
                    className="
                        flex flex-col items-center gap-6 rounded
                        border border-gray-200 p-4 shadow-md
                    "
                    action="https://marcimetzger.com/listings"
                    target="_blank"
                    method="get"
                >

                    <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        <label className="input-label">
                            Location
                            <input
                                type="text"
                                name="location"
                                placeholder="Pahrump, NV"
                                className="input"
                                value={formData.location}
                                onChange={handleChange}
                            />
                        </label>

                        <label className="input-label">
                            Type
                            <select
                                name="type"
                                className="input"
                                value={formData.type}
                                onChange={handleChange}
                            >
                                {typeOptions.map((type, i) => (
                                    <option key={i} value={type === "Any" ? "" : type}>
                                        {type}
                                    </option>
                                ))}
                            </select>
                        </label>

                        <label className="input-label">
                            Sort By
                            <select
                                name="sort"
                                className="input"
                                value={formData.sort}
                                onChange={handleChange}
                            >
                                {sortOptions.map((sort, i) => (
                                    <option key={i}>{sort}</option>
                                ))}
                            </select>
                        </label>

                        <label className="input-label">
                            Bedrooms
                            <select
                                name="beds"
                                className="input"
                                value={formData.beds}
                                onChange={handleChange}
                            >
                                {bedOptions.map((bed, i) => (
                                    <option key={i}>{bed}</option>
                                ))}
                            </select>
                        </label>

                        <label className="input-label">
                            Baths
                            <select
                                name="baths"
                                className="input"
                                value={formData.baths}
                                onChange={handleChange}
                            >
                                {bathOptions.map((bath, i) => (
                                    <option key={i}>{bath}</option>
                                ))}
                            </select>
                        </label>

                        <label className="input-label">
                            Min Price
                            <input
                                type="text"
                                name="min"
                                placeholder="$"
                                inputMode="numeric"
                                className="input"
                                value={formData.min}
                                onChange={handleChange}
                            />
                        </label>

                        <label className="input-label">
                            Max Price
                            <input
                                type="text"
                                name="max"
                                placeholder="$"
                                inputMode="numeric"
                                className="input"
                                value={formData.max}
                                onChange={handleChange}
                            />
                        </label>
                    </div>

                    <button
                        className="bg-bg-dark text-bg-light w-fit px-8 py-3 rounded-full cursor-pointer hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
                        type="submit"
                        disabled={!isFormValid}
                    >
                        Search Now
                    </button>
                </form>
            </div>
        </section>
    );
}