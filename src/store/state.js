const cities = [
  {id: 1, name: "Almaty"}, 
  {id: 2, name: "Astana"}, 
  {id: 3, name: "Karagandy"}, 
  {id: 4, name: "Oskemen"}, 
  {id: 5, name: "Semei"}, 
  {id: 6, name: "Atyrau"}, 
  {id: 7, name: "Aktobe"}, 
  {id: 8, name: "Shymkent"}
];

const citiesDic = Object.fromEntries(cities.map(item => [item.id, item]));

const shops = [
  {id: 1, name: "Almaty shop #1", city: citiesDic[1]},
  {id: 2, name: "Almaty shop #2", city: citiesDic[1]},
  {id: 3, name: "Almaty shop #3", city: citiesDic[1]},
  {id: 4, name: "Astana shop #1", city: citiesDic[2]},
  {id: 5, name: "Astana shop #2", city: citiesDic[2]},
  {id: 6, name: "Astana shop #3", city: citiesDic[2]},
  {id: 7, name: "Karagandy shop #1", city: citiesDic[3]},
  {id: 8, name: "Karagandy shop #2", city: citiesDic[3]},
  {id: 9, name: "Oskemen shop #1", city: citiesDic[4]},
  {id: 10, name: "Semei shop #1", city: citiesDic[5]},
  {id: 11, name: "Atyrau shop #1", city: citiesDic[6]},
  {id: 12, name: "Aktobe shop #1", city: citiesDic[7]},
  {id: 13, name: "Shymkent shop #1", city: citiesDic[8]}
];

const shopsDic = Object.fromEntries(shops.map(item => [item.id, item]));

const employees = [
  {id: 1, name: "Almaty Employee #1", city: citiesDic[1], shop: shopsDic[1]},
  {id: 2, name: "Almaty Employee #2", city: citiesDic[1], shop: shopsDic[2]},
  {id: 3, name: "Almaty Employee #3", city: citiesDic[1], shop: shopsDic[3]},
  {id: 4, name: "Astana Employee #1", city: citiesDic[2], shop: shopsDic[4]},
  {id: 5, name: "Astana Employee #2", city: citiesDic[2], shop: shopsDic[5]},
  {id: 6, name: "Astana Employee #3", city: citiesDic[2], shop: shopsDic[6]},
  {id: 7, name: "Karagandy Employee #1", city: citiesDic[3], shop: shopsDic[7]},
  {id: 8, name: "Karagandy Employee #2", city: citiesDic[3], shop: shopsDic[8]},
  {id: 9, name: "Oskemen Employee #1", city: citiesDic[4], shop: shopsDic[9]},
  {id: 10, name: "Semei Employee #1", city: citiesDic[5], shop: shopsDic[10]},
  {id: 11, name: "Atyrau Employee #1", city: citiesDic[6], shop: shopsDic[11]},
  {id: 12, name: "Aktobe Employee #1", city: citiesDic[7], shop: shopsDic[12]},
  {id: 13, name: "Shymkent Employee #1", city: citiesDic[8], shop: shopsDic[13]}
];

const teams = [
  {id: 1, name: "Team #1"},
  {id: 2, name: "Team #2"},
  {id: 3, name: "Team #3"}
];

const shifts = [
  {id: 1, name: "Shift #1"},
  {id: 2, name: "Shift #2"},
  {id: 3, name: "Shift #3"}
];

export default {
  cities,
  shops,
  employees,
  teams,
  shifts,
  selectedCity: null,
  selectedShop: null,
  selectedEmployee: null,
  selectedTeam: null,
  selectedShift: null
};
