function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start addding some items to your packing list!</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <p>
        {percentage === 100
          ? "You got everything! Ready to go!✈"
          : `You have ${numItems} item on your list, and you already packed ${numPacked} (${percentage}%)`}
      </p>
    </footer>
  );
}

export default Stats;
