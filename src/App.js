import "./styles.css";

export default function App() {
  return (
    <div className="Calculator">
      <div className="display">
        <div className="firstLine">
          <h3>First Line</h3>
        </div>
        <div className="secondLine">
          <h3>Second Line</h3>
        </div>
      </div>
      <div className="buttonPad">
        <div className="buttonRow">
          <div className="buttonCell">
            <button className="longButton">AC</button>
          </div>
          <div className="buttonCell">
            <button>/</button>
          </div>
          <div className="buttonCell">
            <button>x</button>
          </div>
        </div>
        <div className="buttonRow">
          <div className="buttonCell">
            <button>7</button>
          </div>
          <div className="buttonCell">
            <button>8</button>
          </div>
          <div className="buttonCell">
            <button>9</button>
          </div>
          <div className="buttonCell">
            <button>-</button>
          </div>

          
        </div>
        <div className="buttonRow">
          <div className="buttonCell">
            <button>4</button>
          </div>
          <div className="buttonCell">
            <button>5</button>
          </div>
          <div className="buttonCell">
            <button>6</button>
          </div>
          <div className="buttonCell">
            <button>+</button>
          </div>
        </div>
        <div className="buttonRow">
          <div className="buttonCell">
            <button>1</button>
          </div>
          <div className="buttonCell">
            <button>2</button>
          </div>
          <div className="buttonCell">
            <button>3</button>
          </div>
          <div className="buttonCell">
            <button>=</button>
          </div>
        </div>
        <div className="buttonRow">
          <div className="buttonCell">
            <button className="longButton">0</button>
          </div>
          <div className="buttonCell">
            <button className="longButton">.</button>
          </div>
        </div>
      </div>
      
      <div className="Creator">Created By Jomiel Enriquez</div>
    </div>
  );
}
