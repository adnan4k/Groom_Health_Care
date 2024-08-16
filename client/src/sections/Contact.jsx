import React from 'react';

const ContactForm = () => {
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData(e.target);
    
    // Convert formData to JSON
    const data = Object.fromEntries(formData.entries());
  
    try {
      const response = await fetch('https://backend.es4h.org/user/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        // Handle successful submission
        alert('Message sent successfully!');
        e.target.reset(); // Reset the form after successful submission
      } else {
        // Handle errors
        alert('Failed to send the message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };
  

  return (
    <section className="text-gray-600 body-font relative">
      <form
        action="https://fabform.io/f/{form-id}"
        method="post"
        onSubmit={handleSubmit}
      >
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          {/* Map Section */}
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                <p className="mt-1">
                  location
                  Addis Ababa,
                  Assosa,
                  Mekele,
                  Gambela</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                <a className="text-red-500 leading-relaxed" href="mailto:example@email.com">groomhealth@gmail.com</a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">Phone</h2>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">Mr Yitayew
                  Founder
                  0912373032


                </h2>
                <p className="leading-relaxed">0912373032</p>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">Phone</h2>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">Mrs Mahlet Mekdesu
                  Co Founder
                </h2>
                <p className="leading-relaxed">0923579475</p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="lg:w-2/5 md:w-1/2 bg-white flex flex-col mx-auto p-14 w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Get In Touch</h2>

            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                required
              ></textarea>
            </div>
            <button
              style={{ backgroundColor: 'blue' }}
              type="submit"
              className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
            >
            Send
            </button>

          </div>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
