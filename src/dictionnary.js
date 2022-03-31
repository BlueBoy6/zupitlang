export const dictionnaryToEncode = {
	a: "z",
	à: "a",
	z: "e",
	e: "r",
	é: "#",
	è: "(",
	r: "t",
	t: "y",
	y: "u",
	u: "i",
	i: "o",
	o: "p",
	p: "^",
	q: "s",
	s: "d",
	d: "f",
	f: "g",
	g: "h",
	h: "j",
	j: "k",
	k: "l",
	l: "m",
	m: "ù",
	w: "x",
	x: "c",
	c: "v",
	ç: "[",
	v: "b",
	b: "n",
	n: "w",
	"'": "°",
	"\n": "\n",
	"?": ".",
	",": ";",
	".": ":",
	"!": "<",
	"(": "§",
	")": "*",
	"€": "¨",
	"&": "~",
};

export const decodeDictionnary = () => {
	const dico = {};

	for (const [key, value] of Object.entries(dictionnaryToEncode)) {
		dico[value] = key;
	}
	return dico;
};
