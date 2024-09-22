import { fetchFlights } from "@/api/fetch-flights"
import { FlightsResponse } from "@/types/fligths-types"
import FlightCard from "@/components/FlightCard"
import Image from "next/image"
import { format } from "date-fns"
import { FilterPart } from "@/components/FilterPart"

type FlightsDataProps = {
	searchParams: { [key: string]: string | string[] | undefined }
}

const FlightsData = async ({ searchParams }: FlightsDataProps) => {
	const scheduleDate = searchParams.date as string | undefined

	const formattedDate = scheduleDate
		? format(new Date(scheduleDate), "yyyy-MM-dd")
		: format(new Date(), "yyyy-MM-dd")

	const flightsResponse: FlightsResponse | undefined = await fetchFlights(
		formattedDate
	)

	if (!flightsResponse) {
		return (
			<div className="flex flex-1 justify-center items-center">
				There is no data to display
			</div>
		)
	}

	const flights = flightsResponse.flights || []

	return (
		<div className="w-full">
			<div className="grid grid-cols-12 gap-4">
				<div className="col-span-12 lg:col-span-9 space-y-3">
					<FilterPart />
					{flights.map((flight, index) => {
						if (flight.flightDirection === "A")
							return <FlightCard key={index} flight={flight} />
					})}
				</div>
				<div className="sticky top-3 col-span-12 lg:col-span-3 space-y-4 h-fit">
					<div className="relative w-full h-60 bg-slate-500 rounded-md">
						<Image
							className="rounded-md"
							src="https://www.hertz.com/content/dam/hertz/global/blog-articles/resources/one-way-rental.jpg"
							alt="car-rental"
							fill
							objectFit="cover"
						/>
						<div className="absolute w-full h-full bg-black opacity-40 rounded-md"></div>
						<h3 className="absolute text-4xl text-white font-bold bottom-2 left-2">
							Rent a Car
						</h3>
					</div>
					<div className="relative w-full h-60 bg-slate-500 rounded-md">
						<Image
							className="rounded-md"
							src="https://hoteldel.com/wp-content/uploads/2021/01/hotel-del-coronado-views-suite-K1TOS1-K1TOJ1-1600x900-1.jpg"
							alt="car-rental"
							fill
							objectFit="cover"
						/>
						<div className="absolute w-full h-full bg-black opacity-40 rounded-md"></div>
						<h3 className="absolute text-4xl text-white font-bold bottom-2 left-2">
							Search Hotels
						</h3>
					</div>
					<div className="relative w-full h-60 bg-slate-500 rounded-md">
						<Image
							className="rounded-md"
							src="https://blog.travelcarma.com/wp-content/uploads/2016/08/goa.jpg"
							alt="car-rental"
							fill
							objectFit="cover"
						/>
						<div className="absolute w-full h-full bg-black opacity-40 rounded-md"></div>
						<h3 className="absolute text-4xl text-white font-bold bottom-2 left-2">
							Travel Packages
						</h3>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FlightsData
