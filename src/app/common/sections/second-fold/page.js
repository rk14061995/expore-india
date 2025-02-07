export default function Services() {
    // const servicesData = [
    //     {
    //       title: "Everest Base Camp",
    //       image: "images/img-1.png",
    //       description: "Embark on a journey to the iconic Everest Base Camp, where you'll experience stunning views of the world's highest peak and immerse yourself in the rich culture of the Sherpa people.",
    //       exploreLink: "#"
    //     },
    //     {
    //       title: "Valley of Flowers",
    //       image: "images/img-2.png",
    //       description: "Discover the enchanting Valley of Flowers in Uttarakhand, a UNESCO World Heritage site known for its vibrant meadows and diverse flora, accessible during the summer months.",
    //       exploreLink: "#"
    //     },
    //     {
    //       title: "Kudremukh Trek",
    //       image: "images/img-3.png",
    //       description: "Experience the beauty of the Western Ghats on the Kudremukh Trek, renowned for its lush greenery and diverse wildlife, offering a refreshing adventure for nature enthusiasts.",
    //       exploreLink: "#"
    //     },
    //     {
    //       title: "Chadar Trek",
    //       image: "images/img-4.png",
    //       description: "Brave the icy terrains of the Chadar Trek in Ladakh, where you'll trek over the frozen Zanskar River and witness the stark, stunning beauty of the Himalayan winter landscape.",
    //       exploreLink: "#"
    //     },
    //     {
    //       title: "Hampta Pass",
    //       image: "images/img-1.png",
    //       description: "Traverse the scenic Hampta Pass, where you'll move from lush green valleys to barren landscapes in a short span, capturing the diverse beauty of Himachal Pradesh.",
    //       exploreLink: "#"
    //     },
    //     {
    //       title: "Sandakphu Trek",
    //       image: "images/img-2.png",
    //       description: "Embark on the Sandakphu Trek to enjoy panoramic views of the Kanchenjunga and Everest ranges, offering a memorable experience amidst the scenic beauty of the Eastern Himalayas.",
    //       exploreLink: "#"
    //     },
    //     {
    //       title: "Rajmachi Trek",
    //       image: "images/img-3.png",
    //       description: "Discover the historic Rajmachi Fort and enjoy the picturesque landscape of the Sahyadri range, known for its rich greenery and stunning views during the monsoon season.",
    //       exploreLink: "#"
    //     },
    //     {
    //       title: "Tarsar Marsar Trek",
    //       image: "images/img-4.png",
    //       description: "Explore the Tarsar Marsar Trek, a hidden gem in Kashmir, famous for its pristine alpine lakes and serene surroundings, offering a unique trekking experience.",
    //       exploreLink: "#"
    //     }
    //   ];
    const servicesData = [
        {
            title: "Scafell Pike",
            image: "images/img-1.png",
            description: "Conquer Scafell Pike, the highest peak in England, located in the Lake District. Enjoy breathtaking views of the lakes and valleys around this iconic mountain.",
            exploreLink: "#"
        },
        {
            title: "Snowdon Summit",
            image: "images/img-2.png",
            description: "Take on Snowdon, the highest mountain in Wales. Enjoy various summit routes and panoramic views of Snowdonia National Park and its stunning landscape.",
            exploreLink: "#"
        },
        {
            title: "Ben Nevis",
            image: "images/img-3.png",
            description: "Climb Ben Nevis, the tallest mountain in the UK, located in the Scottish Highlands. Enjoy a challenging trek with views of rugged highland beauty.",
            exploreLink: "#"
        },
        {
            title: "Hadrian's Wall Path",
            image: "images/img-4.png",
            description: "Walk along Hadrian's Wall Path, a UNESCO World Heritage site. Explore ancient Roman fortifications and enjoy scenic views of the countryside.",
            exploreLink: "#"
        },
        {
            title: "The Isle of Skye",
            image: "images/img-1.png",
            description: "Explore the Isle of Skye in Scotland, known for its dramatic landscapes. Discover jagged peaks, deep valleys, and stunning coastal views.",
            exploreLink: "#"
        },
        {
            title: "Lake District Trails",
            image: "images/img-2.png",
            description: "Discover the Lake District with its various trails. From easy lakeside walks to challenging mountain treks, enjoy spectacular scenery throughout.",
            exploreLink: "#"
        },
        {
            title: "The Yorkshire Peaks",
            image: "images/img-3.png",
            description: "Tackle the Yorkshire Three Peaks Challenge, covering Pen-y-ghent, Whernside, and Ingleborough. Enjoy physical challenge and stunning views in one day.",
            exploreLink: "#"
        },
        {
            title: "The Cairngorms",
            image: "images/img-4.png",
            description: "Explore the Cairngorms, Scotland’s largest national park. Experience diverse trails, wildlife, mountain views, and glacial valleys amidst stunning scenery.",
            exploreLink: "#"
        }
    ];
    

    return (
        <>
            {/* <div className="services_section">
                <div className="container">
                    <h1 className="services_text">Best Trekking Places in India</h1>
                </div>
            </div> */}
            {/* <div className="services_section_2 layout_padding" > */}
            {/* style="margin-bottom: 50px" */}
            {/* <div className="container">
                    <h1 className="companies_text">Explore Top Trekking Destinations</h1>
                    <div className="services_item">
                        <div className="row">
                            <div className="col-sm-6 col-lg-3">
                                <div className="services_1"><img src="images/img-1.png" /></div>
                                <h1 className="jobs_main">Everest Base Camp</h1>
                                <p className="many_main">
                                    Embark on a journey to the iconic Everest Base Camp, where you'll experience stunning views
                                    of the world's highest peak and immerse yourself in the rich culture of the Sherpa people.
                                </p>
                                <div className="join_bt">
                                    <div className="join_text"><a href="#">EXPLORE NOW</a></div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="services_1"><img src="images/img-2.png" /></div>
                                <h1 className="jobs_main">Valley of Flowers</h1>
                                <p className="many_main">
                                    Discover the enchanting Valley of Flowers in Uttarakhand, a UNESCO World Heritage site known
                                    for its vibrant meadows and diverse flora, accessible during the summer months.
                                </p>
                                <div className="join_bt">
                                    <div className="join_text"><a href="#">EXPLORE NOW</a></div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="services_1"><img src="images/img-3.png" /></div>
                                <h1 className="jobs_main">Kudremukh Trek</h1>
                                <p className="many_main">
                                    Experience the beauty of the Western Ghats on the Kudremukh Trek, renowned for its lush greenery
                                    and diverse wildlife, offering a refreshing adventure for nature enthusiasts.
                                </p>
                                <div className="join_bt">
                                    <div className="join_text"><a href="#">EXPLORE NOW</a></div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="services_1"><img src="images/img-4.png" /></div>
                                <h1 className="jobs_main">Chadar Trek</h1>
                                <p className="many_main">
                                    Brave the icy terrains of the Chadar Trek in Ladakh, where you'll trek over the frozen Zanskar River
                                    and witness the stark, stunning beauty of the Himalayan winter landscape.
                                </p>
                                <div className="join_bt">
                                    <div className="join_text"><a href="#">EXPLORE NOW</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="services_item">
                        <div className="row">
                            <div className="col-sm-6 col-lg-3">
                                <div className="services_1"><img src="images/img-1.png" /></div>
                                <h1 className="jobs_main">Hampta Pass</h1>
                                <p className="many_main">
                                    Traverse the scenic Hampta Pass, where you'll move from lush green valleys to barren landscapes
                                    in a short span, capturing the diverse beauty of Himachal Pradesh.
                                </p>
                                <div className="join_bt">
                                    <div className="join_text"><a href="#">EXPLORE NOW</a></div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="services_1"><img src="images/img-2.png" /></div>
                                <h1 className="jobs_main">Sandakphu Trek</h1>
                                <p className="many_main">
                                    Embark on the Sandakphu Trek to enjoy panoramic views of the Kanchenjunga and Everest ranges,
                                    offering a memorable experience amidst the scenic beauty of the Eastern Himalayas.
                                </p>
                                <div className="join_bt">
                                    <div className="join_text"><a href="#">EXPLORE NOW</a></div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="services_1"><img src="images/img-3.png" /></div>
                                <h1 className="jobs_main">Rajmachi Trek</h1>
                                <p className="many_main">
                                    Discover the historic Rajmachi Fort and enjoy the picturesque landscape of the Sahyadri range,
                                    known for its rich greenery and stunning views during the monsoon season.
                                </p>
                                <div className="join_bt">
                                    <div className="join_text"><a href="#">EXPLORE NOW</a></div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="services_1"><img src="images/img-4.png" /></div>
                                <h1 className="jobs_main">Tarsar Marsar Trek</h1>
                                <p className="many_main">
                                    Explore the Tarsar Marsar Trek, a hidden gem in Kashmir, famous for its pristine alpine lakes and
                                    serene surroundings, offering a unique trekking experience.
                                </p>
                                <div className="join_bt">
                                    <div className="join_text"><a href="#">EXPLORE NOW</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            {/* </div> */}

            <div className="services_section_2 layout_padding">
                <div className="container">
                    <h1 className="companies_text">Explore Top Trekking Destinations</h1>
                    <div className="services_item">
                        <div className="row">
                            {servicesData.map((service, index) => (
                                <div className="col-sm-6 col-lg-3" key={index}>
                                    <div className="services_1">
                                        <img src={service.image} alt={service.title} />
                                    </div>
                                    <h1 className="jobs_main">{service.title}</h1>
                                    <p className="many_main">{service.description}</p>
                                    <div className="join_bt">
                                        <div className="join_text">
                                            <a href={service.exploreLink}>EXPLORE NOW</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}