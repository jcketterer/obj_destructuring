const teaOrder = {
  variety: 'oolong',
  teaName: 'winter sprout',
  origin: 'taiwan',
  price: 12.99,
  hasCaffeine: true,
  quantity: 3
};

// const price = teaOrder.price;
// const quantity = teaOrder.quantity;
// const teaName = teaOrder.teaName;

const { price, quantity, teaName, ...others } = teaOrder
const { origin } = teaOrder

const { brewTemp = 175 } = teaOrder

const { teaName: tea } = teaOrder;

function checkout(tea) {
  const { quantity = 1, price } = tea;
  return quantity * price;
}

checkout(teaOrder);

const order1 = {
  variety: 'green',
  teaName: 'silver needle',
  origin: 'taiwan',
  price: 12.99,
  hasCaffeine: true
};

const students = [
  { name: 'Drake', gpa: 4.6 },
  { name: 'Henrietta', gpa: 4.4 },
  { name: 'Tung', gpa: 4.0 },
  { name: 'Harry', gpa: 3.8 },
  { name: 'Ant', gpa: 3.2 },
];

// const [topStudent, secondBest,,fourth] = students
const [first, ...losers] = students


const order2 = {
  variety: 'green',
  teaName: 'silver needle',
  origin: 'taiwan',
  price: 12.99,
  hasCaffeine: true,
  quantity: 4
};

function getTotal({ quantity, price }) {
  return quantity * price;
}

const longJumpResults = ['Tam', 'Jess', 'Violet'];
const swimMeetResults = ['Japan', 'France', 'Chile'];

function awardMedals([gold, silver, bronze]) {
  return {
    gold,
    silver,
    bronze
  }
}

//********************
//SWAPPING VARIABLES USING DESCTRUCTURING
//********************

let delicious = 'Mayonnaise';
let disgusting = 'Whipped Cream';

// let temp = delicious;
// delicious = disgusting;
// disgusting = temp;

// let both = [delicious,disgusting];
// [disgusting,delicious] = both;

[disgusting, delicious] = [delicious, disgusting]


















