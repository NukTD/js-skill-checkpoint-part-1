// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
inventory[0].quantity = 200;
inventory.push({name: "Orange", price: 20, quantity: 300})
// console.log(inventory);

/* ตอนแรกคิดแบบบ้านๆขอเก็บไว้ดูครับ😅😄
let result = inventory[0].price * inventory[0].quantity;
console.log(result);
let result2 = inventory[1].price * inventory[1].quantity;
console.log(result2);
let result3 = inventory[2].price * inventory[2].quantity;
console.log(result3);
console.log(result + result2 + result3); */

//เพิ่งนึกออกว่า loop ได้
let total = 0;
for (let i = 0; i < inventory.length; i++){
   let result = inventory[i].price * inventory[i].quantity;
   total += result;
}
console.log(total);

//done