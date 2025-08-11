import { usePizzaOfTheDay } from "./usePizzaOfTheDay";

const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const PizzaOfTheDay = () => {
  const q = usePizzaOfTheDay();

  if (!q) {
    return <div>Loading i guess</div>;
  }

  return (
    <div className="pizza-of-the-day">
      <h2>Pizza of the Day</h2>
      <div>
        <div className="pizza-of-the-day-info">
          <h3>{q.name}</h3>
          <p>{q.description}</p>
          <p className="pizza-of-the-day-price">
            From: <span>{intl.format(q.sizes.S)}</span>
          </p>
        </div>
        <img className="pizza-of-the-day-image" src={q.image} alt={q.name} />
      </div>
    </div>
  );
};

export default PizzaOfTheDay;
