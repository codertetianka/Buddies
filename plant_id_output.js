// Example API call output to refer to
const plantIdApiOutput = {
  countable: true,
  custom_id: null,
  fail_cause: null,
  feedback: null,
  finished_datetime: 1708603317.708228,
  id: 1005445115,
  images: [
    {
      file_name: "d0b1b97fa05548a988916c0c91ca22d3.jpg",
      url: "https://plant.id/media/imgs/d0b1b97fa05548a988916c0c91ca22d3.jpg",
    },
  ],
  is_plant: false,
  is_plant_probability: 0.0034289344,
  meta_data: {
    date: "2024-02-22",
    datetime: "2024-02-22",
    latitude: null,
    longitude: null,
  },
  modifiers: [],
  secret: "NaQ3pJF7PDC7Y3a",
  suggestions: [
    {
      confirmed: false,
      id: 100544511500,
      plant_details: [Object],
      plant_name: "Helvella",
      probability: 0.0409,
    },
    {
      confirmed: false,
      id: 100544511501,
      plant_details: [Object],
      plant_name: "Marasmius",
      probability: 0.0379,
    },
    {
      confirmed: false,
      id: 100544511502,
      plant_details: [Object],
      plant_name: "Peziza",
      probability: 0.0345,
    },
    {
      confirmed: false,
      id: 100544511503,
      plant_details: [Object],
      plant_name: "Pinus pinea",
      probability: 0.0196,
    },
    {
      confirmed: false,
      id: 100544511504,
      plant_details: [Object],
      plant_name: "Leucanthemum vulgare",
      probability: 0.0184,
    },
    {
      confirmed: false,
      id: 100544511505,
      plant_details: [Object],
      plant_name: "Psilocybe",
      probability: 0.0105,
    },
  ],
  uploaded_datetime: 1708603316.801836,
};

// Example of suggested plants output
const suggestionsExample = [
  {
    confirmed: false,
    id: 100545452600,
    plant_details: {
      language: "en",
      scientific_name: "Monstera deliciosa",
      structured_name: [Object],
    },
    plant_name: "Monstera deliciosa",
    probability: 0.99,
  },
];

// Example of plant details output
const plantDetailsExample = {
  language: "en",
  scientific_name: "Monstera deliciosa",
  structured_name: { genus: "monstera", species: "deliciosa" },
};

// Example of structured name
const structuredNameExample = { genus: "monstera", species: "deliciosa" };

// Suggestions

const newOutput = [
  {
    confirmed: false,
    id: 100549384000,
    plant_details: {
      common_names: [Array],
      language: "en",
      scientific_name: "Rosa chinensis",
      structured_name: [Object],
    },
    plant_name: "Rosa chinensis",
    probability: 0.3684,
    similar_images: [[Object], [Object]],
  },
  {
    confirmed: false,
    id: 100549384001,
    plant_details: {
      common_names: [Array],
      language: "en",
      scientific_name: "Rosa gallica",
      structured_name: [Object],
    },
    plant_name: "Rosa gallica",
    probability: 0.2395,
    similar_images: [[Object], [Object]],
  },
  {
    confirmed: false,
    id: 100549384002,
    plant_details: {
      common_names: [Array],
      language: "en",
      scientific_name: "Rosa × odorata",
      structured_name: [Object],
    },
    plant_name: "Rosa × odorata",
    probability: 0.1466,
    similar_images: [[Object], [Object]],
  },
  {
    confirmed: false,
    id: 100549384003,
    plant_details: {
      common_names: [Array],
      language: "en",
      scientific_name: "Rosa pendulina",
      structured_name: [Object],
    },
    plant_name: "Rosa pendulina",
    probability: 0.0368,
    similar_images: [[Object], [Object]],
  },
  {
    confirmed: false,
    id: 100549384004,
    plant_details: {
      common_names: [Array],
      language: "en",
      scientific_name: "Rosa lucieae",
      structured_name: [Object],
    },
    plant_name: "Rosa lucieae",
    probability: 0.0328,
    similar_images: [[Object], [Object]],
  },
  {
    confirmed: false,
    id: 100549384005,
    plant_details: {
      common_names: null,
      language: "en",
      scientific_name: "Rosa pouzinii",
      structured_name: [Object],
    },
    plant_name: "Rosa pouzinii",
    probability: 0.0302,
    similar_images: [[Object], [Object]],
  },
  {
    confirmed: false,
    id: 100549384006,
    plant_details: {
      common_names: [Array],
      language: "en",
      scientific_name: "Rosa canina",
      structured_name: [Object],
    },
    plant_name: "Rosa canina",
    probability: 0.0185,
    similar_images: [[Object], [Object]],
  },
  {
    confirmed: false,
    id: 100549384007,
    plant_details: {
      common_names: [Array],
      language: "en",
      scientific_name: "Rosa sempervirens",
      structured_name: [Object],
    },
    plant_name: "Rosa sempervirens",
    probability: 0.0182,
    similar_images: [[Object], [Object]],
  },
  {
    confirmed: false,
    id: 100549384008,
    plant_details: {
      common_names: [Array],
      language: "en",
      scientific_name: "Rosa glauca",
      structured_name: [Object],
    },
    plant_name: "Rosa glauca",
    probability: 0.012,
    similar_images: [[Object], [Object]],
  },
];

// first suggestion

const firstSuggestionSimilarImages = [
  {
    citation: "Fejul Xeto",
    id: "5ceabfdd1b10047a747e91635116f48ab326eb7d",
    license_name: "CC BY-SA 4.0",
    license_url: "https://creativecommons.org/licenses/by-sa/4.0/",
    similarity: 0.615,
    url: "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/3/5ce/abfdd1b10047a747e91635116f48ab326eb7d.jpeg",
    url_small:
      "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/3/5ce/abfdd1b10047a747e91635116f48ab326eb7d.small.jpeg",
  },
  {
    citation: "1",
    id: "a9ed24bd73117606ca72cfae8fed4df28131491b",
    license_name: "CC BY-SA 4.0",
    license_url: "https://creativecommons.org/licenses/by-sa/4.0/",
    similarity: 0.563,
    url: "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/3/a9e/d24bd73117606ca72cfae8fed4df28131491b.jpeg",
    url_small:
      "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/3/a9e/d24bd73117606ca72cfae8fed4df28131491b.small.jpeg",
  },
];
