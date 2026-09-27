let person = {
  name: "Kartik",
  college: "NSIT",
  contact: 9999999999,
  subject: ["cpp"],
  "": "I am empty",
  " ": "I am space",
};

console.log(person);
console.log(person.name);
console.log(person["name"]);
console.log(person[" "]);
console.log(person[""]);

person.subject.push("web dev");
console.log(person);

// for - in loop
for (let key in person) {
  console.log(key, " : ", person[key]);
}
