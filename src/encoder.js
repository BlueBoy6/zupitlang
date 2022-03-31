import { dictionnaryToEncode, decodeDictionnary } from "./dictionnary";

export const encoder = (text) => {
	const textSplitted = text.split("");
	const textEncode = textSplitted.map((letter) => {
		return letter === " " ? " " : dictionnaryToEncode[letter];
	});
	return textEncode.join("");
};

export const decoder = (text) => {
	const textSplitted = text.split("");
	const dico = decodeDictionnary();
	const textEncode = textSplitted.map((letter) => {
		return letter === " " ? " " : dico[letter];
	});
	return textEncode.join("");
};
