import Image from "next/image";
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";

const Contacts = () => {
  return (
    <div
      className="max-w-[1200px] mx-auto flex flex-col lg:flex-row text-white/70 p-6 md:p-8 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8 justify-center items-center"
      id="contact"
    >
      {/* Contact Details Section */}
      <div className="flex justify-center items-center w-full lg:w-auto">
        <ul className="space-y-6">
          <li className="flex items-center">
            <Image
              src={phone}
              alt="Phone icon"
              className="hidden md:block h-[80px] md:h-[110px] w-auto mr-4 md:mr-6"
            />
            <p className="hidden md:block text-lg md:text-xl">+91 88662 00955</p>
          </li>
          <li className="flex items-center">
            <Image
              src={mail}
              alt="Mail icon"
              className="hidden md:block h-[80px] md:h-[110px] w-auto mr-4 md:mr-6"
            />
            <p className="hidden md:block text-lg md:text-xl">kumarexpress27@gmail.com</p>
          </li>
        </ul>
      </div>

      {/* Contact Form Section */}
      <div className="bg-white/10 p-6 md:p-8 rounded-xl w-full lg:max-w-[550px]">
        <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-4">
          Let&apos;s Connect
        </h2>
        <p className="text-white/70 mb-6">Send me a message</p>
        <form
          className="space-y-4"
          action="https://getform.io/f/bzyyxdxa"
          method="POST"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-orange-400 w-full"
              placeholder="First Name"
            />
            <input
              type="text"
              name="lastName"
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-orange-400 w-full"
              placeholder="Last Name"
            />
            <input
              type="email"
              name="email"
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-orange-400 w-full"
              placeholder="Email"
            />
            <input
              type="phone"
              name="phone"
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-orange-400 w-full"
              placeholder="Phone"
            />
          </div>
          <textarea
            name="message"
            className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-orange-400 w-full"
            placeholder="Your Message"
          />
          <button className="bg-orange-700 hover:bg-orange-500 text-white px-6 py-2 w-full font-semibold text-lg md:text-xl rounded-xl">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
