import { useState } from "react";
import { encoder, decoder } from "./encoder";
import style from "./app.module.css";

function App() {
	const [text, setText] = useState("");
	const [textEncoded, setTextEncoding] = useState("");
	const [isEncode, setIsEncode] = useState(true);

	const controllerInput = (e) => {
		const originalText = e.target.value;
		setText(originalText);
		const textEncoded = isEncode
			? encoder(originalText)
			: decoder(originalText);

		setTextEncoding(textEncoded);
	};

	return (
    <div className={style.app}>
      <div className={style.section}>
        <h1 className={style.mainTitle}>Zùpitlang</h1>
        <div className={style.radioButtons}>
          <button className={`${style.button} ${isEncode && style.isEncode}`} onClick={() => setIsEncode(true)}>
            Encoder
          </button>
          <button className={`${style.button} ${!isEncode && style.isEncode}`} onClick={() => setIsEncode(false)}>
            Décoder
          </button>
        </div>
        <textarea className={style.textArea} onChange={controllerInput} spellcheck={false} value={text}></textarea>
      </div>
      <div className={style.section}>
        <h2 className={style.title2}>Traduit : </h2>
        <textarea value={textEncoded} className={style.textTranslated} spellcheck={false}></textarea>
      </div>
    </div>
  );
}

export default App;
