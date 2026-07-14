import React from "react";

export default function Explore() {
  const places = [
    {
      title: "Mountain Adventures",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600",
      description: "Experience breathtaking mountain views and thrilling hikes.",
    },
    {
      title: "Beach Paradise",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600",
      description: "Relax on crystal clear beaches and enjoy peaceful sunsets.",
    },
    {
      title: "City Escapes",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?w=600",
      description: "Explore vibrant cities full of culture and nightlife.",
    },
    {
      title: "Forest Retreat",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600",
      description: "Reconnect with nature in beautiful green forests.",
    },
    {
      title: "Desert Safari",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600",
      description: "Ride across golden dunes and enjoy desert adventures.",
    },
    {
      title: "Snow Wonderland",
      image:
        "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?w=600",
      description: "Enjoy skiing, snowboarding and cozy winter vacations.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <div className="bg-orange-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold">
            Explore Amazing Places
          </h1>

          <p className="mt-5 text-lg text-orange-100">
            Discover beautiful destinations, unforgettable experiences,
            and your next adventure.
          </p>

          <button className="mt-8 bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition">
            Start Exploring
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Popular Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Mountains",
            "Beaches",
            "Cities",
            "Forests",
            "Deserts",
            "Snow",
            "Lakes",
            "Camping",
          ].map((category) => (
            <div
              key={category}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition cursor-pointer"
            >
              <h3 className="font-semibold text-lg">{category}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Places */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Featured Destinations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {places.map((place, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
            >
              <img
                src={place.image}
                alt={place.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  {place.title}
                </h3>

                <p className="text-gray-600 mt-3">
                  {place.description}
                </p>

                <button className="mt-5 bg-orange-600 text-white px-5 py-2 rounded-lg hover:bg-orange-700 transition">
                  Explore More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}