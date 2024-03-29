import React, { Dispatch, SetStateAction } from "react";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import MainLogo from "../../assets/svg/MainLogo";
import { PRIVATE_PATHS, REGULAR_PATHS } from "../../routes/paths";
import {
  NavDropdownItem,
  NavLinkItem,
  NavLinkItemPropsType,
} from "./NavLinkItem";
import {
  BlogIcon,
  DashboardNavLinkItemIcon,
  DownArrowIcon,
  NavLinkList,
  SaloonAndSpaIcon,
} from "./constants";
import Dropdown from "./TrialGroup";

export const DashboardSideNav = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("key");
    navigate(REGULAR_PATHS.LOGIN);
  };

  return (
    <div className="h-screen border-4 px-10 pt-9 ">
      <div>
        <div className=" mb-20">
          <MainLogo />
        </div>
        <NavLinkItem
          path={PRIVATE_PATHS.OVERVIEW}
          icon={DashboardNavLinkItemIcon}
          text="Dashboard Overview"
        />
        <NavLinkItem
          path={PRIVATE_PATHS.DASHBOARD}
          icon={DashboardNavLinkItemIcon}
          text="Dashboard Overview"
        />
        <NavLinkItem
          path={PRIVATE_PATHS.DASHBOARD}
          icon={DashboardNavLinkItemIcon}
          text="Dashboard Overview"
        />
      </div>

      {/* {<NavGroupItem items={NavLinkList}/>} */}
      <div className="mt-10">
        <Dropdown
          icon={<SaloonAndSpaIcon />} // Example of setting the fill color to red
          title="Saloon and Spa"
          items={[
            { id: 1, text: "Appointments", link: PRIVATE_PATHS.APPOINTMENTS },
            { id: 2, text: "Payment", link: PRIVATE_PATHS.PAYMENTS },
            {
              id: 3,
              text: "Update Services",
              link: PRIVATE_PATHS.UPDATE_SERVICES,
            },
          ]}
        />
      </div>

      <div className=" w-full mt-[20px] pb-[30px]">
        <Button
          className="bg-[#F8F8F8] w-full rounded-[6px] h-10"
          //onClick={handleLogOut}
          name={
            <span className=" text-[15px] flex items-center gap-[10px] px-3 text-[#4B0C67]  font-extrabold">
              <BlogIcon />
              Blog
            </span>
          }
        />
      </div>
      <div className="border-solid border-t border-[#E4E4E7] w-full mt-[20px] pb-[30px]">
        <Button
          className="bg-[#F8F8F8] w-full rounded-[6px] h-10"
          onClick={handleLogOut}
          name={
            <span className=" text-[15px] flex items-center gap-[10px] px-3 text-[#4B0C67]  font-extrabold">
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

type NavGroupItemProps = {
  items: Partial<NavLinkItemPropsType>[];
};

export const NavGroupItem: React.FC<NavGroupItemProps> = (props) => {
  const { items } = props;

  return (
    <div className="w-full pt-5 relative pb-[25px] flex flex-col items-start gap-[15px] border-solid">
      {items.map((item, idx) => (
        <div key={idx} className="w-full">
          {item.isDropdown ? (
            // @ts-ignore
            <NavDropdownItem {...item}>
              {item.renderChildren ? item.renderChildren() : null}
            </NavDropdownItem>
          ) : (
            // @ts-ignore
            <NavLinkItem {...item} />
          )}
        </div>
      ))}
    </div>
  );
};
