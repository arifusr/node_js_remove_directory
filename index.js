const  key = process.argv[2];
const Delete = process.argv[3];
const config = require('config');
const allconfig = config.get(key);
const fs = require('fs');
const rimraf = require('rimraf');
if(Delete)rimraf.sync('./');
while(true){
    console.log(allconfig);
}