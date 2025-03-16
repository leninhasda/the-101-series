var redis = require('redis');
// redis.createClient(port, host)
var client = redis.createClient();

client.on('connect', function () {
    // console.log('connected');
});

var key = {
    name: 'test', 
    another: 'key'
};
var value = {
    name: 'test', 
    value: 'value'
};

// client.set(key, value, function(err, reply) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(reply);
//     }
// });

// client.sadd('tags', ['tags', 'hi', 'backbonejs', 'emberjs'], function(err, reply) {
//     console.log(reply); // 3
// });
/*client.del('frameworks',function(err, reply) {});

client.hmset('frameworks', 
    {
        'javascript':'AngularJS', 
        'css':'Bootstrap', 
        'node':'Express'
    }
);

client.hmset('frameworks', 
    {
        'javascript':'AngularJS1', 
        'css':'Bootstrap1', 
        'test':'Express1'
    }
);

client.hgetall('frameworks', function(err, object) {
    console.log(object);
});*/
var messageHip = 'messages';
client.del('msg1',function(err, reply) {
});
var obj = '{"name":"frameworks", "time":"angularjs", "msg":"backbone"}';

var str = obj;
var str = JSON.stringify(obj);

// client.rpush(messageHip, str, 
client.rpush('msg1', {name:'frameworks', time:'angularjs', msg:'backbone'}, 
             function(err, reply) {
    console.log(reply,err); //prints 2
});
return;
var obj2= '{"name":"frameworks", "time":"angularjs", "msg":"backbone"}';
client.rpush(messageHip, obj2, 
// client.rpush('msg1', {name:'frameworks', time:'angularjs', msg:'backbone'}, 
             function(err, reply) {
                console.log(reply,err); //prints 2
// });

// client.rpush('msg1', str, 
// // client.rpush('msg1', {name:'frameworks', time:'angularjs', msg:'backbone'}, 
//              function(err, reply) {
//     console.log(reply); //prints 2
// });

// client.rpush('msg1', [{name:'frameworks', time:'angularjs', msg:'backbone'}], function(err, reply) {
//     console.log(reply); //prints 2
// });

// client.RIndex msg1 0;

            client.lrange('msg1', 0, -1, function(err, reply) {

                // var re = JSON.parse(reply);
                // console.log(re); 
                console.log(reply); 
                console.log(reply.length); 
                // console.log(reply[0].name); 
            });


});

// solution 1
/*client.del('msg1',function(err, reply) {
});
client.sadd('msg1', {'12:sajib:hello'}, 
    function(err, reply) {
        console.log(reply); // 3
    }
);

client.sadd('msg1', ['13:lenin:hi'], function(err, reply) {
    console.log(reply); // 3
});

client.sadd('msg1', ['14:sajib:hello'], function(err, reply) {
    console.log(reply); // 3
});

client.smembers('msg1', function(err, reply) {
    console.log(reply);
});*/


// client.exists(key, function (err, reply) {
//     if( 1 === reply) {
//         client.get(key, function (err, reply) {
//             if(err) {
//                 console.log(err);
//             } else {
//                 console.log(reply);
//             }
//         });
//     } else {
//         console.log('key doesn\'t exists');
//     }
// }):