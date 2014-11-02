function addMarker(target_map, map_marker_positions) {
	positions = makeLocationArray(map_marker_positions);

	// 전체 마커 생성
	for(var i = 0; i < positions.length; i++)
	{
		var markers = new google.maps.Marker({
			position: positions[i]
		});
		markers.setMap(target_map);
		markers.setDraggable(false);
	}

}
function makeLocationArray(str_position) {
	var arr_positons = new Array();
	var positions = str_position.split(";");
	for(var i = 0; i < positions.length; i++)
	{
		if(!positions[i].trim()) continue;
		var position = positions[i].split(",");
		arr_positons[i] = new google.maps.LatLng(position[0],position[1]);
	}
	return arr_positons;
}

function getMapWidget(map_id, map_center, map_markers, map_zoom) {
	var center_split = map_center.split(',');
	var map_zoom = parseInt(map_zoom,10);
	if(!map_zoom) map_zoom = 13;

	var mapOption = {
		zoom: map_zoom,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		center: new google.maps.LatLng(center_split[0], center_split[1]),
		mapTypeControl: true,
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
			position: google.maps.ControlPosition.TOP_RIGHT
		},
		panControl: false,
		zoomControl: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.LARGE,
			position: google.maps.ControlPosition.LEFT_CENTER
		},
		scaleControl: false,
		streetViewControl: false
	}
	var map = new google.maps.Map(document.getElementById(map_id), mapOption);

	addMarker(map, map_markers);
}