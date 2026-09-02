import './Footer.scss'

function Footer() {
    return (
        <footer className="education-footer">

            {/* Main Footer */}
            <div className="container">
                <div className="row education-footer__main">

                    {/* Brand */}
                    <div className="col-lg-4 col-md-6 mb-4">

                        <div className="education-footer__brand">

                            <a href="/" className="education-footer__logo">
                                <span className="education-footer__logo-icon">
                                    🎓
                                </span>

                                <span>
                                    Edu<span>Verse</span>
                                </span>
                            </a>

                            <p>
                                Learn today. Build tomorrow.
                                Explore high-quality courses designed
                                to help you grow your skills and career.
                            </p>

                            <div className="education-footer__social">
                                <a href="#">f</a>
                                <a href="#">𝕏</a>
                                <a href="#">in</a>
                                <a href="#">▶</a>
                            </div>

                        </div>

                    </div>


                    {/* Explore */}
                    <div className="col-lg-2 col-md-6 mb-4">

                        <div className="education-footer__links">

                            <h5>Explore</h5>

                            <a href="/">Home</a>
                            <a href="/courses">Courses</a>
                            <a href="/programs">Programs</a>
                            <a href="/instructors">Instructors</a>
                            <a href="/pricing">Pricing</a>

                        </div>

                    </div>


                    {/* Company */}
                    <div className="col-lg-2 col-md-6 mb-4">

                        <div className="education-footer__links">

                            <h5>Company</h5>

                            <a href="/about">About Us</a>
                            <a href="/careers">Careers</a>
                            <a href="/blog">Blog</a>
                            <a href="/contact">Contact</a>
                            <a href="/faq">FAQ</a>

                        </div>

                    </div>


                    {/* Resources */}
                    <div className="col-lg-2 col-md-6 mb-4">

                        <div className="education-footer__links">

                            <h5>Resources</h5>

                            <a href="#">Learning Center</a>
                            <a href="#">Student Guide</a>
                            <a href="#">Help Center</a>
                            <a href="#">Community</a>
                            <a href="#">Certificates</a>

                        </div>

                    </div>


                    {/* Contact */}
                    <div className="col-lg-2 col-md-6 mb-4">

                        <div className="education-footer__links">

                            <h5>Contact</h5>

                            <p>📍 New Delhi, India</p>
                            <p>✉ hello@eduverse.com</p>
                            <p>☎ +91 98765 43210</p>

                        </div>

                    </div>

                </div>
            </div>


            {/* Newsletter */}
            <div className="education-footer__newsletter">

                <div className="container">

                    <div className="row align-items-center">

                        <div className="col-lg-7">

                            <div className="education-footer__newsletter-content">

                                <span>
                                    🚀 STAY UPDATED
                                </span>

                                <h3>
                                    Never stop learning.
                                </h3>

                                <p>
                                    Get new courses, learning tips and
                                    exclusive updates directly in your inbox.
                                </p>

                            </div>

                        </div>


                        <div className="col-lg-5">

                            <form className="education-footer__form">

                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                />

                                <button type="submit">
                                    Subscribe
                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>


            {/* Bottom Footer */}
            <div className="container">

                <div className="education-footer__bottom">

                    <div className="row align-items-center">

                        <div className="col-md-6">

                            <p>
                                © 2026 EduVerse. All rights reserved.
                            </p>

                        </div>

                        <div className="col-md-6">

                            <div className="education-footer__legal">

                                <a href="#">
                                    Privacy Policy
                                </a>

                                <a href="#">
                                    Terms of Service
                                </a>

                                <a href="#">
                                    Cookies
                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </footer>
    );
}

export default Footer;