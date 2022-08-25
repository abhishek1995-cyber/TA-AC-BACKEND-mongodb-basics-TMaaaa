// use mountains;

db.createCollection('himalayas')

db.himalayas.insert({
    name: 'Dhauldhar range',
     height: '4000 mtrs'
})

db.himalayas.insertMany([{
    name: 'delhi',
     height: '1000 mtrs'
},
{
    name: 'himachal',
     height: '6000 mtrs'
},
{
    name: 'Dehradun',
     height: '4000 mtrs'
}
]);

db.himalayas.find().pretty();

db.himalayas.find({name: 'himachal'});

db.himalayas.findOne({name: 'himachal'});