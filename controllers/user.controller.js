let users = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "gender": "Male",
      "contact": +12028007363,
      "address": "Kulas Light, Apt. 556, Gwenborough",
      "photoUrl": "avatar.img" 
    },

    {
      "id": 2,
      "name": "Ervin Howell",
      "gender": "Male",
      "contact": +19085778543,
      "address": "Victor Plains, Suite 879, Wisokyburgh",
      "photoUrl": "avatar.img" 
    },

    {
      "id": 3,
      "name": "Clementine Bauch",
      "gender": "Male",
      "contact": +15613876862,
      "address":"Douglas Extension, Suite 847, McKenziehaven",
      "photoUrl": "avatar.img" 
    },

    {
      "id": 4,
      "name": "Patricia Lebsack",
      "gender": "Male",
      "contact": +6205455065,
      "address": "Hoeger Mall, Apt. 692, South Elvis",
      "photoUrl": "avatar.img" 
    },

    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "gender": "Male",
      "contact": +4409632285,
      "address":  "Skiles Walks, Suite 351, Roscoeview",
      "photoUrl": "avatar.img" 
    }
  ];
 

  // get random user 
module.exports.randomUser = (req, res) => {
  const randomUser = Math.floor(Math.random() * users.length + 1);
  const filter = users.filter(user => user.id === Number(randomUser));
  res.send(filter)
}


// get all users 
module.exports.getAllUsers = (req, res) => {
   res.send(users)
   console.log('route found')
};


// post a User 
module.exports.postAUser = (req, res) => {
 users.push(req.body);
 console.log(req.body)
   res.send(users);
};


// update a user 
module.exports.updateUser = (req, res) => {
    const newUser = req.body;
    const {id} = req.params;
    const updateUser = users.find(user => user.id === Number(id));
    updateUser.id = newUser.id;
    updateUser.contact = newUser?.contact;
    console.log(updateUser)
    res.send(updateUser)
};



module.exports.multiUserUpdate = (req, res, next) => {
  const {id1, id2, id3, id4} = req.params;
  console.log(req.params)
  next()
};


// multi update users 
module.exports.multipleUpdate = (req, res, next) => {
  const {id1, id2, id3, id4, id5} = req.params;
  const multiuser = req.body;
  console.log(req.body.contact1)
  const filter1 = users.find(user => user.id === Number(id1 && multiuser.id));
  const filter2 = users.find(user => user.id === Number( id2 && multiuser.id));
  const filter3 = users.find(user => user.id === Number(id3 && multiuser.id));
  // filter1.contact = multiuser?.contact;
  // filter2.contact = multiuser?.contact;
  // filter3.contact = multiuser?.contact;
  // console.log(filter1, filter2, filter3, 'ok')
  next()
}


// delete a user 
module.exports.deleteAUser = (req, res) => {
    const {id} = req.params;
    const filter = {_id: id};
    users = users.filter(user => user.id !== Number(id));
    res.send(users)
    console.log(id)
}

