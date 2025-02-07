import Header from "../common/header/page";
// import Hero from "./common/sections/hero/page";
// import Content from "./common/sections/top-places/page";
// import Services from "./common/sections/second-fold/page";
import ServicesSecond from "../common/sections/third-fold/page";
import AdditionalFooter from "../common/sections/additional-footer/page";
import Footer from "../common/footer/page";
export default function Contact(props) {
  const contact = {
    email: "hivalikanthi@gmail.com",
    phone: "+91 1234567892",
    address: "Village Patal, Pauri Garhwal, Uttarakhand, India",
    socialLinks: {
      facebook: {
        href: "https://www.facebook.com",
        alt: "Facebook",
        icon: "images/facebook.png"
      },
      twitter: {
        href: "https://www.facebook.com",
        alt: "Facebook",
        icon: "images/twitter.png"
      },
      instagram: {
        href: "https://www.facebook.com",
        alt: "Facebook",
        icon: "images/instagram.png"
      }
    }
  };
  return (
    <>
      <Header />
      {/* <Hero/>
        <Content/>
        <Services/> */}
      <ServicesSecond isContactUsPage={true} contact={contact} />
      <AdditionalFooter />
      <Footer />
    </>
  );
}