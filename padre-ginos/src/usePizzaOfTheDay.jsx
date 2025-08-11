import { useState, useEffect, useDebugValue } from "react";

export const usePizzaOfTheDay = () => {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);
  useDebugValue(
    pizzaOfTheDay ? `${pizzaOfTheDay.id}: ${pizzaOfTheDay.name}` : "loadin",
  );

  useEffect(() => {
    async function fetchPizzaOfTheDay() {
      const res = await fetch("/api/pizza-of-the-day");
      const resJson = await res.json();
      setPizzaOfTheDay(resJson);
    }
    fetchPizzaOfTheDay();
  }, []);

  return pizzaOfTheDay;
};
