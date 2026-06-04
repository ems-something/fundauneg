import Providers from "./providers";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import Header from "@/app/components/landing/header";
import Footer from "@/app/components/landing/footer";
import { headers } from "next/headers";

const montserrat = Montserrat({ subsets: ["latin"] });

const routesWithoutHeader = [
	"/home/enrollment",
	"/home/editor",
	"/home/registration",
	"/home/invoices",
	"/home/certification",
];

export const metadata: Metadata = {
	title: "Fundauneg",
	description: "Fundauneg app",
	icons: {
		icon: "/images/favicon.ico",
	},
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const headerList = await headers();
	const pathname = headerList.get("x-pathname");

	return (
		<html lang="en">
			<body className={"bg-gray-900" + montserrat.className}>
				{!routesWithoutHeader.includes(pathname as string) && (
					<Header />
				)}
				<Providers>{children}</Providers>
				<Footer />
			</body>
		</html>
	);
}
