import Image from 'next/image';
import React from 'react';
import './Component.css';
import PopularServices from './PopularServices';


const LoginPageContent = () => {
    return (
    <>
        <div className="login-page">
            <div className="download_container">
                <div className="download">
                    <div className="image-app-container">
                        <Image
                            src="/icons/mobile-screen-button-solid.svg"
                            alt="auth image"
                            width={40}
                            height={40}
                        />
                        <p className="ml-4">
                            The convenience and security of Online Banking from almost anywhere
                        </p>
                    </div>
                    <button className="border border-gray-400 rounded-full px-4 py-2">
                        Get the app
                    </button>
                </div>
            </div>
        </div>
        <PopularServices />
    
    </>
    )
};

export default LoginPageContent;