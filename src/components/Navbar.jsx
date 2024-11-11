
import React, { useState } from 'react';
import logo from '../assets/logo.svg'


const Navbar = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);
    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };








  return (<div>
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src="/path-to-your-logo.png" alt="Logo" className="h-8 w-8" />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-green-300">Home</a>
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#services" className="hover:text-gray-400">Service</a>
          <a href="#portfolio" className="hover:text-gray-400">Portfolio</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </nav>

        {/* Contact Us Button */}
        <div className="hidden md:block">
          <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
            For enquiry
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex justify-between items-center">
        {/* Logo */}
        <div>
          <img src={logo} alt="Logo" className="h-10 w-10" />
        </div>

        {/* Mobile Menu Button */}
        <button className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>



    {/* for hero section */}



    <div id="default-carousel" class="relative w-full" data-carousel="slide">
      {/* Carousel wrapper*/}
      <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        {/* Item 1*/}
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img src="c:\Users\karuppasamy\OneDrive\Desktop\mainfile\DC_website\src\blackbackground.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></img>
        </div>
        {/* item 2*/}
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img src="/DC_website/src/logo192.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></img>
        </div>
        {/* Iteam 3*/}
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img src="/docs/images/carousel/carousel-3.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></img>
        </div>
        {/* Iteam 4*/}
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img src="/docs/images/carousel/carousel-4.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></img>
        </div>
        {/* Iteam 5*/}
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img src="/docs/images/carousel/carousel-5.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></img>
        </div>
      </div>
      {/* Slider indicators*/}
      <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
      </div>
      {/*  Slider controls*/}

      <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>
    {/* for end of hero section */}



    {/* for start about*/}



    <div className="bg-white">
      <h2 className="text-3xl font-bold text-center mt-10 mb-8">About Us</h2>

      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row">
        <div className="md:w-1/2 order-2 mb-8 md:mb-0">
          <img src={logo} alt="Technical Image" className="w-full md:w-auto rounded-lg" />
        </div>

        <div className="md:w-1/2 order-1 flex flex-col justify-center">
          <p className="text-lg mb-4">
            We're developers who enjoy developing custom websites and applications to help businesses do better online. We're here to unleash the world's innovation spark by creating a more enlightened way of working.

          </p>

          <h3 className="text-2xl font-bold mb-4">What We Do?</h3>
          <ul className="list-disc">
            <li>Provide a unique solution for your problem using our best technology</li>
            <li>Provide innovative designs which will be most attractive</li>
            <li>Provide top-rating user-friendly tools</li>
          </ul>
        </div>
      </div>
    </div>
    {/* for end about page */}

    {/* for service page */}
    <div className="bg-gray-100">
      <h2 className="text-3xl font-bold text-center mt-10 mb-8">Our Services</h2>

      <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-md overflow-hidden relative">
          <div className="w-24 h-24 bg-violet-500 rounded-full absolute -right-5 -top-7 flex items-center justify-center">
            <p className="text-white text-2xl">01</p>
          </div>
          <div className="fill-violet-500 w-12 mx-auto mt-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 24 24">
              <path d="M24,6.928v13.072h-11.5v3h5v1H6.5v-1h5v-3H0V4.5c0-1.379,1.122-2.5,2.5-2.5h12.98c-.253.295-.54.631-.856,1H2.5c-.827,0-1.5.673-1.5,1.5v14.5h22v-10.993l1-1.079Zm-12.749,3.094C19.058.891,19.093.855,19.11.838c1.118-1.115,2.936-1.113,4.052.002,1.114,1.117,1.114,2.936,0,4.052l-8.185,8.828c-.116,1.826-1.623,3.281-3.478,3.281h-5.59l.097-.582c.043-.257,1.086-6.16,5.244-6.396Zm2.749,3.478c0-1.379-1.122-2.5-2.5-2.5-2.834,0-4.018,3.569-4.378,5h4.378c1.378,0,2.5-1.121,2.5-2.5Zm.814-1.073l2.066-2.229c-.332-1.186-1.371-2.057-2.606-2.172-.641.749-1.261,1.475-1.817,2.125,1.117.321,1.998,1.176,2.357,2.277Zm.208-5.276c1.162.313,2.125,1.134,2.617,2.229l4.803-5.18c.737-.741.737-1.925.012-2.653-.724-.725-1.908-.727-2.637,0-.069.08-2.435,2.846-4.795,5.606Z"></path></svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Web & App Development</h3>
          <p>We don't just build websites, we build websites that sell themselves.</p>
        </div>

        {/* Second Service Card */}
        <div className="bg-white p-8 rounded-lg shadow-md overflow-hidden relative">
          <div className="w-24 h-24 bg-violet-500 rounded-full absolute -right-5 -top-7 flex items-center justify-center">
            <p className="text-white text-2xl">02</p>
          </div>
          <div className="fill-violet-500 w-12 mx-auto mt-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 24 24">
              <path d="M24,6.928v13.072h-11.5v3h5v1H6.5v-1h5v-3H0V4.5c0-1.379,1.122-2.5,2.5-2.5h12.98c-.253.295-.54.631-.856,1H2.5c-.827,0-1.5.673-1.5,1.5v14.5h22v-10.993l1-1.079Zm-12.749,3.094C19.058.891,19.093.855,19.11.838c1.118-1.115,2.936-1.113,4.052.002,1.114,1.117,1.114,2.936,0,4.052l-8.185,8.828c-.116,1.826-1.623,3.281-3.478,3.281h-5.59l.097-.582c.043-.257,1.086-6.16,5.244-6.396Zm2.749,3.478c0-1.379-1.122-2.5-2.5-2.5-2.834,0-4.018,3.569-4.378,5h4.378c1.378,0,2.5-1.121,2.5-2.5Zm.814-1.073l2.066-2.229c-.332-1.186-1.371-2.057-2.606-2.172-.641.749-1.261,1.475-1.817,2.125,1.117.321,1.998,1.176,2.357,2.277Zm.208-5.276c1.162.313,2.125,1.134,2.617,2.229l4.803-5.18c.737-.741.737-1.925.012-2.653-.724-.725-1.908-.727-2.637,0-.069.08-2.435,2.846-4.795,5.606Z"></path></svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Designing</h3>
          <p>We don't just build websites, we build websites that sell themselves.</p>
          {/* ... Similar structure as the first card ... */}
        </div>

        {/* Third Service Card */}
        <div className="bg-white p-8 rounded-lg shadow-md overflow-hidden relative">
          <div className="w-24 h-24 bg-violet-500 rounded-full absolute -right-5 -top-7 flex items-center justify-center">
            <p className="text-white text-2xl">03</p>
          </div>
          <div className="fill-violet-500 w-12 mx-auto mt-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 24 24">
              <path d="M24,6.928v13.072h-11.5v3h5v1H6.5v-1h5v-3H0V4.5c0-1.379,1.122-2.5,2.5-2.5h12.98c-.253.295-.54.631-.856,1H2.5c-.827,0-1.5.673-1.5,1.5v14.5h22v-10.993l1-1.079Zm-12.749,3.094C19.058.891,19.093.855,19.11.838c1.118-1.115,2.936-1.113,4.052.002,1.114,1.117,1.114,2.936,0,4.052l-8.185,8.828c-.116,1.826-1.623,3.281-3.478,3.281h-5.59l.097-.582c.043-.257,1.086-6.16,5.244-6.396Zm2.749,3.478c0-1.379-1.122-2.5-2.5-2.5-2.834,0-4.018,3.569-4.378,5h4.378c1.378,0,2.5-1.121,2.5-2.5Zm.814-1.073l2.066-2.229c-.332-1.186-1.371-2.057-2.606-2.172-.641.749-1.261,1.475-1.817,2.125,1.117.321,1.998,1.176,2.357,2.277Zm.208-5.276c1.162.313,2.125,1.134,2.617,2.229l4.803-5.18c.737-.741.737-1.925.012-2.653-.724-.725-1.908-.727-2.637,0-.069.08-2.435,2.846-4.795,5.606Z"></path></svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Digital Marketing</h3>
          <p>We don't just build websites, we build websites that sell themselves.</p>
          {/* ... Similar structure as the first card ... */}
        </div>
      </div>
    </div>

    {/* <div className="bg-white">
      <h2 className="text-3xl font-bold text-center mt-10 mb-8">Our Services</h2>

<div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
  <div className="bg-green-100 p-8 rounded-lg shadow-md"> <img src="https://via.placeholder.com/100x100" alt="Web Development Icon" className="mx-auto mb-4" />
    <h3 className="text-xl font-bold mb-2">Web Development</h3>
    <p>We don't just build websites, we build websites that sell themselves.</p>
  </div>

  <div className="bg-green-100 p-8 rounded-lg shadow-md"> <img src="https://via.placeholder.com/100x100" alt="Mobile App Development Icon" className="mx-auto mb-4" />
    <h3 className="text-xl font-bold mb-2">Mobile App Development</h3>
    <p>We design and develop experiences that make people's lives simple.</p>
  </div>

  <div className="bg-green-100 p-8 rounded-lg shadow-md"> <img src="https://via.placeholder.com/100x100" alt="Desktop App Development Icon" className="mx-auto mb-4" />
    <h3 className="text-xl font-bold mb-2">Desktop App Development</h3>
    <p>We are responsible artists, whether it's design or development.</p>
  </div>
</div>
</div>*/}

    {/* for service page end */}


    <div className="bg-white">
      <section className="hero bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Our Clients</h1>
          <p className="text-lg text-center text-gray-700">Making our clients Satisfied!</p>
        </div>
      </section>

      <section className="client-logos py-16">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <img src="" alt="Client 1" className="w-full" />
          <img src="" alt="Client 2" className="w-full" />
          {/* Add more client logos here */}
        </div>
      </section>

      <section className="projects py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Projects</h2>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="project">
            <h3 className="text-2xl font-bold mb-4">Project 1: Website Redesign</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <img
              src="/images/project1.jpg" alt="Project 1" className="w-full mt-4" />
          </div>
          {/* Add more projects here */}
        </div>
      </section>

      <section className="testimonials py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
        <div className="container mx-auto px-4">
          <div className="testimonial">
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
            <p className="text-gray-500">- John Doe, CEO of Acme Corp</p>
          </div>
          {/* Add more testimonials here */}
        </div>
      </section>
    </div>

































    {/* contact page */}



    <div className="bg-white">
      <h2 className="text-3xl font-bold text-center mt-10 mb-8">Contact Us</h2>

      <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="md:order-2">
          <h3 className="text-xl font-bold mb-4">Contact Information</h3>
          <div className="flex items-center mb-4">
            <svg className="w-6 h-6 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
              strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414   
 12.414a4 4 0 00-5.656 0L6.343 16.657c-.54.536-.54 1.409 0 1.948a4.013 4.013 0 005.657 0z"></path></svg>
            <p>D325, near SNS College of Engineering, Vaiyapuri Nagar, Saravanampatti, Coimbatore, TamilNadu, India.</p>
          </div>
          <div className="flex items-center mb-4">
            <svg className="w-6 h-6 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
              strokeLinejoin="round" strokeWidth="2" d="M3 8l7.894   
 7.894"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13l-7.894 7.894"></path></svg>
            <p>contact@DC.com</p>
          </div>
          <div className="flex items-center">
            <svg className="w-6 h-6 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
              strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2   
 0 012 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h4zm5 3a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2v-4a2 2 0 00-2-2h-4zm0 6a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2v-4a2 2 0 00-2-2h-4z"></path></svg>
            <p>+91 234234234234324</p>
          </div>
        </div>

        <div className="md:order-1 bg-green-100 p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>

              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1   
 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500   
 sm:text-sm" />
            </div>
            <div className="mb-4">
              <label htmlFor="email"
                className="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1   
 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500   
 sm:text-sm" />
            </div>
            <div className="mb-4">
              <label htmlFor="subject"
                className="block text-sm font-medium text-gray-700">Subject</label>
              <input type="text" id="subject" name="subject"
                value={formData.subject} onChange={handleChange} className="mt-1   
 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500   
 sm:text-sm" />
            </div>
            <div className="mb-4">
              <label htmlFor="message"
                className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500   
 sm:text-sm"></textarea>

            </div>
            <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">Submit</button>
          </form>
        </div>
      </div>
    </div>







    <div className="bg-white">
      <h2 className="text-3xl font-bold text-center mt-10 mb-8">Contact Us</h2>

      <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="md:order-2">
          <h3 className="text-xl font-bold mb-4">Contact Information</h3>
          <div className="flex items-center mb-4">
            <svg className="w-6 h-6 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
              strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414   
 12.414a4 4 0 00-5.656 0L6.343 16.657c-.54.536-.54 1.409 0 1.948a4.013 4.013 0 005.657 0z"></path></svg>
            <h4 className="font-bold mr-2">Address:</h4>
            <p>D325, near SNS College of Engineering, Vaiyapuri Nagar, Saravanampatti, Coimbatore, TamilNadu, India.</p>
          </div>
          <div className="flex items-center mb-4">
            <svg className="w-6 h-6 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
              strokeLinejoin="round" strokeWidth="2" d="M3 8l7.894   
 7.894"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13l-7.894 7.894"></path></svg>
            <h4 className="font-bold mr-2">Email:</h4>
            <p>contact@DC.com</p>
          </div>
          <div className="flex items-center">
            <svg className="w-6 h-6 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
              strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2   
 0 012 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h4zm5 3a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2v-4a2 2 0 00-2-2h-4zm0 6a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2v-4a2 2 0 00-2-2h-4z"></path></svg>
            <h4 className="font-bold mr-2">Call:</h4>
            <p>+91 6745674757</p>
          </div>
        </div>


        <div class="container px-4 mx-auto">
          <div class="mx-auto">
            <div class="max-w-md mx-auto px-8 py-6 bg-gray-100 rounded-lg shadow-lg">
              <h2 class="text-2xl font-semibold text-gray-800 mb-4">Get in touch</h2>
              <form>
                <div class="mb-4">
                  <label class="block text-gray-800 mb-1" for="name">Your Name</label>
                  <input
                    class="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                    placeholder="Enter your name"
                    type="text"
                  />
                </div>
                <div class="mb-4">
                  <label class="block text-gray-800 mb-1" for="email">Your Email</label>
                  <input
                    class="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                    placeholder="Enter your email"
                    name="email"
                    id="email"
                    type="email"
                  />
                </div>
                <div class="mb-4">
                  <label class="block text-gray-800 mb-1" for="message"
                  >Your Message</label
                  >
                  <textarea
                    class="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                    rows="4"
                    placeholder="Enter your message"
                    name="message"
                    id="message"
                  ></textarea>
                </div>
                <button
                  class="w-full bg-yellow-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>











    <footer className="bg-gray-200 text-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center   
 mb-6 md:mb-0">
            <img src="" alt="DC" className="w-24 h-24 mb-4" />{/* Add margin-bottom for logo */}
            <p className="text-sm">
              DC
              <br />
              Coimbatore,
              <br />
              Tamil Nadu, India.
              <br />
              contact@DC.com
              <br />
              +91 2423423423423
            </p>
          </div>

          <div className="flex flex-col space-y-4 mb-6 md:mb-0"> {/* Adjust spacing between links */}
            <h4 className="text-xl font-bold mb-2">Useful Links</h4> {/* Add margin-bottom for heading */}
            <ul>
              <li><a href="#" className="hover:text-gray-700">About Us</a></li>
              <li><a href="#" className="hover:text-gray-700">Services</a></li>
              <li><a href="#" className="hover:text-gray-700">Product</a></li>
              <li><a href="#" className="hover:text-gray-700">Contact</a></li>
            </ul>
          </div>

          <div className="flex flex-col space-y-4 mb-6 md:mb-0"> {/* Adjust spacing between links */}
            <h4 className="text-xl font-bold mb-2">Our Services</h4> {/* Add margin-bottom for heading */}
            <ul>
              <li><a href="#" className="hover:text-gray-700">Web Development</a></li>
              <li><a href="#" className="hover:text-gray-700">App Development</a></li>
              <li><a href="#" className="hover:text-gray-700">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-gray-700">Graphics Designing</a></li>
            </ul>
          </div>

          <div className="flex flex-col space-y-4"> {/* Adjust spacing between links */}
            <h4 className="text-xl font-bold mb-2">Social Links</h4> {/* Add margin-bottom for heading */}
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-800 hover:text-gray-700"><i className="fab fa-instagram"></i></a></li>
              <li><a href="#" className="text-gray-800 hover:text-gray-700"><i className="fab fa-facebook"></i></a></li>
              <li><a href="#" className="text-gray-800 hover:text-gray-700"><i className="fab fa-linkedin"></i></a></li>
              <li><a href="#" className="text-gray-800 hover:text-gray-700"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#" className="text-gray-800 hover:text-gray-700"><i className="fab fa-youtube"></i></a></li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-center mt-4">DC. All Rights Reserved.</p>
      </div>
    </footer>




























  </div>
  );
};

export default Navbar;
