    function initialize() {
                var myLoc = new google.maps.LatLng(60.000016, 30.294362);
                var myOptions = {
                zoom: 16,
                center: myLoc,
                //markers: myLoc,
                mapTypeId: google.maps.MapTypeId.ROADMAP
                                };
                var map = new google.maps.Map(document.getElementById("map"), myOptions);
                var marker = new google.maps.Marker({
                             //position: myLoc,
                             map: map,
                             title: "Saint-Petersburg"
                             });
}
    function loadScript() {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "http://maps.google.com/maps/api/js?sensor=false&callback=initialize";
        document.body.appendChild(script);
    }
    window.onload = loadScript;