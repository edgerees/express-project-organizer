const db = require('./models')

// db.category.create({
//   name: 'node'
// }).then(function(category) {
//   console.log(category.id)
// })

db.project.findOrCreate({
    where: {
      name: "Project 1",
      githubLink: "github.com",
      deployLink: "github.com",
      description: "blah blah"
    }
  }).then(function([project, created]) {
    // Second, get a reference to a toy.
    db.category.findOrCreate({
      where: {name: "literature"}
    }).then(function([category, created]) {
      // Finally, use the "addModel" method to attach one model to another model.
      project.addCategory(category).then(function(relationInfo) {
        console.log(category.name, "added to", project.name);
      });
    });
  });

//   db.category.findOrCreate({
//       nameL 'hello'
//   }).then({createdCategory})=> {
//       db.
//   }