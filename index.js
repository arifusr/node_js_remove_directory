const  key = process.argv[2];
const Delete = process.argv[3];
let config = require('config');
const fs = require('fs');
const rimraf = require('rimraf');
const readline = require('readline');
const { resolve } = require('path');
const { rejects } = require('assert');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
if(Delete)rimraf.sync('./config/*');

(async()=>{
    while(true){
        const P = new Promise((resolve, reject)=>{
            rl.question('What do you want to print from config? ', (answer) => {
                // TODO: Log the answer in a database
                try{
                    answer = config.get(answer);
                }catch(e){
                    console.log(`Sorry your config not defined`);
                }
                console.log(`Thank you for your valuable feedback: ${answer}`);
            resolve();

              });
        })
        await P;
    }   
})();

