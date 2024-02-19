import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const navItems = [
    { label: "HJEM", href: "/home"},
    { label: "BÅDE", href: "/boats"},
    { label: "MOTOR", href: "/motor"},
    { label: "BRANDS", href: "/brands"},
    { label: "TILBEHØR", href: "/accessories"},
    { label: "KATALOGER", href: "/catalogs"},
    { label: "SERVICES", href: "/services"},
    { label: "KONTAKT", href: "/contact"}
];

function MyNavbar() {
    return (
        <>
        
        <div className='header-info'>

            <div className='header-flex-container'>
                <img src='/images/icons/instagram.png' alt="instagram icon" width="20" height="20" />
                <img src='/images/icons/facebook.png' alt="facebook icon" width="20" height="20" />
                <img src="/images/icons/mail.png" alt="Email Icon" width="22" height="24" />
                <p>info@saildirect.dk<a href="mailto:info@saildirect.dk">
                </a>
                </p>
                <img src="/images/icons/mail.png" alt="Email Icon" width="22" height="24" />
                <p>christian@saildirect.dk<a href="mailto:christian@saildirect.dk">
                </a>
                </p>
                <img src='/images/icons/phone.png' alt="phone icon" width="20" height="20" />
                <p>+45 75572001</p>
            </div>

        </div>

        <Nav className="text-white p-2 " >
            <img src="images/Page_images/SaildirectLogo.png" width="257" height="69" alt="Saildirect Logo" />

            {navItems.map((item, index) => (
                <Nav.Item key={index}>
                    <Nav.Link href={item.href} className="text-white">{item.label}</Nav.Link>
                </Nav.Item>
            ))}
            <div className="yamahaLogo"> 
        <img src="images/Page_images/yamahalogo.png" alt="Yamaha motor" width="70" height="73" />
      </div>
        </Nav>
        </>
    );
}

export default MyNavbar;