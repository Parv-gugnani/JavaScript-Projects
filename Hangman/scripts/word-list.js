const wordList = [
  {
    word: "guitar",
    hint: "A musical instrument with strings",
  },
  {
    word: "sunflower",
    hint: "A tall, yellow flower that follows the sun",
  },
  {
    word: "elephant",
    hint: "A large, gray mammal with a trunk",
  },
  {
    word: "pizza",
    hint: "A popular Italian dish with cheese and toppings",
  },
  {
    word: "mountain",
    hint: "A large landform that rises steeply above its surroundings",
  },
  {
    word: "computer",
    hint: "An electronic device used for processing data",
  },
  {
    word: "bicycle",
    hint: "A two-wheeled vehicle powered by pedals",
  },
  {
    word: "ocean",
    hint: "A vast body of saltwater covering most of the Earth's surface",
  },
  {
    word: "book",
    hint: "A written or printed work consisting of pages bound together",
  },
  {
    word: "camera",
    hint: "A device used to capture photographs or record videos",
  },
  {
    word: "butterfly",
    hint: "A colorful insect with delicate wings",
  },
  {
    word: "telephone",
    hint: "A communication device for voice conversations",
  },
  {
    word: "moon",
    hint: "A natural satellite that orbits around a planet",
  },
  {
    word: "garden",
    hint: "An outdoor space for growing plants and flowers",
  },
  {
    word: "chocolate",
    hint: "A sweet food made from cocoa beans",
  },
  {
    word: "fireplace",
    hint: "A structure for containing a fire, usually in a home",
  },
  {
    word: "telescope",
    hint: "An optical instrument for observing distant objects",
  },
  {
    word: "jungle",
    hint: "A dense, tropical forest with lush vegetation",
  },
  {
    word: "keyboard",
    hint: "A set of keys for inputting text or commands on a computer",
  },
  {
    word: "giraffe",
    hint: "A tall, long-necked African mammal",
  },
  {
    word: "sandcastle",
    hint: "A sculpture made of sand on the beach",
  },
  {
    word: "volcano",
    hint: "A mountain that erupts hot lava, ash, and gases",
  },
  {
    word: "rainbow",
    hint: "A meteorological phenomenon with a spectrum of colors",
  },
  {
    word: "ballet",
    hint: "A graceful form of dance",
  },
  {
    word: "umbrella",
    hint: "A device used to protect from rain or sunlight",
  },
  {
    word: "penguin",
    hint: "A flightless bird found in the Southern Hemisphere",
  },
  {
    word: "candle",
    hint: "A source of light consisting of wax and a wick",
  },
  {
    word: "whale",
    hint: "A large marine mammal that lives in the ocean",
  },
  {
    word: "forest",
    hint: "A large area covered chiefly with trees and undergrowth",
  },
  {
    word: "spider",
    hint: "An arachnid with eight legs and silk-producing glands",
  },
  {
    word: "balloon",
    hint: "An inflatable rubber bag often used for decoration",
  },
  {
    word: "dolphin",
    hint: "A highly intelligent marine mammal",
  },
  {
    word: "tiger",
    hint: "A large, carnivorous feline with distinctive stripes",
  },
  {
    word: "globe",
    hint: "A spherical model of the Earth or celestial body",
  },
  {
    word: "cactus",
    hint: "A desert plant with spines and succulent stems",
  },
  {
    word: "rainforest",
    hint: "A lush, dense forest in a tropical region with heavy rainfall",
  },
  {
    word: "raindrop",
    hint: "A single drop of rainwater",
  },
  {
    word: "airplane",
    hint: "A powered flying vehicle with fixed wings and jet engines",
  },
  {
    word: "guitarist",
    hint: "A person who plays the guitar",
  },
  {
    word: "astronaut",
    hint: "A person trained to travel and work in outer space",
  },
  {
    word: "carousel",
    hint: "A rotating platform with seats for amusement rides",
  },
  {
    word: "oasis",
    hint: "A fertile area in a desert with water and vegetation",
  },
  {
    word: "chimney",
    hint: "A vertical structure for venting smoke from a fireplace",
  },
  {
    word: "sunset",
    hint: "The daily disappearance of the sun below the horizon",
  },
  {
    word: "waterfall",
    hint: "A cascade of water falling from a height",
  },
  {
    word: "painting",
    hint: "A work of art created with paints on a canvas",
  },
  {
    word: "butterfly",
    hint: "A colorful insect with delicate wings",
  },
  {
    word: "telephone",
    hint: "A communication device for voice conversations",
  },
  {
    word: "moon",
    hint: "A natural satellite that orbits around a planet",
  },
  {
    word: "garden",
    hint: "An outdoor space for growing plants and flowers",
  },
  {
    word: "chocolate",
    hint: "A sweet food made from cocoa beans",
  },
  {
    word: "fireplace",
    hint: "A structure for containing a fire, usually in a home",
  },
  {
    word: "telescope",
    hint: "An optical instrument for observing distant objects",
  },
  {
    word: "jungle",
    hint: "A dense, tropical forest with lush vegetation",
  },
  {
    word: "keyboard",
    hint: "A set of keys for inputting text or commands on a computer",
  },
  {
    word: "giraffe",
    hint: "A tall, long-necked African mammal",
  },
  {
    word: "sandcastle",
    hint: "A sculpture made of sand on the beach",
  },
  {
    word: "volcano",
    hint: "A mountain that erupts hot lava, ash, and gases",
  },
  {
    word: "rainbow",
    hint: "A meteorological phenomenon with a spectrum of colors",
  },
  {
    word: "ballet",
    hint: "A graceful form of dance",
  },
  {
    word: "umbrella",
    hint: "A device used to protect from rain or sunlight",
  },
  {
    word: "penguin",
    hint: "A flightless bird found in the Southern Hemisphere",
  },
  {
    word: "candle",
    hint: "A source of light consisting of wax and a wick",
  },
  {
    word: "whale",
    hint: "A large marine mammal that lives in the ocean",
  },
  {
    word: "forest",
    hint: "A large area covered chiefly with trees and undergrowth",
  },
  {
    word: "spider",
    hint: "An arachnid with eight legs and silk-producing glands",
  },
  {
    word: "balloon",
    hint: "An inflatable rubber bag often used for decoration",
  },
  {
    word: "dolphin",
    hint: "A highly intelligent marine mammal",
  },
  {
    word: "tiger",
    hint: "A large, carnivorous feline with distinctive stripes",
  },
  {
    word: "globe",
    hint: "A spherical model of the Earth or celestial body",
  },
  {
    word: "cactus",
    hint: "A desert plant with spines and succulent stems",
  },
  {
    word: "rainforest",
    hint: "A lush, dense forest in a tropical region with heavy rainfall",
  },
  {
    word: "raindrop",
    hint: "A single drop of rainwater",
  },
  {
    word: "airplane",
    hint: "A powered flying vehicle with fixed wings and jet engines",
  },
  {
    word: "guitarist",
    hint: "A person who plays the guitar",
  },
  {
    word: "astronaut",
    hint: "A person trained to travel and work in outer space",
  },
  {
    word: "carousel",
    hint: "A rotating platform with seats for amusement rides",
  },
  {
    word: "oasis",
    hint: "A fertile area in a desert with water and vegetation",
  },
  {
    word: "chimney",
    hint: "A vertical structure for venting smoke from a fireplace",
  },
  {
    word: "sunset",
    hint: "The daily disappearance of the sun below the horizon",
  },
  {
    word: "waterfall",
    hint: "A cascade of water falling from a height",
  },
  {
    word: "painting",
    hint: "A work of art created with paints on a canvas",
  },
];
