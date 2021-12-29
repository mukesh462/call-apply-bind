
// //call() and apply() serve the exact same purpose. 
// The only difference between how they work is that call() expects all parameters to be passed in individually,
//  whereas apply() expects an array of all of our parameters.


var ObjectName = {
    firstname: 'Mukesh',
    lastname: 'Kumar',
    getFullName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var CreateName = function(snack, hobby) {
    console.log(this.getFullName() + ' loves ' + snack + ' and ' + hobby);
};

CreateName.call(ObjectName,'Sweets', 'Video Games');
CreateName.apply(ObjectName,['Sweets', 'Video Games']);


//The bind() method creates a new function
var person = {
    firstname: 'Nivetha ',
    lastname: 'Kumar',
    getFullName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var personName = function() {
    console.log(this.getFullName() + ' Happy Day!');
};

var BindName = personName.bind(person);

BindName(); 