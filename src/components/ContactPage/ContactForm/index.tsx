import React from "react";
import { FaArrowRight } from "react-icons/fa";
import GlossyButton from "@/components/common/GlossyButton";
import FormInput from "@/components/common/FormInput";

const ContactForm: React.FC = () => {
  return (
    <div className="text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 md:mb-0 border-t border-about-bg">
          <div className="flex flex-col md:flex-row md:items-center justify-between md:mr-9">
            <div>
              <h1 className="text-4xl font-bold mb-4 text-center md:text-left">
                Contact Information
              </h1>
              <p className="text-lg mb-8 text-center md:text-left">
                Feel free to reach out to us through various channels. We are
                <br className="hidden md:block" />
                available by phone, email, and social media for your
                convenience.
              </p>
            </div>
            <div className="flex flex-col items-center  lg:flex-row md:items-center md:space-x-4">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <span>+1-123-456-7890</span>
                <FaArrowRight className="text-blue-500" />
              </div>
              <div className="flex items-center space-x-2">
                <span>damienbraunphotography.com</span>
                <FaArrowRight className="text-blue-500" />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:justify-between border-t border-about-bg pt-12">
            <div className="flex flex-col mb-8 md:mb-0">
              <h3 className="uppercase mb-2 text-3xl text-center md:text-left">
                Send Me A Message
              </h3>
              <p className="text-lg text-center md:text-left">
                Have a specific inquiry or message for us? Please use the{" "}
                <br className="hidden md:block" />
                contact form below, and we'll get back to you promptly.
              </p>
            </div>
            <div className="w-full md:w-2/3 lg:w-1/2">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput
                    id="first-name"
                    label="First Name"
                    type="text"
                    placeholder="First Name"
                  />
                  <FormInput
                    id="last-name"
                    label="Last Name"
                    type="text"
                    placeholder="Last Name"
                  />
                  <FormInput
                    id="email"
                    label="Email"
                    type="email"
                    placeholder="Email Address"
                  />
                  <FormInput
                    id="phone-number"
                    label="Phone Number"
                    type="tel"
                    placeholder="Phone Number"
                  />
                </div>
                <FormInput
                  id="message"
                  label="Your Message"
                  type="text"
                  placeholder="Message"
                  textarea
                />
                <div className="flex flex-col lg:items-center lg:flex-row md:justify-center">
                  <span className="self-center uppercase text-3xl md:text-6xl mb-4 md:mb-0 mr-4 md:pb-2 lg:pb-0">
                    Send Message
                  </span>
                  <GlossyButton
                    type="submit"
                    className="px-12 py-5 lg:justify-start ml-0"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
