export default {
  selectCity(state, cityId) {
    state.selectedCity = state.cities.find(city => city.id == cityId); 
    
    clearShopSelection(state);
  },
  selectShop(state, shopId) {
    state.selectedShop = state.shops.find(shop => shop.id == shopId);

    clearEmployeeSelection(state);
  },
  selectEmployee(state, employeeId) {
    state.selectedEmployee = state.employees.find(employee => employee.id == employeeId);
  },
  selectTeam(state, teamId) {
    state.selectedTeam = state.teams.find(team => team.id == teamId);
  },
  selectShift(state, shiftId) {
    state.selectedShift = state.shifts.find(shift => shift.id == shiftId);
  }
};

function clearShopSelection(state) {
  state.selectedShop = null;

  clearEmployeeSelection(state);
}

function clearEmployeeSelection(state) {
  state.selectedEmployee = null;
}
