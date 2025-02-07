export default function ServicesSecond(props) {
    const destinationData = [
        {
            heading: "Explore the Scottish Highlands",
            text: "Discover the breathtaking beauty of the Scottish Highlands with our exclusive tour packages. Experience rugged landscapes, serene lochs, and charming villages surrounded by nature's wonders.",
        },
        {
            heading: "Beach Getaways in Cornwall",
            text: "Relax on the stunning beaches of Cornwall, famous for its golden sands and crystal-clear waters. Enjoy water sports, coastal walks, and a laid-back atmosphere in one of the UK's most scenic locations.",
        },
        {
            heading: "Cultural Tours in London",
            text: "Immerse yourself in the vibrant culture and history of London with our guided tours. Visit iconic landmarks like the Tower of London, Buckingham Palace, and explore world-class museums, galleries, and theaters.",
        },
        {
            heading: "Adventure Packages in Wales",
            text: "For the thrill-seekers, our adventure packages in Wales offer everything from hiking in Snowdonia to kayaking in the Brecon Beacons. Experience the wild beauty of this diverse landscape.",
        },
        {
            heading: "Relaxation Retreats in Lake District",
            text: "Indulge in a peaceful getaway in the picturesque Lake District. Enjoy serene lakes, tranquil walks, luxurious spas, and a relaxing atmosphere perfect for rejuvenation and reflection.",
        },
        {
            heading: "Family Vacations in the Cotswolds",
            text: "Plan a memorable family vacation in the Cotswolds. Explore charming villages, scenic countryside, and family-friendly activities including outdoor adventures, historical sites, and fun farm experiences.",
        },
        {
            heading: "Group Tours in Oxford and Cambridge",
            text: "Our group tours of Oxford and Cambridge cater to a wide range of interests. Explore these historic university towns, with tours of the prestigious colleges, beautiful gardens, and cultural sites.",
        },
        {
            heading: "Wildlife Safaris in Scotland",
            text: "Experience the wild beauty of Scotland’s wildlife with our safaris. Explore nature reserves, spot rare wildlife, and take in the stunning landscapes of the Scottish wilderness.",
        },
        {
            heading: "Adventure Tours in the Peak District",
            text: "Embark on thrilling adventures in the Peak District. From rock climbing and hiking to cycling and caving, the Peak District offers a wide range of outdoor activities for adventure enthusiasts.",
        },
        {
            heading: "Honeymoon Destinations in Edinburgh",
            text: "Plan a romantic getaway to Edinburgh, Scotland’s capital. Stay in luxurious hotels, enjoy intimate dinners, and explore the beautiful city full of history, culture, and stunning landscapes.",
        },
        {
            heading: "Culinary Adventures in London",
            text: "Savor the rich flavors of British cuisine with our culinary tours in London. Explore world-renowned markets, sample traditional dishes, and enjoy fine dining experiences across the city.",
        },
        {
            heading: "Historical Tours in York",
            text: "Step back in time with a historical tour of York. Explore medieval walls, ancient Roman ruins, and iconic landmarks like York Minster. Experience the rich history of this charming city.",
        },
        {
            heading: "Beach Retreats in Devon",
            text: "Relax on the stunning beaches of Devon, renowned for its natural beauty and tranquil environment. Enjoy the perfect beach getaway with scenic views, coastal walks, and peaceful retreats.",
        },
        {
            heading: "Cultural Festivals in Edinburgh",
            text: "Experience the lively cultural scene of Edinburgh with our cultural festival tours. Join in the excitement of the Edinburgh Festival Fringe, the world’s largest arts festival, along with other events celebrating music, theater, and the arts.",
        }
    ];

    const PrivacyPolicy = [
        {
            heading: "Privacy Policy",
            text: "We respect your privacy and are committed to ensuring that your personal data is protected. We do not collect or store any personal information through our website. Our primary goal is to provide you with detailed, informative content related to travel destinations. Additionally, we share affiliate links to hotels, which help us maintain the site and continue providing free content. Please note, when you click on these affiliate links, we may earn a commission, but this does not affect the price you pay for any bookings."
        },
        {
            heading: "What Information We Collect",
            text: "We do not collect or store any personally identifiable information on our website. We only provide travel guides, articles, and affiliate links to help you book accommodations or plan your travels."
        },
        {
            heading: "Affiliate Links",
            text: "We may provide affiliate links to hotels and other travel-related services. These links do not collect personal information but help us maintain our website and provide high-quality content for our users. When you book through these links, we may earn a commission at no extra cost to you."
        },
        {
            heading: "Cookies and Tracking",
            text: "Our website may use cookies to enhance your browsing experience, provide personalized content, and analyze traffic. However, no personal information is stored through cookies, and we do not use any tracking technologies to collect personally identifiable information."
        },
        {
            heading: "Third-Party Links",
            text: "Our website may contain links to third-party websites. These websites have their own privacy policies, and we are not responsible for their content or how they handle your personal data. Please review their privacy policies before providing any personal information."
        },
        {
            heading: "Changes to Privacy Policy",
            text: "We reserve the right to update or modify this privacy policy at any time. Any changes will be reflected on this page. We encourage you to review this policy periodically to stay informed about how we are protecting your privacy."
        }
    ];

    // const destinationData = [
    //     {
    //         heading: "Explore the Himalayas",
    //         text: "Discover breathtaking views and adventure with our Himalayan tour packages. Experience the beauty of snow-capped peaks, serene lakes, and picturesque villages.",
    //     },
    //     {
    //         heading: "Beach Getaways",
    //         text: "Relax on the sun-kissed beaches of Goa and the Andaman Islands. Enjoy water sports, beach parties, and a laid-back atmosphere with our exclusive beach vacation packages.",
    //     },
    //     {
    //         heading: "Cultural Tours",
    //         text: "Immerse yourself in India's rich history and culture with our guided tours to historical sites, temples, and cultural festivals. Discover the heritage of incredible India.",
    //     },
    //     {
    //         heading: "Adventure Packages",
    //         text: "For the thrill-seekers, we offer adventure packages including trekking, wildlife safaris, and more. Experience the thrill of exploring new terrains and challenging activities.",
    //     },
    //     {
    //         heading: "Relaxation Retreats",
    //         text: "Indulge in a relaxing getaway with our luxurious retreats. Enjoy spa treatments, scenic views, and a peaceful atmosphere for rejuvenation and rejuvenation.",
    //     },
    //     {
    //         heading: "Family Vacations",
    //         text: "Plan a family vacation with our family-friendly packages. Enjoy family-friendly activities, activities for the whole family, and a family-friendly atmosphere.",
    //     },
    //     {
    //         heading: "Group Tours",
    //         text: "Group tours cater to a wide range of interests and preferences. Whether you're a group of friends, a business team, or a family, we have the perfect tour for you.",
    //     },
    //     {
    //         heading: "Wildlife Safaris",
    //         text: "Experience the beauty of nature with our wildlife safaris. Explore endangered species, wildlife reserves, and wildlife safaris for an unforgettable wildlife adventure.",
    //     },
    //     {
    //         heading: "Adventure Tours",
    //         text: "Embark on thrilling adventures with our adventure tours. From mountain climbing to water sports, our tours provide a unique and adventurous experience.",
    //     },
    //     {
    //         heading: "Honeymoon Destinations",
    //         text: "Plan a romantic getaway with our honeymoon packages. Indulge in luxurious accommodations, romantic activities, and breathtaking views for a memorable honeymoon experience.",
    //     },
    //     {
    //         heading: "Culinary Adventures",
    //         text: "Experience the culinary wonders of India with our culinary tours. Explore local cuisines, culinary festivals, and culinary adventures for a gastronomic adventure.",
    //     },
    //     {
    //         heading: "Historical Tours",
    //         text: "Discover the rich history of India with our historical tours. Explore ancient ruins, historical sites, and cultural festivals for a unique historical experience.",
    //     },
    //     {
    //         heading: "Beach Retreats",
    //         text: "Indulge in the tranquil beauty of the beach with our beach retreats. Enjoy luxurious accommodations, beach parties, and a laid-back atmosphere for a relaxing beach getaway.",
    //     },
    //     {
    //         heading: "Cultural Festivals",
    //         text: "Experience the vibrant culture of India with our cultural festivals. Join cultural performances, festivals, and cultural events for a captivating cultural adventure.",
    //     }
    // ]
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