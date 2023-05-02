const teste3 = /([\d]{1,3}\.){3}[\d]{1,3}/g;

for(let i = 0; i <= 300; i++) {
    let ip = `${i}.${i}.${i}.${i}`;
    let noSpaces = ip.replaceAll('.', '');
    if(noSpaces.length < 4 || noSpaces.length > 12) return;
    if(noSpaces.length % 4 != 0) return; 
    if(noSpaces.length === 12) {
        noSpaces = Number(noSpaces);
        if(noSpaces > 255255255255) return;
    }
    console.log(ip, ip.match(teste3))
}