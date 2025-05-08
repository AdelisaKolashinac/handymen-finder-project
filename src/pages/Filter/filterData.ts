export interface FilterCategoryType {
  id: string;
  label: string;
}

export const filterCategories: FilterCategoryType[] = [
  { id: "electrical-installation", label: "Electrical installation" },
  { id: "sanitary installation", label: "Sanitary installation" },
  { id: "painting-painting work", label: "Painting and painting work" },
  { id: "carpentry/carpentry", label: "Carpentry/carpentry" },
  { id: "roofing", label: "Roofing" },
  { id: "heating-installation", label: "Heating installation" },
  { id: "tile-work", label: "Tile work" },
  { id: "bricklaying", label: "Bricklaying" },
  { id: "garden-landscaping", label: "Garden and landscaping" },
  { id: "locksmith work", label: "Locksmith work" },
];
