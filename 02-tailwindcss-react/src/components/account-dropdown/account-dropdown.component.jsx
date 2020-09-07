import React, { useState, useEffect } from 'react';

const AccountDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleEscape = (e) => {
        if (e.key === 'Esc' || e.key === 'Escape') {
            setIsOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleEscape, false);

        return () => {
            document.removeEventListener('keydown', handleEscape, false);
        };
    }, []);

    return (
        <div className="relative ml-6 hidden sm:block">
            <button
                type="button"
                className="block relative h-8 w-8 z-10 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white"
                onClick={() => setIsOpen(!isOpen)}
            >
                <img
                    className="h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
                    alt="Your avatar" />
            </button>
            {
                isOpen ?
                    <button
                        className="fixed inset-0 h-full w-full bg-black opacity-25 cursor-default"
                        onClick={() => setIsOpen(false)}
                        tabIndex="-1"
                    />
                    :
                    null
            }
            {
                isOpen ?
                    <div className="absolute right-0 w-48 mt-2 py-2 bg-white rounded-lg shadow-xl">
                        <a href="" className="px-4 py-2 block text-gray-800 hover:bg-indigo-500 hover:text-white">Account settings</a>
                        <a href="" className="px-4 py-2 block text-gray-800 hover:bg-indigo-500 hover:text-white">Support</a>
                        <a href="" className="px-4 py-2 block text-gray-800 hover:bg-indigo-500 hover:text-white">Sign out</a>
                    </div>
                    :
                    null
            }
        </div>
    );
}

export default AccountDropdown;
