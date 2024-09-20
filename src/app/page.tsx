import { fetchFlights } from "@/api/fetch-flights"
import FlightCard from "@/components/FlightCard"
import { FlightsResponse } from "@/types/fligths-types"
import React from "react"

const FlightsData: React.FC = async () => {
	const flightsResponse: FlightsResponse = await fetchFlights()
	const flights = flightsResponse.flights || [] // Access the flights key

	return (
		<div>
			<h1>Flight Verileri</h1>
			<ul>
				{flights.map((flight, index) => (
					<FlightCard key={index} />
				))}
			</ul>
		</div>
	)
}

export default FlightsData
