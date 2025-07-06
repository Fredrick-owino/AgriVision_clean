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
    setTimeout(() => {
      setStatus('Thank you for reaching out! We will get back to you shortly.');
      setForm({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section className="bg-black text-white min-h-screen py-20 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-4">Get in Touch</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Have a question, feedback, or need support? Reach out to the AgriVision team — we're happy to help!
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="bg-gray-900 p-8 rounded-2xl shadow-xl space-y-6">
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
                <p className="text-gray-300">Mombasa, Kenya</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-2xl shadow-xl space-y-6">
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

        {/* Google Maps Embed */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4 text-center">Our Location</h2>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <iframe
              title="AgriVision Mombasa Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.406243814534!2d39.66820581657778!3d-4.043477241858756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1840133f1d8e1cbb%3A0x9c7428ae546e1f0c!2sMombasa%2C%20Kenya!5e0!3m2!1sen!2ske!4v1681741315210!5m2!1sen!2ske"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              className="w-full h-[400px] border-none"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
