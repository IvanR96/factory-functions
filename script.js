
//constructor
const User = function(name){
    this.name = name;
    this.discordName = '@' + name;

}

//factory function no need for new keyword
function createUser(name){
    const discordName = '@' + name;
    return {name, discordName};
}



function steamUser(name){
    let tag = '@' + name;

    return {name , tag};
}

user = steamUser('obsurvr');


console.log(user);


const obj = {a: 1, b: 2};
// This creates two variables, a and b,
// which are equivalent to
// const a = obj.a;
// const b = obj.b;

const {a, b} = obj;


