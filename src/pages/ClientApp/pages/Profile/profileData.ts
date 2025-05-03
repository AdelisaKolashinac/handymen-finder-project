export interface ActiveAdType {
  id: string;
  img: string;
  name: string;
  tag: string;
  urgency: string;
  title: string;
  description: string;
  city: string;
  country: string;
}

export const activeAds: ActiveAdType[] = [
  {
    id: crypto.randomUUID(),
    img: "/anna.png",
    name: "Anna Müller",
    tag: "Vertrauenswürdig",
    urgency: "DRINGEND",
    title: "Ein undichtes Rohr reparieren",
    description:
      "Lokalisieren Sie die Quelle des Lecks, stellen Sie die Wasserversorgung ab und reparieren Sie das Leck mit den entsprechenden Werkzeugen. Nachdem die Reparatur abgeschlossen ist, testen Sie den Bereich, um sicherzustellen, dass keine weiteren Lecks vorhanden sind. Falls nötig, tragen Sie Dichtungsmittel auf oder ersetzen Sie beschädigte Teile, um zukünftige Probleme zu vermeiden.",
    city: "Ingolstadt",
    country: "Deutschland",
  },
  {
    id: crypto.randomUUID(),
    img: "/anna.png",
    name: "Anna Müller",
    tag: "Vertrauenswürdig",
    urgency: "DRINGEND",
    title: "Ein undichtes Rohr reparieren",
    description:
      "Lokalisieren Sie die Quelle des Lecks, stellen Sie die Wasserversorgung ab und reparieren Sie das Leck mit den entsprechenden Werkzeugen. Nachdem die Reparatur abgeschlossen ist, testen Sie den Bereich, um sicherzustellen, dass keine weiteren Lecks vorhanden sind. Falls nötig, tragen Sie Dichtungsmittel auf oder ersetzen Sie beschädigte Teile, um zukünftige Probleme zu vermeiden.",
    city: "Ingolstadt",
    country: "Deutschland",
  },
  {
    id: crypto.randomUUID(),
    img: "/anna.png",
    name: "Anna Müller",
    tag: "Vertrauenswürdig",
    urgency: "DRINGEND",
    title: "Ein undichtes Rohr reparieren",
    description:
      "Lokalisieren Sie die Quelle des Lecks, stellen Sie die Wasserversorgung ab und reparieren Sie das Leck mit den entsprechenden Werkzeugen. Nachdem die Reparatur abgeschlossen ist, testen Sie den Bereich, um sicherzustellen, dass keine weiteren Lecks vorhanden sind. Falls nötig, tragen Sie Dichtungsmittel auf oder ersetzen Sie beschädigte Teile, um zukünftige Probleme zu vermeiden.",
    city: "Ingolstadt",
    country: "Deutschland",
  },
];
