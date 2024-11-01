import { useEffect, useState } from "react";

export function CurrentLocation() {
  const [location, setLocation] = useState({ city: "", state: "" });

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_KEY;

    const fetchLocationData = async (latitude: number, longitude: number) => {
      try {
        const response = await fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiUrl}`
        );
        const data = await response.json();

        if (data.results.length > 0) {
          const components = data.results[0].components;
          const city = components.city || components.town || components.village;
          const state = components.state_code;
          setLocation({ city, state });
        }
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          console.log(position.coords);
          fetchLocationData(latitude, longitude);
        },
        (error) => {
          console.error("Error fetching location:", error);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <>
      <p>
        {location.city}, {location.state}
      </p>
    </>
  );
}
