const fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Mango",
  "Grapes",
  "Strawberry",
  "Pineapple",
  "Watermelon",
  "Peach",
  "Pear",
  "Cherry",
  "Plum",
  "Kiwi",
  "Lemon",
  "Avocado",
  "Cranberry",
  "Blackberry",
  "Raspberry",
  "Coconut",
  "Fig",
  "Papaya",
  "Pomegranate",
  "Apricot",
  "Dragonfruit",
  "Custard Apple",
  "Jackfruit",
  "Tamarind",
  "Starfruit",
  "Amla",
  "Cantaloupe",
  "Dates",
  "Gooseberry",
  "Sapodilla (Chikoo)",
  "Clementine",
  "Lychee",
  "Mulberry",
  "Passion Fruit",
  "Elderberry",
  "Huckleberry",
  "Boysenberry",
  "Lingonberry",
  "Loganberry",
  "Durian",
  "Honeydew Melon",
  "Persimmon",
  "Nectarine",
  "Quince",
  "Medlar fruit",
  "Pomelo",
  "Rambutan",
  "Mangosteen",
  "Soursop",
  "Ugli fruit",
  "Salak (Snake Fruit)",
  "Acai Berry",
  "Buddha's Hand Fruit",
  "Blueberry",
];

const findFruit = (allFruitsName, fruitName) => {
  for (let i = 0; i < allFruitsName.length; i++) {
    if (fruitName == allFruitsName[i]) {
      console.log(`Found ${fruitName}`);
    }
  }

  for (let i = 0; i < allFruitsName.length; i++) {
    if (fruitName == allFruitsName[i]) {
      console.log(`Found ${fruitName} - 2`);
    }
  }

  // n + n = 2n => O(2n)
  // Drop the constant so it becomes O(n)
};

findFruit(fruits, "Acai Berry");
