// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้

function calculateTotalPrice (products , promotionCode){
  let total = 0;
  for(let i = 0; i < products.length; i++){
    total += products[i].price * products[i].quantity
  }

  if(promotionCode === "SALE20%"){
    total = total * 0.80;
  }else if (promotionCode === "SALE50%"){
    total = total * 0.50;
  }  
  return total;
}
let totalPrice = calculateTotalPrice(products, promotionCode);
console.log(totalPrice);

//เกือบหลับแต่กลับมาได้