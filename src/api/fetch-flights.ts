import { FlightsResponse } from "@/types/fligths-types"

const apiKey = "f81ae60e65879d2f5bbd9fb7ba61be5b"

const apiUrl =
	"https://api.schiphol.nl/public-flights/flights?includedelays=false&page=0&sort=%2BscheduleTime"

export const fetchFlights = async (): Promise<FlightsResponse | undefined> => {
	try {
		const response = await fetch(apiUrl, {
			method: "GET",

			headers: {
				Accept: "application/json",
				ResourceVersion: "v4",
				app_id: "c1405d21", // Uygulama ID'si
				app_key: apiKey, // API anahtarı
			},
		})

		if (!response.ok) {
			throw new Error("Veri çekilemedi")
		}

		const data = await response.json()
		console.log(data)

		return data
	} catch (error) {
		console.log(error)
	}
}
