# INSERT ONE ITEM
db.moviesScratch.insertOne({});
db.moviesScratch.insertOne({
    "_id": CUSTOM_ID
});

zip -r com.zip flname
# INSERT MANY
db.moviesScratch.insertMany([{}, {}]);
> wil try to insert all the entry in ordered way
> if it find any error it stops insertion on that spot

db.moviesScratch.insertMany([], {"ordered": false});
> will insert insert all the entry in unordered way
> as it is unordered, it will continue even if it finds
  any error
