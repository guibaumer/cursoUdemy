const fs = require('fs').promises;
const { read } = require('fs');
const path = require('path');

async function readDir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}
async function walk(files, rootDir) {
    for(let file of files) {
        const fileFulllPath = path.resolve(rootDir, file)
        const stats = await fs.stat(fileFulllPath);
        if(stats.isDirectory()) {
            readDir(fileFulllPath)
            continue;
        }
        console.log(file, stats.isDirectory())
    }
}

///isso mostra os arquivos da pasta
//fs.readdir(path.resolve(__dirname)).then(files => console.log(files))
//.catch(e => console.log(e))

readDir('C:\\Users\\guilh\\OneDrive\\Documentos\\estudos\\cursoUdemy')
