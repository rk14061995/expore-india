import Image from "next/image";
import styles from "./page.module.css";
import Header from "./common/header/page";
import Hero from "./common/sections/hero/page";
import Content from "./common/sections/top-places/page";
import Services from "./common/sections/second-fold/page";
import ServicesSecond from "./common/sections/third-fold/page";
import AdditionalFooter from "./common/sections/additional-footer/page";
import Footer from "./common/footer/page";

export default function Home() {
  const contact = {
    email: "hivalikanthi@gmail.com",
    phone: "+91 1234567892",
    address: "123, Main Street, Your City, Country",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    }
  };
  return (
    <>
      <Header />
      <Hero />
      <Content />
      <Services />
      <ServicesSecond contact={contact} />
      <AdditionalFooter contact={contact} />
      <Footer contact={contact} />
    </>
  );
}
