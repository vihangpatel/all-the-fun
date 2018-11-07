export const initMap = () => {
	const position = {
		lat: 15.3168765,
		lng: 73.8997141,
	}
	// Styles a map in night mode.
	var map = new google.maps.Map(document.getElementById("map"), {
		center: position,
		zoom: 12,
	})
	// Let's also add a marker while we're at it
	var marker = new google.maps.Marker({
		position,
		map: map,
		animation: google.maps.Animation.DROP,
	})
}

export const addMap = () => {
	addScript({
		async: true,
		defer: true,
		src: "//maps.googleapis.com/maps/api/js?key=AIzaSyA-OJo_BS_LEeMdzIwq30RE7ZUnE6uuDW4",
		onload: initMap,
	})
}

const addScript = options => {
	var s = document.createElement("script") // Create a script element
	s.type = "text/javascript" // optional in html5
	s.async = options.async // asynchronous? true/false
	s.defer = options.defer
	s.src = options.src
	s.onload = options.onload
	var fs = document.getElementsByTagName("script")[0] // Get the first script
	fs.parentNode.insertBefore(s, fs)
}
