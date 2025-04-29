export interface FilterCategoryType {
  id: string;
  label: string;
}

export const filterCategories: FilterCategoryType[] = [
  { id: "elektroinstallation", label: "Elektroinstallation" },
  { id: "sanitärinstallation", label: "Sanitärinstallation" },
  { id: "maler-und-lackierarbeiten", label: "Maler- und Lackierarbeiten" },
  { id: "tischlerei-schreinerei", label: "Tischlerei/Schreinerei" },
  { id: "dachdeckerarbeiten", label: "Dachdeckerarbeiten" },
  { id: "heizungsinstallation", label: "Heizungsinstallation" },
  { id: "fliesenarbeiten", label: "Fliesenarbeiten" },
  { id: "maurerarbeiten", label: "Maurerarbeiten" },
  { id: "garten-und-landschaftsbau", label: "Garten- und Landschaftsbau" },
  { id: "schlosserarbeiten", label: "Schlosserarbeiten" },
];
