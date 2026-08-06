import React from 'react';

function About() {
    return (
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
            <div className="rounded-3xl bg-white p-8 shadow-sm shadow-orange-100">
                <h1 className="text-4xl font-extrabold text-slate-900">About QuickBite</h1>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                    QuickBite is a food ordering website designed to provide users with a simple and convenient way to order their favorite meals online. Our platform offers a wide variety of food options from local restaurants, allowing users to browse menus, customize their orders, and have their meals delivered right to their doorstep.
                </p>

                <h2 className="mt-8 text-2xl font-bold text-slate-800">Our Features</h2>
                <ul className="mt-4 space-y-3 text-slate-700">
                    <li>• Browse a variety of delicious food items</li>
                    <li>• Search food by name</li>
                    <li>• Filter food by category</li>
                    <li>• Add and remove items from your cart</li>
                    <li>• Increase or decrease item quantity</li>
                    <li>• View the total order amount</li>
                </ul>
                <h2 className="mt-8 text-2xl font-bold text-slate-800">Our Contacts</h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                    Have questions or feedback? Reach out to us!
                </p>
                <ul className="mt-4 space-y-2 text-slate-700">
                    <li>Email: quickbite@gmail.com</li>
                    <li>Phone: +91 9677572784</li>
                </ul>
                <h1 className="mt-8 text-2xl font-bold text-slate-800">Our Team</h1>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                    Our team is dedicated to providing the best online food ordering experience. We are passionate about food and technology, and we strive to make your ordering process as seamless as possible.
                </p>
            </div>
        </div>
    );
}

export default About;