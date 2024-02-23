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
