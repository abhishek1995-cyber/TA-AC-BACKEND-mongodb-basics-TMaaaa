writeCode

Write code to:-

- create a database named `sports`.
- list all databases present in local mongod server.
- create 3 collections named `cricket`, `football`, `TT` in sports databse.
- add multiple players in those collections which should have fields like `name`, `age` and `email` and `bid_price`.
- list all collections in sports database.
- rename `TT` collection to `tennis`.
- create a capped collection called `khokho` which should have max 3 documents.
  Try inserting more than 3 and see what happens?
- check whether a collection is capped or not?
- drop all documents from `football` collection.
- delete cricket collection completely.
- delete sports database.
- check which database you are connected to ?
- connect to test database


<!--  -->

abhishek@Abhisheks-MacBook-Air block-BMaaae % mongo 
MongoDB shell version v5.0.11
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("b04978e9-69bf-4c5e-8792-25c4d627016e") }
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
> db sports
uncaught exception: SyntaxError: unexpected token: identifier :
@(shell):1:3
> show dbs
India   0.000GB
admin   0.000GB
config  0.000GB
local   0.000GB
> db
test
> use sports
switched to db sports
> show dbs
India   0.000GB
admin   0.000GB
config  0.000GB
local   0.000GB
> show dbs
India   0.000GB
admin   0.000GB
config  0.000GB
local   0.000GB
> use sports
switched to db sports
> db
sports
> show collections
> db.createCollection('cricket')
{ "ok" : 1 }
> db.createCollection('football')
{ "ok" : 1 }
> db.createCollection('tt')
{ "ok" : 1 }
> db.cricket.insert({name:'ms dhoni', age: 34,email: 'msdhoni@gmail.com', bid_price:''1cr'} 
uncaught exception: SyntaxError: identifier starts immediately after numeric literal :
@(shell):1:84
> db.cricket.insert({name:'ms dhoni', age: 34,email: 'msdhoni@gmail.com', bid_price:''1cr'})
uncaught exception: SyntaxError: identifier starts immediately after numeric literal :
@(shell):1:84
> db.cricket.insert({name:'ms dhoni', age: 34 , email: 'msdhoni@gmail.com', bid_price:'1cr'})
WriteResult({ "nInserted" : 1 })
> db.football.insert({name:'messi', age: 34 , email: 'messi@gmail.com', bid_price:'2cr'})
WriteResult({ "nInserted" : 1 })
> db.football.insert({name:'abhishek', age: 24 , email: 'abhishek@gmail.com', bid_price:'0.5cr'})
WriteResult({ "nInserted" : 1 })
> show collections
cricket
football
tt
> db tt
uncaught exception: SyntaxError: unexpected token: identifier :
@(shell):1:3
> db.tt.renameCollection('tennis')
{ "ok" : 1 }
> db.createCollection('khokho')
{ "ok" : 1 }
> db.khokho.insert({title:'sports'})
WriteResult({ "nInserted" : 1 })
> db.khokho.insert({field:'outdoor'})
WriteResult({ "nInserted" : 1 })
> db.khokho.insert({players:'nine'})
WriteResult({ "nInserted" : 1 })
> db.khokho.isCapped()
false
> show collections
cricket
football
khokho
tennis
> db.khokho.find()
{ "_id" : ObjectId("6304bd940f6c28e15b862b35"), "title" : "sports" }
{ "_id" : ObjectId("6304bdbe0f6c28e15b862b36"), "field" : "outdoor" }
{ "_id" : ObjectId("6304bdce0f6c28e15b862b37"), "players" : "nine" }
> db.khokho.isCapped()
false
> db.createCollection('Khokho',{capped:true,size:500,max:3})
{ "ok" : 1 }
> db.Khokho.isCapped()
true
> db.football.remove()
uncaught exception: Error: remove needs a query :
DBCollection.prototype._parseRemove@src/mongo/shell/collection.js:364:15
DBCollection.prototype.remove@src/mongo/shell/collection.js:394:18
@(shell):1:1
> db.football.remove({})
WriteResult({ "nRemoved" : 2 })
> db.cricket.drop()
true
> db
sports
> db.dropDatabase()
{ "ok" : 1 }
> db 
sports
> db.dropDatabase()
{ "ok" : 1 }
> db
sports
> show dbs
India   0.000GB
admin   0.000GB
config  0.000GB
local   0.000GB
> use test
switched to db test
> db
test
> 