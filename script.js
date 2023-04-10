//your code here

let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

// let sortedBand = touristSpots.forEach(band => band.replace(('a'),'')
// 									 );
function removeArticle(str){
	let words = str.split(' ');

	// words.map((word)=>{
	// 	if()
	// })
	if(words.length > 1 && (words[0].toLowerCase()==='a' || words[0].toLowerCase()==='an' || words[0].toLowerCase()==='the')){
		words.splice(0,1);
	}
	return words.join(" ");
}

touristSpots.sort((a,b)=>{
	const bandA = removeArticle(a);
	const bandB = removeArticle(b);

	return bandA.localeCompare(bandB);
})

// console.log(touristSpots);

let ul = document.getElementById("band");

touristSpots.forEach(band => {
	let li = document.createElement('li');
	li.innerText = band;
	ul.appendChild(li);
});