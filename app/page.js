import BannerBg from "@/components/module/BannerBg";
import Category from "@/components/module/Category";
import InformationBox from "@/components/module/InformationBox";
import RateStar from "@/components/module/RateStar";
import SearchForm from "@/components/module/SearchForm";
import Services from "@/components/module/Services";
import Banner from "@/components/template/Banner";

export default function Home() {
  return (
    <div>
      <BannerBg/>
      <SearchForm/>
      <RateStar/>
      <InformationBox/>
      <Category/>
      {/* <BannerBg/>
      <SearchForm/> */}
      {/* <Banner /> */}
     
    </div>
  );
}
