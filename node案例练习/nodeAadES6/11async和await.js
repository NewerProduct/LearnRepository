import thenFs from 'then-fs'

async function getFile(){
  const r1 = await thenFs.readFile('./file/1.txt','utf-8')
  console.log(r1);
}

getFile();