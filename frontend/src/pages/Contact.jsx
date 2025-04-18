// src/pages/Contact.jsx
import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setStatus('Thank you for reaching out! We will get back to you shortly.');
      setForm({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section className="bg-black text-white min-h-screen py-20 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-4">Get in Touch</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Have a question, feedback, or need support? Reach out to the AgriVision team — we're happy to help!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="bg-gray-900 p-8 rounded-xl shadow-md space-y-6">
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-blue-400 mt-1" />
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-gray-300">+254 705 199 500</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-blue-400 mt-1" />
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-gray-300">contact@agrivision.ai</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-blue-400 mt-1" />
              <div>
                <h3 className="text-lg font-semibold">Location</h3>
                <p className="text-gray-300"> Mombasa, Kenya</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-xl shadow-md space-y-6">
            <div>
              <label className="block mb-2 text-sm font-semibold">Your Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-semibold">Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-semibold">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                required
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white font-semibold"
            >
              Send Message
            </button>
            {status && <p className="text-green-400 text-sm mt-2">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
