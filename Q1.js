const cleanTheRoom = (array) => {
	temp = []; newArray = [];
	temp.push(array[0]);
	let l = array.length
	for(var j = 1; j <= l-1; j++)
	{
		if(array[j] == temp[0]) temp.push(array[j]);
		else 
		{
			if (temp.length > 1) newArray.push(temp);
			else newArray.push(temp[0]);
			temp = [];
			temp[0] = array[j];
		}
	}
	newArray.push(array[l-1]);
	return newArray;
}

var array = [1,2,4,591,392,391,2,"3",5,10,2,1,1,1,20,20,"2"];

array.sort((a,b) => a - b); //sort the array in ascending order

const arrayN = array.filter(num => typeof(num) == "number");
const arrayS = array.filter(num => typeof(num) == "string");
let ans = [cleanTheRoom(arrayN), cleanTheRoom(arrayS)];