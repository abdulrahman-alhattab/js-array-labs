// data types
// strings
// numbers
// booleans
// null
// arrays
// objects

// declaring new objects
const mystudents = {
  name: 'nawaf',
  phonenumber: 67412164,
  city: 'isaTown'
}
const shahad = {
  name: 'shahad',
  phonenumber: 65353527,
  city: 'isaTown'
}

const allStudents = [mystudents, shahad]

console.log(mystudents)
console.log(mystudents.city)
// and so on

// adding
mystudents.email = 'nawaf@gmail.com'

// 'deleting'
delete mystudents.city

for (let mystudent of allStudents) {
  console.log(mystudent)
}
