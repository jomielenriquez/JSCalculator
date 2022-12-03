import "./styles.css";

export default function App() {
  return (
    <div className="Calculator">
      <div className="display">
        <div className="firstLine">
          <h3>1234+56789=</h3>
        </div>
        <div className="secondLine">
          <h3>9876543210</h3>
        </div>
      </div>
      <div className="buttonPad">
        <div className="buttonRow">
          <div className="buttonCell">
            <button className="longButton AC">AC</button>
          </div>
          <div className="buttonCell">
            <button className="Operator">/</button>
          </div>
          <div className="buttonCell">
            <button className="Operator">x</button>
          </div>
        </div>
        <div className="buttonRow">
          <div className="buttonCell">
            <button className="Num">7</button>
          </div>
          <div className="buttonCell">
            <button className="Num">8</button>
          </div>
          <div className="buttonCell">
            <button className="Num">9</button>
          </div>
          <div className="buttonCell">
            <button className="Operator">-</button>
          </div>

          
        </div>
        <div className="buttonRow">
          <div className="buttonCell">
            <button className="Num">4</button>
          </div>
          <div className="buttonCell">
            <button className="Num">5</button>
          </div>
          <div className="buttonCell">
            <button className="Num">6</button>
          </div>
          <div className="buttonCell">
            <button className="Operator">+</button>
          </div>
        </div>
        <div className="buttonRow">
          <div className="buttonCell">
            <button className="Num">1</button>
          </div>
          <div className="buttonCell">
            <button className="Num">2</button>
          </div>
          <div className="buttonCell">
            <button className="Num">3</button>
          </div>
          <div className="buttonCell Equal">
            <button className="Operator">=</button>
          </div>
        </div>
        <div className="buttonRow">
          <div className="buttonCell">
            <button className="longButton Num">0</button>
          </div>
          <div className="buttonCell">
            <button className="longButton Num">.</button>
          </div>
        </div>
      </div>
      
      <div className="Creator">Created By Jomiel Enriquez</div>
    </div>
  );
}
