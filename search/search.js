const FoodOptions = [
  {
    id: 1,
    name: "Rolls",
    image: "/IMG/food/Rolls-removebg-preview.png"
  },
  {
    id: 2,
    name: "Pizza",
    image: "/IMG/food/Pizza-removebg-preview.png"
  },
  {
    id: 3,
    name: "Burger",
    image: "/IMG/food/Burger-removebg-preview.png"
  },
  {
    id: 4,
    name: "Tea",
    image: "/IMG/food/Tea-removebg-preview.png"
  },
  {
    id: 5,
    name: "Pastry",
    image: "/IMG/food/Pastry-removebg-preview.png"
  },
  {
    id: 6,
    name: "Cake",
    image: "/IMG/food/Cake-removebg-preview.png"
  },
  {
    id: 7,
    name: "Dosa",
    image: "/IMG/food/Dosa-removebg-preview.png"
  },
  {
    id: 8,
    name: "Indian",
    image: "/IMG/food/North_Indian-removebg-preview.png"
  },
  {
    id: 9,
    name: "Samosa",
    image: "/IMG/food/Samosa-removebg-preview.png"
  },
  {
    id: 10,
    name: "Shake",
    image: "/IMG/food/Shake-removebg-preview.png"
  },
  {
    id: 11,
    name: "Noodles",
    image: "/IMG/food/Noodles-removebg-preview.png"
  },
  {
    id: 12,
    name: "Pasta",
    image: "/IMG/food/pasta-removebg-preview.png"
  },
  {
    id: 13,
    name: "Salad",
    image: "/IMG/food/Salad-removebg-preview.png"
  },
  {
    id: 14,
    name: "Vada",
    image: "/IMG/food/Vada-removebg-preview.png"
  },
  {
    id: 15,
    name: "chole-k",
    image: "/IMG/food/Chole_Bhature-removebg-preview.png"
  },
  {
    id: 16,
    name: "Idli",
    image: "/IMG/food/Idli-removebg-preview.png"
  },
  {
    id: 17,
    name: "Khichdi",
    image: "/IMG/food/Khichdi-removebg-preview.png"
  },
  {
    id: 18,
    name: "Paratha",
    image: "/IMG/food/Paratha-removebg-preview.png"
  },
  {
    id: 19,
    name: "Coffee",
    image: "/IMG/food/Coffee-removebg-preview.png"
  },
  
];

FoodOptions.forEach((i, index) => {

  // a create
  const fooda = document.createElement('a');
  fooda.className = 'flex flex-col items-center text-center';
  // fooda.href = '../pizza/cards.html';
  fooda.href = `../pizza/cards.html?lokesh=${i.name}`;


  // div create
  const fooddiv = document.createElement('div');
  fooddiv.className = 'w-16 h-16 rounded-full shadow-md overflow-hidden';

  // img create
  const foodimg = document.createElement('img');
  foodimg.className = 'w-full h-full object-cover';

  // span create
  const foodSpan = document.createElement('span');
  foodSpan.className = "mt-2 text-xs sm:text-sm";

  foodimg.src = i.image;
  foodSpan.textContent = i.name;

  fooda.append(fooddiv, foodSpan);
  fooddiv.append(foodimg)

  const trending = document.querySelector(".trending-list").append(fooda)
});



const searchInput = document.getElementById('searchBox');

const listItems = document.querySelectorAll('.trending-list a');

searchInput.addEventListener('keyup', function (event) {
  const term = event.target.value.toLowerCase();
  let term1 = term.trim();

  listItems.forEach(function (item) {
    const itemName = item.querySelector('span').textContent.toLowerCase();

    if (itemName.includes(term1)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
});

