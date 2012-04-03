var dgram=require("dgram");
var events=require("events");
var sys=require('util');
var NetflowPacket=require("../../NetFlowPacket");

var Netflow=module.exports=function(){
     v9Templates= new Array();
     this.server = dgram.createSocket("udp4");
     events.EventEmitter.call(this);
     var eventContext = this;
     this.server.on("message", function (mesg, rinfo) {
      try{
        newPacket=new NetflowPacket(mesg);
        if ((newPacket.header.version)==9){
          newPacket.v9Flowsets.forEach(function (v9Flowset){
                      if (v9Flowset.flowset_id==0){
                         v9Flowset.templates.forEach(function(template){
                                     for (var it=0;it<v9Templates.length;it++){
                                       if (v9Templates[it].id==template.id){
                                          v9Templates[it]=template;
                                          return;
                                       }
                                     }
                                     v9Templates.push(template);   
                                  });
                      }
                   });
        }
        this.emit.call(eventContext,"packet", newPacket);
       }
      catch(err){
        this.emit.call(eventContext,"error",err);
      }
    });
    this.server.on("listening", this.emit.bind(this,"listening"));
this.listen=function (port){
  this.server.bind(port);  
}
}
sys.inherits(Netflow, events.EventEmitter);
