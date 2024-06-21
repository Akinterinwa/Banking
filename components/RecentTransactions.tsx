'use client';

import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BankInfoOne from './BankInfoOne';
import TransactionsTable from './TransactionsTable';
import BankInfoTwo from './BankInfoTwo';
import Link from 'next/link';
import { transactionData } from '@/constants';
import { Pagination } from './Pagination';
import { useSearchParams } from 'next/navigation';

const ITEMS_PER_PAGE = 1;

const RecentTransactions = () => {
    const searchParams = useSearchParams();
    const initialPage = Number(searchParams.get("page")) || 1;
    const [activeTab, setActiveTab] = useState("account");
    const [currentPage, setCurrentPage] = useState(initialPage);

    useEffect(() => {
        setCurrentPage(initialPage);
    }, [initialPage]);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedTransactions = transactionData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    const totalPages = Math.ceil(transactionData.length / ITEMS_PER_PAGE);

    return (
        <section className="recent-transactions">
            <header className="flex items-center justify-between mb-4">
                <h2 className="recent-transactions-label text-xl font-semibold">
                    Recent transactions
                </h2>
                <Link
                    href="/transaction-history"
                    className="view-all-btn text-blue-600 cursor-pointer">
                    View all
                </Link>
            </header>

            <Tabs defaultValue="account" value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="recent-transactions-tablist flex space-x-2 mb-4">
                    <TabsTrigger value="account" className="flex-1">
                        <div className={`banktab-item ${activeTab === "account" ? "border-blue-600 text-blue-600" : "border-gray-400 text-gray-400"
                            }`}>
                            <p className="text-16 line-clamp-1 flex-1 font-medium">
                                Chase Bank
                            </p>
                        </div>
                    </TabsTrigger>
                    <TabsTrigger value="password" className="flex-1">
                        <div className={`banktab-item  ${activeTab === "password" ? "border-blue-600 text-blue-600" : "border-gray-400 text-gray-400"
                            }`}>
                            <p className="text-16 line-clamp-1 flex-1 font-medium">
                                Bank of America
                            </p>
                        </div>
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="account"><BankInfoOne /></TabsContent>
                <TabsContent value="password"><BankInfoTwo /></TabsContent>

                <TransactionsTable
                    transactions={paginatedTransactions}
                />
                <Pagination
                    page={currentPage}
                    totalPages={totalPages}
                />
            </Tabs>
        </section>
    )
}

export default RecentTransactions;
