import Banners from "@/components/Banners";
import Service from "@/components/Service";
import Subfooter from "@/components/Subfooter";
import { serviceList } from "@/contants/appdata";
import React from "react";

const Services = () => {
  return (
    <div>
      <Banners
        img="/service-banner.jpg"
        title="Services"
        text="Experience elevated travel with Code scrapper: Where style, comfort, and safety meet for every occasion. Travel in sophistication and peace of mind."
      />
      <div className="mb-5">
        {serviceList?.map((service, index) => (
          <div key={index}>
            <Service service={service} />
          </div>
        ))}
      </div>
      <Subfooter />
    </div>
  );
};

export default Services;
