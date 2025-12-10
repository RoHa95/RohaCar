import React from "react";

function BannerBg() {
  return (
    <div className="relative overflow-visible h-fit ">
      <div className=" w-full  h-full object-cover">
        <img
          className="hidden lg:flex"
          src="images/heroBanner_2XL.webp"
          alt="bg-2xl"
        />
        <img
          className=" w-full lg:hidden"
          src="images/heroBanner_base.webp"
          alt="bg-base"
        />
      </div>
        <div className="hidden lg:flex absolute -bottom-20 md:-bottom-10 left-0 lg:top-0 lg:left-0 lg:h-full lg:bg-[linear-gradient(to_right,theme(colors.indigo.900),transparent)] lg:px-5 lg:py-12 w-full overflow-visible"></div>
    </div>
  );
}

export default BannerBg;
