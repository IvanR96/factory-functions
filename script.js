
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



User1 = createUser('obsurvr');