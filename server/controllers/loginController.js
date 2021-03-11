const Person = require('../personModels')
const fetch = require('node-fetch');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const loginController = {};

const secret = "bustedapp"

 loginController.signup = (req, res) => {
   console.log("hit signup!")
   newPerson = req.body
    const pass = newPerson.password
    const saltRounds = 10
    bcrypt.hash(pass, saltRounds)
    .then(hash => {
    console.log(`Hash: ${hash}`);
    Person.create({username: newPerson.username, password: hash}, 
      (err, result) =>{
        if(err){
        return res.status(400).json(err)
      } else {
        return res.status(200).json(result)
      }
    });
  })}
 

  loginController.login = (req, res) =>{
    Person.findOne({username: req.body.username}, (err, results) =>{
      bcrypt.compare(req.body.password, results.password)
      .then(result => {
        if(result){
          // const userObj = {
          //   username: req.body.username,
          // }
          // const token = jwt.sign(userObj, secret, { expiresIn: '1h' })
          res.status(200).cookie("user", req.body.username).redirect('/')
        }
        //possible area for jwt not with cookie because hacking
        //store in memory-->database
        //if we do have jwt token thenwe do stufff
    }
    )
    .catch(err => res.status(401).send(err))
  })}


  
//   console.log(token)
  
//  document.getElementById("gotTokes").innerHTML = localStorage.getItem("lastname");
// console.log("look before here")

// passport.use(UserDetails.createStrategy());

// passport.serializeUser(UserDetails.serializeUser());
// passport.deserializeUser(UserDetails.deserializeUser());  




module.exports = loginController