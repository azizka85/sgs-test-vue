<script setup>
  import { setCookie } from './utils/cookie'
  import { computed } from 'vue';
  import { useStore } from 'vuex';

  const store = useStore();

  const cities = computed(() => store.getters.cities);
  const shops = computed(() => store.getters.shops);
  const employees = computed(() => store.getters.employees);
  const teams = computed(() => store.getters.teams);
  const shifts = computed(() => store.getters.shifts);
  const saveButtonDisabled = computed(() => store.getters.saveButtonDisabled);
</script>
<template>
  <div class="head">
    <select @change="store.commit('selectCity', $event.target.value)">
      <option hidden>Choose city</option>
      <option 
        v-for="city in cities" :value="city.id" :key="city.id" 
        :selected="store.state.selectedCity?.id == city.id"
      >
        {{ city.name }}
      </option>
    </select>
    <select @change="store.commit('selectShop', $event.target.value)">
      <option hidden>Choose shop</option>
      <option 
        v-for="shop in shops" :value="shop.id" :key="shop.id"
        :selected="store.state.selectedShop?.id == shop.id"
      >
        {{ shop.name }}
      </option>
    </select>
    <select @change="store.commit('selectEmployee', $event.target.value)">
      <option hidden>Choose Employee</option>
      <option 
        v-for="employee in employees" :value="employee.id" :key="employee.id"
        :selected="store.state.selectedEmployee?.id == employee.id"
      >
        {{ employee.name }}
      </option>
    </select>
    <select @change="store.commit('selectTeam', $event.target.value)">
      <option hidden>Choose team</option>
      <option 
        v-for="team in teams" :value="team.id" :key="team.id"
        :selected="store.state.selectedTeam?.id == team.id"
      >
        {{ team.name }}
      </option>
    </select>
    <select @change="store.commit('selectShift', $event.target.value)">
      <option hidden>Choose shift</option>
      <option 
        v-for="shift in shifts" :value="shift.id" :key="shift.id"
        :selected="store.state.selectedShift?.id == shift.id"
      >
        {{ shift.name }}
      </option>
    </select>
  </div>
  <div class="body">
    <table border="1" style="border-collapse: collapse;">
      <tr>
        <td class="td title">City:</td>
        <td class="td">
          {{ store.state.selectedCity?.name }}
        </td>
      </tr>
      <tr>
        <td class="td title">Shop:</td>
        <td class="td">
          {{ store.state.selectedShop?.name }}
        </td>
      </tr>
      <tr>
        <td class="td title">Employee:</td>
        <td class="td">
          {{ store.state.selectedEmployee?.name }}
        </td>
      </tr>
      <tr>
        <td class="td title">Team:</td>
        <td class="td">
          {{ store.state.selectedTeam?.name }}
        </td>
      </tr>
      <tr>
        <td class="td title">Shift:</td>
        <td class="td">
          {{ store.state.selectedShift?.name }}
        </td>
      </tr>
      <tr>
        <td colspan="2" style="text-align: center;" class="td">
          <button 
            id="save-btn" style="width: 12rem;" 
            :disabled="saveButtonDisabled"
            @click="
              setCookie(
                'data', 
                JSON.stringify({
                  city: store.state.selectedCity.name,
                  shop: store.state.selectedShop.name,
                  employee: store.state.selectedEmployee.name,
                  team: store.state.selectedTeam.name,
                  shift: store.state.selectedShift.name
                }),
                1
              )
            "
          >
            Save
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>
