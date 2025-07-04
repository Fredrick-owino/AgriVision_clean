import React, { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

const Contact = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "hello@agrivision.com",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+254 700 123 456",
      description: "Mon-Fri from 8am to 5pm",
    },
    {
      icon: MapPin,
      title: "Office",
      details: "Technical University of Mombasa",
      description: "Mombasa, Kenya",
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-slate-900" : "bg-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Get in Touch
          </h1>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Have questions about AgriVision? We'd love to hear from you. Send us
            a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2
                className={`text-2xl font-bold mb-6 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={index}
                      className={`flex items-start space-x-4 p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                        isDark ? "bg-slate-800" : "bg-white"
                      } shadow-lg`}
                    >
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          isDark ? "bg-blue-500" : "bg-blue-100"
                        }`}
                      >
                        <Icon
                          className={`w-6 h-6 ${
                            isDark ? "text-white" : "text-blue-600"
                          }`}
                        />
                      </div>
                      <div>
                        <h3
                          className={`font-semibold mb-1 ${
                            isDark ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {info.title}
                        </h3>
                        <p
                          className={`font-medium mb-1 ${
                            isDark ? "text-blue-400" : "text-blue-600"
                          }`}
                        >
                          {info.details}
                        </p>
                        <p
                          className={`text-sm ${
                            isDark ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {info.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="h-64 rounded-xl overflow-hidden shadow-xl">
              <iframe
                title="AgriVision Mombasa Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.406243814534!2d39.66820581657778!3d-4.043477241858756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1840133f1d8e1cbb%3A0x9c7428ae546e1f0c!2sMombasa%2C%20Kenya!5e0!3m2!1sen!2ske!4v1681741315210!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "16rem" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-none"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`p-8 rounded-xl ${
              isDark ? "bg-slate-800" : "bg-white"
            } shadow-xl`}
          >
            <div className="flex items-center space-x-3 mb-6">
              <MessageCircle
                className={`w-6 h-6 ${
                  isDark ? "text-blue-400" : "text-blue-600"
                }`}
              />
              <h2
                className={`text-2xl font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Send us a Message
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                      isDark
                        ? "bg-slate-700 text-white border border-slate-600 focus:border-blue-500"
                        : "bg-gray-50 text-gray-900 border border-gray-300 focus:border-blue-500"
                    }`}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                      isDark
                        ? "bg-slate-700 text-white border border-slate-600 focus:border-blue-500"
                        : "bg-gray-50 text-gray-900 border border-gray-300 focus:border-blue-500"
                    }`}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                    isDark
                      ? "bg-slate-700 text-white border border-slate-600 focus:border-blue-500"
                      : "bg-gray-50 text-gray-900 border border-gray-300 focus:border-blue-500"
                  }`}
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none ${
                    isDark
                      ? "bg-slate-700 text-white border border-slate-600 focus:border-blue-500"
                      : "bg-gray-50 text-gray-900 border border-gray-300 focus:border-blue-500"
                  }`}
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  isSubmitted
                    ? "bg-green-600 text-white"
                    : "bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white focus:ring-blue-500"
                }`}
              >
                <div className="flex items-center justify-center space-x-2">
                  {isSubmitted ? (
                    <>
                      <span>✓ Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
