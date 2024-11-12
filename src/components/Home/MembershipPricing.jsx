import React from 'react';

const MembershipPricing = () => {
  const pricingOptions = [
    {
      id: 1,
      title: "One to One Session",
      price: "Live Class INR -",
      color: "bg-teal-500",
      features: [
        "Personalized attention",
        "Custom class schedule",
        "Live feedback and guidance",
      ],
      rating: 4, // Added rating
    },
    {
      id: 2,
      title: "Group Session",
      price: "Live Class INR -",
      color: "bg-blue-500",
      features: [
        "Learn with a community",
        "Fixed schedule classes",
        "Interactive and engaging",
      ],
      rating: 5, // Added rating
    },
    {
      id: 3,
      title: "Home Visit Session",
      price: "Personalized class at your place",
      color: "bg-orange-500",
      features: [
        "One-on-one instructor visit",
        "Comfort of your home",
        "Customized yoga plans",
      ],
      rating: 4, // Added rating
    },
    {
      id: 4,
      title: "Monthly Membership",
      price: "Live Class: INR - | Recorded Class: INR -",
      color: "bg-pink-600",
      features: [
        "Unlimited access to all classes for a month",
        "Live and recorded options",
        "Flexible attendance",
      ],
      rating: 5, // Added rating
    },
    {
      id: 5,
      title: "Annual Membership",
      price: "Live Class: INR - | Recorded Class: INR -",
      color: "bg-purple-600",
      features: [
        "Best value with all-access",
        "Priority bookings",
        "Member-only perks",
      ],
      rating: 5, // Added rating
    },
  ];

  return (
    <div className="py-10 mx-5">
      <h2 className=" text-center mb-6">Services Pricing</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        {pricingOptions.map((option) => (
          <div
            key={option.id}
            className="w-full bg-white shadow-lg rounded-lg overflow-hidden flex flex-col transform transition duration-300 hover:scale-105"
          >
            <div className={`${option.color} text-white p-4 text-center`}>
              <h5 className="text-lg font-medium">{option.title}</h5>
            </div>
            <div className="flex flex-col p-6 text-center flex-grow">
              <p className="text-xl font-semibold text-gray-800 mb-4">{option.price}</p>
              <ul className="mb-4">
                {option.features.map((feature, index) => (
                  <li key={index} className="text-gray-600 text-sm mb-2">
                    {feature}
                  </li>
                ))}
              </ul>
              {/* Rating section */}
              <div className="flex justify-center mb-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <svg
                    key={index}
                    className={`w-5 h-5 ${index < option.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 15l-5.5 3 2-6-4.5-4h5.5L10 0l2 6h5.5l-4.5 4 2 6L10 15z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembershipPricing;
