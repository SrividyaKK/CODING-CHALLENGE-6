const pair = (array, targetNum) => {
	var l = array.length;
	var newArray = [];
	for (var i = 0; i <= l; i++) 
	{
		var e = array[i];
		for (var j =i+1; j<=l; j++)
			if (array[i]+array[j] == targetNum) 
				newArray.push([array[i], array[j]]);
	}
	return newArray;
}

let array = [1, 2, 3];
let targetNum = Number(prompt("Enter target number: "));

let targetArray = pair(array, targetNum);