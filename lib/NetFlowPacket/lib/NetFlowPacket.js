/*Class to represent the fields in a netflow packet*/
module.exports = function (msg) {
    'use strict';
    var flowcount,
        offset,
        flow,
        flowsetCount,
        flowset,
        currentPosition,
        templateCount,
        template,
        fieldcount,
        field,
        msgBuffer = new Buffer(msg);
    this.header = {};
/*read in the header information common to all supported versions. Keep this in mind when adding new versions.*/
    if (msg.length > 11) {
        this.header.version = msgBuffer.readUInt16BE(0);
        this.header.count = msgBuffer.readUInt16BE(2);
        this.header.sys_uptime = msgBuffer.readUInt32BE(4);
        this.header.unix_secs = msgBuffer.readUInt32BE(8);
    } else {
        throw new Error("Packet is " + msg.length + " bytes long, too short to be a netflow packet");
    }
/*Depending on the version and number of flows/flowsets, read in the rest of the heder and the flows/flowsets.  There should be a case for each supported version*/
    switch (this.header.version) {
    case 5:
        if (msg.length > 23) {
            this.header.unix_nsecs = msgBuffer.readUInt32BE(12);
            this.header.flow_sequence = msgBuffer.readUInt32BE(16);
            this.header.engine_type = msgBuffer.readUInt8(20);
            this.header.engine_id = msgBuffer.readUInt8(21);
            this.header.sampling_interval = msgBuffer.readUInt16BE(22);
        } else {
            throw new Error("Packet is " + msg.length + " bytes long, too short to be a netflow version 5 packet");
        }
        this.v5Flows = [];
        for (flowcount = 0; flowcount < this.header.count; flowcount++) {
            offset = 24 + (flowcount * 48);
            if ((msg.length - offset) > 47) {
                flow = {};
                flow.srcaddr = [];
                flow.dstaddr = [];
                flow.nexthop = [];
                flow.srcaddr[0] = msgBuffer.readUInt8(offset);
                flow.srcaddr[1] = msgBuffer.readUInt8(offset + 1);
                flow.srcaddr[2] = msgBuffer.readUInt8(offset + 2);
                flow.srcaddr[3] = msgBuffer.readUInt8(offset + 3);
                flow.dstaddr[0] = msgBuffer.readUInt8(offset + 4);
                flow.dstaddr[1] = msgBuffer.readUInt8(offset + 5);
                flow.dstaddr[2] = msgBuffer.readUInt8(offset + 6);
                flow.dstaddr[3] = msgBuffer.readUInt8(offset + 7);
                flow.nexthop[0] = msgBuffer.readUInt8(offset + 8);
                flow.nexthop[1] = msgBuffer.readUInt8(offset + 9);
                flow.nexthop[2] = msgBuffer.readUInt8(offset + 10);
                flow.nexthop[3] = msgBuffer.readUInt8(offset + 11);
                flow.input = msgBuffer.readUInt16BE(offset + 12);
                flow.output = msgBuffer.readUInt16BE(offset + 14);
                flow.dPkts = msgBuffer.readUInt32BE(offset + 16);
                flow.dOctets = msgBuffer.readUInt32BE(offset + 20);
                flow.first = msgBuffer.readUInt32BE(offset + 24);
                flow.last = msgBuffer.readUInt32BE(offset + 28);
                flow.srcport = msgBuffer.readUInt16BE(offset + 32);
                flow.dstport = msgBuffer.readUInt16BE(offset + 34);
                flow.pad1 = msgBuffer.readUInt8(offset + 36);
                flow.tcp_flags = msgBuffer.readUInt8(offset + 37);
                flow.prot = msgBuffer.readUInt8(offset + 38);
                flow.tos = msgBuffer.readUInt8(offset + 39);
                flow.src_as = msgBuffer.readUInt16BE(offset + 40);
                flow.dst_as = msgBuffer.readUInt16BE(offset + 42);
                flow.src_mask = msgBuffer.readUInt8(offset + 44);
                flow.dst_mask = msgBuffer.readUInt8(offset + 45);
                this.v5Flows[flowcount] = flow;
            }
        }
        break;
    case 9:
        this.v9Flowsets = [];
        if (msg.length > 19) {
            this.header.package_seqence = msgBuffer.readUInt32BE(12);
            this.header.source_id = msgBuffer.readUInt32BE(16);
        } else {
            throw new Error("Packet is " + msg.length + " bytes long, too short to be a netflow version 9 packet");
        }
        offset = 20;
/*Iterate through all of the flowsets in this packet*/
        for (flowsetCount = 0; flowsetCount < this.header.count; flowsetCount++) {
            flowset = [];
            currentPosition = offset;
            flowset.flowset_id = msgBuffer.readUInt16BE(currentPosition);
            currentPosition += 2;
/*Based on the flowset_id, we can ascertain what type of flowset it is*/
            switch (flowset.flowset_id) {
/*FlowSet ID value of 0 is reserved for the Template FlowSet.Create an array of templates*/
            case 0:
                flowset.templates = [];
                templateCount = 0;
                flowset.length = msgBuffer.readUInt16BE(currentPosition);
                currentPosition += 2;
/*iterate through all templates in the current template flowset*/
                while (currentPosition < (offset + flowset.length)) {
                    template = {};
                    template.id = msgBuffer.readUInt16BE(currentPosition);
                    currentPosition += 2;
                    template.fieldCount = msgBuffer.readUInt16BE(currentPosition);
                    currentPosition += 2;
                    template.fields = [];
/*iterate through all fields in the current template*/
                    for (fieldcount = 0; fieldcount < template.fieldCount; fieldcount++) {
                        field = {};
                        field.fieldType = msgBuffer.readUInt16BE(currentPosition);
                        currentPosition += 2;
                        field.fieldLength = msgBuffer.readUInt16BE(currentPosition);
                        currentPosition += 2;
/*add the field object to the fields array*/
                        template.fields[fieldcount] = field;
                    }     
/*add the template object to the templates array, and increment the template count*/
                    flowset.templates[templateCount] = template;
                    templateCount++;
                }
/*set the offset appropriately to read in the next flowset*/
                offset += flowset.length;
                break;
            default:
                if (flowset.flowset_id > 255) {
                    flowset.length = msgBuffer.readUInt16BE(currentPosition);
                    currentPosition += 2;
                    flowset.flowdata = msgBuffer.slice(currentPosition);
                }
                break;
            }
/*add flowset to the flowsets array*/
            this.v9Flowsets[flowsetCount] = flowset;
        }
        break;
    default:
    }
};
