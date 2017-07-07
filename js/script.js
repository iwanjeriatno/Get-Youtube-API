// =====================================
// Fiture Search Yotube 
// =====================================

$(function() {
	$('form').submit(function(e) {
		e.preventDefault();

		var request = gapi.client.youtube.search.list({
			part: 'snippet',
			type: 'video',
			d: encodeURIComponent($('#search').val()).replace(/%20/g, '+'),
			maxResults: 5,
			order: 'title',
		});

		request.execute(function(response){
			var results = response.result;
			$.each(results.items, function(index, item) {
				$.get("items.php", function(data){
					console.log(data);
					$("#results").append(tplawesome(data, 
						[{
							"title":item.snippet.title, 
							"videoid":item.id.videoId
						}]
					));
				});
			}); 
		});

	});
});

// =====================================
// initial
// =====================================

function init() {
	gapi.client.setApiKey("AIzaSyBeHNrMjKeYwgByIrs2FMHqPZOY5_gEQFk");
	gapi.client.load("youtube", "v3", function() {

	});
}

// =====================================
// Fiture ... Yotube 
// =====================================


var YT = 'undefined';

$(document).ready(function() {
    $('#muziek').on('submit', function() {
        var request = getRequest();
        request.execute(function(response) {
            $('#muziek').unbind('submit');
            YT = response;
            document.getElementById("VideoURL").value = YT.items[0].id.videoId;
            $('#muziek').submit();
        });     
        return false;
    });
});

function showResponse(response) {
    YT = response;
}

// API Key
function onYouTubeAPILoad() {
    gapi.client.setApiKey('AIzaSyD49-XZ2JV7Rws3KDM2T7nA56Jbi-O7djY');
}

// load API Key
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeAPILoad);
}

// request
function getRequest() {
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        kind: 'youtube#video',
        q: document.getElementById("artiest").value + " - " + document.getElementById("nummer").value,
    });
    return request;
}
