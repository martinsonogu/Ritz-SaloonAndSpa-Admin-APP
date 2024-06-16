import React from "react";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import MainLogo from "../../assets/svg/MainLogo";
import { PRIVATE_PATHS, REGULAR_PATHS } from "../../routes/paths";

import {
  BlogIcon,
  DashboardNavLinkItemIcon,
  DashboardNavLinkItemIcon2,
  SaloonAndSpaIcon,
} from "./constants";
import Dropdown from "./TrialGroup";

type MainItem = {
  id: number;
  title: string;
  icon: JSX.Element;
  items: NavItem[];
};

type NavItem = {
  id: number;
  text: string;
  link: string;
};

export const DashboardSideNav = () => {
  const navigate = useNavigate();

  const mainItems = [
    {
      id: 1,
      title: "Dashboard",
      icon: <DashboardNavLinkItemIcon2 />,
      items: [
        {
          id: 1,
          text: "Ritz Portfolio",
          link: PRIVATE_PATHS.APPOINTMENTS,
        },
        {
          id: 2,
          text: "Ritz Salon & Spa",
          link: PRIVATE_PATHS.PAYMENTS
        },
        {
          id: 3,
          text: "Ritz Luxury Gym",
          link: PRIVATE_PATHS.UPDATE_SERVICES,
        },
        {
          id: 4,
          text: "Ritz Luxury Apartments",
          link: PRIVATE_PATHS.UPDATE_SERVICES,
        },
      ],
    },
    {
      id: 2,
      title: "Saloon and Spa",
      icon: <SaloonAndSpaIcon />,
      items: [
        { id: 1, text: "Appointments", link: PRIVATE_PATHS.APPOINTMENTS },
        { id: 2, text: "Payment", link: PRIVATE_PATHS.PAYMENTS },
        {
          id: 3,
          text: "Update Services",
          link: PRIVATE_PATHS.UPDATE_SERVICES,
        },
      ],
    },
  ];

  const handleLogOut = () => {
    localStorage.removeItem("key");
    navigate(REGULAR_PATHS.LOGIN);
  };

  return (
    <div className=" w-[35%] h-full bg-[#FFFFFF] px-8 pt-9 ">
      <div className="mb-20">
        <MainLogo />
      </div>

      {/* contains Dashboard and saloon spa */}
      <div className="w-full flex flex-col items-center gap-10 ">
        {mainItems.map((item: MainItem) => (
          <div className="w-full flex items-center" key={item.id}>
            <Dropdown
              icon={item.icon}
              title={item.title}
              items={item.items}
              initiallyActive={item.title === "Dashboard"}
              key={item.id}
            />
          </div>
        ))}
      </div>

      {/* other options */}
      <div className="pb-9">
        <Button
          className="bg-[#F8F8F8] w-full rounded-[6px] px-3 py-3"
          name={
            <span className="bg-transparent text-[15px] flex items-center gap-3 text-[#4B0C67]  font-extrabold">
              <BlogIcon />
              Blog
            </span>
          }
        />
        <Button
          className="bg-[#F8F8F8] w-full rounded-[6px] px-3 py-3"
          name={
            <span className=" text-[15px] flex items-center gap-3 text-[#4B0C67]  font-extrabold">
              <BlogIcon />
              General Settings
            </span>
          }
        />
        <Button
          className="bg-[#F8F8F8] w-full rounded-[6px] px-3 py-3"
          onClick={handleLogOut}
          name={
            <span className=" text-[15px] flex items-center gap-3 text-[#4B0C67]  font-extrabold">
              <FontAwesomeIcon
                icon={faArrowRightFromBracket}
                style={{ color: "#4B0C67" }}
              />
              Logout
            </span>
          }
        />
      </div>
    </div>
  );
};
