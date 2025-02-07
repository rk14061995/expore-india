import Link from "next/link";

export default function Header() {
    const places = [
        {
            name: 'Delhi',
            url: 'delhi.html'
        },
        {
            name: 'Mumbai',
            url: 'mumbai.html'
        },
        {
            name: 'Jaipur',
            url: 'jaipur.html'
        },
        {
            name: 'Goa',
            url: 'goa.html'
        },
        {
            name: 'Kerala',
            url: 'kerala.html'
        },
        {
            name: 'Varanasi',
            url: 'varanasi.html'
        },
        {
            name: 'Agra',
            url: 'agra.html'
        },
        {
            name: 'Bangalore',
            url: 'bangalore.html'
        },
        {
            name: 'Udaipur',
            url: 'udaipur.html'
        },
        {
            name: 'Rishikesh',
            url: 'rishikesh.html'
        }
    ];
    
    return (

        <nav className="navbar navbar-expand-lg navbar-light ">
            <Link href="/" legacyBehavior>
                <a className="logo" title="Explore India">
                    <img src="images/logo.png" alt="Explore India" />
                </a>
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link href="/" legacyBehavior>
                            <a className="nav-link" title="Home">HOME</a>
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" data-toggle="collapse" data-target="#placesDrop"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="DESTINATIONS">
                            DESTINATIONS
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown" id="placesDrop">
                            {
                                places.map((place, index) => {
                                    return (
                                        <a key={index} className="dropdown-item" href={place.url}>{place.name}</a>
                                    )
                                })
                            }

                        </div>
                    </li>
                    <li className="nav-item">
                        <Link href="/about-us" legacyBehavior>
                            <a className="nav-link" >ABOUT US</a>
                        </Link>

                    </li>
                    <Link href="/contact-us" legacyBehavior>
                        <a className="nav-link" title="CONTACT">CONTACT</a>
                    </Link>
                    <Link href="/privacy-policy" legacyBehavior>
                        <a className="nav-link" title="PRIVACY POLICY">PRIVACY POLICY</a>
                    </Link>

                </ul>
            </div>
        </nav>
    );
}