import React from 'react';
import './Component.css';

interface ProgressBarProps {
    progress: number;
    color: string;
}

interface Item {
    id: number;
    name: string;
    progress: number;
    color: string;
}

const items: Item[] = [
    { id: 1, name: 'Travel', progress: 70, color: 'red' },
    { id: 2, name: 'Food', progress: 50, color: 'green' },
    { id: 3, name: 'Subscription', progress: 30, color: 'blue' },
    { id: 4, name: 'Store', progress: 90, color: 'orange' },
];

// export default items;

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, color }) => {
    return (
        <div className="progress-bar-container">
            <div
                className="progress-bar"
                style={{ width: `${progress}%`, backgroundColor: color }}
            ></div>
        </div>
    );
};

// export default ProgressBar;

const ItemGrid: React.FC = () => {
    return (
        <div className="item-grid">
            {items.map(item => (
                <div key={item.id} className="item">
                    <h3 className="item-name">{item.name}</h3>
                    <ProgressBar progress={item.progress} color={item.color} />
                </div>
            ))}
        </div>
    );
};

export default ItemGrid;
