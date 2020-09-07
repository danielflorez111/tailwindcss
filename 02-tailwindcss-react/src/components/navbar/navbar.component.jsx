import React, { useState } from 'react';

import logo from '../../images/logo-inverted.svg';
import AccountDropdown from '../account-dropdown/account-dropdown.component';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className=" bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
            <div className="px-4 py-3 sm:p-0 flex items-center justify-between">
                <div>
                    <img
                        className="h-8"
                        src={logo}
                        alt="Workcation"
                    />
                </div>
                <div className="sm:hidden">
                    <button
                        type="button"
                        className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                            {
                                isOpen ?
                                    <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                                    :
                                    <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                            }
                        </svg>
                    </button>
                </div>
            </div>
            <div className={`sm:block ${isOpen ? 'block' : 'hidden'}`}>
                <div className="px-2 pt-2 pb-4 sm:flex sm:p-0">
                    <a href="" className="mt-1 px-2 py-1 block text-white font-semibold rounded hover:bg-gray-800 sm:mt-0">List your property</a>
                    <a href="" className="mt-1 px-2 py-1 block text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">Trips</a>
                    <a href="" className="mt-1 px-2 py-1 block text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">Messages</a>
                    <AccountDropdown />
                </div>
                <div className="px-4 py-5 border-t border-gray-400 sm:hidden">
                    <div className="flex items-center">
                        <img
                            className="h-8 w-8 border-2 border-gray-600 rounded-full object-cover"
                            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
                            alt="Your avatar" />
                        <span className="ml-3 font-semibold text-white">Jane Doe</span>
                    </div>
                    <div className="mt-4">
                        <a href="" className="block text-gray-400 hover:text-white">Account settings</a>
                        <a href="" className="mt-2 block text-gray-400 hover:text-white">Support</a>
                        <a href="" className="mt-2 block text-gray-400 hover:text-white">Sign out</a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
