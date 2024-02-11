import React from 'react';

const ContactInfo = ({ info }) => (
  <div className='flex mx-20 my-10'>
    <div className='flex '>
    <img src={info.icon} alt="location" />
    <h4 className='text-xl ml-10'>{info.location}</h4>
    </div>
  </div>
);

function Contact() {
  const contactDetails = [
    {
      id: 1,
      icon: "/images/location.png",
      location: "Addis Ababa Ethiopia",
    },
    {
      id: 2,
      icon: "/images/location.png",
      location: "Nairobi Kenya",
    },
    {
      id: 3,
      icon: "/images/location.png",
      location: "Lagos Nigeria",
    },
  ];

  return (
    <div>
      <h1 className='my-[5%] text-3xl text-black font-bold flex justify-center items-center '>Contact</h1>
    <div className='flex flex-col sm:flex sm:flex-row  justify-center items-center'>
      <div>
        {contactDetails.map((detail) => (
          <ContactInfo key={detail.id} info={detail} />
        ))}
      </div>
      <div>
      <div>
      <iframe 
  title="Groom Health and Social Service Location Map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125710.01520918953!2d34.43587668819603!3d10.063153200000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x165601702d830919%3A0x1ae01d5628ea4445!2sGroom%20Health%20and%20Social%20Service!5e0!3m2!1sen!2set!4v1707476752419!5m2!1sen!2set"
  className="w-full sm:w-[600px] h-[450px] sm:h-[450px] border-0"
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade">
</iframe>

    </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;
