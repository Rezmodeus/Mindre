function getDecompressed(compressedWords){
	const reg = /\d+/;
	let prevWord = '';
	return compressedWords.map( word => {
		const result = word.match(reg);
		let newWord = '';
		if (result == null){
			newWord = prevWord + word;
		} else {
			newWord = prevWord.substr(0, parseInt(result[0])) + word.substr(result[0].length);
		}
		prevWord = newWord;
		return newWord
	});
}

function getCompressed(words) {
	let prevWord = '';
	return words.map( word => {
		let i = 0;
		while (i < prevWord.length && i < word.length && prevWord[i] == word[i]) {
			i++;
		}
		const repeatStr = word.substr(0,i) == prevWord && i > 0 ? '' : i;
		prevWord = word;
		return repeatStr + word.substr(i);
	});
}
