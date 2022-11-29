export function Header(){
    return (
    <header className="header-section">
    <div className="container">
    <div className="header-holder">
    <div className="header-primary d-flex flex-wrap justify-content-between align-items-center">
    <div className="brand-logo d-none d-lg-inline-block">
    <div className="logo">
    <a href="index.html">
    <img src="assets/images/logo/logo.png" alt="logo"/>
    </a>
    </div>
    </div>
    <div className="header-wrapper justify-content-lg-end">
    <div className="mobile-logo d-lg-none">
    <a href="index.html"><img src="assets/images/logo/logo.png" alt="logo"/></a>
    </div>
    <div className="menu-area">
    <ul className="menu">
    <li>
        <a href="javascript:void(0);">Home</a>
       
    </li>
    <li>
        <a href="javascript:void(0);">Project</a>
        
    </li>
    <li>
        <a href="javascript:void(0);">Stacking</a>
       
    </li>
    <li>
        <a href="javascript:void(0);">Pages</a>
        
            
    
          
    </li>
    <li>
        <a href="javascript:void(0);">Blog</a>
       
    </li>
    <li><a href="javascript:void(0);">Contact</a></li>
    </ul>
    <a className="wallet-btn" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#wallet-option">
    <span>Connect
    </span> <i className="fa-solid fa-wallet"></i></a>
    
    <div className="header-bar d-lg-none">
    <span></span>
    <span></span>
    <span></span>
    </div>
    </div>
    </div>
    
    </div>
    </div>
    </div>
    
    </header>
    );
    
    }