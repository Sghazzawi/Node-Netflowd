var Collector=require("Netflow");
var x=new Collector(function (err){
                if(err!=null){
                   console.log("ERROR ERROR \n"+err);
                }
              });
x.on("listening",function(){console.log("listening");});
x.on("packet",function(packet){console.log(packet);});
x.listen(2055);
