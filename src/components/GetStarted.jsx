export function GetStarted(){
    return (
        <section className="work padding-top padding-bottom bg--primary-color">
        <div className="container">
            <div className="section-header section-header--middle">
                <div className="section-header__content">
                    <div className="section-header__titlebar">
                        <p className="section-header__subtitle"> Getting Start </p>
                        <h2 className="section__header__title"> Simple as 1,2,3</h2>
                    </div>
                </div>
            </div>
            <div className="work__wrapper">
                <div className="row  justify-content-center g-4">
                    <div className="col-lg-4 col-sm-6">
                        <div className="work__item">
                            <div className="work__item-inner">
                                <div className="work__item-thumb">
                                    <img src="assets/images/work/1.png" alt="work Step 1 Image"/>
                                </div>
                                <div className="work__item-content">
                                    <h4>1.Submit KYC</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit odio massa ege.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="work__item">
                            <div className="work__item-inner">
                                <div className="work__item-thumb">
                                    <img src="assets/images/work/2.png" alt="work Step 2 Image"/>
                                </div>
                                <div className="work__item-content">
                                    <h4>2. Verify Wallet</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit odio massa ege.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="work__item">
                            <div className="work__item-inner">
                                <div className="work__item-thumb">
                                    <img src="assets/images/work/3.png" alt="work Step 3 Image"/>
                                </div>
                                <div className="work__item-content">
                                    <h4>3. Start Staking</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit odio massa ege.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-5">
                    <a href="kyc.html" className="default-btn"><span>Varify KYC</span></a>
                </div>
            </div>
        </div>
    </section>
    );
}