writeCode

Write command to

- List collections from a database.
- create a new collection in your country database which you created recently.

Write code to:-

- crate a database named `weather`
- create a capped collection named `temperature` with maximum of 3 documents and try inserting more than 3 to see the result.
- create a simple collection named `humidity`
- check whether `temperature` collection is capped or not ?
- Delete `humidity` collection and then the entire database(weather).



abhishek@Abhisheks-MacBook-Air block-BMaaad % mongo
MongoDB shell version v5.0.11
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("8c528681-c6df-4a66-bb77-37cbda123c7f") }
MongoDB server version: 6.0.1
WARNING: shell and server versions do not match
================
Warning: the "mongo" shell has been superseded by "mongosh",
which delivers improved usability and compatibility.The "mongo" shell has been deprecated and will be removed in
an upcoming release.
For installation instructions, see
https://docs.mongodb.com/mongodb-shell/install/
================
---
The server generated these startup warnings when booting: 
        2022-08-23T11:53:47.833+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
---
---
        Enable MongoDB's free cloud-based monitoring service, which will then receive and display
        metrics about your deployment (disk utilization, CPU, operation statistics, etc).

        The monitoring data will be available on a MongoDB website with a unique URL accessible to you
        and anyone you share the URL with. MongoDB may use this information to make product
        improvements and to suggest MongoDB products and deployment options to you.

        To enable free monitoring, run the following command: db.enableFreeMonitoring()
        To permanently disable this reminder, run the following command: db.disableFreeMonitoring()
---
> show collections
> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
> db
test
> use sample
switched to db sample
> show collections
> use India
switched to db India
> db.createCollection('delhi')
{ "ok" : 1 }
> show collections
delhi
> use weather
switched to db weather
> db.createCollection('temperature')
{ "ok" : 1 }
> show collections
temperature
> db.temperature.insert({delhi: '30 degree'})
WriteResult({ "nInserted" : 1 })
> db.temperature.insert({kangra: '20 degree', mumbai: '40 degree'})
WriteResult({ "nInserted" : 1 })
> db.temperature.insert({banglore: '25 degree'})
WriteResult({ "nInserted" : 1 })
> db.temperature.insert({manglore: '25 degree'})
WriteResult({ "nInserted" : 1 })
> db.temperature.find()
{ "_id" : ObjectId("6304aa4c699d849cfbffcd0e"), "delhi" : "30 degree" }
{ "_id" : ObjectId("6304aa8d699d849cfbffcd0f"), "kangra" : "20 degree", "mumbai" : "40 degree" }
{ "_id" : ObjectId("6304aab1699d849cfbffcd10"), "banglore" : "25 degree" }
{ "_id" : ObjectId("6304aac3699d849cfbffcd11"), "manglore" : "25 degree" }
> db.createcollection('humidity')
uncaught exception: TypeError: db.createcollection is not a function :
@(shell):1:1
> db.createCollection('humidity')
{ "ok" : 1 }
> db.humidity.remove({})
WriteResult({ "nRemoved" : 0 })
> db.humidity.drop()
true
> db
weather
> db.dropDatabase()
{ "ok" : 1 }
> show dbs
India   0.000GB
admin   0.000GB
config  0.000GB
local   0.000GB
> ^C