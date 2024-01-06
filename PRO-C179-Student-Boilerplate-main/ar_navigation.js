var coordinates={}
$(document).ready(function(){
    getCoordinates() 
})
function getCoordinates(){
    var searchParameters=new URLSearchParams(window.location.search)
    if (searchParameters.has("source")&&searchParameters.has("destination")){
        var source=searchParameters.get("source")
        var destination=searchParameters.get("destination")
        coordinates.source_lat=source.split(";")[0]
        coordinates.source_lon=destination.split(";")[1]
        coordinates.destination_lat=destination.split(";")[0]
        coordinates.destination_log=destination.split(";")[1]
    }
    else{
        alert("Coodinates not selected")
        window.history.back()
    }
}