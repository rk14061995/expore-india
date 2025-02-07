export default function ServicesSecond(props) {
    const destinationData = [
        {
            heading: "Explore the Beauty of the Himalayas",
            text: "Experience the majestic landscapes of the Indian Himalayas. Visit destinations like Leh-Ladakh, Himachal Pradesh, and Uttarakhand for breathtaking mountain views, adventure sports, and serene monasteries.",
        },
        {
            heading: "Beach Getaways in Goa",
            text: "Relax on the golden beaches of Goa, famous for its vibrant nightlife, water sports, and Portuguese heritage. Enjoy the perfect mix of adventure and relaxation in this coastal paradise.",
        },
        {
            heading: "Cultural Tours in Delhi",
            text: "Immerse yourself in the rich history and heritage of Delhi. Explore iconic landmarks like the Red Fort, Qutub Minar, India Gate, and experience the bustling streets of Chandni Chowk.",
        },
        {
            heading: "Adventure Packages in Rishikesh",
            text: "For the thrill-seekers, Rishikesh offers white-water rafting, bungee jumping, trekking, and camping along the Ganges. It’s also a hub for yoga and meditation retreats.",
        },
        {
            heading: "Relaxation Retreats in Kerala",
            text: "Indulge in a peaceful getaway in Kerala’s backwaters. Stay in traditional houseboats, enjoy Ayurvedic treatments, and explore the lush green landscapes of 'God’s Own Country'.",
        },
        {
            heading: "Family Vacations in Jaipur",
            text: "Discover the royal heritage of Jaipur. Visit Amer Fort, Hawa Mahal, City Palace, and experience the colorful bazaars, elephant rides, and traditional Rajasthani culture.",
        },
        {
            heading: "Spiritual Journeys in Varanasi",
            text: "Experience the spiritual aura of Varanasi, the city of temples and ghats. Witness the mesmerizing Ganga Aarti, take a boat ride on the sacred river, and explore ancient temples.",
        },
        {
            heading: "Wildlife Safaris in Ranthambore",
            text: "Get up close with nature at Ranthambore National Park. Spot majestic Bengal tigers, leopards, and other wildlife in one of India's most famous national parks.",
        },
        {
            heading: "Trekking Adventures in Himachal Pradesh",
            text: "Embark on thrilling treks in Himachal Pradesh, from the Triund trek in Dharamshala to the Hampta Pass trek. Enjoy stunning views, alpine forests, and adventure-filled experiences.",
        },
        {
            heading: "Romantic Honeymoons in Udaipur",
            text: "Plan a dreamy honeymoon in the ‘City of Lakes’. Stay in luxurious palace hotels, take a boat ride on Lake Pichola, and explore the royal charm of Udaipur.",
        },
        {
            heading: "Culinary Adventures in Mumbai",
            text: "Savor the flavors of Mumbai’s street food, from vada pav to pav bhaji. Explore high-end restaurants, Irani cafés, and bustling markets for an unforgettable food experience.",
        },
        {
            heading: "Historical Tours in Agra",
            text: "Step back in time with a visit to Agra. Marvel at the breathtaking Taj Mahal, explore the grand Agra Fort, and experience the Mughal heritage of this iconic city.",
        },
        {
            heading: "Beach Retreats in Andaman & Nicobar",
            text: "Relax on the pristine beaches of the Andaman & Nicobar Islands. Enjoy snorkeling, scuba diving, and serene sunset views in this tropical paradise.",
        },
        {
            heading: "Cultural Festivals in Kolkata",
            text: "Experience the vibrant culture of Kolkata during Durga Puja. Witness grand pandals, cultural performances, and traditional Bengali cuisine in this lively festival city.",
        }
    ];


    const PrivacyPolicy = [
        {
            heading: "Privacy Policy",
            text: "We respect your privacy and are committed to protecting your personal data. Our website provides informative content about travel destinations in Uttarakhand, including guides, tips, and recommendations. We do not collect or store personal information directly. However, we may use affiliate links to travel services to help support our website while ensuring a seamless experience for our users."
        },
        {
            heading: "What Information We Collect",
            text: "We do not collect any personally identifiable information. Our website focuses on providing detailed travel information about Uttarakhand, including destinations like Nainital, Mussoorie, Rishikesh, and Jim Corbett. Any bookings or purchases you make through third-party links are subject to their respective privacy policies."
        },
        {
            heading: "Affiliate Links",
            text: "To support our website, we may provide affiliate links to hotels, travel agencies, and tour services related to Uttarakhand. These links help us maintain the site without affecting the price you pay. When you book through these links, we may earn a commission at no extra cost to you."
        },
        {
            heading: "Cookies and Tracking",
            text: "Our website may use cookies to improve user experience, analyze website traffic, and provide personalized content. However, we do not collect or store personal data through cookies, nor do we use tracking technologies for personally identifiable information."
        },
        {
            heading: "Third-Party Links",
            text: "Our website may contain links to third-party websites, such as travel agencies, hotel booking platforms, and tour operators. Each of these sites has its own privacy policy, and we encourage users to review them before sharing any personal information."
        },
        {
            heading: "Security of Your Data",
            text: "While we do not collect personal data, we ensure that any third-party services we recommend follow secure practices to protect user information. However, we cannot be responsible for the policies and security measures of external websites."
        },
        {
            heading: "Changes to Privacy Policy",
            text: "We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. Any updates will be posted on this page. We encourage you to check this policy periodically for the latest information on our privacy practices."
        }
    ];

    const isPrivacyPloicyPage = props?.isPrivacyPloicyPage || false;
    const isContactUsPage = props?.isContactUsPage || false;
    const data = props?.isPrivacyPloicyPage ? PrivacyPolicy : destinationData;
    const pageTitle = props?.isPrivacyPloicyPage ? "Privacy Policy" : "Discover Your Perfect Destination";
    const contact = props?.contact || false;
    return (
        <>
            {/* <div className="Recurments_section">
                <div className="container">
                    <div className="btn_main">
                        <h1>Discover Your Perfect Destination</h1>
                    </div>
                </div>
            </div> */}
            <div className="services_section">
                <div className="container">
                    <h1 className="services_text">{pageTitle}</h1>
                </div>
            </div>
            {!isContactUsPage && data.map((item, index) => (
                <div key={index} className="Recurments_section_2">
                    <div className="container">
                        <div className="product_section">
                            <div className="row padding_top_0">
                                <div className="col-sm-2">
                                    <div className="one_text"><a href="#" className="active">{index + 1}</a></div>
                                </div>
                                <div className="col-sm-8">
                                    <h1 className="software_text">{item.heading}</h1>
                                    <p className="lorem_ipsum_text">{item.text}</p>
                                </div>
                                {!isPrivacyPloicyPage && <div className="col-sm-2">
                                    <button className="apply_now"><a href="#">Book Now</a></button>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            {isContactUsPage && contact && <div className="Recurments_section_2">
                <div className="container">
                    <div className="product_section">
                        <div className="row padding_top_0">
                            <div className="col-sm-2">
                                {/* <div className="one_text"><a href="#" className="active">{index + 1}</a></div> */}
                            </div>
                            <div className="col-sm-8">
                                <h1 className="footer_title">Contact Us</h1>
                                <p className="footer_text">{contact.address}</p>
                                <p className="footer_text">Email: <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
                                <p className="footer_text">Phone: {contact.phone}</p>
                                <div className="social_icons">
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
            </div>}
        </>
    );
}