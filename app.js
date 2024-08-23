let names = ['Michael', 'Trevor', 'Franklin', 'Lamar', 'Jimmy']
names.forEach(printWithDashes)
function printWithDashes(name) {
    console.log("____");
    console.log(name);
    console.log("____");
    
}
names.forEach(printWithHearts);
function printWithHearts(name) {
   console.log(`<3<3<3<3 ${name} <3<3<3<3`);
   
    
}
names.forEach(printWithIndex);
function printWithIndex(name , index) {
    console.log(index + " " + "-" + " " + name);
    
}