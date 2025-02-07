export default function Content(props) {
    const topPlaces = [
        {
            name: "London",
            heading: "Explore the Wonders of London",
            paraOne: "London, the capital of the United Kingdom, is a bustling metropolis known for its rich history, diverse culture, and iconic landmarks. From the majestic Buckingham Palace to the historic Tower of London, there's no shortage of must-see sights. Whether you're a history buff, an art lover, or someone looking to explore modern attractions, London offers something for everyone.",
            paraTwo: "One of London's most famous landmarks is the Tower of London, a UNESCO World Heritage site with a history dating back to 1066. Explore the medieval castle and its fascinating exhibits, including the Crown Jewels and the Yeoman Warders. Another iconic sight is the Houses of Parliament, where visitors can marvel at the Gothic architecture of Big Ben and the surrounding buildings along the River Thames.",
            paraThree: "For a more modern experience, visit the London Eye, a giant observation wheel offering panoramic views of the city, or explore the vibrant West End, home to world-class theater productions.",
            image: "images/darj.jpg", // Keep image path unchanged
            exploreLink: "https://expedia.com/affiliates/london-hotels-the-london-edition.kXs4nX4"
        },
        {
            name: "Edinburgh",
            heading: "Discover the Charm of Edinburgh",
            paraOne: "Edinburgh, the capital of Scotland, is known for its medieval Old Town, beautiful Georgian architecture, and the iconic Edinburgh Castle. Nestled amidst rolling hills, the city offers a blend of history, culture, and natural beauty, making it one of the most enchanting cities in the UK.",
            paraTwo: "The centerpiece of Edinburgh is the Edinburgh Castle, which offers stunning views over the city. Explore its fascinating history, including the Crown Jewels of Scotland, and enjoy the dramatic surroundings of the castle perched on Castle Rock. Stroll along the Royal Mile, a historic street connecting the castle to the Palace of Holyroodhouse, and discover hidden gems along the way.",
            paraThree: "Edinburgh is also famous for its festivals, especially the Edinburgh Festival Fringe, the world’s largest arts festival, held every August. Visitors can enjoy performances, street arts, and a vibrant atmosphere that takes over the entire city.",
            image: "images/taj.jpg", // Keep image path unchanged
            exploreLink: "https://expedia.com/affiliates/edinburgh-hotels-the-caledonian-hilton-edinburgh.rX3sG5L"
        },
        {
            name: "Bath",
            heading: "Relax and Unwind in Bath",
            paraOne: "Bath, a UNESCO World Heritage city in southwest England, is famed for its Roman-built baths, stunning Georgian architecture, and natural hot springs. This charming city offers visitors the perfect combination of history, wellness, and beautiful scenery.",
            paraTwo: "The Roman Baths are a must-see, where you can explore the ancient baths, steam rooms, and the famous Great Bath. For a more relaxing experience, take a dip in the modern Thermae Bath Spa, where you can enjoy natural mineral-rich waters in the rooftop pool with views over the city.",
            paraThree: "Bath is also home to beautiful Georgian architecture, including the Royal Crescent, a sweeping crescent of elegant townhouses, and the Roman Baths Museum, which houses numerous ancient artifacts. Explore the city’s quaint streets, boutique shops, and cozy cafes for a true English experience.",
            image: "images/rishi.jpg", // Keep image path unchanged
            exploreLink: "https://expedia.com/affiliates/bath-hotels-the-royal-crescent-hotel-restaurant.wP0v2Jh"
        },
        {
            name: "Lake District",
            heading: "Explore the Beauty of the Lake District",
            paraOne: "The Lake District, located in northwest England, is known for its breathtaking landscapes, serene lakes, and picturesque villages. It’s a haven for outdoor enthusiasts, offering endless opportunities for hiking, boating, and exploring some of England’s most beautiful natural surroundings.",
            paraTwo: "The area is home to several stunning lakes, including Lake Windermere, the largest in England. Enjoy a boat ride across the lake or explore its shores on foot. The surrounding mountains, such as Scafell Pike, the highest peak in England, offer challenging hikes with spectacular views of the region.",
            paraThree: "In addition to its natural beauty, the Lake District is home to charming villages like Keswick and Ambleside, where visitors can explore traditional stone cottages, browse local shops, and enjoy the tranquil atmosphere.",
            image: "images/hoteltaj.jpg", // Keep image path unchanged
            exploreLink: "https://expedia.com/affiliates/lake-district-hotels-brockhole-visitor-centre.sQs43Rt"
        }
    ];

    // const topPlaces = [
    //     {
    //         name: "Darjeeling",
    //         heading: "Discover Darjeeling",
    //         paraOne: "Explore the charming hill station of Darjeeling, known for its scenic tea gardens, panoramic views of the Himalayas, and the iconic Darjeeling Himalayan Railway. A must-visit destination for nature lovers and adventure seekers alike.",
    //         paraTwo: "One of the highlights of Darjeeling is its sprawling tea gardens, which produce some of the finest tea in the world. A visit to these lush plantations not only provides insight into the tea-making process but also offers picturesque views that are perfect for photography and relaxation. Enjoy a leisurely stroll through the rolling hills, where you can witness the traditional methods of tea cultivation and perhaps savor a cup of freshly brewed Darjeeling tea.",
    //         paraThree: "Darjeeling's unique location also provides stunning panoramic views of the Himalayas, including the majestic Kanchenjunga, the third highest peak in the world.",
    //         image: "images/darj.jpg",
    //         exploreLink: "https://expedia.com/affiliates/darjeeling-hotels-udaan-himalayan-suites-and-spa.xQalOqS"
    //     },
    //     {
    //         name: "Taj Mahal",
    //         heading: "Visit the Taj Mahal",
    //         paraOne: "A trip to Agra is incomplete without witnessing the majestic Taj Mahal. One of the seven wonders of the world, this iconic monument stands as a symbol of love and architectural brilliance. Discover Agra’s rich history and vibrant culture through this mesmerizing structure.",
    //         paraTwo: "Constructed by Mughal Emperor Shah Jahan in the mid-17th century, the Taj Mahal was built in memory of his beloved wife, Mumtaz Mahal. The monument is renowned for its perfect symmetry, intricate marble inlay work, and the enchanting interplay of light on its pristine white marble surface. The central dome, surrounded by lush gardens and reflecting pools, creates a serene and awe-inspiring atmosphere that captivates visitors from around the globe.",
    //         paraThree: "As you explore the Taj Mahal, take note of the exquisite detailing in the marble, including the intricate floral patterns and delicate calligraphy that adorn its walls. This architectural masterpiece offers an unparalleled glimpse into Mughal craftsmanship and artistry.",
    //         image: "images/taj.jpg",
    //         exploreLink: "https://expedia.com/affiliates/agra-hotels-the-oberoi-amarvilas.wOeTolw"
    //     },
    //     {
    //         name: "Rishikesh",
    //         heading: "Experience Rishikesh",
    //         paraOne: "Nestled in the foothills of the Himalayas, Rishikesh offers a perfect blend of spirituality, serenity, and adventure. Whether you're seeking tranquility by the sacred Ganga River or are an adventure enthusiast looking to conquer the rapids, Rishikesh has something for everyone.",
    //         paraTwo: "Rishikesh is renowned for its spiritual ambiance, attracting seekers and travelers from around the world. The town is home to numerous ashrams and meditation centers where you can immerse yourself in yoga and meditation practices. Join enlightening workshops or simply enjoy the peaceful surroundings while practicing mindfulness along the riverbanks. The Parmarth Niketan and Sivananda Ashram are particularly renowned for their traditional teachings and spiritual rituals.",
    //         paraThree: "The sacred Ganga River, flowing through Rishikesh, is a focal point of spiritual life in the town. Experience the serene Ganga Aarti ceremonies held at the ghats in the evening, where rhythmic chants and the sight of flickering lamps create a profoundly uplifting experience.",
    //         image: "images/rishi.jpg",
    //         exploreLink: "https://expedia.com/affiliates/haridwar-hotels-lemon-tree-premier-ganga-beach-rishikesh.dHQzU3C"
    //     },
    //     {
    //         name: "Mumbai",
    //         heading: "Discover Mumbai's Grandeur",
    //         paraOne: "Mumbai, the bustling financial capital of India, is a city that never sleeps. From the historic Gateway of India to the lively Marine Drive, the city offers a blend of heritage, modernity, and coastal charm. Experience the grandeur of Mumbai by staying at the iconic Taj Mahal Palace, a symbol of luxury and exceptional hospitality.",
    //         paraTwo: "Begin your exploration with a visit to the Gateway of India, a majestic archway that commemorates Mumbai's colonial past. Erected to mark the visit of King George V and Queen Mary in 1911, the Gateway is not only a historical landmark but also a popular spot offering stunning views of the Arabian Sea. From here, embark on a boat ride to the Elephanta Caves, a network of ancient rock-cut temples dedicated to Hindu deities, known for their impressive sculptures and serene surroundings.",
    //         paraThree: "Stroll along the iconic Marine Drive, often referred to as the 'Queen’s Necklace' due to its sparkling lights that resemble a necklace when viewed at night. This picturesque promenade provides a scenic view of the Arabian Sea and is a perfect spot for a relaxing walk or an evening out with friends.",
    //         image: "images/hoteltaj.jpg",
    //         exploreLink: "https://expedia.com/affiliates/mumbai-hotels-the-taj-mahal-palace-mumbai.36GM74B"
    //     }
    // ];

    const isContentPage = props?.isContentPage || false;
    // About Us Content 
    const aboutUs = {
        title: "About Us",
        content: `
            Welcome to ExploreUK.online! Your ultimate guide to the best places to visit in the United Kingdom. 
            We are dedicated to providing detailed information about the most iconic and hidden gems in the UK, helping you plan 
            your next adventure. From the historic streets of London to the scenic beauty of Edinburgh, we aim to offer insights 
            on must-see destinations, local attractions, and cultural landmarks across the UK.

            In addition to travel guides, we also suggest top hotels and accommodation options near popular attractions, 
            making your trip planning as smooth and convenient as possible.

            As a part of our network, we also run <a href="https://adventureabode.online/" target="_blank" class="externalLink"  title="" >Explore India</a> and <a href="https://exploredehradun.in/" class="externalLink"  title="">Explore Dehradun</a>, where we offer similar 
            travel guides and hotel suggestions for India and Dehradun, respectively. Whether you're exploring the rich culture 
            of India or the tranquil beauty of Dehradun, we've got you covered.

            Explore, plan, and enjoy your travels with us at ExploreUK.online – your go-to resource for everything UK!
        `,
        image: {
            path: "images/about-us.jpg",
            alt: "About ExploreUK"
        }
    };
    
    return (
        <>
            {!isContentPage && topPlaces.map((place, index) => (
                <div className="marketing_section layout_padding" key={index}>
                    <div className="container-fluid">
                        <div className="row">
                            {/* For alternating image and text */}
                            {index % 2 === 0 ? (
                                <>
                                    <div className="col-md-6">
                                        <div className="job_section">
                                            <h1 className="jobs_text">{place.heading}</h1>
                                            <p className="dummy_text">{place.paraOne}</p>
                                            <p className="dummy_text">{place.paraTwo}</p>
                                            <p className="dummy_text">{place.paraThree}</p>
                                            <div className="apply_bt">
                                                <a href={place.exploreLink}>Explore Hotels in {place.name}</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="image_1 padding_0">
                                            <img src={place.image} alt={place.name} />
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="col-md-6">
                                        <div className="image_1 padding_0">
                                            <img src={place.image} alt={place.name} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="job_section">
                                            <h1 className="jobs_text">{place.heading}</h1>
                                            <p className="dummy_text">{place.paraOne}</p>
                                            <p className="dummy_text">{place.paraTwo}</p>
                                            <p className="dummy_text">{place.paraThree}</p>
                                            <div className="apply_bt">
                                                <a href={place.exploreLink}>Explore Hotels in {place.name}</a>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            ))}

            {
                isContentPage && <div className="marketing_section layout_padding about-us">
                    <div className="container-fluid">
                        <div className="row">

                            <>
                                <div className="col-md-6">
                                    <div className="job_section">
                                        <h1 className="jobs_text">{aboutUs.title}</h1>
                                       {aboutUs &&  <p className="dummy_text" dangerouslySetInnerHTML={{ __html: aboutUs.content }} />} 

                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="image_1 padding_0">
                                        <img src={aboutUs.image.path} alt={aboutUs.image.alt} />
                                    </div>
                                </div>
                            </>

                        </div>
                    </div>
                </div>
            }
        </>
    );
}
