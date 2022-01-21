const os = require('os');

//info about current user

const user = os.userInfo();
console.log(user);
// method returns the system uptime in seconds

console.log(`The System Update is ${os.uptime()} seconds`);

const currentsOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMen:os.freemem()

}
console.log(currentsOS);