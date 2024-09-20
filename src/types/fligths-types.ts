// Types for each specific object in the data
type AircraftType = {
	iataMain: string
	iataSub: string
}

type BaggageClaim = {
	belts: string[]
}

type CheckinDesk = {
	checkinClass: {
		code: string
		description: string
	}
	position: number
}

type CheckinRow = {
	position: string
	desks: {
		desks: CheckinDesk[]
	}
}

type CheckinAllocation = {
	endTime: string
	startTime: string
	rows: {
		rows: CheckinRow[]
	}
}

type CheckinAllocations = {
	checkinAllocations: CheckinAllocation[]
	remarks: {
		remarks: string[]
	}
}

type Codeshares = {
	codeshares: string[]
}

type PublicFlightState = {
	flightStates: string[]
}

type Route = {
	destinations: string[]
	eu: string
	visa: boolean
}

type Flight = {
	lastUpdatedAt: string
	actualLandingTime: string
	actualOffBlockTime: string
	aircraftRegistration: string
	aircraftType: AircraftType
	baggageClaim: BaggageClaim
	checkinAllocations: CheckinAllocations
	codeshares: Codeshares
	estimatedLandingTime: string
	expectedTimeBoarding: string
	expectedTimeGateClosing: string
	expectedTimeGateOpen: string
	expectedTimeOnBelt: string
	expectedSecurityFilter: string
	flightDirection: string
	flightName: string
	flightNumber: number
	gate: string
	pier: string
	id: string
	isOperationalFlight: boolean
	mainFlight: string
	prefixIATA: string
	prefixICAO: string
	airlineCode: number
	publicEstimatedOffBlockTime: string
	publicFlightState: PublicFlightState
	route: Route
	scheduleDateTime: string
	scheduleDate: string
	scheduleTime: string
	serviceType: string
	terminal: number
	transferPositions: {
		transferPositions: number[]
	}
	schemaVersion: string
}

type FlightsResponse = {
	flights: Flight[]
}

export type { Flight, FlightsResponse }
