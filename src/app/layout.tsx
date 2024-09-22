import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import NavBar from "@/components/NavBar"
import { MyFlightsProvider } from "@/context/MyFlightsContext"

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
})
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
})

export const metadata: Metadata = {
	title: "Flight Tracker",
	description: "Flight tracker app developed by github.com/huzeyfeyetkiner",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gray-50 p-12`}
			>
				<MyFlightsProvider>
					<NavBar />
					{children}
				</MyFlightsProvider>
			</body>
		</html>
	)
}
