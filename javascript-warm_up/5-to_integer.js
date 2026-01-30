#!/usr/bin/node

const firstArg = process.argv[2];

if (firstArg === undefined) {
  console.log('Not a number');	
}else{
  console.log(`My number: ${firstArg}`);
}
