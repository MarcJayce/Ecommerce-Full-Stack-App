import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

type DecodedToken = {
  id: number;
  email: string;
};


const Header = () => {
    const token = localStorage.getItem("token");
    let userName = null;

    if (token) {
    try {
        const decoded = jwtDecode<DecodedToken>(token);
        userName = decoded.email;
        console.log("Decoded token:", decoded);
    } catch (err) {
        console.error("Invalid token:", err);
    }
    }


    const [searchValue, setSearchValue] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };
    const navigate = useNavigate();
    const goToShopTab = (tab: string) => {
        navigate(`/shop?tab=${tab}`);
      };
      
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
            <div className="container-fluid px-4">
                {/* Logo */}
                <a className="navbar-brand me-5" href="#" style={{ fontWeight: '900', fontSize: '1.8rem', letterSpacing: '2px', color: '#000' }} onClick={() => navigate('/')}> 
                    Envy
                </a>

                {/* Toggle button for mobile */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarContent">
                    {/* Main Navigation Links */}
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link px-3" href="#" style={{ color: '#666', fontWeight: '500' }}
                            onClick={() => goToShopTab('road')}
                            >Road Bikes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-3" href="#" style={{ color: '#666', fontWeight: '500' }}
                            onClick={() => goToShopTab('gravel')}
                            >Gravel Bikes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-3" href="#" style={{ color: '#666', fontWeight: '500' }}
                            onClick={() => goToShopTab('mtb')}
                            >Mountain Bikes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-3" href="#" style={{ color: '#666', fontWeight: '500' }}
                            onClick={() => goToShopTab('hybrid')}
                            >Hybrid</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-3" href="#" style={{ color: '#666', fontWeight: '500' }}
                            onClick={() => goToShopTab('gear')}
                            >Gear</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-3" href="#" style={{ color: '#666', fontWeight: '500' }}
                            onClick={() => goToShopTab('outlet')}
                            >Outlet</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-3" href="#" style={{ color: '#666', fontWeight: '500' }}>Sale</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-3 text-white" href="#" style={{ backgroundColor: '#333', borderRadius: '4px', fontWeight: '500' }}>Support</a>
                        </li>
                    </ul>

                    {/* Right side items */}
                    <div className="d-flex align-items-center gap-3">
                        {/* Search Bar */}
                        <div className="position-relative">
                            <svg width="18" height="18" fill="currentColor" className="position-absolute" style={{ left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#666' }} viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                            <input 
                                type="text" 
                                className="form-control ps-5" 
                                placeholder="Search ..." 
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                style={{ width: '200px', border: '1px solid #ddd', borderRadius: '25px', fontSize: '0.9rem' }}
                            />
                        </div>

                        {/* Secondary Links */}
                        <Link to="/CMS" className=" Secondary text-decoration-none" style={{ color: '#666', fontSize: '0.9rem' }}>CMS </Link>
                        <a href="#" className=" Secondary text-decoration-none" style={{ color: '#666', fontSize: '0.9rem' }}>Documentation</a>

                        {/* Icons */}
                        <div className="d-flex align-items-center gap-2">
                            <div className="dropdown position-relative">
                                <button 
                                    className=" Secondary btn p-0 border-0 bg-transparent"
                                    type="button"
                                    onClick={toggleDropdown}
                                    aria-expanded={isDropdownOpen}
                                >
                                    <svg width="20" height="20" fill="currentColor" style={{ color: '#666' }} viewBox="0 0 16 16">
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                    </svg>
                                </button>
                               <ul className={`dropdown-menu dropdown-menu-end ${isDropdownOpen ? 'show' : ''}`} style={{ minWidth: '150px' }}>
                                {userName ? (
                                    <>
                                    <li className="dropdown-item text-muted">Signed in as {userName}</li>
                                    <li>
                                        <button
                                        className="dropdown-item text-danger"
                                        onClick={() => {
                                            localStorage.removeItem("token");
                                            closeDropdown();
                                            navigate("/");
                                        }}
                                        >
                                        Logout
                                        </button>
                                    </li>
                                    </>
                                ) : (
                                    <>
                                    <li><Link className="dropdown-item" to="/Login" onClick={closeDropdown}>Login</Link></li>
                                    <li><Link className="dropdown-item" to="/Signup" onClick={closeDropdown}>Sign Up</Link></li>
                                    </>
                                )}
                                </ul>

                            </div>
                            <a href="#" className=" Secondary text-decoration-none">
                                <svg width="20" height="20" fill="currentColor" style={{ color: '#666' }} viewBox="0 0 16 16">
                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;