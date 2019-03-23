// var firstP = $("p").html();
// console.log(firstP);

//$("p").html("<a href = 'asdasd'> New Link</a>")

//console.log($("p").text())

//$("p").html("<a href='/'>link</a>")

//console.log($("p").eq(1))

// var test = $("p").eq(0).text()
// var arr = test.split(" ")
// for(var i = 0;i<arr.length; i++){
// 	if(arr[i] === "sit"){
// 		arr[i] = "JQUERY"
// 	}
// }
// $("p").eq(0).text( arr.join("--->"))

var starttable = "<table>";
var endtable = "<table>";
var tableBody = "";
for (var i=0;i<8;i++){
	tableBody += `<tr><td>${i}</td></tr>`
	for (var i=0;i<8;i++){
	tableBody += `<tr><td>${i}</td></tr>`
}
}
var result = `${starttable}${tableBody}${endtable}`
$("body").prepend(result)