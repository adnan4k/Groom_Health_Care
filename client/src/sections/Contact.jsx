import React, { useEffect, useState } from "react";
import axios from "axios";
const ContactInfo = ({ info }) => (
  <div className="flex mx-10 my-10">
    <div className="flex ">
      <img src={info.icon} alt="location" />
      <h4 className="text-xl ml-10">{info.location}</h4>
    </div>
  </div>
);

function Contact() {
  const contactDetails = [
    {
      id: 1,
      icon: "/images/location.png",
      location: ["Addis Ababa Ethiopia", "Adama", "Assosa", "Mekele"],
    },

    {
      id: 2,
      icon: "/images/phone.png",
      location: "+2512520540",
    },
    {
      id: 3,
      icon: "/images/email.png",
      location: "groomhealth@gmail.com",
    },
  ];

  const [formData, setformData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [notification, setNotification] = useState("");
  const [button, setButton] = useState("Send Message");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
    //  console.log(formData)
  };

  let response;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setButton("Sending Message ...");
    try {
      response = await axios.post(
        "http://localhost:4000//user/contact",
        formData
      );
      console.log(response.status);
      if (response.status === 200) {
        setNotification("Message Sent successfully");
        setButton("Sent Message");
      }
      setformData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setNotification("Message failed");
      setButton("Send Message");
      console.log(error);
    }
  };
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification("");
        setButton("Send Message");
      }, 3000);

      // Cleanup function to clear the timer if the component unmounts
      return () => clearTimeout(timer);
    }
  }, [notification]);
  return (
    <div>
      <h1 className="my-[5%] text-[35px] text-black font-bold flex justify-center items-center ">
        Get in touch
      </h1>
      <div className="flex flex-col  justify-center items-center">
        <div className="flex flex-col sm:flex sm:flex-row justify-center items-center sm:w-[1000px] ">
          <div className="flex flex-col justify-center items-center w-full sm:w-[500px]">
            <div className="flex flex-col mx-10 my-10">
              <div className="flex my-4">
                <div className="flex flex-col ">
                  <div className="flex">
                    <img src="/images/phone.png" alt="location" className="object-cover"/>
                    <h4 className="text-xl ml-10 font-semibold">Mr Yitayew </h4>
                  </div>
                  <h4 className="text-xl -mt-5 ml-24">Founder </h4>
                  <h4 className="text-[16px] cursor-pointer ml-24">
                    {" "}
                    0912373032{" "}
                  </h4>
                </div>
                <div className="flex flex-col ">
                  <div className="flex">
                    {/* <img src="/images/phone.png" alt="location" /> */}
                    <h4 className="text-xl ml-8 font-semibold">Mrs Mahlet Mekdesu  </h4>
                  </div>
                  <h4 className="text-xl  ml-24">Co Founder </h4>
                  <h4 className="text-[16px] cursor-pointer ml-24">
                    {" "}
                    0923579475{" "}
                  </h4>
                </div>
              </div>
              <div className="flex flex-col my-4">
                <div className="flex">
                  <img src="/images/email.png" alt="location" />
                  <h4 className="text-xl ml-10">groomhealth@gmail.com </h4>
                </div>
              </div>
              <div className="flex flex-col my-4">
                <div className="flex">
                  <img src="/images/location.png" alt="location" />
                  <h4 className="text-xl ml-10">Addis Ababa </h4>
                </div>
                <h4 className="text-xl -mt-5 ml-24">Assosa </h4>
                <h4 className="text-xl ml-24">Mekele </h4>
                <h4 className="text-xl ml-24">Gambela </h4>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full sm:w-[500px]">
            {/* <h1 className='text-3xl text-black font-semibold items-center justify-center'></h1> */}
            <span>
              {notification && (
                <p className="text-sm text-green-400 justify-center items-center">
                  {notification}
                </p>
              )}
            </span>
            <form action="POST" onSubmit={handleSubmit}>
              <input
                onChange={handleChange}
                value={formData.name}
                class="w-full mt-5 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
              />
              <input
                onChange={handleChange}
                value={formData.email}
                class="w-full mt-5 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />

              <input
                onChange={handleChange}
                value={formData.phone}
                class="w-full mt-5 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                type="phone"
                name="phone"
                id="phone"
                placeholder="Phone"
              />
              <textarea
                onChange={handleChange}
                placeholder="Message"
                value={formData.message}
                className="w-full mt-5 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                name="message"
                id="message"
                cols="30"
                rows="5"
              ></textarea>
              <button class="hover:shadow-form w-full mt-5 rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                {button}
              </button>
            </form>
          </div>
        </div>
        <div>
          <div>
            <iframe
              title="Groom Health and Social Service Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125710.01520918953!2d34.43587668819603!3d10.063153200000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x165601702d830919%3A0x1ae01d5628ea4445!2sGroom%20Health%20and%20Social%20Service!5e0!3m2!1sen!2set!4v1707476752419!5m2!1sen!2set"
              className="w-full mt-5 sm:w-[1200px] h-[450px] sm:h-[450px] border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
