import { Flight } from "@/types/fligths-types"
import React from "react"

type FlightCardProps = {
	flight: Flight
}

function FlightCard({ flight }: FlightCardProps) {
	const formatTime = (timeString: string) => {
		const date = new Date(timeString)
		return date.toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit",
		})
	}

	return (
		<div className="w-full rounded-md bg-white p-4">
			<p className="text-sm font-bold">
				{flight.flightName} - {flight.flightNumber}
			</p>
			<div>
				<div className="flex justify-between items-center">
					<div>{formatTime(flight.estimatedLandingTime)} </div>
					<div>{formatTime(flight.expectedTimeOnBelt)}</div>
				</div>
			</div>

			<div className="flex flex-row justify-between">
				<div>{flight.route.destinations.join(" - ")}</div>
				<div>AMS</div>
			</div>
		</div>
	)
}

export default FlightCard
