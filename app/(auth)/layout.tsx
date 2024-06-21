import LoginPageContent from "@/components/LoginPageContent";
import Image from "next/image";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            {/* <div className="grid w-full font-inter gap-4 lg:flex lg:justify-between"> */}
                {children}
                <div className="auth-asset">
                    {/* <div className="">
                        <Image
                            src="/icons/bank-img-1.jpg"
                            alt="auth image"
                            width={950}
                            height={490}
                        />
                    </div> */}
                </div>
            {/* </div> */}
            <div className="md:grid lg:grid w-full">
                <LoginPageContent />
            </div>
        </main>
    );
};
