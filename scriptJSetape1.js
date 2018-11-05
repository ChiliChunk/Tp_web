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
			newli.click(() => clickLigne(item))
			mylist.append(newli)
		}, mylist)
	})
}

function clickLigne(item){
	let tempUrl = 'https://api.tisseo.fr/v1/stop_points.json?key=a3732a1074e2403ce364ad6e71eb998cb&displayCoordXY=1&lineId='+item.id
	$.ajax({
		type : "GET",
		url : tempUrl
	}).done((data) => {
		console.log(data)
		let myStopList = $('<ul/>')
		myStopList.attr('id' , 'showstop')
		$('#showstop').replaceWith(myStopList)
		myStopList.append($('<h1> Arrets de la lignes ' + item.shortName + ' </h1>'))
		data.physicalStops.physicalStop.map((item , i) => {
				myStopList.append($('<li>' + item.name +' ( '+ item.x +','+ item.y +' )</li>'))
			}, myStopList)
	})
}
