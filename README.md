Node-Netflowd
=============

Is a netflow sink for node.js

Installation
============

npm install https://github.com/Sghazzawi/Node-Netflowd/tarball/master

Basic Example
=============

    var Collector=require("Netflow");
    var x = new Collector(function (err) {
        if(err != null) {
            console.log("ERROR ERROR \n"+err);
        }
    })
    .on("listening",function() { console.log("listening"); } )
    .on("packet",function(packet) { console.log(packet); } )
    .listen(2055);
