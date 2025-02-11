import React from "react";
// import { Servicvedata } from "../Ts_model/services";
import Services from "./services";
const Ourservice = () => {
  return (
    <>
      <div className="ourservice_main">
        <div className="container">
          <div className="Our_service_heading my-[100px]">
            <h2 className="our_services_headline text-center">
              <span>Our</span> <span>Services</span>
            </h2>
            <p className="service_info m-auto">
              Despite being the most trusted website development &amp;{" "}
              <a
                className="underline text-blue-500"
                href="https://baselineitdevelopment.com/web-designing-company-in-mohali"
              >
                web designing company in Mohali
              </a>
              , we also offer result-driven digital marketing solutions. We do
              everything for your impeccable growth, from providing you with the{" "}
              <a
                className="underline text-blue-500"
                href="https://baselineitdevelopment.com/seo-company-mohali"
              >
                best SEO services in Mohali
              </a>{" "}
              to other digital solutions.
            </p>
          </div>

          <div className="card_items grid grid-cols-3 gap-2 my-[20px]">
            <Services />
            <Services />
            <Services />
          </div>
        </div>
      </div>
    </>
  );
};
export default Ourservice;
