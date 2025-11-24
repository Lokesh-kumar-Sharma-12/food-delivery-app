//array Order our best food options
const bestFoodOptions = [
  {
    id: 1,
    name: "Pizza",
    image: "IMG/img/pngtree-authentic-italian-pizza-with-cheese-and-fresh-vegetable-toppings-png-image_14714611.png"
  },
  {
    id: 2,
    name: "Juice",
    image: "IMG/img/juice-removebg-preview.png"
  },
  {
    id: 3,
    name: "Burger",
    image: "IMG/OPTION/Burger.avif"
  },
  {
    id: 4,
    name: "Cake",
    image: "IMG/img/cake-removebg-preview.png"
  },
  {
    id: 5,
    name: "Kachori",
    image: "IMG/OPTION/Kachori.avif"
  },
  {
    id: 6,
    name: "Pav Bhaji",
    image: "IMG/OPTION/Pav Bhaji.avif"
  },
  {
    id: 7,
    name: "Momo",
    image: "IMG/OPTION/Momo.avif"
  },
  {
    id: 8,
    name: "Noodles",
    image: "IMG/OPTION/Noodles.avif"
  },
  {
    id: 9,
    name: "Rolls",
    image: "IMG/OPTION/Rolls.avif"
  },
  {
    id: 10,
    name: "Pasta",
    image: "IMG/OPTION/Pasta.avif"
  },
  {
    id: 11,
    name: "Dosa",
    image: "IMG/OPTION/Dosa.avif"
  },
  {
    id: 12,
    name: "Samosa",
    image: "IMG/OPTION/Samosa.avif"
  },
  {
    id: 13,
    name: "Pastry",
    image: "IMG/OPTION/Pastry.avif"
  },
  {
    id: 14,
    name: "Tea",
    image: "IMG/OPTION/Tea.avif"
  },
  {
    id: 15,
    name: "Khichdi",
    image: "IMG/OPTION/Khichdi.avif"
  },
  {
    id: 16,
    name: "Coffee",
    image: "IMG/OPTION/Coffee.avif"
  },
  {
    id: 17,
    name: "Shake",
    image: "IMG/OPTION/Shake.avif"
  },
  {
    id: 18,
    name: "Salad",
    image: "IMG/OPTION/Salad.avif"
  },
  {
    id: 19,
    name: "Vada",
    image: "IMG/OPTION/Vada.avif"
  },
  {
    id: 20,
    name: "Pakoda",
    image: "IMG/OPTION/Pakoda.avif"
  }
];
const myFoodContainer = document.getElementById("myFoodContainer")
const myFoodContainer2 = document.getElementById("myFoodContainer2")

// order our best main food 
bestFoodOptions.forEach((i, index) => {

  // a create
  const fooda = document.createElement('a');
  fooda.className = 'item items-center text-center';

  // img create
  const foodimg = document.createElement('img');
  foodimg.className = 'img h-[130px] w-[144px] min-w-[144px] min-h-[130px]';

  // span create
  const foodSpan = document.createElement('span');

  foodimg.src = i.image;
  foodSpan.textContent = i.name;

  fooda.appendChild(foodimg);
  fooda.appendChild(foodSpan);

  // Distribute items:  List 1, and List 2
  if (index < 10) {
    myFoodContainer.append(fooda);
  } else {
    // myFoodContainer2
    if (myFoodContainer2) {
      myFoodContainer2.append(fooda);
    }
  }
});

