import { JSX } from "react";

export const Footer = (): JSX.Element => {
    return (
      <footer className="bg-gray-900 text-gray-200 py-10 px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold">Explore</h4>
            <ul className="mt-2">
              <li>Artisan Breads</li>
              <li>Breakfast Treats</li>
              <li>Special Occasions</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">Categories</h4>
            <ul className="mt-2">
              <li>Bread</li>
              <li>Pastries</li>
              <li>Vegan Delights</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">Customer Service</h4>
            <ul className="mt-2">
              <li>Contact Us</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">Stay Updated</h4>
              <div className="mt-2 w-full">
              <p className="text-sm">Subscribe to our newsletter for the latest news and exclusive offers.</p>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-2 w-vw px-2 py-1 rounded text-black mr-2"
              />
              <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-200 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          © 2025 Fidencia Boulangerie. All rights reserved.
        </div>
      </footer>
    );
  };
  