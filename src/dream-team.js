const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let nameteam = [];
    let name;
    for (let i=0; i<members.length; i++){
        if (typeof members[i] === "string"){
        name = members[i];
        nameteam[i]=name[0];
        }
        else{
            nameteam[i]='1';
        }
    }
    let index=0;
    while (index!=-1){
        index = nameteam.indexOf('1');
        if (index!=-1){
            nameteam.splice(index, 1)
        }
    }
   nameteam.sort();
   let team = nameteam.join('')
    
  return team;
}

module.exports = {
  createDreamTeam
};
