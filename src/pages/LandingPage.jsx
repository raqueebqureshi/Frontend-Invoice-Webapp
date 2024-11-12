import { useState, useEffect, useRef } from 'react';
import Icon1 from '../assets/icon1.png';
import Icon2 from '../assets/icon2.png';
import Icon3 from '../assets/icon3.png';
import Icon4 from '../assets/icon4.png';
import HeroImg from '../assets/hero-img.png';
import { FaShieldAlt, FaGavel, FaEnvelope } from 'react-icons/fa';


const TABS = ["Invoicing", "Payments", "Accounting", "Payroll", "Advisors"];
const CONTENT = {
  Invoicing: "Stop chasing clients for money. Reduce unpaid invoices, keep tabs on your income, and get paid faster.",
  Payments: "Easily manage and receive payments from clients securely.",
  Accounting: "Automate accounting tasks and simplify tax time.",
  Payroll: "Effortlessly handle payroll, ensuring compliance and accuracy.",
  Advisors: "Access professional advisors for personalized business insights."
};

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: Icon1,
      title: 'A user-friendly dashboard built for you, not your accountant.',
    },
    {
      icon: Icon2,
      title: 'Peace of mind that you’re always organized ahead of tax season.',
    },
    {
      icon: Icon3,
      title: 'A complete picture of your business health, wherever you are.',
    },
    {
      icon: Icon4,
      title: 'Our in-house team of bookkeeping, accounting, and payroll coaches.',
    },
  ];

  return (
    <div className="App">
     {/* Navbar */}
<nav
  className={`fixed top-0 w-full z-10 transition-all duration-300 ${
    scrolled ? 'bg-white shadow-md h-16' : 'bg-transparent h-20'
  }`}
>
  <div
    className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300 ${
      scrolled ? 'h-16' : 'h-20'
    }`}
  >
    {/* Logo Section */}
    <div className="flex items-center space-x-2">
      <span
        className={`transition-all duration-300 ${
          scrolled ? 'text-xl' : 'text-2xl'
        } font-extrabold text-gray-800 tracking-wide transform hover:scale-105 hover:text-blue-600`}
      >
        Raseed
      </span>
    </div>

    {/* Nav Links */}
    <div className="hidden md:flex space-x-8">
      <a
        href="#features"
        className="text-gray-800 hover:text-gradient transition duration-200 transform hover:scale-105"
      >
        Features
      </a>
      <a
        href="#pricing"
        className="text-gray-800 hover:text-gradient transition duration-200 transform hover:scale-105"
      >
        Pricing
      </a>
      <a
        href="#blog"
        className="text-gray-800 hover:text-gradient transition duration-200 transform hover:scale-105"
      >
        Blog
      </a>
      <a
        href="#resources"
        className="text-gray-800 hover:text-gradient transition duration-200 transform hover:scale-105"
      >
        Resources
      </a>
    </div>

    {/* Buttons */}
    <div className="flex space-x-4">
      <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition-transform duration-200 transform hover:scale-105">
        Sign in
      </button>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-transform duration-200 transform hover:scale-105">
        Sign up
      </button>
    </div>
  </div>
</nav>


   {/* Hero Section */}
<section className="relative bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 h-screen mt-20 flex items-center overflow-hidden">
  {/* Decorative Background Shapes */}
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
    <div className="absolute top-10 left-10 w-96 h-96 bg-white opacity-10 rounded-full animate-pulse"></div>
    <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-blue-700 opacity-20 rounded-full mix-blend-multiply animate-bounce"></div>
    <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white opacity-20 rounded-full animate-pulse delay-200"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-900 opacity-10 rounded-full animate-ping"></div>
  </div>

  {/* Content Overlay */}
  <div className="relative z-10 w-full md:w-1/2 flex flex-col items-center md:items-start p-8 md:pl-24 text-white">
    <h1 className="text-5xl font-extrabold mb-4 text-white drop-shadow-lg">
      Manage your money like a boss.
    </h1>
    <p className="text-xl mb-6 text-gray-200 drop-shadow-md">
      Control your cash flow and run your business with confidence.
    </p>

    {/* Sign-up Form */}
    <form className="bg-gradient-to-br from-blue-600 to-blue-900 p-10 rounded-xl shadow-xl w-full max-w-lg transition-all transform hover:scale-105 hover:shadow-2xl duration-300">
      <h2 className="text-3xl font-semibold text-white mb-6 text-center drop-shadow">
        Create Your Account
      </h2>

      {/* Full Name Input */}
      <div className="relative mb-4">
        <span className="absolute left-3 top-3 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11c1.333 0 2.5-1.167 2.5-2.5S17.333 6 16 6s-2.5 1.167-2.5 2.5S14.667 11 16 11zM8 11c1.333 0 2.5-1.167 2.5-2.5S9.333 6 8 6s-2.5 1.167-2.5 2.5S6.667 11 8 11zM12 14c2.21 0 4 1.343 4 3v1H8v-1c0-1.657 1.79-3 4-3z" />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
        />
      </div>

      {/* Email Input */}
      <div className="relative mb-4">
        <span className="absolute left-3 top-3 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 4.72V21m6-13h-4m-2 0H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2z" />
          </svg>
        </span>
        <input
          type="email"
          placeholder="Email Address"
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
        />
      </div>

      {/* Password Input */}
      <div className="relative mb-6">
        <span className="absolute left-3 top-3 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c.564 0 1.095-.186 1.514-.5.419.314.95.5 1.514.5s1.095-.186 1.514-.5c.419.314.95.5 1.514.5s1.095-.186 1.514-.5c.419.314.95.5 1.514.5s1.095-.186 1.514-.5c.419.314.95.5 1.514.5v4c0 2.21-1.79 4-4 4H8a4 4 0 01-4-4v-4c.564 0 1.095.186 1.514.5C6.905 11.186 7.436 11 8 11s1.095.186 1.514.5C10.095 11.186 10.626 11 11 11h1z" />
          </svg>
        </span>
        <input
          type="password"
          placeholder="Password"
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-white text-blue-600 px-4 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 hover:text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      >
        Sign Up
      </button>
    </form>
  </div>

  {/* Right side: Vector Image */}
  <div className="relative z-10 hidden md:flex w-full md:w-1/2 justify-center p-8">
    <img
      src={HeroImg} // Replace with actual image path
      alt="Business Vector"
      className="max-w-lg transition-transform duration-500 hover:scale-105 hover:rotate-1"
    />
  </div>
</section>





      {/* Features Section */}
      <section className="bg-[#001b65] text-white py-16 px-6 text-center" id="features">
        <div className="mb-12">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="mx-auto"
          ></iframe>
        </div>
        <h2 className="text-4xl font-bold mb-4 animate-fade-in">One less thing to worry about</h2>
        <p className="text-lg text-gray-300 mb-12 animate-fade-in">Your Wave account gets you access to all this and more:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center max-w-md text-left mx-auto transform transition duration-300 hover:scale-105">
              <img src={feature.icon} alt="Feature Icon" className="w-10 h-10 mr-4" />
              <p className="text-gray-200">{feature.title}</p>
            </div>
          ))}
        </div>
      </section>

  {/* Testimonials Section */}
<section
  ref={sectionRef}
  className="h-screen bg-pink-100 text-center flex flex-col items-center animate-slide-up"
>
  {/* Heading at the top */}
  <h1 className="text-5xl font-extrabold mt-8 mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
    Our tools work together, so you work less.
  </h1>
  
  {/* Centered Tabs and Content */}
  <div className="flex flex-col items-center justify-top flex-grow">
    <div className="flex justify-center gap-4 mb-6">
      {TABS.map((tab, index) => (
        <button
          key={tab}
          onClick={() => setActiveTab(index)}
          className={`px-4 py-2 rounded-full border-2 font-semibold transition duration-200 transform ${
            index === activeTab ? 'bg-white text-blue-600 scale-105' : 'bg-transparent text-gray-600 scale-100'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>

    <div className="text-gray-800">
      <h2 className="text-3xl font-bold">{TABS[activeTab]}</h2>
      <p className="text-lg mt-2">{CONTENT[TABS[activeTab]]}</p>
    </div>
  </div>
</section>

<section className="bg-gray-50 py-12 h-screen flex flex-col items-center">
      {/* Section Header aligned at the top */}
      <div className="text-center mb-10 justify-center mt-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">
          Wave has helped 
          <span className="text-purple-600 transition-transform transform group-hover:scale-110 duration-300">
            over 2 million
          </span> 
          small business owners
        </h2>
        <p className="text-lg text-gray-600">
          in the US and Canada take control of their finances.
        </p>
      </div>

      {/* Testimonials Grid centered in the middle */}
      <div className="container mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-6 flex-grow">
        {/* Testimonial Card 1 */}
        <div className="bg-purple-100 rounded-lg p-6 relative transition-transform transform hover:scale-110 duration-300">
          <div className="flex items-center mb-4">
            <img src="https://via.placeholder.com/48" alt="Avatar" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <h3 className="font-bold text-gray-800">Tatiyanna W.</h3>
              <p className="text-gray-500 text-sm">TruCreates.com</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mb-2">
            Wave invoicing makes your life a whole lot easier and takes that worry off you. I&apos;ve tried Quickbooks—it&apos;s a bit more complicated and technical, and takes more time to set up.
          </p>
          <span className="text-purple-700 font-semibold">Highlighted Phrase</span>
        </div>

        {/* Testimonial Card 2 */}
        <div className="bg-green-100 rounded-lg p-6 relative transition-transform transform hover:scale-110 duration-300">
          <div className="flex items-center mb-4">
            <img src="https://via.placeholder.com/48" alt="Avatar" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <h3 className="font-bold text-gray-800">Estelle Tracy</h3>
              <p className="text-gray-500 text-sm">37 Chocolates</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mb-2">
            Most of my clients pay with credit cards using the secure link on the invoice. That is a massive time saver and helps me get paid faster!
          </p>
          <span className="text-green-700 font-semibold">Highlighted Phrase</span>
        </div>

        {/* Testimonial Card 3 */}
        <div className="bg-blue-100 rounded-lg p-6 relative transition-transform transform hover:scale-110 duration-300">
          <div className="flex items-center mb-4">
            <img src="https://via.placeholder.com/48" alt="Avatar" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <h3 className="font-bold text-gray-800">Robbie Katherine Anthony</h3>
              <p className="text-gray-500 text-sm">Euphoria LGBT Inc.</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mb-2">
        It&apos;s not just a cool piece of software, it is giving peace of mind to people. You deserve to know your taxes aren&apos;t something you have to sweat over the entire calendar year.
          </p>
          <span className="text-blue-700 font-semibold">Highlighted Phrase</span>
        </div>
      </div>

      {/* CTA Button aligned at the bottom */}
      <div className="text-center mt-10 justify-center mb-6">
        <a
          href="#"
          className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition duration-200 transform hover:scale-105 active:scale-95"
        >
          Get started today
        </a>
      </div>
    </section>






  {/* Full-Screen CTA Section */}
<section className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900 text-white text-center relative">
  {/* Overlay for enhancing contrast */}
  <div className="absolute inset-0 bg-black opacity-20"></div>
  
  {/* Content */}
  <div className="relative z-10">
    <h2 className="text-5xl font-bold mb-4 animate-fade-in transition-transform transform hover:scale-105 duration-300">
      Ready to get started?
    </h2>
    <p className="text-xl mb-6 text-gray-300 max-w-lg mx-auto">
      Join thousands of small business owners who trust Wave.
    </p>
    <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold shadow-lg transition-transform transform hover:scale-110 hover:shadow-2xl hover:bg-gray-100 duration-300">
      Get Started
    </button>
  </div>
</section>



<footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">&copy; 2024 Raseed. All Rights Reserved.</p>

        {/* Divider */}
        <div className="border-t border-gray-700 my-4 mx-auto w-2/3"></div>

        {/* Links */}
        <div className="flex justify-center space-x-8 mt-4">
          <a
            href="#!"
            className="flex items-center hover:text-blue-400 transition-colors duration-200"
          >
            <FaShieldAlt className="mr-1" />
            Privacy
          </a>
          <a
            href="#!"
            className="flex items-center hover:text-blue-400 transition-colors duration-200"
          >
            <FaGavel className="mr-1" />
            Terms
          </a>
          <a
            href="#!"
            className="flex items-center hover:text-blue-400 transition-colors duration-200"
          >
            <FaEnvelope className="mr-1" />
            Contact
          </a>
        </div>
      </div>
    </footer>
    </div>
  );
}

