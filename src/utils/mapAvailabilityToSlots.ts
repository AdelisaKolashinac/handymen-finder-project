export function mapAvailabilityToSlots(ranges: string[]) {
  const slots = [
    { label: "8AM-12PM", start: "08:00", end: "12:00" },
    { label: "12PM-4PM", start: "12:00", end: "16:00" },
    { label: "4PM-8PM", start: "16:00", end: "20:00" },
  ];

  const toMinutes = (time: string) => {
    const [h, m] = time.split(":").map(Number);
    return h * 60 + m;
  };

  const overlaps = (
    start1: number,
    end1: number,
    start2: number,
    end2: number
  ) => start1 < end2 && end1 > start2;

  const availableLabels = new Set<string>();

  for (const range of ranges) {
    const [rangeStart, rangeEnd] = range.split("-");
    const startMins = toMinutes(rangeStart);
    const endMins = toMinutes(rangeEnd);

    for (const slot of slots) {
      const slotStart = toMinutes(slot.start);
      const slotEnd = toMinutes(slot.end);

      if (overlaps(startMins, endMins, slotStart, slotEnd)) {
        availableLabels.add(slot.label);
      }
    }
  }
  return [...availableLabels];
}
