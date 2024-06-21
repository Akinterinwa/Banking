import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { cn } from '@/lib/utils';
import { transactionCategoryStyles, transactionData } from '@/constants';

interface Transaction {
    transactionName: string;
    amount: number;
    status: string;
    date: string;
    channel: string;
    category: string;
    type: string;
    sender: string;
}

interface TransactionsTableProps {
    transactions: Transaction[];
}

const CategoryBadge = ({ category }: { category: string }) => {
    const {
        borderColor,
        textColor,
        chipBackgroundColor,
    } = transactionCategoryStyles[category as keyof typeof transactionCategoryStyles] || transactionCategoryStyles.default;

    return (
        <div className={cn('category-badge', borderColor, chipBackgroundColor)}>
            <div className={cn('rounded-full')}>
                <p className={cn('text-[12px] font-medium', textColor)}>
                    {category}
                </p>
            </div>
        </div>
    );
}

const TransactionsTable: React.FC<TransactionsTableProps> = ({ transactions }) => {
    return (
        <Table>
            <TableHeader className='bg-[#f9fafb]'>
                <TableRow>
                    <TableHead className="px-2">Transactions</TableHead>
                    <TableHead className="px-2">Amount</TableHead>
                    <TableHead className="px-2">Status</TableHead>
                    <TableHead className="px-2">Date</TableHead>
                    <TableHead className="px-2 max-md:hidden">Channel</TableHead>
                    <TableHead className="px-2 max-md:hidden">Category</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {transactionData.map((transaction, index) => (
                    <TableRow
                        key={index}
                        className={`${transaction.type === "debit" ? "bg-[#fffbfa]" : "bg-[#f6fef9]"
                            } ${
                            "hover:bg-gray-200 !border-b-default"
                            }`}
                    >
                        <TableCell className="max-w-[250px] pl-2 pr-10">
                            <div className='items-center gap-3'>
                                <h1 className='text-14 font-semibold text-[#344054]'>{transaction.transactionName}</h1>
                                {transaction.sender !== "N/A" && (
                                    <p className="text-sm text-gray-500">{transaction.sender}</p>
                                )}
                            </div>
                        </TableCell>
                        <TableCell
                            className={`${transaction.type === "debit" ? "text-[#f04438]" : "text-[#039855]"
                                } ${
                                "pl-2 pr-10 font-semibold "
                                }`}
                        >
                            {transaction.type === "debit" ? "-" : ""}${transaction.amount.toFixed(2)}
                        </TableCell>
                        <TableCell className='pl-2 pr-10'>
                            <CategoryBadge category={transaction.status} />
                        </TableCell>
                        <TableCell className='pl-2 pr-10 min-w-32'>{transaction.date}</TableCell>
                        <TableCell className="max-md:hidden pl-2 pr-10 capitalize min-w-24">{transaction.channel}</TableCell>
                        <TableCell className="max-md:hidden pl-2 pr-10">
                            <CategoryBadge category={transaction.category} />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default TransactionsTable;
