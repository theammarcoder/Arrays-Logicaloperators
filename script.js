const myUsers = ["Rafay", "ali", "Ahmad", "Moqeet"];
console.log(myUsers);
//push add in
myUsers.push("Umer");
console.log(myUsers);
//pop remove in last
myUsers.pop();
myUsers.pop();
console.log(myUsers);
//unshifted add in first
myUsers.unshift("Kashif");

console.log(myUsers);
//shift remove first
myUsers.shift();
console.log(myUsers);
/// indexof find array
console.log(myUsers.indexOf("ali"));
//licesenedpeople
const licesenedpeople = ["Ali", "ahmad", "rafay"];
// in which a element hai array ma ya nahi
console.log(licesenedpeople.includes("Ali"));
//reverse the array
const newarray = licesenedpeople.reverse();
console.log(licesenedpeople.concat(myUsers));
//how to check length of lisence people
console.log(licesenedpeople.length);
//Array element traversr
for (let i = 0; i <= licesenedpeople.length - 1; i++) {
  console.log(licesenedpeople[i]);
}
//maping function
console.log("Below in the map");
licesenedpeople.map((rafay) => {
  console.log(rafay);
});
//passed function callback
let userage = [18, 15, 19, 20];
console.log(userage);
userage.map((age) => {
  if (age => 18) {
    console.log("userage greater then 18");
  }
});

//3D
const matrix3d = [
  [
    [1, 4, 6],
    [2, 4, 5],
  ],
  [
    [7, 8, 9],
    [0, 8, 2],
  ],
];
console.log(matrix3d[1][1]);
console.log(matrix3d[0][0]);
///operators && and operator
let age = 34;
let haslicense = true;
if (age >= 18 && haslicense == true) {
  alert("you are elligible");
}
// ||or operator
let isbirthday = false;
let gotgoodgrade = true;
if (isbirthday == false || gotgoodgrade == true) {
  alert("you can treat for everyone");
}
//not operator




//////maping
let array=["ali","Ahmad","rafay"];
console.log(array);
let a=array.map((value, index,array )=>{
  console.log(value,index,array)
}
);