import React from "react";
import T from "../../../components/OverviewTitle"
import BlobIcon from "../../../assets/svg/blog.svg"
import CommentIcon from "../../../assets/svg/comments.svg"
import RateIcon from "../../../assets/svg/rate.svg"
import SiteIcon from "../../../assets/svg/site.svg"
import SiteVisits from "./SiteVisits"




const Overview = () => {
  return <div className="w-full">
    <div className="w-full h-[123px] flex items-center justify-between bg-white px-12 rounded-bg">
      {Items.map((item, index) => 
        <T key={index} icon={item.icon} title={item.title} number={item.amount} />
      )}
    </div>
    {/* the graph */}
    <div className="w-full flex items-center justify-between bg-white px-4 mt-3 rounded-bg">
      <div className="w-full">
        <p className="text-[#4B0C67] font-semibold text-2xl pt-4 pb-10">Site Visits Statistics</p>
        <div className="w-full">
             <SiteVisits />
        </div>
      </div>
    </div>
    {/* the summary */}
    <div className="w-full flex items-center justify-between bg-white px-4 mt-3 rounded-bg">
      <div className="w-full">
        <p className="text-[#4B0C67] font-semibold text-2xl pt-4 pb-10">News and Blog Update</p>
        
      </div>
    </div>

  </div>;
};

export default Overview;


export const Items = [
  {
    icon: BlobIcon,
    title: 'Blog Post',
    amount: 12,
  },
  {
    icon: SiteIcon,
    title: 'Site Visits',
    amount: 1600,
  },
  {
    icon: CommentIcon,
    title: 'Comments',
    amount: 200,
  },
  {
    icon: RateIcon,
    title: 'Total Read',
    amount: 200,
  },

]