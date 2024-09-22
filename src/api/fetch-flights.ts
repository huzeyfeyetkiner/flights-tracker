import { FlightsResponse } from "@/types/fligths-types"

export const fetchFlights = async (
	scheduleDate?: string
): Promise<FlightsResponse | undefined> => {
	const url = `${process.env.API_URL}?scheduleDate=${scheduleDate}`

	try {
		const response = await fetch(url, {
			method: "GET",

			headers: {
				Accept: "application/json",
				ResourceVersion: "v4",
				app_id: process.env.APP_ID as string, // Uygulama ID'si
				app_key: process.env.API_KEY as string, // API anahtarı
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
