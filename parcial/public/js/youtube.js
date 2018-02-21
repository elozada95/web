function getVideos() {
    $.getJSON('https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&type=video&channelId=UCKy1dAqELo0zrOtPkf0eTMw&maxResults=20&key=AIzaSyDwX7FjC3ERGfHz0FonjxTE97NXtgsHIXw', function(data) {
        var items = data.items;
        var ids = [];
        items.forEach(element => {
            ids.push(element.id.videoId);
        });
        placeVideos(ids);
    })
}

function placeVideos(ids) {
    ids.forEach(element => {
        $( "#youtube" ).append( '<iframe class="col-sm-3" width="420" height="315"src="https://www.youtube.com/embed/' + element + '"></iframe>' );
    });
}