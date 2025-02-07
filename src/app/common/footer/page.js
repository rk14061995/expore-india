import Link from "next/link";
export default function Footer() {
    // Get the current year
    const currentYear = new Date().getFullYear();

    return (
        <div className="copyright_section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p className="copyright_text">
                            Copyright {currentYear} All Rights Reserved By.
                            <a href="https://www.exploreuk.online">Explore UK</a>
                        </p>
                    </div>
                    <div className="col-md-6">
                        <p className="cookies_text">
                            <Link href="/privacy-policy" legacyBehavior>
                                <a title="Privacy Policy">Privacy Policy</a>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