//array Shop groceries on Instamart
const groceryOptions = [
  {
    id: 1,
    name: "Fresh Vegetables",
    image: "IMG/SHOP/43e3c412-4ca9-4894-82ba-24b69da80aa6_06c0d2a9-804c-4bf1-8725-7ebd234e144a.avif"
  },
  {
    id: 2,
    name: "Fresh Fruits",
    image: "IMG/SHOP/a1493d81-f21e-415f-9875-f78383590fc2_9f3f0f68-4fbe-40f6-8f5d-5472a03469bd.png"
  },
  {
    id: 3,
    name: "Dairy, Bread and Eggs",
    image: "IMG/SHOP/6dea6676-ce07-45e6-b60c-a099c01c5462_6d33297a-5828-48ff-aa2a-c052ae97669e.avif"
  },
  {
    id: 4,
    name: "Rice, Atta and Dals",
    image: "IMG/SHOP/097900ca-5d2d-4bb0-8e54-aede1e58dfd8_eab3796c-ac17-48fd-bfc7-6356c6f89783.avif"
  },
  {
    id: 5,
    name: "Masalas and Dry Fruits",
    image: "IMG/SHOP/64714677-e6b6-41c1-b533-6644d43e55f7_76ef86af-0483-41a5-8387-37901bf4ca6a.avif"
  },
  {
    id: 6,
    name: "Oils and Ghee",
    image: "IMG/SHOP/8e48ee13-3b51-49ea-b765-5cf3e7a97c04_695caa8a-c2f6-4a1a-9672-53213fea21aa.avif"
  },
  {
    id: 7,
    name: "Munchies",
    image: "IMG/SHOP/73e018a7-d342-475e-aaca-ec5cd3d0c59f_228ff3d4-ff21-44db-9768-7a369c65ce6a.png"
  },
  {
    id: 8,
    name: "Sweet Tooth",
    image: "IMG/SHOP/83a9b71b-1db7-4cbe-a9f7-ead650d26326_3afbe8c8-f5c8-4dd7-8357-f5711f80646b.png"
  },
  {
    id: 9,
    name: "Cold Drinks and Juices",
    image: "IMG/SHOP/37d399b1-52d2-47ef-bdd8-8951e51819fc_0361a93d-e864-49be-a57d-46c958eb7b56.png"
  },
  {
    id: 10,
    name: "Biscuits and Cakes",
    image: "IMG/SHOP/76a7104c-0f11-4182-aa51-0d48efc2be7f_aae098f9-aaff-4504-a222-bf13595d58cd.png"
  },
  {
    id: 11,
    name: "Instant and Frozen Food",
    image: "IMG/SHOP/1a08f110-17b6-4785-92d4-404825b75f2d_869c1986-d9c1-4d46-b1c3-10c79a052a59.avif"
  },
  {
    id: 12,
    name: "Cereals and Breakfast",
    image: "IMG/SHOP/012beae1-c31a-4360-9b32-173080b64652_aa07a04e-5f2e-4c00-86f6-297344906f01.avif"
  },
  {
    id: 13,
    name: "Sauces and Spreads",
    image: "IMG/SHOP/e2f96940-2657-4a4b-a5e1-0c3413ba25cb_8b977351-a415-442a-bb9c-320e1642f740.avif"
  },
  {
    id: 14,
    name: "Tea, Coffee and More",
    image: "IMG/SHOP/5fc3d15a-26b0-41e0-93ab-39ada0f553c2_82e0ff9f-558c-45dd-af3e-fdc16d0aa471.avif"
  },
  {
    id: 15,
    name: "Cleaning Essentials",
    image: "IMG/SHOP/73a47bc4-c684-447f-9908-22da3ecd3ba2_c9948a61-3dca-4e29-82b4-31178d38746b.png"
  },
  {
    id: 16,
    name: "Pharma and Hygiene",
    image: "IMG/SHOP/fc74f557-a203-4dba-8955-82d6c608e91e_7d2481f0-8614-400c-b25c-554a655c14c7.avif"
  },
  {
    id: 17,
    name: "Bath, Body and Hair",
    image: "IMG/SHOP/4342c814-6ff9-4bbe-a360-95200ad602a0_1905dc17-a04d-4a9e-9a4e-adde9b27f321.png"
  },
  {
    id: 18,
    name: "Paan Corner",
    image: "IMG/SHOP/1eae2df9-95a5-40e5-a2c0-92bb4893637a_5e1e6c72-dde5-4a12-8bdf-c7cbc4b0644b.avif"
  },
  {
    id: 19,
    name: "Home and Kitchen",
    image: "IMG/SHOP/657a922d-067a-4e0b-b967-b3e0c7906fa9_485311db-2f22-4193-a05d-963f18a89150.avif"
  },
  {
    id: 20,
    name: "Office and Electricals",
    image: "IMG/SHOP/52a66c89-6516-489f-96ac-b15286900648_ebbfd2d1-9b36-4ce3-b08c-7378f1ca6d7d.png"
  },
  {
    id: 21,
    name: "Baby Care",
    image: "IMG/SHOP/cbbab04b-845a-44bd-aa63-329276af1714_c6c9dc53-ae50-475a-89d8-b03824c4a98a.avif"
  },
  {
    id: 22,
    name: "Pet Supplies",
    image: "IMG/SHOP/705173ff-7cd9-4d7e-9e5b-3886d81411b9_bb324827-9556-48e4-b8f6-280706478fe2.avif"
  },
  {
    id: 23,
    name: "Beauty and Grooming",
    image: "IMG/SHOP/e160e4c4-2114-4e3d-97ff-3922125a3b2e_224bcfa1-77e3-47e5-aea5-1ab060585b4b.avif"
  }
];
const myshopContainer = document.getElementById("myshopContainer")

