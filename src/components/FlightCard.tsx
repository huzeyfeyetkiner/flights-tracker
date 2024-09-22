"use client"

import { useMyFlights } from "@/context/MyFlightsContext"
import { Flight } from "@/types/fligths-types"
import { format, parseISO } from "date-fns"
import Image from "next/image"
import React from "react"

type FlightCardProps = {
	flight: Flight
}

function FlightCard({ flight }: FlightCardProps) {
	const formatTime = (timeString?: string) => {
		if (!timeString) {
			return "Time not available" // Handle missing time
		}

		try {
			const date = parseISO(timeString)
			if (isNaN(date.getTime())) {
				throw new Error("Invalid Date")
			}
			return format(date, "HH:mm")
		} catch (error) {
			console.error("Invalid time format:", timeString)
			throw error
		}
	}

	const { handleAddFlight } = useMyFlights()

	return (
		<div className="relative pb-12">
			<div className="relative w-full min-w-80 rounded-md bg-white p-16">
				<p className="text-sm font-bold">
					{flight.flightName} - {flight.flightNumber}
				</p>
				<div
					className={`flex ${
						flight.flightDirection === "A"
							? "flex-row"
							: "flex-row-reverse"
					} justify-between items-center`}
				>
					<div className="flex flex-col">
						<div className="w-20">
							{formatTime(flight.expectedTimeOnBelt)}
						</div>
						<div>{flight.route.destinations.join(" - ")}</div>
					</div>
					<div className="w-full flex flex-row items-center gap-x-12">
						<div className="w-full h-1 bg-purple-700"></div>
						<Image
							src={"/icons/flight-direction.svg"}
							alt="airline-logo"
							width={40}
							height={40}
						/>
						<div className="w-full h-1 bg-purple-700"></div>
					</div>
					<div className="flex flex-col">
						<div className="w-20">
							{formatTime(flight.estimatedLandingTime)}{" "}
						</div>
						<div>AMS</div>
					</div>
				</div>

				<button
					className="w-24 h-12 absolute bottom-0 right-0 bg-purple-700 text-white font-bold rounded-sm"
					onClick={() => {
						handleAddFlight(flight)
					}}
				>
					Save Flight
				</button>
			</div>
		</div>
	)
}

export default FlightCard
