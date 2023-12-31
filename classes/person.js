// Your code here

class Person {
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age
  }

 // Example of an instance method
  introduce(){
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`);
  }

  // Example of a static method 
  static introducePeople(persons){

   if(!Array.isArray(persons)){
    throw new Error("introducePeople only takes an array as an argument.");
   }

   for(const person of persons){
    if(!(person instanceof Person)){
      throw new Error("All items in array must be Person class instances.");
    }
   }

   for(const person of persons){
    person.introduce();
   }
  }
}



/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}