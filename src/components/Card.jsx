import React from 'react'

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src="data:image/jpeg;base64,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" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Complete Tour To Saudi ! Book Now
                    </h5>
                    <div className="flex">
                        <h6 className=" p-4 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Umrah</h6>
                        <h6 className=" p-4 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Hajj</h6>
                    </div>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg
                        className="w-4 h-4 text-green-700 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-green-700 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-green-700 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-green-700 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}