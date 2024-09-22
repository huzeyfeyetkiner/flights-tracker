"use client"

import { useState } from "react"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { useRouter } from "next/navigation"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover"

export function FilterPart() {
	const [date, setDate] = useState<Date | undefined>(undefined)
	const router = useRouter()

	const handleFilter = () => {
		if (date) {
			const formattedDate = format(date, "yyyy-MM-dd")
			router.push(`/?date=${formattedDate}`) // date as a query param
		}
	}

	return (
		<div className="flex flex-row justify-between items-center bg-white p-4">
			<Popover>
				<PopoverTrigger asChild>
					<div>
						<p className="text-sm text-gray-600 mb-1">
							Search by a date
						</p>
						<Button
							variant={"outline"}
							className={cn(
								"w-[240px] justify-start text-left font-normal",
								!date && "text-muted-foreground"
							)}
						>
							<CalendarIcon className="mr-2 h-4 w-4" />
							{date ? (
								format(date, "PPP")
							) : (
								<span>Pick a date</span>
							)}
						</Button>
					</div>
				</PopoverTrigger>
				<PopoverContent className="w-auto p-0" align="start">
					<Calendar
						mode="single"
						selected={date}
						onSelect={setDate}
						initialFocus
					/>
				</PopoverContent>
			</Popover>

			<button
				className="w-20 h-10 flex justify-center items-center bg-purple-700 text-white rounded-md p-4"
				onClick={handleFilter}
			>
				Filter
			</button>
		</div>
	)
}
