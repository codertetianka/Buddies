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
