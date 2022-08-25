// use blog

db.articles.insertMany([{
    _id: 'someone',
    title: 'alchemist',
    details: 'fiction book',
    author: {
      name: 'rahul',
      email: 'rahul@gmail.com',
      age: '24'
    },
    tags: ['js', 'mongo']
  },
  {
    _id: 'sometwo',
    title: 'blue ocean',
    details: 'untap markets',
    author: {
      name: 'ravi',
      email: 'ravi@gmail.com',
      age: '23'
    },
    tags: ['js', 'mongo','html']
  },
  {
    _id: 'somethree',
    title: 'investors',
    details: 'intelligent investors',
    author: {
      name: 'anup',
      email: 'anup@gmail.com',
      age: '30'
    },
    tags: ['js', 'mongo','node','express']
  }])


  db.articles.find().pretty()

  db.articles.find({_id: 'somethree'})
  db.articles.find({ title: 'investors'})
  db.articles.find({ "author.name":'anup'});
  db.articles.find({ tags: 'js'});
  db.articles.update({_id: 'somethree'},{$set:{title: "investment"}
  });
  db.articles.update({details},{$set:{title: "investment"}
});

db.articles.updateMany({}, {$rename:{"details":"description"}}, false, true);

db.articles.update({_id: 'somethree'},{$push:{tags: "html"}
  });

  db.articles.update({_id: 'someone'},{$set:{title: "investment"}
  });
  db.articles.update({_id: 'someone'},{title: "chemist"
});

// the difference b/w $set and without $set is tha $set update only one key set while without $set we can set only one key for entire documents.

db.articles.find({ title: 'blue ocean'},{$set:{"author.age": 23}
})
db.articles.find({ title: 'blue ocean'},{$inc:{"author.age": 5}
})

db.articles.remove({ _id : "sometwo"})



db.users.insertMany([
    {
      age: 49,
      name: "Maurice Brock",
      email: "wuk@hibpiz.ch",
      gender: "Female",
      sports: ["cricket", "football"],
      scores: [24, 35, 18, 16],
      weight: 45,
    },
    {
      age: 37,
      birthday: "7/15/1986",
      name: "Virgie Cunningham",
      email: "ezogafa@de.gm",
      gender: "Male",
      sports: ["football"],
      scores: [17, 35, 43],
      weight: 52,
    },
    {
      age: 48,
      birthday: "5/14/1961",
      name: "Alexander Holt",
      email: "han@mu.pe",
      gender: "Male",
      sports: ["cricket", "football", "TT"],
      scores: [24, 30, 16],
      weight: 55,
    },
    {
      age: 53,
      birthday: "11/15/1963",
      name: "Derek Dawson",
      email: "polril@now.de",
      gender: "Male",
      sports: ["cricket", "hockey"],
      scores: [20, 15, 38, 23],
      weight: 49,
    },
    {
      age: 34,
      birthday: "7/24/1964",
      name: "Cynthia Cobb",
      email: "wujjarpob@jecimpar.gu",
      gender: "Female",
      sports: ["cricket"],
      scores: [41, 17, 28],
      weight: 51,
    },
    {
      age: 33,
      birthday: "10/26/1982",
      name: "Isabella Atkins",
      email: "ononuzas@givhoz.ca",
      gender: "Female",
      sports: ["cricket", "football", "hockey", "TT"],
      scores: [14, 38, 29, 45, 20],
      weight: 49,
    },
    {
      age: 47,
      birthday: "10/12/1978",
      name: "Katharine Bryan",
      email: "zo@pebi.sa",
      gender: "Male",
      sports: ["TT", "hockey", "khokho"],
      scores: [27, 20, 34],
      weight: 58,
    },
    {
      age: 41,
      birthday: "1/28/1991",
      name: "Beatrice Fleming",
      email: "ufufsa@pujizren.tk",
      gender: "Female",
      sports: ["football", "khokho"],
      scores: [30, 20, 15, 29, 43],
      weight: 47,
    },
    {
      age: 26,
      birthday: "3/23/1998",
      name: "Tom Fields",
      email: "wasodjow@ofaba.gf",
      gender: "Female",
      sports: ["khokho"],
      scores: [37, 29, 18, 43, 49],
      weight: 50,
    },
    {
      age: 33,
      birthday: "11/14/1960",
      name: "Steve Ortega",
      email: "dupus@ca.ls",
      gender: "Female",
      sports: ["cricket", "football", "hockey"],
      scores: [12, 15, 20],
      weight: 51,
    },
    {
      age: 24,
      birthday: "1/5/1994",
      name: "Suraj Kumar",
      weight: 50,
      gender: "Male",
      sports: ["football", "cricket", "TT"],
    },
  ]);


db.users.find({gender:'Male'},{sports:'cricket'});
db.users.update({name: "Steve Ortega"},{$push:{sports:'golf'}})
db.users.find({sports : {$in:['cricket','football']}});
db.users.find({name : /ri/i});