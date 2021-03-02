module.exports = function addStudent(student) {
  const mongoose = require('mongoose')
  const User = require('./models/User.js')

  mongoose
    .connect('mongodb://localhost/neuefische', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('db connected'))
    .catch(error => console.error(error))

  //User.find().then(users => console.log(users))
  User.create(student).then(result => {
    console.log(result)
    mongoose.connection.close()
  })
}
