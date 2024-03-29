export const TopBar = () => {
  return (
    <div className="w-full bg-red-500 px-[34px] py-[15px] shadow-[0px_1px_0px_0px_rgba(18_32_59_0.09)] border-solid  h-[107px] flex items-center ">
      <div className="flex flex-row justify-between items-center">
        <div>
          <input className="w-[360px] bg-[#f4f4f4] rounded-[10px] h-8 " />
        </div>
        <div className="">Right container</div>
      </div>
    </div>
  );
};
