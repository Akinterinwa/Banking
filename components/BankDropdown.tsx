import React from 'react';

interface BankDropdownProps {
    options: { label: string; value: string }[];
    onChange: (value: string) => void;
    value: string;
}

const BankDropdown: React.FC<BankDropdownProps> = ({ options, onChange, value }) => {
    return (
        <select value={value} onChange={(e) => onChange(e.target.value)} className="input-class">
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default BankDropdown;
