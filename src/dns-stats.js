const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
let result = {};
let index=0;
let saveIndex=0;;
let str = [];
let strDomain ='';
let j =0;
for(let i=0;i<domains.length; i++){
    strDomain = domains[i];
    while (index != -1){
        index = strDomain.indexOf('.', saveIndex);
        if (index != -1){
            str[j]=strDomain.slice(saveIndex, index);
            j++;
            saveIndex = index+1;
        }
        if (index == -1){
             str[j]=strDomain.slice(saveIndex);
            j++;
        }
    }
    index=0;
    saveIndex=0;
}
let number =0;
for(let i=0;i<str.length; i++){
    for(let j=0;j<str.length; j++){
        if(str[i] == str[j])
        {
            number+=1;
        }
    }
    result[str[i]]=number;
    number = 0;
}
console.log(str);
return result;
}

module.exports = {
  getDNSStats
};
