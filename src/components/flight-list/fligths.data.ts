export type FlightInfo = {
  airline: string;
  fromCity: string;
  fromCode: string;
  toCity: string;
  toCode: string;
  aircraftReg: string;
  logoUrl: string;
};

export const FLIGTHS_DATA: FlightInfo[] = [
  {
    airline: "AF198",
    fromCity: "Paris",
    fromCode: "CDG",
    toCity: "Tokyo",
    toCode: "NRT",
    aircraftReg: "F-GSQJ",
    logoUrl: "/logos/air-france.svg",
  },
  {
    airline: "LH456",
    fromCity: "Frankfurt",
    fromCode: "FRA",
    toCity: "Los Angeles",
    toCode: "LAX",
    aircraftReg: "D-AIMN",
    logoUrl: "/logos/lufthansa.svg",
  },
  {
    airline: "SQ322",
    fromCity: "Singapore",
    fromCode: "SIN",
    toCity: "London",
    toCode: "LHR",
    aircraftReg: "9V-SKJ",
    logoUrl: "/logos/singapore-airlines.svg",
  },
  {
    airline: "AA100",
    fromCity: "New York",
    fromCode: "JFK",
    toCity: "London",
    toCode: "LHR",
    aircraftReg: "N765AN",
    logoUrl: "/logos/american-airlines.svg",
  },
  {
    airline: "QF12",
    fromCity: "Los Angeles",
    fromCode: "LAX",
    toCity: "Sydney",
    toCode: "SYD",
    aircraftReg: "VH-OQE",
    logoUrl: "/logos/qantas.svg",
  },
  {
    airline: "BA268",
    fromCity: "Los Angeles",
    fromCode: "LAX",
    toCity: "London",
    toCode: "LHR",
    aircraftReg: "G-ZBKH",
    logoUrl: "/logos/british-airways.svg",
  },
  {
    airline: "EK215",
    fromCity: "Dubai",
    fromCode: "DXB",
    toCity: "Los Angeles",
    toCode: "LAX",
    aircraftReg: "A6-EOA",
    logoUrl: "/logos/emirates.svg",
  },
  {
    airline: "JL10",
    fromCity: "Tokyo",
    fromCode: "HND",
    toCity: "San Francisco",
    toCode: "SFO",
    aircraftReg: "JA743J",
    logoUrl: "/logos/japan-airlines.svg",
  },
  {
    airline: "SU100",
    fromCity: "Moscow",
    fromCode: "SVO",
    toCity: "New York",
    toCode: "JFK",
    aircraftReg: "RA-96010",
    logoUrl: "/logos/aeroflot.svg",
  },
  {
    airline: "AC849",
    fromCity: "London",
    fromCode: "LHR",
    toCity: "Toronto",
    toCode: "YYZ",
    aircraftReg: "C-FIVW",
    logoUrl: "/logos/air-canada.svg",
  },
];
