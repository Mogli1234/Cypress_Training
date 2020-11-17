function job() {
    return 'hello world';
}
module.exports = job;
  
//Answer
 
function job() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
        resolve('hello world');
        }, 2000);
    });
}
module.exports = job;


