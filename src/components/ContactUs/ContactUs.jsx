import React from "react";

const ContactUs = () => {
  return (
    <div>
      <div className="mt-4">
        <img
          src="https://images.unsplash.com/photo-1587560699334-bea93391dcef?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29udGFjdCUyMHVzfGVufDB8fDB8fHww"
          alt=""
          className="w-full objectFit lg:h-[456px] lg:rounded-xl"
        />
      </div>
      <div className="my-8 space-y-2 mx-3 lg:mx-0">
        <h3 className="text-4xl font-bold">Naimul Islum Emon</h3>
        <p className="text-xl font-semibold">Phone : 01855******</p>
        <p className="text-xl font-semibold">Email : naimul02@gmail.com</p>
        <p className="text-xl font-semibold">
          Address : Road 02 , Kazirbag ,Feni.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
