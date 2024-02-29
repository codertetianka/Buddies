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

// Plant list output from perenials api

export const plantListExample = [
  {
    common_name: "flowering-maple",
    cycle: "Perennial",
    default_image: {
      license: 4,
      license_name: "Attribution License",
      license_url: "https://creativecommons.org/licenses/by/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/425_abutilon_hybridum/medium/24527654869_ac712f58c7_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/425_abutilon_hybridum/og/24527654869_ac712f58c7_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/425_abutilon_hybridum/regular/24527654869_ac712f58c7_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/425_abutilon_hybridum/small/24527654869_ac712f58c7_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/425_abutilon_hybridum/thumbnail/24527654869_ac712f58c7_b.jpg",
    },
    id: 425,
    other_name: [],
    scientific_name: ["Abutilon hybridum"],
    sunlight: ["full sun", "part shade"],
    watering: "Frequent",
  },
  {
    common_name: "flowering-maple",
    cycle: "Perennial",
    default_image: {
      license: 451,
      license_name: "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
      license_url: "https://creativecommons.org/publicdomain/zero/1.0/",
      medium_url:
        "https://perenual.com/storage/species_image/426_abutilon_hybridum_bella_red/medium/abutilon-mallow-flower-red.jpg",
      original_url:
        "https://perenual.com/storage/species_image/426_abutilon_hybridum_bella_red/og/abutilon-mallow-flower-red.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/426_abutilon_hybridum_bella_red/regular/abutilon-mallow-flower-red.jpg",
      small_url:
        "https://perenual.com/storage/species_image/426_abutilon_hybridum_bella_red/small/abutilon-mallow-flower-red.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/426_abutilon_hybridum_bella_red/thumbnail/abutilon-mallow-flower-red.jpg",
    },
    id: 426,
    other_name: [],
    scientific_name: ["Abutilon hybridum 'Bella Red'"],
    sunlight: ["full sun", "part shade"],
    watering: "Average",
  },
  {
    common_name: "flowering-maple",
    cycle: "Perennial",
    default_image: {
      license: 45,
      license_name: "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
      license_url: "https://creativecommons.org/licenses/by-sa/3.0/deed.en",
      medium_url:
        "https://perenual.com/storage/species_image/427_abutilon_moonchimes/medium/Abutilon_x_hybridum_27Moonchimes27_Flower_2800px.jpg",
      original_url:
        "https://perenual.com/storage/species_image/427_abutilon_moonchimes/og/Abutilon_x_hybridum_27Moonchimes27_Flower_2800px.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/427_abutilon_moonchimes/regular/Abutilon_x_hybridum_27Moonchimes27_Flower_2800px.jpg",
      small_url:
        "https://perenual.com/storage/species_image/427_abutilon_moonchimes/small/Abutilon_x_hybridum_27Moonchimes27_Flower_2800px.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/427_abutilon_moonchimes/thumbnail/Abutilon_x_hybridum_27Moonchimes27_Flower_2800px.jpg",
    },
    id: 427,
    other_name: [],
    scientific_name: ["Abutilon 'Moonchimes'"],
    sunlight: ["full sun", "part shade"],
    watering: "Average",
  },
  {
    common_name: "flowering-maple",
    cycle: "Perennial",
    default_image: {
      license: 45,
      license_name: "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
      license_url: "https://creativecommons.org/licenses/by-sa/3.0/deed.en",
      medium_url:
        "https://perenual.com/storage/species_image/428_abutilon_pictum_gold_dust/medium/Redvein_Abutilon.jpg",
      original_url:
        "https://perenual.com/storage/species_image/428_abutilon_pictum_gold_dust/og/Redvein_Abutilon.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/428_abutilon_pictum_gold_dust/regular/Redvein_Abutilon.jpg",
      small_url:
        "https://perenual.com/storage/species_image/428_abutilon_pictum_gold_dust/small/Redvein_Abutilon.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/428_abutilon_pictum_gold_dust/thumbnail/Redvein_Abutilon.jpg",
    },
    id: 428,
    other_name: [],
    scientific_name: ["Abutilon pictum 'Gold Dust'"],
    sunlight: ["full sun"],
    watering: "Average",
  },
  {
    common_name: "Jacob's coat",
    cycle: "Perennial",
    default_image: {
      license: 4,
      license_name: "Attribution License",
      license_url: "https://creativecommons.org/licenses/by/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/434_acalypha_wilkesiana/medium/24945289366_5035e5d0a9_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/434_acalypha_wilkesiana/og/24945289366_5035e5d0a9_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/434_acalypha_wilkesiana/regular/24945289366_5035e5d0a9_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/434_acalypha_wilkesiana/small/24945289366_5035e5d0a9_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/434_acalypha_wilkesiana/thumbnail/24945289366_5035e5d0a9_b.jpg",
    },
    id: 434,
    other_name: [],
    scientific_name: ["Acalypha wilkesiana"],
    sunlight: ["full sun", "part shade"],
    watering: "Frequent",
  },
  {
    common_name: "hot water plant",
    cycle: "Herbaceous Perennial",
    default_image: null,
    id: 502,
    other_name: [],
    scientific_name: ["Achimenes (group)"],
    sunlight: ["part shade"],
    watering: "Average",
  },
  {
    common_name: "desert rose",
    cycle: "Perennial",
    default_image: {
      license: 5,
      license_name: "Attribution-ShareAlike License",
      license_url: "https://creativecommons.org/licenses/by-sa/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/540_adenium_obesum/medium/9244335137_6d662ed77c_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/540_adenium_obesum/og/9244335137_6d662ed77c_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/540_adenium_obesum/regular/9244335137_6d662ed77c_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/540_adenium_obesum/small/9244335137_6d662ed77c_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/540_adenium_obesum/thumbnail/9244335137_6d662ed77c_b.jpg",
    },
    id: 540,
    other_name: [],
    scientific_name: ["Adenium obesum"],
    sunlight: ["full sun"],
    watering: "Minimum",
  },
  {
    common_name: "maidenhair fern",
    cycle: "Perennial",
    default_image: {
      license: 4,
      license_name: "Attribution License",
      license_url: "https://creativecommons.org/licenses/by/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/543_adiantum_capillus-veneris/medium/49636882698_cb4fa4c685_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/543_adiantum_capillus-veneris/og/49636882698_cb4fa4c685_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/543_adiantum_capillus-veneris/regular/49636882698_cb4fa4c685_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/543_adiantum_capillus-veneris/small/49636882698_cb4fa4c685_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/543_adiantum_capillus-veneris/thumbnail/49636882698_cb4fa4c685_b.jpg",
    },
    id: 543,
    other_name: ["Southern Maidenhair", "Venus' Hair Fern", "Venus' Hair Fern"],
    scientific_name: ["Adiantum capillus-veneris"],
    sunlight: ["part shade", "part sun/part shade"],
    watering: "Average",
  },
  {
    common_name: "delta maidenhair fern",
    cycle: "Perennial",
    default_image: {
      license: 4,
      license_name: "Attribution License",
      license_url: "https://creativecommons.org/licenses/by/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/546_adiantum_raddianum/medium/48134564587_c4562175cb_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/546_adiantum_raddianum/og/48134564587_c4562175cb_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/546_adiantum_raddianum/regular/48134564587_c4562175cb_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/546_adiantum_raddianum/small/48134564587_c4562175cb_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/546_adiantum_raddianum/thumbnail/48134564587_c4562175cb_b.jpg",
    },
    id: 546,
    other_name: [],
    scientific_name: ["Adiantum raddianum"],
    sunlight: ["part shade"],
    watering: "Average",
  },
  {
    common_name: "urn plant",
    cycle: "Perennial",
    default_image: {
      license: 4,
      license_name: "Attribution License",
      license_url: "https://creativecommons.org/licenses/by/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/549_aechmea_fasciata/medium/51446529161_03b99a881f_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/549_aechmea_fasciata/og/51446529161_03b99a881f_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/549_aechmea_fasciata/regular/51446529161_03b99a881f_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/549_aechmea_fasciata/small/51446529161_03b99a881f_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/549_aechmea_fasciata/thumbnail/51446529161_03b99a881f_b.jpg",
    },
    id: 549,
    other_name: ["silver vase"],
    scientific_name: ["Aechmea fasciata"],
    sunlight: ["part sun/part shade"],
    watering: "Average",
  },
  {
    common_name: "stalked aeonium",
    cycle: "Herbaceous Perennial",
    default_image: {
      license: 44,
      license_name: "Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)",
      license_url: "https://creativecommons.org/licenses/by-sa/4.0/",
      medium_url:
        "https://perenual.com/storage/species_image/551_aeonium_undulatum/medium/023e2628848775ea95af34a39eaee4d60fab11ed.jpg",
      original_url:
        "https://perenual.com/storage/species_image/551_aeonium_undulatum/og/023e2628848775ea95af34a39eaee4d60fab11ed.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/551_aeonium_undulatum/regular/023e2628848775ea95af34a39eaee4d60fab11ed.jpg",
      small_url:
        "https://perenual.com/storage/species_image/551_aeonium_undulatum/small/023e2628848775ea95af34a39eaee4d60fab11ed.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/551_aeonium_undulatum/thumbnail/023e2628848775ea95af34a39eaee4d60fab11ed.jpg",
    },
    id: 551,
    other_name: [],
    scientific_name: ["Aeonium undulatum"],
    sunlight: ["full sun", "part shade"],
    watering: "Average",
  },
  {
    common_name: "lipstick plant",
    cycle: "Perennial",
    default_image: {
      license: 4,
      license_name: "Attribution License",
      license_url: "https://creativecommons.org/licenses/by/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/552_aeschynanthus_radicans/medium/29949422675_2671589cdf_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/552_aeschynanthus_radicans/og/29949422675_2671589cdf_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/552_aeschynanthus_radicans/regular/29949422675_2671589cdf_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/552_aeschynanthus_radicans/small/29949422675_2671589cdf_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/552_aeschynanthus_radicans/thumbnail/29949422675_2671589cdf_b.jpg",
    },
    id: 552,
    other_name: [],
    scientific_name: ["Aeschynanthus radicans"],
    sunlight: ["part shade", "full sun"],
    watering: "Average",
  },
  {
    common_name: "Philippine evergreen",
    cycle: "Herbaceous Perennial",
    default_image: {
      license: 4,
      license_name: "Attribution License",
      license_url: "https://creativecommons.org/licenses/by/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/625_aglaonema_commutatum/medium/24798632751_3a039ecbc6_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/625_aglaonema_commutatum/og/24798632751_3a039ecbc6_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/625_aglaonema_commutatum/regular/24798632751_3a039ecbc6_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/625_aglaonema_commutatum/small/24798632751_3a039ecbc6_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/625_aglaonema_commutatum/thumbnail/24798632751_3a039ecbc6_b.jpg",
    },
    id: 625,
    other_name: [],
    scientific_name: ["Aglaonema commutatum"],
    sunlight: ["part shade", "full shade"],
    watering: "Average",
  },
  {
    common_name: "Chinese evegreen",
    cycle: "Herbaceous Perennial",
    default_image: {
      license: 45,
      license_name: "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
      license_url: "https://creativecommons.org/licenses/by-sa/3.0/deed.en",
      medium_url:
        "https://perenual.com/storage/species_image/626_aglaonema_cutlass/medium/2560px-Chinese_Evergreen_28Aglaonema_nitidum_27Silver_Queen2729_1.jpg",
      original_url:
        "https://perenual.com/storage/species_image/626_aglaonema_cutlass/og/2560px-Chinese_Evergreen_28Aglaonema_nitidum_27Silver_Queen2729_1.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/626_aglaonema_cutlass/regular/2560px-Chinese_Evergreen_28Aglaonema_nitidum_27Silver_Queen2729_1.jpg",
      small_url:
        "https://perenual.com/storage/species_image/626_aglaonema_cutlass/small/2560px-Chinese_Evergreen_28Aglaonema_nitidum_27Silver_Queen2729_1.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/626_aglaonema_cutlass/thumbnail/2560px-Chinese_Evergreen_28Aglaonema_nitidum_27Silver_Queen2729_1.jpg",
    },
    id: 626,
    other_name: [],
    scientific_name: ["Aglaonema 'Cutlass'"],
    sunlight: ["part shade", "full shade"],
    watering: "Average",
  },
  {
    common_name: "Chinese evergreen",
    cycle: "Herbaceous Perennial",
    default_image: null,
    id: 627,
    other_name: [],
    scientific_name: ["Aglaonema 'Red Gold'"],
    sunlight: ["part sun/part shade", "part shade"],
    watering: "Average",
  },
  {
    common_name: "Chinese evergreen",
    cycle: "Herbaceous Perennial",
    default_image: {
      license: 4,
      license_name: "Attribution License",
      license_url: "https://creativecommons.org/licenses/by/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/628_aglaonema_silver_queen/medium/24798632751_3a039ecbc6_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/628_aglaonema_silver_queen/og/24798632751_3a039ecbc6_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/628_aglaonema_silver_queen/regular/24798632751_3a039ecbc6_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/628_aglaonema_silver_queen/small/24798632751_3a039ecbc6_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/628_aglaonema_silver_queen/thumbnail/24798632751_3a039ecbc6_b.jpg",
    },
    id: 628,
    other_name: [],
    scientific_name: ["Aglaonema 'Silver Queen'"],
    sunlight: ["part shade", "full shade"],
    watering: "Average",
  },
  {
    common_name: "onion",
    cycle: "Perennial",
    default_image: {
      license: 4,
      license_name: "Attribution License",
      license_url: "https://creativecommons.org/licenses/by/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/667_allium_cepa/medium/24466615444_a161c175d3_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/667_allium_cepa/og/24466615444_a161c175d3_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/667_allium_cepa/regular/24466615444_a161c175d3_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/667_allium_cepa/small/24466615444_a161c175d3_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/667_allium_cepa/thumbnail/24466615444_a161c175d3_b.jpg",
    },
    id: 667,
    other_name: ["spring onion", "shallot"],
    scientific_name: ["Allium cepa"],
    sunlight: ["full sun"],
    watering: "Average",
  },
  {
    common_name: "elephant's ear",
    cycle: "Perennial",
    default_image: {
      license: 4,
      license_name: "Attribution License",
      license_url: "https://creativecommons.org/licenses/by/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/710_alocasia_amazonica/medium/24444063964_a3054131aa_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/710_alocasia_amazonica/og/24444063964_a3054131aa_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/710_alocasia_amazonica/regular/24444063964_a3054131aa_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/710_alocasia_amazonica/small/24444063964_a3054131aa_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/710_alocasia_amazonica/thumbnail/24444063964_a3054131aa_b.jpg",
    },
    id: 710,
    other_name: [],
    scientific_name: ["Alocasia amazonica"],
    sunlight: ["part shade", "part sun/part shade"],
    watering: "Average",
  },
  {
    common_name: "Amazonian elephant's ear",
    cycle: "Perennial",
    default_image: {
      license: 451,
      license_name: "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
      license_url: "https://creativecommons.org/publicdomain/zero/1.0/",
      medium_url:
        "https://perenual.com/storage/species_image/711_alocasia_amazonica_polly/medium/pexels-photo-12419491.jpg",
      original_url:
        "https://perenual.com/storage/species_image/711_alocasia_amazonica_polly/og/pexels-photo-12419491.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/711_alocasia_amazonica_polly/regular/pexels-photo-12419491.jpg",
      small_url:
        "https://perenual.com/storage/species_image/711_alocasia_amazonica_polly/small/pexels-photo-12419491.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/711_alocasia_amazonica_polly/thumbnail/pexels-photo-12419491.jpg",
    },
    id: 711,
    other_name: [],
    scientific_name: ["Alocasia amazonica 'Polly'"],
    sunlight: ["part shade"],
    watering: "Frequent",
  },
  {
    common_name: "elephant's ear",
    cycle: "Perennial",
    default_image: {
      license: 45,
      license_name: "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
      license_url: "https://creativecommons.org/licenses/by-sa/3.0/deed.en",
      medium_url:
        "https://perenual.com/storage/species_image/712_alocasia_frydek/medium/Alocasia_micholitziana.jpg",
      original_url:
        "https://perenual.com/storage/species_image/712_alocasia_frydek/og/Alocasia_micholitziana.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/712_alocasia_frydek/regular/Alocasia_micholitziana.jpg",
      small_url:
        "https://perenual.com/storage/species_image/712_alocasia_frydek/small/Alocasia_micholitziana.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/712_alocasia_frydek/thumbnail/Alocasia_micholitziana.jpg",
    },
    id: 712,
    other_name: [],
    scientific_name: ["Alocasia 'Frydek'"],
    sunlight: ["part shade"],
    watering: "Average",
  },
  {
    common_name: "elephant's ear",
    cycle: "Perennial",
    default_image: {
      license: 4,
      license_name: "Attribution License",
      license_url: "https://creativecommons.org/licenses/by/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/713_alocasia_group/medium/24444063964_a3054131aa_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/713_alocasia_group/og/24444063964_a3054131aa_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/713_alocasia_group/regular/24444063964_a3054131aa_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/713_alocasia_group/small/24444063964_a3054131aa_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/713_alocasia_group/thumbnail/24444063964_a3054131aa_b.jpg",
    },
    id: 713,
    other_name: [],
    scientific_name: ["Alocasia (group)"],
    sunlight: ["full sun", "part shade"],
    watering: "Average",
  },
  {
    common_name: "elephant's ear",
    cycle: "Perennial",
    default_image: {
      license: 5,
      license_name: "Attribution-ShareAlike License",
      license_url: "https://creativecommons.org/licenses/by-sa/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/714_alocasia_low_rider/medium/8415446715_799e70b503_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/714_alocasia_low_rider/og/8415446715_799e70b503_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/714_alocasia_low_rider/regular/8415446715_799e70b503_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/714_alocasia_low_rider/small/8415446715_799e70b503_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/714_alocasia_low_rider/thumbnail/8415446715_799e70b503_b.jpg",
    },
    id: 714,
    other_name: [],
    scientific_name: ["Alocasia LOW RIDER"],
    sunlight: ["full sun", "part shade"],
    watering: "Average",
  },
  {
    common_name: "giant elephant's ear",
    cycle: "Perennial",
    default_image: {
      license: 5,
      license_name: "Attribution-ShareAlike License",
      license_url: "https://creativecommons.org/licenses/by-sa/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/715_alocasia_macrorrhizos/medium/33234440338_8b31463973_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/715_alocasia_macrorrhizos/og/33234440338_8b31463973_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/715_alocasia_macrorrhizos/regular/33234440338_8b31463973_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/715_alocasia_macrorrhizos/small/33234440338_8b31463973_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/715_alocasia_macrorrhizos/thumbnail/33234440338_8b31463973_b.jpg",
    },
    id: 715,
    other_name: [],
    scientific_name: ["Alocasia macrorrhizos"],
    sunlight: ["part shade"],
    watering: "Average",
  },
  {
    common_name: "elephant's ear",
    cycle: "Perennial",
    default_image: null,
    id: 716,
    other_name: [],
    scientific_name: ["Alocasia 'Metalhead'"],
    sunlight: ["full sun", "part shade"],
    watering: "Average",
  },
  {
    common_name: "elephant's ear",
    cycle: "Perennial",
    default_image: {
      license: 4,
      license_name: "Attribution License",
      license_url: "https://creativecommons.org/licenses/by/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/717_alocasia_portora/medium/50513640218_140cd83c95_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/717_alocasia_portora/og/50513640218_140cd83c95_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/717_alocasia_portora/regular/50513640218_140cd83c95_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/717_alocasia_portora/small/50513640218_140cd83c95_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/717_alocasia_portora/thumbnail/50513640218_140cd83c95_b.jpg",
    },
    id: 717,
    other_name: [],
    scientific_name: ["Alocasia 'Portora'"],
    sunlight: ["full sun", "part shade"],
    watering: "Average",
  },
  {
    common_name: "elephant's ear",
    cycle: "Perennial",
    default_image: {
      license: 6,
      license_name: "Attribution-NoDerivs License",
      license_url: "https://creativecommons.org/licenses/by-nd/2.0/",
      original_url:
        "https://perenual.com/storage/species_image/718_alocasia_sarian/og/466458488_b9358efed2_z.jpg",
    },
    id: 718,
    other_name: [],
    scientific_name: ["Alocasia 'Sarian'"],
    sunlight: ["part sun/part shade"],
    watering: "Average",
  },
  {
    common_name: "aloe",
    cycle: "Herbaceous Perennial",
    default_image: {
      license: 5,
      license_name: "Attribution-ShareAlike License",
      license_url: "https://creativecommons.org/licenses/by-sa/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/721_aloe_harlana/medium/5582077315_8d613454aa_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/721_aloe_harlana/og/5582077315_8d613454aa_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/721_aloe_harlana/regular/5582077315_8d613454aa_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/721_aloe_harlana/small/5582077315_8d613454aa_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/721_aloe_harlana/thumbnail/5582077315_8d613454aa_b.jpg",
    },
    id: 721,
    other_name: [],
    scientific_name: ["Aloe harlana"],
    sunlight: ["part shade", "part sun/part shade"],
    watering: "Minimum",
  },
  {
    common_name: "aloe",
    cycle: "Perennial",
    default_image: {
      license: 4,
      license_name: "Attribution License",
      license_url: "https://creativecommons.org/licenses/by/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/727_aloe_suzannae/medium/23704519300_5ec1807143_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/727_aloe_suzannae/og/23704519300_5ec1807143_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/727_aloe_suzannae/regular/23704519300_5ec1807143_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/727_aloe_suzannae/small/23704519300_5ec1807143_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/727_aloe_suzannae/thumbnail/23704519300_5ec1807143_b.jpg",
    },
    id: 727,
    other_name: [],
    scientific_name: ["Aloe suzannae"],
    sunlight: ["full sun", "part sun/part shade"],
    watering: "Minimum",
  },
  {
    common_name: "aloe",
    cycle: "Herbaceous Perennial",
    default_image: {
      license: 5,
      license_name: "Attribution-ShareAlike License",
      license_url: "https://creativecommons.org/licenses/by-sa/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/728_aloe_vera/medium/52619084582_6ebcfe6a74_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/728_aloe_vera/og/52619084582_6ebcfe6a74_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/728_aloe_vera/regular/52619084582_6ebcfe6a74_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/728_aloe_vera/small/52619084582_6ebcfe6a74_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/728_aloe_vera/thumbnail/52619084582_6ebcfe6a74_b.jpg",
    },
    id: 728,
    other_name: [],
    scientific_name: ["Aloe vera"],
    sunlight: ["full sun"],
    watering: "Minimum",
  },
  {
    common_name: "Joseph's coat",
    cycle: "Herbaceous Perennial",
    default_image: {
      license: 4,
      license_name: "Attribution License",
      license_url: "https://creativecommons.org/licenses/by/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/747_alternanthera_ficoidea/medium/48756446498_fc5901c40d_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/747_alternanthera_ficoidea/og/48756446498_fc5901c40d_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/747_alternanthera_ficoidea/regular/48756446498_fc5901c40d_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/747_alternanthera_ficoidea/small/48756446498_fc5901c40d_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/747_alternanthera_ficoidea/thumbnail/48756446498_fc5901c40d_b.jpg",
    },
    id: 747,
    other_name: [],
    scientific_name: ["Alternanthera ficoidea"],
    sunlight: ["full sun", "part shade"],
    watering: "Frequent",
  },
];

