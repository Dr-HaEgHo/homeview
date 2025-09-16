import CommunityVideo from "@/components/home/CommunityVideo";
import FAQs from "@/components/home/FAQs";
import Hero from "@/components/home/Hero";
import HomeAd from "@/components/home/HomeAd";
import Partners from "@/components/home/Partners";
import RedefiningFuture from "@/components/home/RedefiningFuture";
import Testimonials from "@/components/home/Testimonials";
import WhyChoose from "@/components/home/WhyChoose";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import AdBannerSlim from "@/components/shared/AdBannerSlim";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Partners/>
      <CommunityVideo/>
      <WhyChoose/>
      <RedefiningFuture/>
      <AdBannerSlim/>
      <WhyChooseUs/>
      <Testimonials/>
      <HomeAd/>
      <FAQs/>
    </main>
  );
}
