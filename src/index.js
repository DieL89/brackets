module.exports = function check(str, bracketsConfig) {
	if (str.length % 2) return false;
	
	let bracketsPatterns = bracketsConfig.map(array => array[0] + array[1]);
  let controlStr = str;
	
	while (true) {
		for (let i = 0; i < bracketsPatterns.length; i++) {
			str = str.replaceAll(bracketsPatterns[i], '');
		}
		
		if (str.length == 0) return true;
    if (str == controlStr) return false;

    controlStr = str;
	}
}
