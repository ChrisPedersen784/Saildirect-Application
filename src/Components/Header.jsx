import React from 'react';


function Header() {
    return (
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
    )
}


export default Header;