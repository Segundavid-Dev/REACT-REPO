import "./App.css";

const initialItems = [
  {
    id: 1,
    description: "Passports",
    quantity: 2,
    packed: false,
  },
  {
    id: 2,
    description: "Socks",
    quantity: 12,
    packed: false,
  },
  {
    id: 3,
    description: "Charger",
    quantity: 6,
    packed: true,
  },
];

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴Far Away 💼</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your trip?</h3>
    </div>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Items
            item={item.description}
            quantity={item.quantity}
            packed={item.packed}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
}

function Items({ item, quantity, packed }) {
  return (
    <li>
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {item}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <p>You have X item on your list, and you already packed X(x%)</p>
    </footer>
  );
}

export default App;