const PlantListApiOutput = [
  {
    common_name: "European Silver Fir",
    cycle: "Perennial",
    default_image: {
      license: 45,
      license_name: "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
      license_url: "https://creativecommons.org/licenses/by-sa/3.0/deed.en",
      medium_url:
        "https://perenual.com/storage/species_image/1_abies_alba/medium/1536px-Abies_alba_SkalitC3A9.jpg",
      original_url:
        "https://perenual.com/storage/species_image/1_abies_alba/og/1536px-Abies_alba_SkalitC3A9.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/1_abies_alba/regular/1536px-Abies_alba_SkalitC3A9.jpg",
      small_url:
        "https://perenual.com/storage/species_image/1_abies_alba/small/1536px-Abies_alba_SkalitC3A9.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/1_abies_alba/thumbnail/1536px-Abies_alba_SkalitC3A9.jpg",
    },
    id: 1,
    other_name: ["Common Silver Fir"],
    scientific_name: ["Abies alba"],
    sunlight: ["full sun"],
    watering: "Frequent",
  },
  {
    common_name: "Pyramidalis Silver Fir",
    cycle: "Perennial",
    default_image: {
      license: 5,
      license_name: "Attribution-ShareAlike License",
      license_url: "https://creativecommons.org/licenses/by-sa/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/medium/49255769768_df55596553_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/og/49255769768_df55596553_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/regular/49255769768_df55596553_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/small/49255769768_df55596553_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/thumbnail/49255769768_df55596553_b.jpg",
    },
    id: 2,
    other_name: [],
    scientific_name: ["Abies alba 'Pyramidalis'"],
    sunlight: ["full sun"],
    watering: "Average",
  },
  {
    common_name: "White Fir",
    cycle: "Perennial",
    default_image: {
      license: 5,
      license_name: "Attribution-ShareAlike License",
      license_url: "https://creativecommons.org/licenses/by-sa/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/3_abies_concolor/medium/52292935430_f4f3b22614_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/3_abies_concolor/og/52292935430_f4f3b22614_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/3_abies_concolor/regular/52292935430_f4f3b22614_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/3_abies_concolor/small/52292935430_f4f3b22614_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/3_abies_concolor/thumbnail/52292935430_f4f3b22614_b.jpg",
    },
    id: 3,
    other_name: ["Silver Fir", "Concolor Fir", "Colorado Fir"],
    scientific_name: ["Abies concolor"],
    sunlight: ["Full sun", "part shade"],
    watering: "Average",
  },
  {
    common_name: "Candicans White Fir",
    cycle: "Perennial",
    default_image: {
      license: 5,
      license_name: "Attribution-ShareAlike License",
      license_url: "https://creativecommons.org/licenses/by-sa/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/4_abies_concolor_candicans/medium/49283844888_332c9e46f2_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/4_abies_concolor_candicans/og/49283844888_332c9e46f2_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/4_abies_concolor_candicans/regular/49283844888_332c9e46f2_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/4_abies_concolor_candicans/small/49283844888_332c9e46f2_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/4_abies_concolor_candicans/thumbnail/49283844888_332c9e46f2_b.jpg",
    },
    id: 4,
    other_name: ["Silver Fir", "Concolor Fir", "Colorado Fir"],
    scientific_name: ["Abies concolor 'Candicans'"],
    sunlight: ["full sun"],
    watering: "Average",
  },
  {
    common_name: "Fraser Fir",
    cycle: "Perennial",
    default_image: {
      license: 4,
      license_name: "Attribution License",
      license_url: "https://creativecommons.org/licenses/by/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/5_abies_fraseri/medium/36843539702_e80fc436e0_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/5_abies_fraseri/og/36843539702_e80fc436e0_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/5_abies_fraseri/regular/36843539702_e80fc436e0_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/5_abies_fraseri/small/36843539702_e80fc436e0_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/5_abies_fraseri/thumbnail/36843539702_e80fc436e0_b.jpg",
    },
    id: 5,
    other_name: ["Southern Fir"],
    scientific_name: ["Abies fraseri"],
    sunlight: ["full sun", "part shade", "filtered shade"],
    watering: "Frequent",
  },
  {
    common_name: "Golden Korean Fir",
    cycle: "Perennial",
    default_image: {
      license: 5,
      license_name: "Attribution-ShareAlike License",
      license_url: "https://creativecommons.org/licenses/by-sa/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/6_abies_koreana_aurea/medium/49235570926_99ec10781d_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/6_abies_koreana_aurea/og/49235570926_99ec10781d_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/6_abies_koreana_aurea/regular/49235570926_99ec10781d_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/6_abies_koreana_aurea/small/49235570926_99ec10781d_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/6_abies_koreana_aurea/thumbnail/49235570926_99ec10781d_b.jpg",
    },
    id: 6,
    other_name: [],
    scientific_name: ["Abies koreana 'Aurea'"],
    sunlight: ["Full sun", "part shade"],
    watering: "Average",
  },
  {
    common_name: "Alpine Fir",
    cycle: "Perennial",
    default_image: {
      license: 5,
      license_name: "Attribution-ShareAlike License",
      license_url: "https://creativecommons.org/licenses/by-sa/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/7_abies_lasiocarpa/medium/51002756843_74fae3c2fa_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/7_abies_lasiocarpa/og/51002756843_74fae3c2fa_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/7_abies_lasiocarpa/regular/51002756843_74fae3c2fa_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/7_abies_lasiocarpa/small/51002756843_74fae3c2fa_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/7_abies_lasiocarpa/thumbnail/51002756843_74fae3c2fa_b.jpg",
    },
    id: 7,
    other_name: ["Subalpine Fir", "Rocky Mountain Fir"],
    scientific_name: ["Abies lasiocarpa"],
    sunlight: ["full sun", "part shade"],
    watering: "Average",
  },
  {
    common_name: "Blue Spanish Fir",
    cycle: "Perennial",
    default_image: {
      license: 4,
      license_name: "Attribution License",
      license_url: "https://creativecommons.org/licenses/by/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/8_abies_pinsapo_glauca/medium/21657514018_c0d9fed9f4_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/8_abies_pinsapo_glauca/og/21657514018_c0d9fed9f4_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/8_abies_pinsapo_glauca/regular/21657514018_c0d9fed9f4_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/8_abies_pinsapo_glauca/small/21657514018_c0d9fed9f4_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/8_abies_pinsapo_glauca/thumbnail/21657514018_c0d9fed9f4_b.jpg",
    },
    id: 8,
    other_name: ["Glaucous Spanish Fir"],
    scientific_name: ["Abies pinsapo 'Glauca'"],
    sunlight: ["Full sun", "part shade"],
    watering: "Average",
  },
  {
    common_name: "Noble Fir",
    cycle: "Perennial",
    default_image: {
      license: 5,
      license_name: "Attribution-ShareAlike License",
      license_url: "https://creativecommons.org/licenses/by-sa/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/9_abies_procera/medium/49107504112_6bd7effb8b_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/9_abies_procera/og/49107504112_6bd7effb8b_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/9_abies_procera/regular/49107504112_6bd7effb8b_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/9_abies_procera/small/49107504112_6bd7effb8b_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/9_abies_procera/thumbnail/49107504112_6bd7effb8b_b.jpg",
    },
    id: 9,
    other_name: ["Red Fir", "White Fir"],
    scientific_name: ["Abies procera"],
    sunlight: ["full sun"],
    watering: "Average",
  },
  {
    common_name: "Johin Japanese Maple",
    cycle: "Perennial",
    default_image: {
      license: 451,
      license_name: "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
      license_url: "https://creativecommons.org/publicdomain/zero/1.0/",
      medium_url:
        "https://perenual.com/storage/species_image/10_acer_johin/medium/pexels-photo-2183508.jpg",
      original_url:
        "https://perenual.com/storage/species_image/10_acer_johin/og/pexels-photo-2183508.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/10_acer_johin/regular/pexels-photo-2183508.jpg",
      small_url:
        "https://perenual.com/storage/species_image/10_acer_johin/small/pexels-photo-2183508.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/10_acer_johin/thumbnail/pexels-photo-2183508.jpg",
    },
    id: 10,
    other_name: ["Red Full Moon Maple"],
    scientific_name: ["Acer 'Johin'"],
    sunlight: ["full sun", "part shade"],
    watering: "Average",
  },
  {
    common_name: "Snakebark Maple",
    cycle: "Perennial",
    default_image: {
      license: 5,
      license_name: "Attribution-ShareAlike License",
      license_url: "https://creativecommons.org/licenses/by-sa/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/11_acer_davidii/medium/6868591754_f4ac5b0510_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/11_acer_davidii/og/6868591754_f4ac5b0510_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/11_acer_davidii/regular/6868591754_f4ac5b0510_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/11_acer_davidii/small/6868591754_f4ac5b0510_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/11_acer_davidii/thumbnail/6868591754_f4ac5b0510_b.jpg",
    },
    id: 11,
    other_name: ["Father David's Maple", "Pere David's Maple"],
    scientific_name: ["Acer davidii"],
    sunlight: ["Full sun", "part shade"],
    watering: "Average",
  },
  {
    common_name: "Amur Maple",
    cycle: "Perennial",
    default_image: {
      license: 5,
      license_name: "Attribution-ShareAlike License",
      license_url: "https://creativecommons.org/licenses/by-sa/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/12_acer_ginnala/medium/10476032513_76ca899bc4_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/12_acer_ginnala/og/10476032513_76ca899bc4_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/12_acer_ginnala/regular/10476032513_76ca899bc4_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/12_acer_ginnala/small/10476032513_76ca899bc4_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/12_acer_ginnala/thumbnail/10476032513_76ca899bc4_b.jpg",
    },
    id: 12,
    other_name: [],
    scientific_name: ["Acer ginnala"],
    sunlight: ["full sun", "part shade"],
    watering: "Average",
  },
  {
    common_name: "Flame Amur Maple",
    cycle: "Perennial",
    default_image: {
      license: 451,
      license_name: "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
      license_url: "https://creativecommons.org/publicdomain/zero/1.0/",
      medium_url:
        "https://perenual.com/storage/species_image/13_acer_ginnala_flame/medium/pexels-photo-1649190.jpg",
      original_url:
        "https://perenual.com/storage/species_image/13_acer_ginnala_flame/og/pexels-photo-1649190.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/13_acer_ginnala_flame/regular/pexels-photo-1649190.jpg",
      small_url:
        "https://perenual.com/storage/species_image/13_acer_ginnala_flame/small/pexels-photo-1649190.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/13_acer_ginnala_flame/thumbnail/pexels-photo-1649190.jpg",
    },
    id: 13,
    other_name: [],
    scientific_name: ["Acer ginnala 'Flame'"],
    sunlight: ["full sun"],
    watering: "Frequent",
  },
  {
    common_name: "Red Rhapsody Amur Maple",
    cycle: "Perennial",
    default_image: {
      license: 451,
      license_name: "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
      license_url: "https://creativecommons.org/publicdomain/zero/1.0/",
      medium_url:
        "https://perenual.com/storage/species_image/14_acer_ginnala_mondy/medium/pexels-photo-1789879.jpg",
      original_url:
        "https://perenual.com/storage/species_image/14_acer_ginnala_mondy/og/pexels-photo-1789879.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/14_acer_ginnala_mondy/regular/pexels-photo-1789879.jpg",
      small_url:
        "https://perenual.com/storage/species_image/14_acer_ginnala_mondy/small/pexels-photo-1789879.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/14_acer_ginnala_mondy/thumbnail/pexels-photo-1789879.jpg",
    },
    id: 14,
    other_name: [],
    scientific_name: ["Acer ginnala 'Mondy'"],
    sunlight: ["full sun", "part shade"],
    watering: "Frequent",
  },
  {
    common_name: "Ruby Slippers Amur Maple",
    cycle: "Perennial",
    default_image: {
      license: 451,
      license_name: "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
      license_url: "https://creativecommons.org/publicdomain/zero/1.0/",
      medium_url:
        "https://perenual.com/storage/species_image/15_acer_ginnala_ruby_slippers/medium/pexels-photo-1640820.jpg",
      original_url:
        "https://perenual.com/storage/species_image/15_acer_ginnala_ruby_slippers/og/pexels-photo-1640820.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/15_acer_ginnala_ruby_slippers/regular/pexels-photo-1640820.jpg",
      small_url:
        "https://perenual.com/storage/species_image/15_acer_ginnala_ruby_slippers/small/pexels-photo-1640820.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/15_acer_ginnala_ruby_slippers/thumbnail/pexels-photo-1640820.jpg",
    },
    id: 15,
    other_name: [],
    scientific_name: ["Acer ginnala 'Ruby Slippers'"],
    sunlight: ["full sun", "part shade"],
    watering: "Frequent",
  },
  {
    common_name: "Paperbark Maple",
    cycle: "Perennial",
    default_image: {
      license: 5,
      license_name: "Attribution-ShareAlike License",
      license_url: "https://creativecommons.org/licenses/by-sa/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/16_acer_griseum/medium/5158906371_ed08a86876_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/16_acer_griseum/og/5158906371_ed08a86876_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/16_acer_griseum/regular/5158906371_ed08a86876_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/16_acer_griseum/small/5158906371_ed08a86876_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/16_acer_griseum/thumbnail/5158906371_ed08a86876_b.jpg",
    },
    id: 16,
    other_name: [],
    scientific_name: ["Acer griseum"],
    sunlight: ["Full sun", "part shade"],
    watering: "Average",
  },
  {
    common_name: "Fullmoon Maple",
    cycle: "Perennial",
    default_image: {
      license: 4,
      license_name: "Attribution License",
      license_url: "https://creativecommons.org/licenses/by/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/17_acer_japonicum/medium/7175475239_52543c51b3_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/17_acer_japonicum/og/7175475239_52543c51b3_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/17_acer_japonicum/regular/7175475239_52543c51b3_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/17_acer_japonicum/small/7175475239_52543c51b3_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/17_acer_japonicum/thumbnail/7175475239_52543c51b3_b.jpg",
    },
    id: 17,
    other_name: [],
    scientific_name: ["Acer japonicum"],
    sunlight: ["Full sun", "part shade"],
    watering: "Average",
  },
  {
    common_name: "Cutleaf Fullmoon Maple",
    cycle: "Perennial",
    default_image: {
      license: 4,
      license_name: "Attribution License",
      license_url: "https://creativecommons.org/licenses/by/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/18_acer_japonicum_aconitifolium/medium/23528789198_c419363323_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/18_acer_japonicum_aconitifolium/og/23528789198_c419363323_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/18_acer_japonicum_aconitifolium/regular/23528789198_c419363323_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/18_acer_japonicum_aconitifolium/small/23528789198_c419363323_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/18_acer_japonicum_aconitifolium/thumbnail/23528789198_c419363323_b.jpg",
    },
    id: 18,
    other_name: ["fernleaf full moon maple"],
    scientific_name: ["Acer japonicum 'Aconitifolium'"],
    sunlight: ["Full sun", "part shade"],
    watering: "Average",
  },
  {
    common_name: "Attaryi Fullmoon Maple*",
    cycle: "Perennial",
    default_image: {
      license: 451,
      license_name: "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
      license_url: "https://creativecommons.org/publicdomain/zero/1.0/",
      medium_url:
        "https://perenual.com/storage/species_image/19_acer_japonicum_attaryi/medium/pexels-photo-669323.jpg",
      original_url:
        "https://perenual.com/storage/species_image/19_acer_japonicum_attaryi/og/pexels-photo-669323.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/19_acer_japonicum_attaryi/regular/pexels-photo-669323.jpg",
      small_url:
        "https://perenual.com/storage/species_image/19_acer_japonicum_attaryi/small/pexels-photo-669323.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/19_acer_japonicum_attaryi/thumbnail/pexels-photo-669323.jpg",
    },
    id: 19,
    other_name: [],
    scientific_name: ["Acer japonicum 'Attaryi'"],
    sunlight: ["full sun", "part shade"],
    watering: "Average",
  },
  {
    common_name: "Golden Fullmoon Maple",
    cycle: "Perennial",
    default_image: {
      license: 45,
      license_name: "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
      license_url: "https://creativecommons.org/licenses/by-sa/3.0/deed.en",
      medium_url:
        "https://perenual.com/storage/species_image/20_acer_japonicum_aureum/medium/2560px-Acer_shirasawanum_27Aureum27.jpg",
      original_url:
        "https://perenual.com/storage/species_image/20_acer_japonicum_aureum/og/2560px-Acer_shirasawanum_27Aureum27.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/20_acer_japonicum_aureum/regular/2560px-Acer_shirasawanum_27Aureum27.jpg",
      small_url:
        "https://perenual.com/storage/species_image/20_acer_japonicum_aureum/small/2560px-Acer_shirasawanum_27Aureum27.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/20_acer_japonicum_aureum/thumbnail/2560px-Acer_shirasawanum_27Aureum27.jpg",
    },
    id: 20,
    other_name: [],
    scientific_name: ["Acer japonicum 'Aureum'"],
    sunlight: ["full sun", "part shade"],
    watering: "Average",
  },
  {
    common_name: "Emmett's Pumpkin Fullmoon Maple",
    cycle: "Perennial",
    default_image: {
      license: 45,
      license_name: "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
      license_url: "https://creativecommons.org/licenses/by-sa/3.0/deed.en",
      medium_url:
        "https://perenual.com/storage/species_image/21_acer_japonicum_emmetts_pumpkin/medium/Acer_shirasawanum_28golden_fullmoon_maple29_2_284633285838129.jpg",
      original_url:
        "https://perenual.com/storage/species_image/21_acer_japonicum_emmetts_pumpkin/og/Acer_shirasawanum_28golden_fullmoon_maple29_2_284633285838129.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/21_acer_japonicum_emmetts_pumpkin/regular/Acer_shirasawanum_28golden_fullmoon_maple29_2_284633285838129.jpg",
      small_url:
        "https://perenual.com/storage/species_image/21_acer_japonicum_emmetts_pumpkin/small/Acer_shirasawanum_28golden_fullmoon_maple29_2_284633285838129.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/21_acer_japonicum_emmetts_pumpkin/thumbnail/Acer_shirasawanum_28golden_fullmoon_maple29_2_284633285838129.jpg",
    },
    id: 21,
    other_name: [],
    scientific_name: ["Acer japonicum 'Emmett's Pumpkin'"],
    sunlight: ["full sun", "part shade", "filtered shade"],
    watering: "Average",
  },
  {
    common_name: "Green Cascade Maple",
    cycle: "Perennial",
    default_image: {
      license: 5,
      license_name: "Attribution-ShareAlike License",
      license_url: "https://creativecommons.org/licenses/by-sa/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/22_acer_japonicum_green_cascade/medium/4847225395_2509ee2bfe_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/22_acer_japonicum_green_cascade/og/4847225395_2509ee2bfe_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/22_acer_japonicum_green_cascade/regular/4847225395_2509ee2bfe_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/22_acer_japonicum_green_cascade/small/4847225395_2509ee2bfe_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/22_acer_japonicum_green_cascade/thumbnail/4847225395_2509ee2bfe_b.jpg",
    },
    id: 22,
    other_name: [],
    scientific_name: ["Acer japonicum 'Green Cascade'"],
    sunlight: ["Full sun", "part shade"],
    watering: "Average",
  },
  {
    common_name: "Big Leaf Maple",
    cycle: "Perennial",
    default_image: {
      license: 4,
      license_name: "Attribution License",
      license_url: "https://creativecommons.org/licenses/by/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/23_acer_macrophyllum/medium/52135137216_8a124b5188_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/23_acer_macrophyllum/og/52135137216_8a124b5188_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/23_acer_macrophyllum/regular/52135137216_8a124b5188_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/23_acer_macrophyllum/small/52135137216_8a124b5188_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/23_acer_macrophyllum/thumbnail/52135137216_8a124b5188_b.jpg",
    },
    id: 23,
    other_name: ["Oregon Maple"],
    scientific_name: ["Acer macrophyllum"],
    sunlight: ["full sun", "part sun/part shade"],
    watering: "Average",
  },
  {
    common_name: "Mocha Rose Big Leaf Maple",
    cycle: "Perennial",
    default_image: {
      license: 5,
      license_name: "Attribution-ShareAlike License",
      license_url: "https://creativecommons.org/licenses/by-sa/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/24_acer_macrophyllum_mocha_rose/medium/4715169892_220a9d39f6_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/24_acer_macrophyllum_mocha_rose/og/4715169892_220a9d39f6_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/24_acer_macrophyllum_mocha_rose/regular/4715169892_220a9d39f6_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/24_acer_macrophyllum_mocha_rose/small/4715169892_220a9d39f6_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/24_acer_macrophyllum_mocha_rose/thumbnail/4715169892_220a9d39f6_b.jpg",
    },
    id: 24,
    other_name: ["Oregon Maple"],
    scientific_name: ["Acer macrophyllum 'Mocha Rose'"],
    sunlight: ["full sun", "part shade"],
    watering: "Average",
  },
  {
    common_name: "Flamingo Boxelder",
    cycle: "Perennial",
    default_image: {
      license: 5,
      license_name: "Attribution-ShareAlike License",
      license_url: "https://creativecommons.org/licenses/by-sa/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/25_acer_negundo_flamingo/medium/5867345385_a9dff5bee7_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/25_acer_negundo_flamingo/og/5867345385_a9dff5bee7_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/25_acer_negundo_flamingo/regular/5867345385_a9dff5bee7_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/25_acer_negundo_flamingo/small/5867345385_a9dff5bee7_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/25_acer_negundo_flamingo/thumbnail/5867345385_a9dff5bee7_b.jpg",
    },
    id: 25,
    other_name: ["Manitoba Maple", "box elder"],
    scientific_name: ["Acer negundo 'Flamingo'"],
    sunlight: ["full sun", "part sun/part shade"],
    watering: "Average",
  },
  {
    common_name: "Kelly's Gold Boxelder",
    cycle: "Perennial",
    default_image: {
      license: 5,
      license_name: "Attribution-ShareAlike License",
      license_url: "https://creativecommons.org/licenses/by-sa/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/26_acer_negundo_kellys_gold/medium/28819730054_e2a2b797c9_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/26_acer_negundo_kellys_gold/og/28819730054_e2a2b797c9_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/26_acer_negundo_kellys_gold/regular/28819730054_e2a2b797c9_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/26_acer_negundo_kellys_gold/small/28819730054_e2a2b797c9_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/26_acer_negundo_kellys_gold/thumbnail/28819730054_e2a2b797c9_b.jpg",
    },
    id: 26,
    other_name: ["Manitoba Maple", "box elder"],
    scientific_name: ["Acer negundo 'Kelly's Gold'"],
    sunlight: ["full sun", "part sun/part shade"],
    watering: "Frequent",
  },
  {
    common_name: "Japanese Maple",
    cycle: "Perennial",
    default_image: {
      license: 45,
      license_name: "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
      license_url: "https://creativecommons.org/licenses/by-sa/3.0/deed.en",
      medium_url:
        "https://perenual.com/storage/species_image/27_acer_palmatum/medium/2560px-Acer_palmatum_27Bloodgood27_kz01.jpg",
      original_url:
        "https://perenual.com/storage/species_image/27_acer_palmatum/og/2560px-Acer_palmatum_27Bloodgood27_kz01.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/27_acer_palmatum/regular/2560px-Acer_palmatum_27Bloodgood27_kz01.jpg",
      small_url:
        "https://perenual.com/storage/species_image/27_acer_palmatum/small/2560px-Acer_palmatum_27Bloodgood27_kz01.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/27_acer_palmatum/thumbnail/2560px-Acer_palmatum_27Bloodgood27_kz01.jpg",
    },
    id: 27,
    other_name: [],
    scientific_name: ["Acer palmatum"],
    sunlight: ["Full sun", "part shade"],
    watering: "Average",
  },
  {
    common_name: "Aka Shigitatsu Sawa Japanese Maple",
    cycle: "Perennial",
    default_image: {
      license: 45,
      license_name: "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
      license_url: "https://creativecommons.org/licenses/by-sa/3.0/deed.en",
      medium_url:
        "https://perenual.com/storage/species_image/28_acer_palmatum_aka_shigitatsu_sawa/medium/Acer_palmatum_Aka_shigitatsu_sawa_2zz.jpg",
      original_url:
        "https://perenual.com/storage/species_image/28_acer_palmatum_aka_shigitatsu_sawa/og/Acer_palmatum_Aka_shigitatsu_sawa_2zz.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/28_acer_palmatum_aka_shigitatsu_sawa/regular/Acer_palmatum_Aka_shigitatsu_sawa_2zz.jpg",
      small_url:
        "https://perenual.com/storage/species_image/28_acer_palmatum_aka_shigitatsu_sawa/small/Acer_palmatum_Aka_shigitatsu_sawa_2zz.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/28_acer_palmatum_aka_shigitatsu_sawa/thumbnail/Acer_palmatum_Aka_shigitatsu_sawa_2zz.jpg",
    },
    id: 28,
    other_name: ["Samurai"],
    scientific_name: ["Acer palmatum 'Aka Shigitatsu Sawa'"],
    sunlight: ["part sun/part shade"],
    watering: "Frequent",
  },
  {
    common_name: "Alpenweiss Variegated Dwarf Japanese Maple*",
    cycle: "Perennial",
    default_image: null,
    id: 29,
    other_name: [],
    scientific_name: ["Acer palmatum 'Alpenweiss'"],
    sunlight: ["full sun", "part shade"],
    watering: "Average",
  },
  {
    common_name: "Ao Shime No Uchi Japanese Maple",
    cycle: "Perennial",
    default_image: {
      license: 45,
      license_name: "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
      license_url: "https://creativecommons.org/licenses/by-sa/3.0/deed.en",
      medium_url:
        "https://perenual.com/storage/species_image/30_acer_palmatum_ao_shime_no_uchi/medium/Acer_palmatum_Ao_shime_no_uchi_3zz.jpg",
      original_url:
        "https://perenual.com/storage/species_image/30_acer_palmatum_ao_shime_no_uchi/og/Acer_palmatum_Ao_shime_no_uchi_3zz.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/30_acer_palmatum_ao_shime_no_uchi/regular/Acer_palmatum_Ao_shime_no_uchi_3zz.jpg",
      small_url:
        "https://perenual.com/storage/species_image/30_acer_palmatum_ao_shime_no_uchi/small/Acer_palmatum_Ao_shime_no_uchi_3zz.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/30_acer_palmatum_ao_shime_no_uchi/thumbnail/Acer_palmatum_Ao_shime_no_uchi_3zz.jpg",
    },
    id: 30,
    other_name: [],
    scientific_name: ["Acer palmatum 'Ao Shime No Uchi'"],
    sunlight: ["full sun", "part shade"],
    watering: "Frequent",
  },
];

