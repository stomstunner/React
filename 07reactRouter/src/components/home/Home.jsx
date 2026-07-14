import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">

            <aside className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-3xl shadow-xl overflow-hidden my-10 mx-4">

                <div className="grid md:grid-cols-2 items-center gap-10 p-8 md:p-16">

                    {/* Image */}
                    <div className="flex justify-center">
                        <img
                            className="w-full max-w-md rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
                            src="https://images.pexels.com/photos/29390708/pexels-photo-29390708.jpeg?_gl=1*ri9smc*_ga*NzMwMTA1MjU5LjE3ODQwMDYwNzU.*_ga_8JE65Q40S6*czE3ODQwMDYwNzQkbzEkZzEkdDE3ODQwMDYxMzgkajU5JGwwJGgw"
                            alt="image1"
                        />
                    </div>

                    {/* Content */}
                    <div className="space-y-6 text-center md:text-left">

                        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-800">
                            Download Now
                        </h2>

                        <span className="block text-2xl text-orange-600 font-semibold">
                            Lorem Ipsum
                        </span>

                        <p className="text-gray-600 text-lg leading-8">
                            Discover amazing content, explore beautiful
                            destinations and enjoy a modern user experience.
                        </p>

                        <Link
                            className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 text-white rounded-xl font-semibold shadow-lg hover:bg-orange-700 hover:scale-105 transition"
                            to="/"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>

                            Download Now
                        </Link>

                    </div>

                </div>

            </aside>

            <div className="py-20">

                <div className="grid md:grid-cols-2 gap-12 items-center px-6">

                    <div>
                        <h1 className="text-5xl font-bold text-gray-800 mb-6">
                            Lorem Ipsum Yojo
                        </h1>

                        <p className="text-gray-600 leading-8 text-lg">
                            Explore thousands of amazing places, discover
                            unforgettable adventures, and make your next
                            journey memorable with our beautiful platform.
                        </p>

                        <button className="mt-8 bg-orange-600 text-white px-8 py-3 rounded-xl hover:bg-orange-700 transition">
                            Explore More
                        </button>
                    </div>

                    <div className="flex justify-center">
                        <img
                            className="w-full max-w-lg rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
                            src="https://images.pexels.com/photos/34205960/pexels-photo-34205960.jpeg?_gl=1*ey21vj*_ga*NzMwMTA1MjU5LjE3ODQwMDYwNzU.*_ga_8JE65Q40S6*czE3ODQwMDYwNzQkbzEkZzEkdDE3ODQwMDYxMDUkajI5JGwwJGgw"
                            alt="image2"
                        />
                    </div>

                </div>

            </div>

        </div>
    );
}