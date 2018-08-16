const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
  author: [authorSchema]
}));

async function createCourse(name, author) {
  const course = new Course({
    name,
    author
  });

  const result = await course.save();
  console.log(result);
}

async function listCourses() {
  const courses = await Course.find();
  console.log(courses);
}

async function addAuthor(courseId, author) {
  const course = await Course.findOne({
    _id: courseId
  });
  course.authors.push(author);
  course.save();

}
createCourse('Node Course', [new Author({
    name: 'Mosh'
  }),
  new Author({
    name: 'John'
  })
]);

async function updateAuthor(courseId) {
  const course = await Course.update({
    _id: courseId
  }, {
    $set: {
      'author.name': 'John Smith'
    }
  });
}

addAuthor('5b705cc45803730e9895060f', new Author({
  name: 'Amy'
}));