const PlantListApiIndoorOutput = [
  {
    common_name: "flowering-maple",
    cycle: "Perennial",
    default_image: {
      license: 4,
      license_name: "Attribution License",
      license_url: "https://creativecommons.org/licenses/by/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/425_abutilon_hybridum/medium/24527654869_ac712f58c7_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/425_abutilon_hybridum/og/24527654869_ac712f58c7_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/425_abutilon_hybridum/regular/24527654869_ac712f58c7_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/425_abutilon_hybridum/small/24527654869_ac712f58c7_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/425_abutilon_hybridum/thumbnail/24527654869_ac712f58c7_b.jpg",
    },
    id: 425,
    other_name: [],
    scientific_name: ["Abutilon hybridum"],
    sunlight: ["full sun", "part shade"],
    watering: "Frequent",
  },
  {
    common_name: "flowering-maple",
    cycle: "Perennial",
    default_image: {
      license: 451,
      license_name: "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
      license_url: "https://creativecommons.org/publicdomain/zero/1.0/",
      medium_url:
        "https://perenual.com/storage/species_image/426_abutilon_hybridum_bella_red/medium/abutilon-mallow-flower-red.jpg",
      original_url:
        "https://perenual.com/storage/species_image/426_abutilon_hybridum_bella_red/og/abutilon-mallow-flower-red.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/426_abutilon_hybridum_bella_red/regular/abutilon-mallow-flower-red.jpg",
      small_url:
        "https://perenual.com/storage/species_image/426_abutilon_hybridum_bella_red/small/abutilon-mallow-flower-red.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/426_abutilon_hybridum_bella_red/thumbnail/abutilon-mallow-flower-red.jpg",
    },
    id: 426,
    other_name: [],
    scientific_name: ["Abutilon hybridum 'Bella Red'"],
    sunlight: ["full sun", "part shade"],
    watering: "Average",
  },
  {
    common_name: "flowering-maple",
    cycle: "Perennial",
    default_image: {
      license: 45,
      license_name: "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
      license_url: "https://creativecommons.org/licenses/by-sa/3.0/deed.en",
      medium_url:
        "https://perenual.com/storage/species_image/427_abutilon_moonchimes/medium/Abutilon_x_hybridum_27Moonchimes27_Flower_2800px.jpg",
      original_url:
        "https://perenual.com/storage/species_image/427_abutilon_moonchimes/og/Abutilon_x_hybridum_27Moonchimes27_Flower_2800px.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/427_abutilon_moonchimes/regular/Abutilon_x_hybridum_27Moonchimes27_Flower_2800px.jpg",
      small_url:
        "https://perenual.com/storage/species_image/427_abutilon_moonchimes/small/Abutilon_x_hybridum_27Moonchimes27_Flower_2800px.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/427_abutilon_moonchimes/thumbnail/Abutilon_x_hybridum_27Moonchimes27_Flower_2800px.jpg",
    },
    id: 427,
    other_name: [],
    scientific_name: ["Abutilon 'Moonchimes'"],
    sunlight: ["full sun", "part shade"],
    watering: "Average",
  },
  {
    common_name: "flowering-maple",
    cycle: "Perennial",
    default_image: {
      license: 45,
      license_name: "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
      license_url: "https://creativecommons.org/licenses/by-sa/3.0/deed.en",
      medium_url:
        "https://perenual.com/storage/species_image/428_abutilon_pictum_gold_dust/medium/Redvein_Abutilon.jpg",
      original_url:
        "https://perenual.com/storage/species_image/428_abutilon_pictum_gold_dust/og/Redvein_Abutilon.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/428_abutilon_pictum_gold_dust/regular/Redvein_Abutilon.jpg",
      small_url:
        "https://perenual.com/storage/species_image/428_abutilon_pictum_gold_dust/small/Redvein_Abutilon.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/428_abutilon_pictum_gold_dust/thumbnail/Redvein_Abutilon.jpg",
    },
    id: 428,
    other_name: [],
    scientific_name: ["Abutilon pictum 'Gold Dust'"],
    sunlight: ["full sun"],
    watering: "Average",
  },
  {
    common_name: "Jacob's coat",
    cycle: "Perennial",
    default_image: {
      license: 4,
      license_name: "Attribution License",
      license_url: "https://creativecommons.org/licenses/by/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/434_acalypha_wilkesiana/medium/24945289366_5035e5d0a9_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/434_acalypha_wilkesiana/og/24945289366_5035e5d0a9_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/434_acalypha_wilkesiana/regular/24945289366_5035e5d0a9_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/434_acalypha_wilkesiana/small/24945289366_5035e5d0a9_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/434_acalypha_wilkesiana/thumbnail/24945289366_5035e5d0a9_b.jpg",
    },
    id: 434,
    other_name: [],
    scientific_name: ["Acalypha wilkesiana"],
    sunlight: ["full sun", "part shade"],
    watering: "Frequent",
  },
  {
    common_name: "hot water plant",
    cycle: "Herbaceous Perennial",
    default_image: null,
    id: 502,
    other_name: [],
    scientific_name: ["Achimenes (group)"],
    sunlight: ["part shade"],
    watering: "Average",
  },
  {
    common_name: "desert rose",
    cycle: "Perennial",
    default_image: {
      license: 5,
      license_name: "Attribution-ShareAlike License",
      license_url: "https://creativecommons.org/licenses/by-sa/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/540_adenium_obesum/medium/9244335137_6d662ed77c_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/540_adenium_obesum/og/9244335137_6d662ed77c_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/540_adenium_obesum/regular/9244335137_6d662ed77c_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/540_adenium_obesum/small/9244335137_6d662ed77c_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/540_adenium_obesum/thumbnail/9244335137_6d662ed77c_b.jpg",
    },
    id: 540,
    other_name: [],
    scientific_name: ["Adenium obesum"],
    sunlight: ["full sun"],
    watering: "Minimum",
  },
  {
    common_name: "maidenhair fern",
    cycle: "Perennial",
    default_image: {
      license: 4,
      license_name: "Attribution License",
      license_url: "https://creativecommons.org/licenses/by/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/543_adiantum_capillus-veneris/medium/49636882698_cb4fa4c685_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/543_adiantum_capillus-veneris/og/49636882698_cb4fa4c685_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/543_adiantum_capillus-veneris/regular/49636882698_cb4fa4c685_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/543_adiantum_capillus-veneris/small/49636882698_cb4fa4c685_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/543_adiantum_capillus-veneris/thumbnail/49636882698_cb4fa4c685_b.jpg",
    },
    id: 543,
    other_name: ["Southern Maidenhair", "Venus' Hair Fern", "Venus' Hair Fern"],
    scientific_name: ["Adiantum capillus-veneris"],
    sunlight: ["part shade", "part sun/part shade"],
    watering: "Average",
  },
  {
    common_name: "delta maidenhair fern",
    cycle: "Perennial",
    default_image: {
      license: 4,
      license_name: "Attribution License",
      license_url: "https://creativecommons.org/licenses/by/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/546_adiantum_raddianum/medium/48134564587_c4562175cb_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/546_adiantum_raddianum/og/48134564587_c4562175cb_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/546_adiantum_raddianum/regular/48134564587_c4562175cb_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/546_adiantum_raddianum/small/48134564587_c4562175cb_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/546_adiantum_raddianum/thumbnail/48134564587_c4562175cb_b.jpg",
    },
    id: 546,
    other_name: [],
    scientific_name: ["Adiantum raddianum"],
    sunlight: ["part shade"],
    watering: "Average",
  },
  {
    common_name: "urn plant",
    cycle: "Perennial",
    default_image: {
      license: 4,
      license_name: "Attribution License",
      license_url: "https://creativecommons.org/licenses/by/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/549_aechmea_fasciata/medium/51446529161_03b99a881f_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/549_aechmea_fasciata/og/51446529161_03b99a881f_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/549_aechmea_fasciata/regular/51446529161_03b99a881f_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/549_aechmea_fasciata/small/51446529161_03b99a881f_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/549_aechmea_fasciata/thumbnail/51446529161_03b99a881f_b.jpg",
    },
    id: 549,
    other_name: ["silver vase"],
    scientific_name: ["Aechmea fasciata"],
    sunlight: ["part sun/part shade"],
    watering: "Average",
  },
  {
    common_name: "stalked aeonium",
    cycle: "Herbaceous Perennial",
    default_image: {
      license: 44,
      license_name: "Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)",
      license_url: "https://creativecommons.org/licenses/by-sa/4.0/",
      medium_url:
        "https://perenual.com/storage/species_image/551_aeonium_undulatum/medium/023e2628848775ea95af34a39eaee4d60fab11ed.jpg",
      original_url:
        "https://perenual.com/storage/species_image/551_aeonium_undulatum/og/023e2628848775ea95af34a39eaee4d60fab11ed.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/551_aeonium_undulatum/regular/023e2628848775ea95af34a39eaee4d60fab11ed.jpg",
      small_url:
        "https://perenual.com/storage/species_image/551_aeonium_undulatum/small/023e2628848775ea95af34a39eaee4d60fab11ed.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/551_aeonium_undulatum/thumbnail/023e2628848775ea95af34a39eaee4d60fab11ed.jpg",
    },
    id: 551,
    other_name: [],
    scientific_name: ["Aeonium undulatum"],
    sunlight: ["full sun", "part shade"],
    watering: "Average",
  },
  {
    common_name: "lipstick plant",
    cycle: "Perennial",
    default_image: {
      license: 4,
      license_name: "Attribution License",
      license_url: "https://creativecommons.org/licenses/by/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/552_aeschynanthus_radicans/medium/29949422675_2671589cdf_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/552_aeschynanthus_radicans/og/29949422675_2671589cdf_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/552_aeschynanthus_radicans/regular/29949422675_2671589cdf_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/552_aeschynanthus_radicans/small/29949422675_2671589cdf_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/552_aeschynanthus_radicans/thumbnail/29949422675_2671589cdf_b.jpg",
    },
    id: 552,
    other_name: [],
    scientific_name: ["Aeschynanthus radicans"],
    sunlight: ["part shade", "full sun"],
    watering: "Average",
  },
  {
    common_name: "Philippine evergreen",
    cycle: "Herbaceous Perennial",
    default_image: {
      license: 4,
      license_name: "Attribution License",
      license_url: "https://creativecommons.org/licenses/by/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/625_aglaonema_commutatum/medium/24798632751_3a039ecbc6_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/625_aglaonema_commutatum/og/24798632751_3a039ecbc6_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/625_aglaonema_commutatum/regular/24798632751_3a039ecbc6_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/625_aglaonema_commutatum/small/24798632751_3a039ecbc6_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/625_aglaonema_commutatum/thumbnail/24798632751_3a039ecbc6_b.jpg",
    },
    id: 625,
    other_name: [],
    scientific_name: ["Aglaonema commutatum"],
    sunlight: ["part shade", "full shade"],
    watering: "Average",
  },
  {
    common_name: "Chinese evegreen",
    cycle: "Herbaceous Perennial",
    default_image: {
      license: 45,
      license_name: "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
      license_url: "https://creativecommons.org/licenses/by-sa/3.0/deed.en",
      medium_url:
        "https://perenual.com/storage/species_image/626_aglaonema_cutlass/medium/2560px-Chinese_Evergreen_28Aglaonema_nitidum_27Silver_Queen2729_1.jpg",
      original_url:
        "https://perenual.com/storage/species_image/626_aglaonema_cutlass/og/2560px-Chinese_Evergreen_28Aglaonema_nitidum_27Silver_Queen2729_1.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/626_aglaonema_cutlass/regular/2560px-Chinese_Evergreen_28Aglaonema_nitidum_27Silver_Queen2729_1.jpg",
      small_url:
        "https://perenual.com/storage/species_image/626_aglaonema_cutlass/small/2560px-Chinese_Evergreen_28Aglaonema_nitidum_27Silver_Queen2729_1.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/626_aglaonema_cutlass/thumbnail/2560px-Chinese_Evergreen_28Aglaonema_nitidum_27Silver_Queen2729_1.jpg",
    },
    id: 626,
    other_name: [],
    scientific_name: ["Aglaonema 'Cutlass'"],
    sunlight: ["part shade", "full shade"],
    watering: "Average",
  },
  {
    common_name: "Chinese evergreen",
    cycle: "Herbaceous Perennial",
    default_image: null,
    id: 627,
    other_name: [],
    scientific_name: ["Aglaonema 'Red Gold'"],
    sunlight: ["part sun/part shade", "part shade"],
    watering: "Average",
  },
  {
    common_name: "Chinese evergreen",
    cycle: "Herbaceous Perennial",
    default_image: {
      license: 4,
      license_name: "Attribution License",
      license_url: "https://creativecommons.org/licenses/by/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/628_aglaonema_silver_queen/medium/24798632751_3a039ecbc6_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/628_aglaonema_silver_queen/og/24798632751_3a039ecbc6_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/628_aglaonema_silver_queen/regular/24798632751_3a039ecbc6_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/628_aglaonema_silver_queen/small/24798632751_3a039ecbc6_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/628_aglaonema_silver_queen/thumbnail/24798632751_3a039ecbc6_b.jpg",
    },
    id: 628,
    other_name: [],
    scientific_name: ["Aglaonema 'Silver Queen'"],
    sunlight: ["part shade", "full shade"],
    watering: "Average",
  },
  {
    common_name: "onion",
    cycle: "Perennial",
    default_image: {
      license: 4,
      license_name: "Attribution License",
      license_url: "https://creativecommons.org/licenses/by/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/667_allium_cepa/medium/24466615444_a161c175d3_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/667_allium_cepa/og/24466615444_a161c175d3_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/667_allium_cepa/regular/24466615444_a161c175d3_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/667_allium_cepa/small/24466615444_a161c175d3_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/667_allium_cepa/thumbnail/24466615444_a161c175d3_b.jpg",
    },
    id: 667,
    other_name: ["spring onion", "shallot"],
    scientific_name: ["Allium cepa"],
    sunlight: ["full sun"],
    watering: "Average",
  },
  {
    common_name: "elephant's ear",
    cycle: "Perennial",
    default_image: {
      license: 4,
      license_name: "Attribution License",
      license_url: "https://creativecommons.org/licenses/by/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/710_alocasia_amazonica/medium/24444063964_a3054131aa_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/710_alocasia_amazonica/og/24444063964_a3054131aa_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/710_alocasia_amazonica/regular/24444063964_a3054131aa_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/710_alocasia_amazonica/small/24444063964_a3054131aa_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/710_alocasia_amazonica/thumbnail/24444063964_a3054131aa_b.jpg",
    },
    id: 710,
    other_name: [],
    scientific_name: ["Alocasia amazonica"],
    sunlight: ["part shade", "part sun/part shade"],
    watering: "Average",
  },
  {
    common_name: "Amazonian elephant's ear",
    cycle: "Perennial",
    default_image: {
      license: 451,
      license_name: "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
      license_url: "https://creativecommons.org/publicdomain/zero/1.0/",
      medium_url:
        "https://perenual.com/storage/species_image/711_alocasia_amazonica_polly/medium/pexels-photo-12419491.jpg",
      original_url:
        "https://perenual.com/storage/species_image/711_alocasia_amazonica_polly/og/pexels-photo-12419491.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/711_alocasia_amazonica_polly/regular/pexels-photo-12419491.jpg",
      small_url:
        "https://perenual.com/storage/species_image/711_alocasia_amazonica_polly/small/pexels-photo-12419491.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/711_alocasia_amazonica_polly/thumbnail/pexels-photo-12419491.jpg",
    },
    id: 711,
    other_name: [],
    scientific_name: ["Alocasia amazonica 'Polly'"],
    sunlight: ["part shade"],
    watering: "Frequent",
  },
  {
    common_name: "elephant's ear",
    cycle: "Perennial",
    default_image: {
      license: 45,
      license_name: "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
      license_url: "https://creativecommons.org/licenses/by-sa/3.0/deed.en",
      medium_url:
        "https://perenual.com/storage/species_image/712_alocasia_frydek/medium/Alocasia_micholitziana.jpg",
      original_url:
        "https://perenual.com/storage/species_image/712_alocasia_frydek/og/Alocasia_micholitziana.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/712_alocasia_frydek/regular/Alocasia_micholitziana.jpg",
      small_url:
        "https://perenual.com/storage/species_image/712_alocasia_frydek/small/Alocasia_micholitziana.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/712_alocasia_frydek/thumbnail/Alocasia_micholitziana.jpg",
    },
    id: 712,
    other_name: [],
    scientific_name: ["Alocasia 'Frydek'"],
    sunlight: ["part shade"],
    watering: "Average",
  },
  {
    common_name: "elephant's ear",
    cycle: "Perennial",
    default_image: {
      license: 4,
      license_name: "Attribution License",
      license_url: "https://creativecommons.org/licenses/by/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/713_alocasia_group/medium/24444063964_a3054131aa_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/713_alocasia_group/og/24444063964_a3054131aa_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/713_alocasia_group/regular/24444063964_a3054131aa_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/713_alocasia_group/small/24444063964_a3054131aa_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/713_alocasia_group/thumbnail/24444063964_a3054131aa_b.jpg",
    },
    id: 713,
    other_name: [],
    scientific_name: ["Alocasia (group)"],
    sunlight: ["full sun", "part shade"],
    watering: "Average",
  },
  {
    common_name: "elephant's ear",
    cycle: "Perennial",
    default_image: {
      license: 5,
      license_name: "Attribution-ShareAlike License",
      license_url: "https://creativecommons.org/licenses/by-sa/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/714_alocasia_low_rider/medium/8415446715_799e70b503_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/714_alocasia_low_rider/og/8415446715_799e70b503_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/714_alocasia_low_rider/regular/8415446715_799e70b503_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/714_alocasia_low_rider/small/8415446715_799e70b503_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/714_alocasia_low_rider/thumbnail/8415446715_799e70b503_b.jpg",
    },
    id: 714,
    other_name: [],
    scientific_name: ["Alocasia LOW RIDER"],
    sunlight: ["full sun", "part shade"],
    watering: "Average",
  },
  {
    common_name: "giant elephant's ear",
    cycle: "Perennial",
    default_image: {
      license: 5,
      license_name: "Attribution-ShareAlike License",
      license_url: "https://creativecommons.org/licenses/by-sa/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/715_alocasia_macrorrhizos/medium/33234440338_8b31463973_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/715_alocasia_macrorrhizos/og/33234440338_8b31463973_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/715_alocasia_macrorrhizos/regular/33234440338_8b31463973_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/715_alocasia_macrorrhizos/small/33234440338_8b31463973_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/715_alocasia_macrorrhizos/thumbnail/33234440338_8b31463973_b.jpg",
    },
    id: 715,
    other_name: [],
    scientific_name: ["Alocasia macrorrhizos"],
    sunlight: ["part shade"],
    watering: "Average",
  },
  {
    common_name: "elephant's ear",
    cycle: "Perennial",
    default_image: null,
    id: 716,
    other_name: [],
    scientific_name: ["Alocasia 'Metalhead'"],
    sunlight: ["full sun", "part shade"],
    watering: "Average",
  },
  {
    common_name: "elephant's ear",
    cycle: "Perennial",
    default_image: {
      license: 4,
      license_name: "Attribution License",
      license_url: "https://creativecommons.org/licenses/by/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/717_alocasia_portora/medium/50513640218_140cd83c95_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/717_alocasia_portora/og/50513640218_140cd83c95_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/717_alocasia_portora/regular/50513640218_140cd83c95_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/717_alocasia_portora/small/50513640218_140cd83c95_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/717_alocasia_portora/thumbnail/50513640218_140cd83c95_b.jpg",
    },
    id: 717,
    other_name: [],
    scientific_name: ["Alocasia 'Portora'"],
    sunlight: ["full sun", "part shade"],
    watering: "Average",
  },
  {
    common_name: "elephant's ear",
    cycle: "Perennial",
    default_image: {
      license: 6,
      license_name: "Attribution-NoDerivs License",
      license_url: "https://creativecommons.org/licenses/by-nd/2.0/",
      original_url:
        "https://perenual.com/storage/species_image/718_alocasia_sarian/og/466458488_b9358efed2_z.jpg",
    },
    id: 718,
    other_name: [],
    scientific_name: ["Alocasia 'Sarian'"],
    sunlight: ["part sun/part shade"],
    watering: "Average",
  },
  {
    common_name: "aloe",
    cycle: "Herbaceous Perennial",
    default_image: {
      license: 5,
      license_name: "Attribution-ShareAlike License",
      license_url: "https://creativecommons.org/licenses/by-sa/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/721_aloe_harlana/medium/5582077315_8d613454aa_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/721_aloe_harlana/og/5582077315_8d613454aa_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/721_aloe_harlana/regular/5582077315_8d613454aa_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/721_aloe_harlana/small/5582077315_8d613454aa_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/721_aloe_harlana/thumbnail/5582077315_8d613454aa_b.jpg",
    },
    id: 721,
    other_name: [],
    scientific_name: ["Aloe harlana"],
    sunlight: ["part shade", "part sun/part shade"],
    watering: "Minimum",
  },
  {
    common_name: "aloe",
    cycle: "Perennial",
    default_image: {
      license: 4,
      license_name: "Attribution License",
      license_url: "https://creativecommons.org/licenses/by/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/727_aloe_suzannae/medium/23704519300_5ec1807143_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/727_aloe_suzannae/og/23704519300_5ec1807143_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/727_aloe_suzannae/regular/23704519300_5ec1807143_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/727_aloe_suzannae/small/23704519300_5ec1807143_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/727_aloe_suzannae/thumbnail/23704519300_5ec1807143_b.jpg",
    },
    id: 727,
    other_name: [],
    scientific_name: ["Aloe suzannae"],
    sunlight: ["full sun", "part sun/part shade"],
    watering: "Minimum",
  },
  {
    common_name: "aloe",
    cycle: "Herbaceous Perennial",
    default_image: {
      license: 5,
      license_name: "Attribution-ShareAlike License",
      license_url: "https://creativecommons.org/licenses/by-sa/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/728_aloe_vera/medium/52619084582_6ebcfe6a74_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/728_aloe_vera/og/52619084582_6ebcfe6a74_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/728_aloe_vera/regular/52619084582_6ebcfe6a74_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/728_aloe_vera/small/52619084582_6ebcfe6a74_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/728_aloe_vera/thumbnail/52619084582_6ebcfe6a74_b.jpg",
    },
    id: 728,
    other_name: [],
    scientific_name: ["Aloe vera"],
    sunlight: ["full sun"],
    watering: "Minimum",
  },
  {
    common_name: "Joseph's coat",
    cycle: "Herbaceous Perennial",
    default_image: {
      license: 4,
      license_name: "Attribution License",
      license_url: "https://creativecommons.org/licenses/by/2.0/",
      medium_url:
        "https://perenual.com/storage/species_image/747_alternanthera_ficoidea/medium/48756446498_fc5901c40d_b.jpg",
      original_url:
        "https://perenual.com/storage/species_image/747_alternanthera_ficoidea/og/48756446498_fc5901c40d_b.jpg",
      regular_url:
        "https://perenual.com/storage/species_image/747_alternanthera_ficoidea/regular/48756446498_fc5901c40d_b.jpg",
      small_url:
        "https://perenual.com/storage/species_image/747_alternanthera_ficoidea/small/48756446498_fc5901c40d_b.jpg",
      thumbnail:
        "https://perenual.com/storage/species_image/747_alternanthera_ficoidea/thumbnail/48756446498_fc5901c40d_b.jpg",
    },
    id: 747,
    other_name: [],
    scientific_name: ["Alternanthera ficoidea"],
    sunlight: ["full sun", "part shade"],
    watering: "Frequent",
  },
];
