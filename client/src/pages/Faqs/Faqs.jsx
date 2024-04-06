import React, { useState } from "react";
import {
  contactUsImage,
  eventsFaqs,
  faqs,
  genralFaqs,
  inductionFaqs,
  loginImage,
  logoImage,
  servicesFaqs,
} from "../../components/Constant";
import FAQ from "./FAQ";

const Faqs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const changeTab = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const TabContent = {
    1: <FAQ faqs={eventsFaqs} />,
    2: <FAQ faqs={servicesFaqs} />,
    3: <FAQ faqs={genralFaqs} />,
    4: <FAQ faqs={inductionFaqs} />,
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <div className="flex justify-evenly items-center ">
        <TabButton
          title="Events"
          onClick={() => changeTab(1)}
          isActive={activeTab === 1}
        />
        <TabButton
          title="Induction"
          onClick={() => changeTab(2)}
          isActive={activeTab === 2}
        />
        <TabButton
          title="Services"
          onClick={() => changeTab(3)}
          isActive={activeTab === 3}
        />
        <TabButton
          title="Genral"
          onClick={() => changeTab(4)}
          isActive={activeTab === 4}
        />
      </div>
      <div className="mt-4">{TabContent[activeTab]}</div>
    </div>
  );
};

const Tab1Content = () => {
  return (
    <div>
      <img src={loginImage} alt="Illustration" className="max-w-2xl" />
    </div>
  );
};

const Tab2Content = () => {
  return (
    <div>
      <img src={contactUsImage} alt="Illustration" className="max-w-2xl" />
    </div>
  );
};

const Tab3Content = () => {
  return (
    <div>
      <h1>Devendra SIngh</h1>
      <img src={logoImage} alt="Illustration" className="max-w-2xl" />
    </div>
  );
};

const TabButton = ({ title, onClick, isActive }) => {
  return (
    <button
      className={` ${
        isActive ? "bg-[#FE3D4D] text-white " : ""
      }  bg-[#FFCDCD]-600 rounded-xl px-4 py-2 `}
      style={{
        boxShadow: "4.38px 4.38px 0px 0px #000000",
      }}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Faqs;
