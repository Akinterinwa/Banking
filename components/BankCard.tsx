import React from 'react';
import { formatAmount } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import Copy from './Copy';

interface Account {
    id: string;
    fullName: string;
    currentBalance: number;
    bankCardNumber: string;
    date: string;
    shareableId: string;
}

interface CreditCardProps {
    account: Account;
    userName: string;
    showBalance?: boolean;
}

const BankCard: React.FC<CreditCardProps> = ({ account, userName, showBalance = true }) => {
    const lastFourDigits = account.bankCardNumber ? account.bankCardNumber.slice(-4) : "0000";

    return (
        <div className='flex flex-col'>
            <Link href="/" className='bank-card'>
                <div className="bank-card_content">
                    <div className="">
                        <h1 className="text-16 font-semibold text-white">
                            {userName}
                        </h1>
                        {showBalance && (
                            <p className="font-ibm-plex-serif font-black text-white">
                                {formatAmount(account.currentBalance)}
                            </p>
                        )}
                    </div>

                    <article className='flex flex-col gap-2'>
                        <div className="flex justify-between">
                            <h1 className='text-12 font-semibold text-white'>
                                {userName}
                            </h1>
                            <h2 className='text-12 font-semibold text-white'>
                                ●● / ●●
                            </h2>
                        </div>
                        <p className="text-14 font-semibold tracking-[1.1px] text-white">
                            ●●●● ●●●● ●●●● <span className="text-16">{lastFourDigits}</span>
                        </p>
                    </article>
                </div>

                <div className="bank-card_icon">
                    <Image 
                        src="/icons/paypass.svg"
                        width={20}
                        height={24}
                        alt='pay'
                    />
                    <Image
                        src="/icons/mastercard.svg"
                        width={45}
                        height={32}
                        alt='mastercard'
                        className='ml-5'
                    />
                </div>

                <Image
                    src="/icons/lines.png"
                    width={316}
                    height={190}
                    alt='lines'
                    className='absolute top-0 left-0'
                />
            </Link>

            {/* Copy Component with encrypted ID */}
            {showBalance && (
                <Copy
                    title={account.shareableId}
                />
            )}
        </div>
    )
}

export default BankCard;
