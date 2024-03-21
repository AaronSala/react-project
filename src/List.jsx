function LIst() {
  const fruits = [
    { id: 1, name: "mangoes ", calories: 130 },
    { id: 2, name: "oranges ", calories: 80 },
    { id: 3, name: "pineapples ", calories: 120 },
    { id: 4, name: "strawberries", calories: 70 },
    { id: 5, name: "apples", calories: 160 },
  ];

  //fruits.sort((a, b) => a.calories - b.calories);
 // const highcalories = fruits.filter((fruit) => fruit.calories < 100);

  const listItems = fruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name} &nbsp; <b>{fruit.calories} </b>
    </li>
  ));
  return <ol>{listItems}</ol>;
}

export default LIst;
