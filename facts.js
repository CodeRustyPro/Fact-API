function getRandomItem(arr) {
  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);

  // get random item
  const item = arr[randomIndex];

  return item;
}

const array = [
  "McDonald’s once made bubblegum-flavored broccoli",
  "A cow-bison hybrid is called a “beefalo”",
  "Scotland has 421 words for “snow”",
  "Armadillo shells are bulletproof",
  "Firefighters use wetting agents to make water wetter",
  "Cats have fewer toes on their back paws",
  "Kleenex tissues were originally intended for gas masks",
  "Blue whales eat half a million calories in one mouthful",
  "That tiny pocket in jeans was designed to store pocket watches",
  "Turkeys can blush",
  "Most Disney characters wear gloves to keep animation simple",
  "The man with the world’s deepest voice can make sounds humans can’t hear",
  "The current American flag was designed by a high school student",
  "Cows don’t have upper front teeth",
  "Thanks to 3D printing, NASA can basically “email” tools to astronauts",
  "Only a quarter of the Sahara Desert is sandy",
  "Bananas grow upside-down",
  "There were active volcanoes on the moon when dinosaurs were alive",
  "Dogs sniff good smells with their left nostril",
  "Avocados were named after reproductive organs",
  "T. S. Eliot wore green makeup",
  "The word “fizzle” started as a type of fart",
  "You only have two body parts that never stop growing, Your Noses and Ears...",
  "No number before 1,000 contains the letter A and No number before 1 billion contain a B.",
  "You can thank the Greeks for calling Christmas “Xmas”",
  "Mercedes invented a car controlled by joystick",
  "The CIA headquarters has its own Starbucks, but baristas don’t write names on the cups",
  "Giraffe tongues can be 20 inches long",
  "The world’s longest French fry is 34-inches long",
  "On the South Atlantic island of Tristan da Cunha, potatoes were once used as currency.",
  "The strawberry is the only fruit that bears seeds on the outside.",
  "The double coconut palm produced the biggest seed in the world: 45 pounds.",
  "Ice cream was once called “cream ice.”",
  "Pound cake is so called because the recipes once called for a pound of butter, a pound of sugar, a pound of eggs and a pound of flour.",
  "Ice Cream was invented in China",
  "Carrots weren't always orange: they were once exclusively purple. ",
  "Apples float because they are one quarter air! ",
  "Abe Lincoln was a professional wrestler long before he became the 16th President of the United States. ",
  "Frida Kahlo created 143 paintings. Of these, 55 were self-portraits. ",
  "There are 2,000 thunderstorms on Earth every minute.",
  "The US gets over 1200 tornadoes a year.",
  "The fastest recorded raindrop was 18 mph! ",
  "It can be too warm to snow, but never too cold. ",
  "Peanuts aren’t technically nuts",
  "The first oranges weren’t orange",
  "There’s only one letter that doesn’t appear in any U.S. state name and that is a Q",
];
var fact = document.getElementById("fact");
const result = getRandomItem(array);
console.log(result);
fact.innerHTML = result;
