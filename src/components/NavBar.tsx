import React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover"
import Link from "next/link"
import Image from "next/image"

function NavBar() {
	return (
		<div className="flex flex-1 justify-between items-center py-4 pr-2">
			<Link href={"/"} className="flex flex-row items-center gap-x-2">
				<Image
					src={"/icons/logo.svg"}
					alt="logo"
					width={40}
					height={40}
				/>
				<h1 className="text-xl font-bold text-purple-700">
					FlightTracker
				</h1>
			</Link>

			<Popover>
				<PopoverTrigger asChild>
					<Avatar>
						<AvatarImage
							src="https://github.com/shadcn.png"
							alt="@shadcn"
						/>
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
				</PopoverTrigger>
				<PopoverContent className="w-36">
					<div className="flex flex-col">
						<Link href={"/my-flights"}>My Flights</Link>
					</div>
				</PopoverContent>
			</Popover>
		</div>
	)
}

export default NavBar
