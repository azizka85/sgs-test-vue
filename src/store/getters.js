export default {
  cities(state) {
    return state.cities;
  },
  shops(state) {
    let shops = state.shops;

    if(state.selectedCity) {
      shops = shops.filter(shop => shop.city.id == state.selectedCity.id)
    }

    return shops;
  },
  employees(state) {
    let employees = state.employees;

    if(state.selectedCity) {
      employees = employees.filter(employee => employee.city.id == state.selectedCity.id);
    }

    if(state.selectedShop) {
      employees = employees.filter(employee => employee.shop.id == state.selectedShop.id);
    }

    return employees;
  },
  teams(state) {
    return state.teams;
  },
  shifts(state) {
    return state.shifts;
  },
  saveButtonDisabled(state) {
    return !state.selectedCity ||
      !state.selectedShop ||
      !state.selectedEmployee ||
      !state.selectedTeam ||
      !state.selectedShift;
  }
};
