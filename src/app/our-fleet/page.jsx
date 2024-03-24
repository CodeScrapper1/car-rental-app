import Banners from "@/components/Banners";
import Insights from "@/components/Insights";
import React from "react";

const Ourfleet = () => {
  return (
    <div>
      <Banners
        img="/our-fleet-banner.jpg"
        title="Our Fleet"
        text="Whether you’re after pure luxury or a high capacity transporter, we have a vehicle for any occasion. What will you choose?"
      />
      <div className="relative">
        <Insights isForm={false} />
      </div>
    </div>
  );
};

export default Ourfleet;
