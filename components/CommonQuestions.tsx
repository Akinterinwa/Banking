'use client'

import React, { useState } from 'react';
import './Component.css';
import Image from 'next/image';

interface CarouselContent {
    text: string;
}

const CommonQuestions: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const carouselContents: CarouselContent[] = [
        { text: "This is the first carousel content." },
        { text: "This is the second carousel content." },
        { text: "This is the third carousel content." }
    ];

    const handleNext = (index: number): void => {
        setCurrentIndex(index);
    };

    return (
        <div className="image-carousel-container">
            <h1 className="title">Get answers to your common questions</h1>
            <div className="image-carousel">
                <div className="image-container">
                    <Image src="/icons/bank-img-1.jpg" alt="Example" className="image" width={900} height={90} />
                </div>
                <div className="carousel-container">
                    <p>{carouselContents[currentIndex].text}</p>
                    <div className="carousel-navigation">
                        {carouselContents.map((_, index) => (
                            <div
                                key={index}
                                className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => handleNext(index)}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommonQuestions;
