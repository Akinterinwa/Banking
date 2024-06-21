import Image from 'next/image';
import React from 'react'

const BankInfoTwo = () => {
    return (
        <div
            className="bank-info shadow-sm border-blue-700
            rounded-xl hover:shadow-sm cursor-pointer"
        >
            <figure
                className="flex-center h-fit rounded-full bg-blue-100"
            >
                <Image
                    src="/icons/connect-bank.svg"
                    width={20}
                    height={20}
                    alt="logo"
                    className="m-2 min-w-5"
                />
            </figure>
            <div className="flex w-full flex-1 flex-col justify-center gap-1">
                <div className="bank-info_content">
                    <h2  className="text-16 line-clamp-1 flex-1 font-bold text-blue-900">
                        Bank of America
                    </h2>
                    <p   className={`text-12 rounded-full px-3 py-1 font-medium text-blue-700 bg-blue-100`}>
                        Checking
                    </p>
                </div>

                <p className="text-16 font-medium text-blue-700">
                    $7,110.68
                </p>
            </div>
        </div>
    );
}

export default BankInfoTwo;