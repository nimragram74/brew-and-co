export type Event = {
  id: number;
  title: string;
  description: string;
  day: string;
  time: string;
  date: string;
  tag: string;
};

export const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "Open Mic Night",
    description: "Local poets, musicians, and storytellers take the stage. Bring your voice or just your ears — all are welcome.",
    day: "Friday",
    time: "7:00 PM – 10:00 PM",
    date: "Every Friday",
    tag: "Music & Arts",
  },
  {
    id: 2,
    title: "Coffee Tasting Session",
    description: "Explore single-origins from three continents guided by our head roaster. Learn to taste the difference between a washed Ethiopian and a natural Brazilian.",
    day: "Saturday",
    time: "10:00 AM – 12:00 PM",
    date: "Every Saturday",
    tag: "Coffee Education",
  },
  {
    id: 3,
    title: "Latte Art Workshop",
    description: "Learn the basics of milk texturing and pouring from our barista champions. Small groups, big fun. Booking essential.",
    day: "Sunday",
    time: "11:00 AM – 1:00 PM",
    date: "First Sunday of month",
    tag: "Workshop",
  },
];
