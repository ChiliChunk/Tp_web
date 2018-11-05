$(() => {	$("#bt").click(initBt)})

function initBt(){
	$.ajax({
	    type : "GET",
	    url : "https://api.tisseo.fr/v1/lines.json?key=a3732a1074e2403ce364ad6e71eb998cb",
	}).done((data) => {
		let mylist = $('<ul/>')
		mylist.attr('id' , 'showliste')
		$('#showliste').replaceWith(mylist)
		data.lines.line.map((item , i) => {
			let newli = $( '<li style=\'color:' + item.bgXmlColor + '\'>' + item.name + '</li>' )
			newli.click(() => clickLigne(item.id))
			mylist.append(newli)
		}, mylist)
	})
}

function clickLigne(id){
	console.log(id)
	let tempUrl = 'https://api.tisseo.fr/v1/stop_points.json?key=a3732a1074e2403ce364ad6e71eb998cb&displayCoordXY=1&lineId='+id
	$.ajax({
		type : "GET",
		url : tempUrl
	}).done((data) => {
		console.log(data)
		let myStopList = $('<ul/>')
		myStopList.attr('id' , 'showstop')
		$('#showstop').replaceWith(myStopList)
		data.physicalStops.physicalStop.map((item , i) => {
				console.log(item.name)
				// let newli = $ )
				myStopList.append($('<li>' + item.name + '</li>'))
			}, myStopList)
	})
}
