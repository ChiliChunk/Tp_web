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
			mylist.append( '<li style=\'color:' + item.bgXmlColor + '\'>' + item.name + '</li>' )
		}, mylist)
	})
}
