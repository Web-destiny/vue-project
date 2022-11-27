<template>
  <div id="app">
    <div class="searchBox">
      <h1 class="searchBox-title">Поиск пива:</h1>
      <input type="text" v-model="searchBeer" class="search-input" placeholder="Искать по названию пива..">
    </div>
    <div class="beerBox">
      <div v-for="beer of sortedBeers" class="beerCard">
        <div style="display: flex;flex-direction: column;gap: 3px;height: 140px;">
          <div>Бренд пива:</div>
          <div style="font-size: 18px;font-weight: bold;color: #a51409;">{{ beer.name }}</div>
          <div style="display: flex;align-items: flex-end;justify-content: space-between;">
            <div>Рейтинг:</div>
            <div style="font-size: 25px;color: rgb(255 229 0);font-weight: bold;">{{ Math.round(beer.rating.average * 100)/100 }}</div>
          </div>
          <div style="display: flex;align-items: flex-end;justify-content: space-between;">
            <div>Цена:</div>
            <div style="font-size: 25px;color: #e81000;font-weight: bold;">{{ beer.price }}</div>
          </div>
        </div>
        <img :src="beer.image" alt="Картинка ушла нахуй))">
      </div>
    </div>

  </div>
</template>

<script>
import listMixin from "../listMixin";

export default {
  name: "List",
  mixins: [listMixin]
}
</script>

<style scoped>

</style>
