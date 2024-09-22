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
import { toast } from "sonner"

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
	const [isMounted, setIsMounted] = useState(false)

	// Uçuş ekleme fonksiyonu
	const handleAddFlight = (flight: Flight) => {
		const flightExists = myFlights.some((item) => item.id === flight.id)
		if (flightExists) {
			toast.error("Flight already added!")
			return
		}
		const newFlights = [...myFlights, flight]
		if (!isMounted) return
		setMyFlights(newFlights)
		localStorage.setItem("myFlights", JSON.stringify(newFlights))
		console.log(myFlights)
		toast.success("Flight added to your list!")
	}

	const handleRemoveFlight = (flight: Flight) => {
		const newFlights = myFlights.filter((item) => item.id !== flight.id)
		setMyFlights(newFlights)
		localStorage.setItem("myFlights", JSON.stringify(newFlights))
		toast.success("Flight removed from your list!") // Başarılı kaldırma mesajı ekleyelim
	}

	// LocalStorage'den uçuşları çekme
	useEffect(() => {
		setIsMounted(true)
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
