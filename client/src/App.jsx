import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [from, setFrom] = useState("ar");
  const [to, setTo] = useState("ar");
  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState("");

  // onsubmit function that calls our API to get the translation
  async function handleTranslate(event) {
    event.preventDefault();
    const API = `http://localhost:8080/translate?word=${word}&from=${from}&to=${to}`;
    const res = await axios.get(API);
    setTranslation(res.data.translation);
  }

  return (
    <>
      <form onSubmit={handleTranslate}>
        <div className="container">
          <select onChange={(event) => setFrom(event.target.value)}>
            <option value="ar">Arabic</option>
            <option value="en">English</option>
            <option value="pl">Polish</option>
            <option value="es">Spanish</option>
            <option value="tr">Turkish</option>
          </select>
          <input
            placeholder="Translate"
            onChange={(event) => setWord(event.target.value)}
          />
        </div>

        <div className="container">
          <select onChange={(event) => setTo(event.target.value)}>
            <option value="ar">Arabic</option>
            <option value="en">English</option>
            <option value="pl">Polish</option>
            <option value="es">Spanish</option>
            <option value="tr">Turkish</option>
          </select>
          <div className="output">{translation}</div>
        </div>
        <button>Submit</button>
      </form>
      {/* show our translation */}
      {/* STRETCH: show a gif from the GIPHY API that matches the translation */}
    </>
  );
}

export default App;

// import { useState } from "react";
// import "./App.css";
// import axios from "axios";

// function App() {
//   const [from, setFrom] = useState("ar");
//   const [to, setTo] = useState("ar");
//   const [word, setWord] = useState("");
//   const [translation, setTranslation] = useState({});

//   async function handleTranslate(event) {
//     event.preventDefault();
//     const API = `http://localhost:8080/translate?word=hello&from=en&to=es`;
//     const res = await axios.get(API);
//   }

//   return (
//     <>
//       <form onSubmit={handleTranslate}>
//         <div className="container">
//           <select onChange={(event) => setTo(event.target.value)}>
//             <option value="ar">Arabic</option>
//             <option value="en">English</option>
//             <option value="pl">Polish</option>
//             <option value="es">Spanish</option>
//             <option value="tr">Turkish</option>
//           </select>
//           <input
//             placeholder="Translate"
//             onChange={(event) => setWord(event.target.value)}
//           />
//         </div>

//         <div className="container">
//           <select onChange={(event) => setFrom(event.target.value)}>
//             <option value="ar">Arabic</option>
//             <option value="en">English</option>
//             <option value="pl">Polish</option>
//             <option value="es">Spanish</option>
//             <option value="tr">Turkish</option>
//           </select>
//           <input placeholder="Translate" />
//         </div>
//       </form>
//     </>
//   );
// }

// export default App;
