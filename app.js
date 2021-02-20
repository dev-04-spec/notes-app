const fs=require('fs');
for(let i=0;i<10;i++){
    console.log(i);
}
fs.writeFileSync('notes.txt','This file was created by Node.jss');