// order our best main food 
groceryOptions.forEach((i) => {

  // div create
  const groceriediv = document.createElement('div');
  groceriediv.className = 'grocerie gap-4 grid w-[144px] min-w-[144px] h-[280px] min-h-[180px]';

  // a create
  const groceriea = document.createElement('a');

  // img create
  const grocerieimg = document.createElement('img');

  // span create
  const grocerieSpan = document.createElement('span');
  grocerieSpan.className = "font-bold text-2xl text-gray-600 flex-column text-center"

  grocerieimg.src = i.image;
  grocerieSpan.textContent = i.name;

  groceriediv.appendChild(groceriea)
  groceriea.appendChild(grocerieimg);
  groceriediv.appendChild(grocerieSpan)

  myshopContainer.append(groceriediv)
});

//array Discover best restaurants on Dineout
const restaurants = [
  {
    id: 1,
    image: "IMG/BOOK/4d47ba02-15db-4e64-99f8-2c31fcf79738_image03d33c16e2fd647a5ae96574a28e1f58b.webp",
    name: "The 202 cafe And Kitchen",
    rating: "4.6",
    india: "continental .india",
    price: "₹800 for two",
    location: "vaishali Nagar .jaipur",
    booking: "Table booking",
    distance: "5.2KM",
    more: "+1 more",
    offer: "Flat 15% off on pre-booking",
    bankOffer: "Up to 10% off with bank offers",
  },
  {
    id: 2,
    image: "IMG/BOOK/f5af8c0d-76f7-49c0-b3c0-f8cb644111e4_image5d4946d3e8b214989864517c65c29fe91.webp",
    name: "The 202 cafe And Kitchen",
    rating: "4.6",
    india: "continental .india",
    price: "₹800 for two",
    location: "vaishali Nagar .jaipur",
    booking: "Table booking",
    distance: "5.2KM",
    more: "+1 more",
    offer: "Flat 15% off on pre-booking",
    bankOffer: "Up to 10% off with bank offers",
  },
  {
    id: 3,
    image: "IMG/BOOK/abc2cdcceb33528e1e1e884b46713837.webp",
    name: "The 202 cafe And Kitchen",
    rating: "4.6",
    india: "continental .india",
    price: "₹800 for two",
    location: "vaishali Nagar .jaipur",
    booking: "Table booking",
    distance: "5.2KM",
    more: "+1 more",
    offer: "Flat 15% off on pre-booking",
    bankOffer: "Up to 10% off with bank offers",
  },
  {
    id: 4,
    image: "IMG/BOOK/4d47ba02-15db-4e64-99f8-2c31fcf79738_image03d33c16e2fd647a5ae96574a28e1f58b.webp",
    name: "The 202 cafe And Kitchen",
    rating: "4.6",
    india: "continental .india",
    price: "₹800 for two",
    location: "vaishali Nagar .jaipur",
    booking: "Table booking",
    distance: "5.2KM",
    more: "+1 more",
    offer: "Flat 15% off on pre-booking",
    bankOffer: "Up to 10% off with bank offers",
  },
  {
    id: 5,
    image: "IMG/BOOK/4d47ba02-15db-4e64-99f8-2c31fcf79738_image03d33c16e2fd647a5ae96574a28e1f58b.webp",
    name: "The 202 cafe And Kitchen",
    rating: "4.6",
    india: "continental .india",
    price: "₹800 for two",
    location: "vaishali Nagar .jaipur",
    booking: "Table booking",
    distance: "5.2KM",
    more: "+1 more",
    offer: "Flat 15% off on pre-booking",
    bankOffer: "Up to 10% off with bank offers",
  }
];


const Card = document.getElementById("Card")

