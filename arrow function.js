const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
const a2 = a.map(function (s) {
    return s.length;});
console.log("Normal way ", a2); 
const a3 = a.map((s) => s.length);
console.log("Using Arrow Function ", a3)
