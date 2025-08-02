import React from "react";
import { useTheme } from "../context/ThemeContext";
import { themes } from "../styles/theme";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Contact = () => {
  const { theme } = useTheme();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message Send Successfully!!! ");
  };

  return (
    <div
      className="pt-20 min-h-screen px-4 py-8 sm:px-6 lg:px-8"
      style={{
        backgroundColor: themes[theme].colors.background.backgroundColor,
        color: themes[theme].colors.text.color
      }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: themes[theme].fonts.heading.fontFamily }}
          >
            Get In Touch
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            We'd love to hear from you! Reach out for inquiries, support, or
            just to say hello.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <div
            className="p-6 rounded-lg shadow-sm"
            style={{
              backgroundColor: themes[theme].colors.card.backgroundColor
            }}
          >
            <h2
              className="text-xl font-bold mb-6"
              style={{ fontFamily: themes[theme].fonts.heading.fontFamily }}
            >
              Contact Information
            </h2>

            <div className="space-y-4">
              <div className="flex items-start">
                <FiMail className="mt-1 mr-4 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-sm opacity-80">contact@example.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <FiPhone className="mt-1 mr-4 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-sm opacity-80">+19 123-456-7457</p>
                </div>
              </div>

              <div className="flex items-start">
                <FiMapPin className="mt-1 mr-4 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-sm opacity-80">
                    123 Business Ave, Suite 100
                    <br />
                    San Francisco, CA 94107
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="p-6 rounded-lg shadow-sm"
            style={{
              backgroundColor: themes[theme].colors.card.backgroundColor
            }}
          >
            <h2
              className="text-xl font-bold mb-6"
              style={{ fontFamily: themes[theme].fonts.heading.fontFamily }}
            >
              Send Us a Message
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-md border"
                  style={{
                    backgroundColor:
                      themes[theme].colors.background.backgroundColor,
                    borderColor: themes[theme].colors.text.color
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-md border"
                  style={{
                    backgroundColor:
                      themes[theme].colors.background.backgroundColor,
                    borderColor: themes[theme].colors.text.color
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-md border"
                  style={{
                    backgroundColor:
                      themes[theme].colors.background.backgroundColor,
                    borderColor: themes[theme].colors.text.color
                  }}
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-6 py-2 rounded-md font-medium"
                style={{
                  backgroundColor: themes[theme].colors.primary.backgroundColor,
                  color: themes[theme].colors.buttonText.color
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
