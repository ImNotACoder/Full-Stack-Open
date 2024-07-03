const mongoose = require('mongoose')

if (process.argv.length<3) {
    console.log('give password as argument')
    process.exit(1)
  }
  
const password = process.argv[2]

const url = `mongodb+srv://isaactan3108:${password}@cluster0.bzrkvde.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery',false)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note1 = new Note({
  content: 'HTML is easy',
  important: true,
})

const note2 = new Note({
  content: 'CSS is hard',
  important: true,
})

const note3 = new Note({
  content: 'Mongoose makes things easy',
  important: false,
})

// note3.save().then(result => {
//   console.log('note saved!')
//   mongoose.connection.close()
// })


Note.find({}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})