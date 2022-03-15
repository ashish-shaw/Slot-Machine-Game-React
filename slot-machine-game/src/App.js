import { SlotMachine } from "./components/SlotMachine";
import "./styles.css";

export default function App() {
  return (
    <>
      <div className="App">
        <h1>
          🎰Welcome to{" "}
          <span style={{ fontWeight: "bolder" }}>Slot Machine Game</span>🎰
        </h1>
        <div className="slotmachine">
          <SlotMachine x="😊" y="😊" z="😊" />
          <SlotMachine x="😊" y="❤️" z="😎" />
          <SlotMachine x="🍎" y="🍌" z="🌲" />
          <SlotMachine x="🥸" y="🥸" z="🥸" />
        </div>
      </div>
    </>
  );
}
