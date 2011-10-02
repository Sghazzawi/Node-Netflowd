var dgram = require("dgram");
require("NetFlowPacket");
var server = dgram.createSocket("udp4");

/*Class to represent the fields in a netflow packet*/
function NetFlowPacket(msg){
   msgBuffer=new Buffer(msg);
    this.header=new Array();
/*read in the header information common to all supported versions. Keep this in mind when adding new versions.*/
    if (msg.length>11){
       this.header['version']=msgBuffer.readUInt16BE(0);
       this.header['count']=msgBuffer.readUInt16BE(2);
/*       if ((this.header['count']<0)||((this.header['count']>30)){
        throw new Error("Packet count must be between 1 and 30");
       }*/
       this.header['sys_uptime']=msgBuffer.readUInt32BE(4);
       this.header['unix_secs']=msgBuffer.readUInt32BE(8);
    }
    else{
      throw new Error("Packet is +"+msg.length+" bytes, too short to be a netflow packet");
    }
/*Depending on the version and number of flows/flowsets, read in the rest of the heder and the flows/flowsets.  There should be a case for each supported version*/
    switch(this.header['version']){
    case 5:
      if (msg.length>23){
         this.header['unix_nsecs']=msgBuffer.readUInt32BE(12);
         this.header['flow_sequence']=msgBuffer.readUInt32BE(16);
         this.header['engine_type']=msgBuffer.readUInt8(20);
         this.header['engine_id']=msgBuffer.readUInt8(21);
         this.header['sampling_interval']=msgBuffer.readUInt16BE(22);
      }
      else{
      throw new Error("Packet is +"+msg.length+" bytes, too short to be a netflow version 5 packet");
      }
      for (var flowcount=0;flowcount<this.header['count'];flowcount++){
         this.v5Flows=new Array();
         var offset=24+(flowcount*48);
         if ((msg.length-offset)>47){
           this.v5Flows[flowcount]=new Array();
           this.v5Flows[flowcount]['srcaddr']=new Array();
           this.v5Flows[flowcount]['dstaddr']=new Array();
           this.v5Flows[flowcount]['nexthop']=new Array();
           this.v5Flows[flowcount]['srcaddr'][0]=msgBuffer.readUInt8(offset);
           this.v5Flows[flowcount]['srcaddr'][1]=msgBuffer.readUInt8(offset+1);
           this.v5Flows[flowcount]['srcaddr'][2]=msgBuffer.readUInt8(offset+2);
           this.v5Flows[flowcount]['srcaddr'][3]=msgBuffer.readUInt8(offset+3);
           this.v5Flows[flowcount]['dstaddr'][0]=msgBuffer.readUInt8(offset+4);
           this.v5Flows[flowcount]['dstaddr'][1]=msgBuffer.readUInt8(offset+5);
           this.v5Flows[flowcount]['dstaddr'][2]=msgBuffer.readUInt8(offset+6);
           this.v5Flows[flowcount]['dstaddr'][3]=msgBuffer.readUInt8(offset+7);
           this.v5Flows[flowcount]['nexthop'][0]=msgBuffer.readUInt8(offset+8);
           this.v5Flows[flowcount]['nexthop'][1]=msgBuffer.readUInt8(offset+9);
           this.v5Flows[flowcount]['nexthop'][2]=msgBuffer.readUInt8(offset+10);
           this.v5Flows[flowcount]['nexthop'][3]=msgBuffer.readUInt8(offset+11);
           this.v5Flows[flowcount]['input']=msgBuffer.readUInt16BE(offset+12);
           this.v5Flows[flowcount]['output']=msgBuffer.readUIn16BE(offset+14);
           this.v5Flows[flowcount]['dPkts']=msgBuffer.readUInt32BE(offset+16);
           this.v5Flows[flowcount]['dOctets']=msgBuffer.readUInt32BE(offset+20);
           this.v5Flows[flowcount]['first']=msgBuffer.readUInt32BE(offset+24);
           this.v5Flows[flowcount]['last']=msgBuffer.readUInt32BE(offset+28);
           this.v5Flows[flowcount]['srcport']=msgBuffer.readUInt16BE(offset+32);
           this.v5Flows[flowcount]['dstport']=msgBuffer.readUInt16BE(offset+34);
           this.v5Flows[flowcount]['pad1']=msgBuffer.readUInt8(offset+36);
           this.v5Flows[flowcount]['tcp_flags']=msgBuffer.readUInt8(offset+37);
           this.v5Flows[flowcount]['prot']=msgBuffer.readUInt8(offset+38);
           this.v5Flows[flowcount]['tos']=msgBuffer.readUInt8(offset+39);
           this.v5Flows[flowcount]['src_as']=msgBuffer.readUInt16BE(offset+40);
           this.v5Flows[flowcount]['dst_as']=msgBuffer.readUInt16BE(offset+42);
           this.v5Flows[flowcount]['src_mask']=msgBuffer.readUInt8(offset+44);
           this.v5Flows[flowcount]['dst_mask']=msgBuffer.readUInt8(offset+45);
         }
      }
      break;
    case 9:
      if (msg.length>19){
         this.header['package_seqence']=msgBuffer.readUInt32BE(12);
         this.header['source_id']=msgBuffer.readUInt32BE(16);
         function parse(count, offset){
         if (count<this.header['count']){
            this.v9FlowSets[count]['flowsetid']=msgBuffer.readUInt16BE(offset);
            this.v9FlowSets[count]['length']= msgBuffer.readUIng16BE(offset+2);
            this.v9FlowSets[count];
            parse(count+1,offset+v9FlowSets[count]['length']);
         }
       }
      }
      else{
         throw new Error("Packet is +"+msg.length+" bytes, too short to be a netflow version 9 packet");
      }
      break;
    }
}

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
