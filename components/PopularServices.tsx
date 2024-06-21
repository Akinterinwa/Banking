import React from 'react';
import './Component.css';
import Image from 'next/image';
import CommonQuestions from './CommonQuestions';

const services = [
    {
        "icon": "/icons/money-bill-transfer-solid.svg",
        "title": "Log in to",
        "description": "Transfer money"
    },
    {
        "icon": "/icons/receipt-solid.svg",
        "title": "Log in to",
        "description": "Bill Pay"
    },
    {
        "icon": "/icons/calendar-check-regular.svg",
        "title": "Log in to",
        "description": "Schedule an appointment"
    },
    {
        "icon": "/icons/credit-card-regular.svg",
        "title": "Login to",
        "description": "Activate a card"
    },
    {
        "icon": "/icons/arrow-up-wide-short-solid.svg",
        "title": "Login to",
        "description": "Check your history"
    },
    {
        "icon": "/icons/arrow-right-to-bracket-solid.svg",
        "title": "Login to",
        "description": "Open a new account"
    }
];


const PopularServices = () => {
    return (
        <>
            <div className='popular-services'>
                <div className="heading">
                    <h1> Popular Services</h1>
                </div>
                <div className="services-list">
                    {services.map((service, index) => (
                        <div key={index} className="service-item">
                            <img src={service.icon} alt={`${service.title} icon`} className="service-icon" />
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="additional-services">
                <h1>Sign in to additional services</h1>
                <div className="service-section-container">
                    <div className="services-section">
                        <h2>Personal</h2>
                        <ul>
                            <li>Merrill Edge Investing</li>
                            <li>Merrill Lynch Wealth Management</li>
                            <li>Bank of America Private Bank</li>
                        </ul>
                    </div>
                    <div className="services-section">
                        <h2>Small Business</h2>
                        <ul>
                            <li>Automotive dealer services</li>
                            <li>Recreational vehicle dealer services</li>
                        </ul>
                    </div>
                    <div className="services-section">
                        <h2>Business & Institutions</h2>
                        <ul>
                            <li>CashPro® online</li>
                            <li>Account Management Online</li>
                            <li>Global Leasing ExpressView®</li>
                            <li>Mercury™</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <CommonQuestions />

            <div className="security-guarantee">
                <div className="image-container">
                    <Image src="/icons/lock-solid.svg" alt="Security Guarantee" width={30} height={30} />
                </div>
                <h1>Security Guarantee</h1>
                <p>
                    You can confidently use Online or Mobile Banking—we guarantee that you will not be liable for fraudulent transactions when reported promptly and we will help keep your information safe.
                </p>
                <p>
                    <a href="/path/to/security-guarantee">Online and Mobile Banking Security Guarantee</a>
                </p>
            </div>


            <div className="additional-info">
                <p className="bold">Important Disclosures and Information</p>
                <p className="normal">
                    Mobile Banking requires that you download the Mobile Banking app and is only available for select mobile devices. Message and data rates may apply.
                </p>
                <div className="underline"></div>

                <h2>Investment and insurance products:</h2>
                <div className="table">
                    <div className="table-item">Are not FDIC insured</div>
                    <div className="table-item">Are not bank guaranteed</div>
                    <div className="table-item">May lose value</div>
                    <div className="table-item">Are not deposits</div>
                    <div className="table-item">Are not insured by any federal government agency</div>
                    <div className="table-item">Are not a condition to any banking service or activity</div>
                </div>

                <p>
                    Banking products are provided by Bank of America, N.A. and affiliated banks, Members FDIC and wholly owned subsidiaries of Bank of America Corporation.
                </p>
                <p>
                    MLPF&S is a registered broker-dealer, member <span className="sipc">SIPC</span> layer and a wholly owned subsidiary of Bank of America Corporation
                </p>
            </div>

            <div className="login-footer">
                <p>Bank of America, N.A. Member FDIC. Equal Housing Lender</p>
                <p>© 2024 Bank of America Corporation. All Rights Reserved.</p>
                <p>
                    Patent: <a href="https://patents.bankofamerica.com" target="_blank" rel="noopener noreferrer">patents.bankofamerica.com</a>
                </p>
            </div>
        </>
    )
}

export default PopularServices;