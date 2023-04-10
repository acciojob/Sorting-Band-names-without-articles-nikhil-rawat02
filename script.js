//your code here

let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

let sortedBand = touristSpots.forEach(band => band.replace((a|an|the),'')).sort();

let ui = document.getElementById("band");

sortedBand.forEach(band => {
	let li = document.createElement('li');
	li.innerText = band;
	ul.appendChild(li);
});