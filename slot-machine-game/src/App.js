import { SlotMachine } from "./components/SlotMachine";
import "./styles.css";

export default function App() {
  return (
    <>
      <div className="App">
        <h1>
          π°Welcome to{" "}
          <span style={{ fontWeight: "bolder" }}>Slot Machine Game</span>π°
        </h1>
        <div className="slotmachine">
          <SlotMachine x="π" y="π" z="π" />
          <SlotMachine x="π" y="β€οΈ" z="π" />
          <SlotMachine x="π" y="π" z="π²" />
          <SlotMachine x="π₯Έ" y="π₯Έ" z="π₯Έ" />
        </div>
      </div>
    </>
  );
}
