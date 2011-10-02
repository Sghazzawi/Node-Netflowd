require("NetFlowPacket");
var dgram=require("dgram");
var server = dgram.createSocket("udp4");

server.on("message", function (mesg, rinfo) {
    x=new NetFlowPacket(mesg);
    console.log(x);
});

server.on("listening", function () {
  var address = server.address();
  console.log("server listening " +
      address.address + ":" + address.port);
});

server.bind(2055);
