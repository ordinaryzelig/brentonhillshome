window.onload = function() {
    var marker = new google.maps.Marker({
        position: {
            "lat": 35.6291425,
            "lng": -97.5243435
        },
        title: "516 NW 155th Cir",
        animation: google.maps.Animation.DROP,
    });

    var map = new google.maps.Map(
        document.getElementById("google-map"),
        {
            center: marker.position,
            zoom: 15
        }
    );

    marker.setMap(map);
};
