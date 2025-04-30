export interface BookingType {
  id: string;
  status: "new" | "ongoing" | "completed";
  service: string;
  date: string;
  time: string;
  task: string;
  worker: string;
  locationLink: string;
  rating?: number;
}

export const bookings: BookingType[] = [
  {
    id: crypto.randomUUID(),
    status: "new",
    service: "Plumbing service",
    date: "Wed, 8 Nov",
    time: "Morning 9 am",
    task: "Fix a leaking pipe",
    worker: "Klaus Schneider",
    locationLink: "#",
    rating: 0,
  },
  {
    id: crypto.randomUUID(),
    status: "ongoing",
    service: "Electrician",
    date: "Fri, 10 Nov",
    time: "Afternoon 2 pm",
    task: "Install ceiling lights",
    worker: "Anna Müller",
    locationLink: "#",
    rating: 0,
  },
  {
    id: crypto.randomUUID(),
    status: "completed",
    service: "Painter",
    date: "Mon, 6 Nov",
    time: "Morning 10 am",
    task: "Paint living room",
    worker: "John Doe",
    locationLink: "#",
    rating: 0,
  },
];
