export interface FlightData {
  flightNumber: string;
  airline: string;
  airlineIconUrl: string;
  aircraftImageUrl: string;
  aircraftReg: string;
  from: AirportInfo;
  to: AirportInfo;
  progress: FlightProgress;
  schedule: FlightSchedule;
  aircraft: AircraftInfo;
  speed: string;
  altitude: string;
}
export interface AirportInfo {
  code: string;
  city: string;
  timezone: string;
}
export interface FlightProgress {
  totalDistanceKm: number;
  totalDuration: string;
  completedDistanceKm: number;
  completedDuration: string;
}
export interface FlightSchedule {
  departure: {
    planned: string;
    actual: string;
  };
  arrival: {
    planned: string;
    estimated: string;
  };
}
export interface AircraftInfo {
  model: string;
  country: string;
  countryFlag: string;
}
