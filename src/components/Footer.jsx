import './Compontent.css';
export function Footer (){
    return (
        <footer className="footer">
        <div className="footer__wrapper padding-top padding-bottom">
            <div className="container">
                <div className="footer__content text-center">
                    <a className="mb-4 d-inline-block" href="index.html">
                        <img src="assets/images/logo/logo.png"
                            alt="Logo"/></a>
                    <ul className="social justify-content-center">
                        <li className="social__item">
                            <a href="javascript:void(0);" className="social__link"><i className="fab fa-twitter"></i></a>
                        </li>
                        <li className="social__item">
                            <a href="javascript:void(0);" className="social__link"><i className="fab fa-discord"></i></a>
                        </li>
                        <li className="social__item">
                            <a href="javascript:void(0);" className="social__link"><i className="fab fa-twitch"></i></a>
                        </li>
                        <li className="social__item">
                            <a href="javascript:void(0);" className="social__link"><i className="fab fa-instagram"></i></a>
                        </li>
                        <li className="social__item">
                            <a href="javascript:void(0);" className="social__link"><i className="fab fa-linkedin-in"></i></a>
                        </li>
                        <li className="social__item">
                            <a href="javascript:void(0);" className="social__link"><i className="fab fa-facebook-f"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footer__copyright">
            <div className="container">
                <div className="text-center py-4">
                    <p className=" mb-0">TorkGo © 2022 | All Rights Reserved </p>
                </div>
            </div>
        </div>
        <a href="javascript:void(0);" className="scrollToTop"><i className="fa-solid fa-arrow-up-from-bracket"></i></a>

    </footer>

    );
}