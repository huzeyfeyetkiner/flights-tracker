"use client"
import MyFlightCard from "@/components/MyFlightCard"
import { useMyFlights } from "@/context/MyFlightsContext"
import React from "react"

function Page() {
	const { myFlights } = useMyFlights()

	if (!myFlights || myFlights.length === 0) {
		return <div>No flights added yet!</div>
	}

	return (
		<div className="w-[60%] min-w-96 flex flex-col mx-auto">
			{myFlights.map((item, index) => {
				return <MyFlightCard key={index} flight={item} />
			})}
		</div>
	)
}

export default Page
