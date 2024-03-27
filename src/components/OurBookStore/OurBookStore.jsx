import React from "react";

const OurBookStore = () => {
  return (
    <div>
      <h1 className="lg:text-5xl text-3xl text-center mt-8">Our Book Store</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-10">
        {/* card 1 */}
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/7Rn97nW/john-michael-thomson-9m1-V6-A8-Fm-A-unsplash.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Naimul Book Store</h2>
            <p>Address : 24 road , Mirpur , Dhaka</p>
            <div className="card-actions w-full">
              <button className="btn btn-primary w-full">
                Visit Our Store
              </button>
            </div>
          </div>
        </div>
        {/* card 1 */}
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/4RbvsCp/sean-benesh-hsgsfvdbo-Uw-unsplash.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Nadimul Book Store</h2>
            <p>Address : 12 Road , Kazirbag , Feni</p>
            <div className="card-actions w-full">
              <button className="btn btn-primary w-full">
                Visit Our Store
              </button>
            </div>
          </div>
        </div>
        {/* card 1 */}
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/XVs9S4x/clem-onojeghuo-O5-J1-Lgmo-Ge-I-unsplash.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Sattar Book Store</h2>
            <p>Address : 36 road , Washingtone , America</p>
            <div className="card-actions w-full">
              <button className="btn btn-primary w-full">
                Visit Our Store
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBookStore;
