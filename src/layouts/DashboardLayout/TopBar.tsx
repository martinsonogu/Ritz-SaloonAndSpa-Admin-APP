import { NotificationIcon } from "../../components/SideNav/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const TopBar = () => {
  return (
    <div className="w-full p-6 flex items-center justify-between bg-white">
      <div>
        <div className="bg-[#F4F4F4] w-full px-16 py-2 flex items-center justify-center rounded-xl">
          <FontAwesomeIcon icon={faSearch} />
          <input
            placeholder="Search or type a command"
            className="bg-[#F4F4F4] ml-3 w-full flex outline-none text-sm text-[#9A9FA5] font-semibold"
          />
        </div>
      </div>
      <div className=" flex items-center justify-center gap-6">
        {/* notifications */}
        <div className="relative rounded-lg bg-[#FFFAF1] p-3 flex items-center justify-center">
          <NotificationIcon />
          <span className=" absolute text-sm top-0 right-3 text-red-600">
            0
          </span>
        </div>
        <div className=" flex items-center justify-center gap-5">
          {/* image */}
          <div className=" w-[60px] h-[60px] rounded-2xl flex items-center justify-center border border-green-300">
            img
          </div>

          {/* name & role */}
          <span>
            <p className=" text-base text-[#151D48] font-medium">Alice Doe</p>
            <p className=" text-sm text-[#737791] font-normal">Admin</p>
          </span>
        </div>
      </div>
    </div>
  );
};
