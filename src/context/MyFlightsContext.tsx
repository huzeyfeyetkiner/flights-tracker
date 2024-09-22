"use client"

import {
	createContext,
	useContext,
	useState,
	useEffect,
	Dispatch,
	SetStateAction,
} from "react"
import { Flight } from "@/types/fligths-types"

// Context tipi
type MyFlightsContextType = {
	myFlights: Flight[]
	setMyFlights: Dispatch<SetStateAction<Flight[]>>
	handleAddFlight: (flight: Flight) => void
	handleRemoveFlight: (flight: Flight) => void
}

// Context oluşturma
const MyFlightsContext = createContext<MyFlightsContextType | null>(null)

// Provider fonksiyonu
export function MyFlightsProvider({ children }: { children: React.ReactNode }) {
	const [myFlights, setMyFlights] = useState<Flight[]>([])

	// Uçuş ekleme fonksiyonu
	const handleAddFlight = (flight: Flight) => {
		const newFlights = [...myFlights, flight]
		setMyFlights(newFlights)
		localStorage.setItem("myFlights", JSON.stringify(newFlights))
		console.log(myFlights)
	}

	const handleRemoveFlight = (flight: Flight) => {
		const newFlights = myFlights.filter((item) => item !== flight)
		setMyFlights(newFlights)
		localStorage.setItem("myFlights", JSON.stringify(newFlights))
	}

	// LocalStorage'den uçuşları çekme
	useEffect(() => {
		const myFlights = localStorage.getItem("myFlights")
		if (myFlights) {
			setMyFlights(JSON.parse(myFlights))
		}
	}, [])

	const values = {
		myFlights,
		setMyFlights,
		handleAddFlight,
		handleRemoveFlight,
	}

	return (
		<MyFlightsContext.Provider value={values}>
			{children}
		</MyFlightsContext.Provider>
	)
}

// Hook oluşturma
export function useMyFlights() {
	const context = useContext(MyFlightsContext)
	if (!context) {
		throw new Error("useMyFlights must be used within a MyFlightsProvider")
	}
	return context
}
