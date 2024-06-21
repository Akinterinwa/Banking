"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "./ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea"; // Ensure Textarea is correctly imported or created
import BankDropdown from "./BankDropdown"; // Import the BankDropdown component
import { Loader2 } from "lucide-react";

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Invalid email address.",
    }),
    sharableId: z.string().min(1, {
        message: "Sharable ID is required.",
    }),
    amount: z.number().positive({
        message: "Amount must be a positive number.",
    }).or(z.string().refine(val => !isNaN(parseFloat(val)), {
        message: "Amount must be a number.",
    })),
    note: z.string().optional(),
    bank: z.string().min(1, {
        message: "Bank selection is required.",
    }),
});

type FormData = z.infer<typeof formSchema>;

const PaymentTransferForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            sharableId: "",
            amount: "",
            note: "",
            bank: "", // Default value for bank selection
        },
    });

    const onSubmit = async (data: FormData) => {
        setIsLoading(true);
        // Simulate a network request
        setTimeout(() => {
            console.log(data);
            setIsLoading(false);
            router.push("/success"); // Redirect to a success page or perform another action
        }, 2000);
    };

    const bankOptions = [
        { label: "Bank A", value: "bank_a" },
        { label: "Bank B", value: "bank_b" },
        { label: "Bank C", value: "bank_c" },
    ];

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem className="border-t border-gray-200">
                            <div className="payment-transfer_form-item pb-6 pt-5">
                                <div className="flex w-full flex-col">
                                    <FormMessage className="text-12 text-red-500" />
                                </div>
                            </div>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="bank"
                    render={({ field }) => (
                        <FormItem className="border-t border-gray-200">
                            <div className="payment-transfer_form-item pb-6 pt-5">
                                <div className="payment-transfer_form-content">
                                    <FormLabel className="text-14 font-medium text-gray-700">
                                        Select Source Bank
                                    </FormLabel>
                                    <FormDescription className="text-12 font-normal text-gray-600">
                                        Select the bank account you want to transfer funds from
                                    </FormDescription>
                                </div>
                                <div className="flex w-full flex-col">
                                    <FormControl>
                                        <BankDropdown
                                            options={bankOptions}
                                            value={field.value}
                                            onChange={field.onChange}
                                        />
                                    </FormControl>
                                    <FormMessage className="text-12 text-red-500" />
                                </div>
                            </div>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="note"
                    render={({ field }) => (
                        <FormItem className="border-t border-gray-200">
                            <div className="payment-transfer_form-item pb-6 pt-5">
                                <div className="payment-transfer_form-content">
                                    <FormLabel className="text-14 font-medium text-gray-700">
                                        Transfer Note (Optional)
                                    </FormLabel>
                                    <FormDescription className="text-12 font-normal text-gray-600">
                                        Please provide any additional information or instructions
                                        related to the transfer
                                    </FormDescription>
                                </div>
                                <div className="flex w-full flex-col">
                                    <FormControl>
                                        <Textarea
                                            placeholder="Write a short note here"
                                            className="input-class"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className="text-12 text-red-500" />
                                </div>
                            </div>
                        </FormItem>
                    )}
                />

                <div className="payment-transfer_form-details">
                    <h2 className="text-18 font-semibold text-gray-900">
                        Bank account details
                    </h2>
                    <p className="text-16 font-normal text-gray-600">
                        Enter the bank account details of the recipient
                    </p>
                </div>

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="border-t border-gray-200">
                            <div className="payment-transfer_form-item py-5">
                                <FormLabel className="text-14 w-full max-w-[280px] font-medium text-gray-700">
                                    Recipient&apos;s Email Address
                                </FormLabel>
                                <div className="flex w-full flex-col">
                                    <FormControl>
                                        <Input
                                            placeholder="ex: johndoe@gmail.com"
                                            className="input-class"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className="text-12 text-red-500" />
                                </div>
                            </div>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="sharableId"
                    render={({ field }) => (
                        <FormItem className="border-t border-gray-200">
                            <div className="payment-transfer_form-item pb-5 pt-6">
                                <FormLabel className="text-14 w-full max-w-[280px] font-medium text-gray-700">
                                    Receiver&apos;s Plaid Sharable Id
                                </FormLabel>
                                <div className="flex w-full flex-col">
                                    <FormControl>
                                        <Input
                                            placeholder="Enter the public account number"
                                            className="input-class"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className="text-12 text-red-500" />
                                </div>
                            </div>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                        <FormItem className="border-y border-gray-200">
                            <div className="payment-transfer_form-item py-5">
                                <FormLabel className="text-14 w-full max-w-[280px] font-medium text-gray-700">
                                    Amount
                                </FormLabel>
                                <div className="flex w-full flex-col">
                                    <FormControl>
                                        <Input
                                            placeholder="ex: 5.00"
                                            className="input-class"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className="text-12 text-red-500" />
                                </div>
                            </div>
                        </FormItem>
                    )}
                />

                <div className="payment-transfer_btn-box">
                    <Button type="submit" className="payment-transfer_btn">
                        {isLoading ? (
                            <>
                                <Loader2 size={20} className="animate-spin" /> &nbsp; Sending...
                            </>
                        ) : (
                            "Transfer Funds"
                        )}
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export default PaymentTransferForm;
