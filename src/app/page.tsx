import { fetchFlights } from "@/api/fetch-flights"
import FlightCard from "@/components/FlightCard"
import { FlightsResponse } from "@/types/fligths-types"
import React from "react"

const FlightsData: React.FC = async () => {
	const flightsResponse: FlightsResponse | undefined = await fetchFlights()

	if (!flightsResponse) {
		return <div>Veri yok</div>
	}

	const flights = flightsResponse.flights || [] // Access the flights key

	return (
		<div className="w-full">
			<div className="grid grid-cols-12">
				<div className="col-span-6 space-y-3">
					{flights.map((flight, index) => {
						console.log(flight.route)
						if (flight.flightDirection === "A")
							return <FlightCard key={index} flight={flight} />
					})}
				</div>
			</div>
		</div>
	)
}

export default FlightsData
