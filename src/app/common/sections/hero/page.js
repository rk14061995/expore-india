export default function Hero() {
    const heroData = {
        title: "Explore the Wonders of India",
        content: `Discover the diverse wonders of India, starting with Darjeeling, where you can immerse yourself in the charm of scenic tea gardens and panoramic Himalayan views, perfect for both nature lovers and adventure seekers. Next, visit the Taj Mahal in Agra, a symbol of eternal love and architectural brilliance, and delve into the rich history and vibrant culture of the city. Explore Rishikesh for a unique blend of spirituality and adventure, offering yoga retreats, thrilling river rafting, and serene Ganga Aarti ceremonies. Finally, dive into the vibrant life of Mumbai, where you can experience the historic Gateway of India, the bustling Marine Drive, and a captivating mix of heritage and modernity. Each destination promises a distinct and unforgettable experience.`
      };
      const heroDataUK = {
        title: "Explore the Wonders of the United Kingdom",
        content: `Discover the incredible landmarks of the United Kingdom, starting with the majestic city of London, where you can visit iconic attractions like the Tower of London, the Houses of Parliament, and the famous Big Ben. Stroll along the River Thames or take a ride on the London Eye to enjoy panoramic views of the city. Next, head to the historic city of Edinburgh in Scotland, known for its stunning Edinburgh Castle, ancient cobbled streets, and the beautiful Arthur's Seat offering breathtaking views. Then, venture into the scenic Lake District, a serene paradise for nature lovers, with its picturesque lakes, mountains, and charming villages. Finally, explore the timeless beauty of Stonehenge, the ancient stone circle that has mystified people for centuries, offering a glimpse into the UK’s rich and mysterious past. Each of these destinations offers a unique and unforgettable experience, blending history, culture, and natural beauty.`
      };
            
    return (
        <div className="banner_section layout_padding">
            <div className="container">
                <h1 className="best_taital">{heroDataUK.title}</h1>
                {/* <!-- <div className="box_main">
				<input type="" className="email_bt" placeholder="Search Job" name="">
				<button className="subscribe_bt"><a href="#">Subscribe</a></button>
			</div> --> */}
                <p className="there_text">{heroDataUK.content}
                </p>
                <div className="bt_main">
                    <div className="discover_bt"><a href="#">Discover More</a></div>
                </div>
            </div>
        </div>
    );
}