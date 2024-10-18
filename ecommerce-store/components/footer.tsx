import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 md:px-8 lg:px-16">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">Michu's Store</h1>
          <p className="text-sm">The best place to buy michus.</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-300">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
      <div className="mt-4 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#" className="text-sm hover:text-gray-300">Home</a>
          <a href="#" className="text-sm hover:text-gray-300">About</a>
          <a href="#" className="text-sm hover:text-gray-300">Products</a>
          <a href="#" className="text-sm hover:text-gray-300">Contact</a>
        </div>
        <div className="text-sm">© 2024 Michu's Store, Inc. All rights reserved.</div>
      </div>
      <div className="mt-4 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#" className="text-sm hover:text-gray-300 flex items-center">
            <FaEnvelope className="mr-1" />
            michu@store.com
          </a>
          <a href="#" className="text-sm hover:text-gray-300 flex items-center">
            <FaPhone className="mr-1" />
            +251 11 111 1111
          </a>
          <a href="#" className="text-sm hover:text-gray-300 flex items-center">
            <FaMapMarkerAlt className="mr-1" />
            Adama, Ethiopia
          </a>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-sm hover:text-gray-300">Terms and Conditions</a>
          <a href="#" className="text-sm hover:text-gray-300">Privacy Policy</a>
        </div>
      </div>
      <div className="mt-4 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-semibold">Subscribe to our newsletter</h2>
          <p className="text-sm">Get the latest news and offers from Michu's Store.</p>
        </div>
        <div className="flex items-center">
          <input type="email" placeholder="Enter your email" className="bg-gray-700 border border-gray-600 rounded-l px-4 py-2 focus:outline-none focus:border-gray-500" />
          <button type="submit" className="bg-gray-600 hover:bg-gray-500 border border-gray-600 rounded-r px-4 py-2 text-sm font-bold focus:outline-none">Subscribe</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
