import { useEffect, useState } from "react";

const useEvents = () => {
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    const response = await fetch("/events.json");
    if (response.ok) {
      const data = await response.json();

      setEvents(data);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchEvents();
  }, []);
  return [loading, events];
};

export default useEvents;