const allrestaurants = document.querySelectorAll(".card .restrorent");
restaurants.forEach((i) => {

  // main div create
  const carddiv = document.createElement('div');
  carddiv.className = 'restrorent bg-white rounded-xl shadow p-3 cursor-pointer min-w-[300px]';

  // div1 create
  const div1 = document.createElement('div');
  div1.className = 'relative';
  // a create
  const div1a = document.createElement('a');
  // img create
  const img = document.createElement('img');
  img.className = 'image rounded-md';
  // div 1.1 create
  const div11 = document.createElement('div');
  div11.className = 'resto items-center flex justify-between font-bold text-1x2 text-white text-center absolute bottom-[3%] text-shadow-2md';
  // div 1.1 -> span  create
  const span1 = document.createElement('span');
  span1.className = 'name';
  // div 1.1.1 create
  const div111 = document.createElement('div');
  div111.className = 'flex';
  // i1 create
  const cardi = document.createElement('i');
  cardi.className = 'fa-regular fa-star text-green-600';
  // span 2 create
  const span2 = document.createElement('span');
  span2.className = 'rating text-1xl';

  // div2 create
  const div2 = document.createElement('div');
  div2.className = 'flex justify-between items-center text-gray-500 text-1x1 text-center text-shadow-2md';
  // span3 create
  const span3 = document.createElement('span');
  span3.className = 'india text-1x1';
  // span4 create
  const span4 = document.createElement('span');
  span4.className = 'price text-1xl';

  // div3 create
  const div3 = document.createElement('div');
  div3.className = 'items-center flex justify-between text-gray-500 text-1x1 text-center  text-shadow-2md';
  // span5 create
  const span5 = document.createElement('span');
  span5.className = 'location';
  // span6 create
  const span6 = document.createElement('span');
  span6.className = 'distance text-sm';

  // div4 create
  const div4 = document.createElement('div');
  div4.className = 'w-fit text-sm rounded-2xl mt-2 items-center border bg-gray-100 flex gap-4';
  // i2 create
  const cardi2 = document.createElement('i');
  cardi2.className = 'fa-solid fa-clipboard-check';
  // span7 create
  const span7 = document.createElement('div');
  span7.className = 'booking';

  // div5 create
  const div5 = document.createElement('div');
  div5.className = 'bg-green-500 text-white mt-3 rounded-lg p-2 text-sm flex justify-between items-center';
  // span3 create
  const span8 = document.createElement('span');
  span8.className = 'offer';
  // span4 create
  const span9 = document.createElement('span');
  span9.className = 'more';

  // div6 create
  const div6 = document.createElement('div');
  div6.className = 'bankOffer bg-green-100 text-green-800 rounded-lg p-2 text-sm mt-2';

  Card.append(carddiv);

  carddiv.appendChild(div1);
  div1.appendChild(div1a);
  div1a.appendChild(img);
  div1.appendChild(div11);
  div11.appendChild(span1);
  div11.appendChild(div111);
  div111.appendChild(cardi);
  div111.appendChild(span2);


  carddiv.appendChild(div2);
  div2.appendChild(span3);
  div2.appendChild(span4);


  carddiv.appendChild(div3);
  div3.appendChild(span5);
  div3.appendChild(span6);



  carddiv.appendChild(div4);
  div4.appendChild(cardi2);
  div4.appendChild(span7);


  carddiv.appendChild(div5);
  div5.appendChild(span8);
  div5.appendChild(span9);


  carddiv.appendChild(div6);


  img.src = i.image;

  span1.textContent = i.name;

  span2.textContent = i.rating;

  span3.textContent = i.india;

  span4.textContent = i.price;

  span5.textContent = i.location;

  span6.textContent = i.distance;

  span7.textContent = i.booking;

  span8.textContent = i.offer;

  span9.textContent = i.more;

  div6.textContent = i.bankOffer;
});

