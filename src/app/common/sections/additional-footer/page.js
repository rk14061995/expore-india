import Link from "next/link";
export default function AdditionalFooter() {
    // Contact information as a dynamic object
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
    const footerDesc = "Explore the rich history, stunning landmarks, and scenic landscapes of the United Kingdom. From the iconic city of London to the breathtaking beauty of the Scottish Highlands, plan your next adventure with us and discover the best of the UK.";

    // const footerDesc = "Discover the beauty and diversity of India with our comprehensive guide to the best destinations, historical landmarks, and hidden gems. Plan your next adventure with us.";
    return (
        <div className="footer_section layout_padding">
            <div className="container">
                <div className="row">
                    {/* <!-- About Us --> */}
                    <div className="col-md-4">
                        <h1 className="footer_title">About Us</h1>
                        <p className="footer_text">
                            {footerDesc}
                        </p>
                    </div>
                    {/* <!-- Quick Links --> */}
                    <div className="col-md-4">
                        <h1 className="footer_title">Quick Links</h1>
                        <ul className="footer_links">
                            {/* <li><a href="#">Top Destinations</a></li>
                            <li><a href="#">Popular Hotels</a></li>
                            <li><a href="#">Travel Tips</a></li> */}
                            <li>
                                <Link href="/about-us" legacyBehavior>
                                    <a className="nav-link" >ABOUT US</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact-us" legacyBehavior>
                                    <a className="nav-link" title="CONTACT">CONTACT</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- Contact Information --> */}
                    <div className="col-md-4">
                        <h1 className="footer_title">Contact Us</h1>
                        <p className="footer_text">{contact.address}</p>
                        <p className="footer_text">Email: <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
                        <p className="footer_text">Phone: {contact.phone}</p>
                        <div className="social_icons">
                            {/* Render social icons dynamically */}
                            {Object.keys(contact.socialLinks).map((platform) => {
                                const { href, alt, icon } = contact.socialLinks[platform];
                                return (
                                    <a key={platform} href={href} target="_blank" rel="noopener noreferrer">
                                        <img src={icon} alt={alt} />
                                    </a>
                                );
                            })}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
