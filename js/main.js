const product = [
{
    id: 0,
    image: '../images/item-1.jpg',
    title: 'shoes 1',
    price: 120,
},
{
    id: 1,
    image: '../images/item-10.jpg',
    title: 'shoes 2',
    price: 60,
},
{
    id: 2,
    image: '../images/item-11.jpg',
    title: 'shoes 3',
    price: 230,
},
{
    id: 3,
    image: '../images/item-12.jpg',
    title: 'shoes 4',
    price: 100,
},
{
    id: 4,
    image: '../images/item-13.jpg',
    title: 'shoes 5',
    price: 120,
},
{
    id: 5,
    image: '../images/item-2.jpg',
    title: 'shoes 6',
    price: 60,
},
{
    id: 6,
    image: '../images/item-3.jpg',
    title: 'shoes 7',
    price: 230,
},
{
    id: 7,
    image: '../images/item-4.jpg',
    title: 'shoes 8',
    price: 100,
},
{
    id: 8,
    image: '../images/item-6.jpg',
    title: 'shoes 9',
    price: 120,
},
{
    id: 9,
    image: '../images/item-7.jpg',
    title: 'shoes 10',
    price: 60,
}
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
let i=0;
document.getElementById('pp').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='product-card'>
            <div class='product-image'>
                <img class='images' src=${image}></img>
            </div>
        <div class='product-info'>
        <h2>${title}</h2>
        <h2 class='price'>$ ${price}.00</h2>`+
        "<button class='add' onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('root').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("root").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
        total=total+price;
        document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
}

function changeContent(element) {
    var contentDiv = document.getElementById("orgch");
    var rowId = element.id;
    
    // Update content based on row ID
    switch (rowId) {
        case "ch1":
            document.getElementById('orgch').innerHTML = `<h3>Suggestion</h3>
        <table class="table container">
          <tbody>
            <tr id="ch1" onclick="changeContent(this)">
              <th scope="row"><img src="../images/item-1.jpg" alt="" /></th>
              <td>shoes 2</td>
              <td>89$</td>
              <td>500</td>
            </tr>
            <tr id="ch2" onclick="changeContent(this)">
              <th scope="row"><img src="../images/item-2.jpg" alt="" /></th>
              <td>shoes 1</td>
              <td>44$</td>
              <td>220</td>
            </tr>
            <tr id="ch3" onclick="changeContent(this)">
              <th scope="row"><img src="../images/item-11.jpg" alt="" /></th>
              <td>shoes 7</td>
              <td>22$</td>
              <td>700</td>
            </tr>
          </tbody>
        </table>`;
        break;
        case "ch2":
        document.getElementById('orgch').innerHTML = `<h3>Suggestion</h3>
        <table class="table container">
          <tbody>
            <tr id="ch1" onclick="changeContent(this)">
              <th scope="row"><img src="../images/item-4.jpg" alt="" /></th>
              <td>shoes 2</td>
              <td>89$</td>
              <td>500</td>
            </tr>
            <tr id="ch2" onclick="changeContent(this)">
              <th scope="row"><img src="../images/item-5.jpg" alt="" /></th>
              <td>shoes 1</td>
              <td>44$</td>
              <td>220</td>
            </tr>
            <tr id="ch3" onclick="changeContent(this)">
              <th scope="row"><img src="../images/item-12.jpg" alt="" /></th>
              <td>shoes 7</td>
              <td>22$</td>
              <td>700</td>
            </tr>
          </tbody>
        </table>`;
        break;
        default:
            document.getElementById('orgch').innerHTML = `
        <h3>Suggestion</h3>
            <table class="table container">
              <tbody>
                <tr id="ch1" onclick="changeContent(this)">
                  <th scope="row"><img src="../images/item-5.jpg" alt="" /></th>
                  <td>shoes 2</td>
                  <td>89$</td>
                  <td>100</td>
                </tr>
                <tr id="ch2" onclick="changeContent(this)">
                  <th scope="row"><img src="../images/item-7.jpg" alt="" /></th>
                  <td>shoes 1</td>
                  <td>44$</td>
                  <td>120</td>
                </tr>
                <tr id="ch3" onclick="changeContent(this)">
                  <th scope="row"><img src="../images/item-14.jpg" alt="" /></th>
                  <td>shoes 7</td>
                  <td>22$</td>
                  <td>200</td>
                </tr>
              </tbody>
            </table>`;
    }
}