const Cities_food_delivery = [
  {
    id: 1,
    name: "Order food online in Bangalore",
  },
  {
    id: 2,
    name: "Order food online in Gurgaon",
  },
  {
    id: 3,
    name: "Order food online in Hyderabad",
  },
  {
    id: 4,
    name: "Order food online in Delhi",
  },
  {
    id: 5,
    name: "Order food online in Mumbai",
  },
  {
    id: 6,
    name: "Order food online in Pune",
  },
  {
    id: 7,
    name: "Order food online in Kolkata",
  },
  {
    id: 8,
    name: "Order food online in Chennai",
  },
  {
    id: 9,
    name: "Order food online in Ahmedabad",
  },
  {
    id: 10,
    name: "Order food online in Chandigarh",
  },
  {
    id: 11,
    name: "Order food online in Jaipur",
  },
  {
    id: 12,
    name: "Order food online in Kochi",
  },
  {
    id: 13,
    name: "Order food online in Coimbatore",
  },
  {
    id: 14,
    name: "Order food online in Lucknow",
  },
  {
    id: 15,
    name: "Order food online in Vizag",
  },
  {
    id: 16,
    name: "Order food online in Surat",
  },
  {
    id: 17,
    name: "Order food online in Nagpur",
  },
  {
    id: 18,
    name: "Order food online in Nashik",
  },
  {
    id: 19,
    name: "Order food online in Vijayawada",
  },
  {
    id: 20,
    name: "Order food online in Trichy",
  },
  {
    id: 21,
    name: "Order food online in Mysore",
  },
  {
    id: 22,
    name: "Order food online in Udaipur",
  },
  {
    id: 23,
    name: "Order food online in Kanpur",
  },
  {
    id: 24,
    name: "Order food online in Indore",
  }
]

// const citiesfoodContainer = document.getElementById("citiesfoodContainer");

// Cities_food_delivery.forEach((i, index) => {

//   const div = document.createElement("div")
//   div.className = "p-4 border rounded-xl text-center"

// citiesfoodContainer.append(div)
// if (index < 12) {
//   div.textContent = i.name
// }

// })

const Cities_grocery_delivery = [
  {
    id: 1,
    name: "Order grocery online in Bangalore",
  },
  {
    id: 2,
    name: "Order grocery online in Gurgaon",
  },
  {
    id: 3,
    name: "Order grocery online in Hyderabad",
  },
  {
    id: 4,
    name: "Order grocery online in Delhi",
  },
  {
    id: 5,
    name: "Order grocery online in Mumbai",
  },
  {
    id: 6,
    name: "Order grocery online in Pune",
  },
  {
    id: 7,
    name: "Order grocery online in Kolkata",
  },
  {
    id: 8,
    name: "Order grocery online in Chennai",
  },
  {
    id: 9,
    name: "Order grocery online in Ahmedabad",
  },
  {
    id: 10,
    name: "Order grocery online in Chandigarh",
  },
  {
    id: 11,
    name: "Order grocery online in Jaipur",
  },
  {
    id: 12,
    name: "Order grocery online in Kochi",
  },
  {
    id: 13,
    name: "Order grocery online in Coimbatore",
  },
  {
    id: 14,
    name: "Order grocery online in Lucknow",
  },
  {
    id: 15,
    name: "Order grocery online in Vizag",
  },
  {
    id: 16,
    name: "Order grocery online in Surat",
  },
  {
    id: 17,
    name: "Order grocery online in Nagpur",
  },
  {
    id: 18,
    name: "Order food online in Nashik",
  },
  {
    id: 19,
    name: "Order grocery online in Vijayawada",
  },
  {
    id: 20,
    name: "Order grocery online in Trichy",
  },
  {
    id: 21,
    name: "Order grocery online in Mysore",
  },
  {
    id: 22,
    name: "Order grocery online in Udaipur",
  },
  {
    id: 23,
    name: "Order grocery online in Kanpur",
  },
  {
    id: 24,
    name: "Order grocery online in Indore",
  }
]

const citiesgroceryContainer = document.getElementById("citiesgroceryContainer");
const initialVisibleCount = 11; // 11 cities + 1 Show More button = 12 items (4x3 grid)

Cities_grocery_delivery.forEach((i, index) => {

  const div = document.createElement("div")
  div.className = "p-4 border rounded-xl text-center"

  citiesgroceryContainer.append(div)
  if (index < 11) {
    div.textContent = i.name
  }
  else {
    const showMoreBtn = document.createElement('div');
    // Isme wahi classes hain jo baaki cards me hain, bas text-orange aur bold alag hai
    showMoreBtn.className = 'p-4 border rounded-xl text-center font-extrabold text-orange-600 cursor-pointer flex justify-center items-center gap-2 shadow-sm';
    showMoreBtn.innerHTML = `Show More <i class="fa-solid fa-chevron-down"></i>`;

    // Step D: Click event add karein
    showMoreBtn.addEventListener('click', function () {
      // Button ko remove karein
      showMoreBtn.remove();

      // Baaki bachi hui cities ko load karein
      const remainingCities = Cities_grocery_delivery.slice(initialVisibleCount);
      remainingCities.forEach(city => {
        citiesgroceryContainer(city);
        div.textContent = i.name
      });
    });
  }
})
