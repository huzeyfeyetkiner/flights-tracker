"use client"
import MyFlightCard from "@/components/MyFlightCard"
import { Flight } from "@/types/fligths-types"
import React from "react"

function Page() {
	const storedFlights = localStorage.getItem("myFlights")
		? localStorage.getItem("myFlights")
		: null

	const myFlights: Flight[] | null = storedFlights
		? JSON.parse(storedFlights)
		: null

	if (!myFlights || myFlights.length === 0) {
		return <div>No flights added yet!</div>
	}

	return (
		<div>
			{myFlights.map((item, index) => {
				return <MyFlightCard key={index} flight={item} />
			})}
		</div>
	)
}

export default Page
