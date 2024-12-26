import type { Place } from "./Place";

interface SearchResponseType {
  features: {
    geometry: {
      coordinates: number[];
    };
    properties: {
      place_id: number;
      display_name: string;
    };
  }[];
}

export const search = async (term: string) => {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${term}&format=geojson&addressdetails=1&layer=address&limit=5`
  );
  // type any stops that variable from type checking
  const data: SearchResponseType = await response.json();
  const places: Place[] = data.features.map((features) => {
    return {
      id: features.properties.place_id,
      name: features.properties.display_name,
      longitude: features.geometry.coordinates[0],
      latitude: features.geometry.coordinates[1],
    };
  });
  return places;
};
