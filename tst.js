require("netflow");
var mongo=require("mongodb")
var client = new mongo.Db('test', new mongo.Server("127.0.0.1", 27017,{}));
client.open(function (err, p_client){
if (err!=null){
   console.log(err);
}    
});
x=new netflow(function(err, packet){
                if(err==null){
                client.collection('netflow', function(err, collection){
                     collection.insert(packet,function(err, count){
            console.log(count);
            return;
        });

                 });
                }
                else{
                   console.log("ERROR ERROR \n"+err);
                }
              }).listen(2055);
