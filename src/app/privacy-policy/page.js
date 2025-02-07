import Header from "../common/header/page";
// import Hero from "./common/sections/hero/page";
// import Content from "./common/sections/top-places/page";
// import Services from "./common/sections/second-fold/page";
import ServicesSecond from "../common/sections/third-fold/page";
import AdditionalFooter from "../common/sections/additional-footer/page";
import Footer from "../common/footer/page";
export default function Privacy() {
    return(
      <>
        <Header/>
        {/* <Hero/>
        <Content/>
        <Services/> */}
        <ServicesSecond isPrivacyPloicyPage={true}/>
        <AdditionalFooter/>
        <Footer/>
      </>
    );
  }