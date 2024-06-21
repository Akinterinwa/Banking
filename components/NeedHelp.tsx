'use client'

import React, { useState } from 'react';
import './Component.css';

interface Message {
    id: number;
    title: string;
    content: string;
}

const messages: Message[] = [
    { id: 1, title: 'FAQs', content: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, officiis reprehenderit numquam distinctio maxime, rem recusandae neque labore fuga, ipsa consequatur voluptatibus modi totam blanditiis reiciendis? Ad numquam harum obcaecati.' },
    { id: 2, title: 'Policies', content: 'Beatae animi delectus nesciunt aliquid ad tenetur officiis iusto laudantium explicabo deleniti, vero vitae sint enim optio veniam! Quae eveniet, neque sint atque tempore distinctio excepturi tempora ratione qui optio.' },
    { id: 3, title: 'Disclaimer', content: 'Dolores quos nesciunt omnis a ea eaque blanditiis! Sint consequatur nostrum illo, laudantium, reprehenderit cum id dignissimos dolore itaque, ipsa suscipit qui ad odio. Nobis eligendi voluptate modi quam! Consequuntur!' },
    { id: 4, title: 'Terms & Conditions', content: 'Dolores quos nesciunt omnis a ea eaque blanditiis! Sint consequatur nostrum illo, laudantium, reprehenderit cum id dignissimos dolore itaque, ipsa suscipit qui ad odio. Nobis eligendi voluptate modi quam! Consequuntur!' },
    { id: 5, title: 'Call Us', content:  'Dolores quos nesciunt omnis a ea eaque blanditiis! Sint consequatur nostrum illo, laudantium, reprehenderit cum id dignissimos dolore itaque, ipsa suscipit qui ad odio. Nobis eligendi voluptate modi quam! Consequuntur!' },
];

const NeedHelp: React.FC = () => {
    const [expandedMessageId, setExpandedMessageId] = useState<number | null>(null);

    const toggleReadMore = (id: number) => {
        setExpandedMessageId(expandedMessageId === id ? null : id);
    };

    return (
        <div className="messages-container">
            {messages.map((message) => (
                <div key={message.id} className="message-box">
                    <h3 className="message-title">{message.title}</h3>
                    <p className={`message-content ${expandedMessageId === message.id ? 'expanded' : ''}`}>
                        {message.content}
                    </p>
                    <span className="read-more" onClick={() => toggleReadMore(message.id)}>
                        {expandedMessageId === message.id ? 'View Less' : 'View More'}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default NeedHelp;
