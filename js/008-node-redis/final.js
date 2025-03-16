var redis = require('redis');
var client = redis.createClient();

var doLog = true;

// connect with redis
client.on('connect', function (err, msg) {
    if(err) {
        console.log(err, msg);
    } else {
        if(doLog)
            console.log('connected');
        // create the table if not exitst        
    }
});

var messageHip = 'messages';
client.del(messageHip,function(err, reply) {
    console.log(reply, err);
});
var user = {
    name:"frameworks",
    time:"angularjs",
    msg:"backbone"
}
var data = '{"name":"'+user.name+'", "time":"'+user.time+'", "msg":"'+user.msg+'"}';
client.rpush(messageHip, data, 
    function(err, reply) {
        console.log(reply,err);
    }
);

var user1 = {
    name:"frameworks1",
    time:"angularjs1",
    msg:"backbone1"
}
var data1 = '{"name":"'+user1.name+'", "time":"'+user1.time+'", "msg":"'+user1.msg+'"}';
client.rpush(messageHip, data1, 
    function(err, reply) {
        console.log(reply,err);
    }
);

var user2 = {
    name:"frameworks2",
    time:"angularjs2",
    msg:"backbone2"
}
var data2 = '{"name":"'+user2.name+'", "time":"'+user2.time+'", "msg":"'+user2.msg+'"}';
client.rpush(messageHip, data2, 
    function(err, reply) {
        console.log(reply,err);

        client.lrange(messageHip, 0, -1, 
            function(err, reply) {
                // console.log(reply); 
                // console.log(reply.length); 
                reply.forEach(function(data){
                    data = JSON.parse(data);
                    console.log(data.time);
                });
                // console.log(reply.name); 
            }
        );
    }
);
