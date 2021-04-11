<template>
  <div class="hello">
    <h1>Veriler</h1>
    <p><label>Arama : <input type="text" v-model="filter" /></label></p>
    <table align="center">
      <thead>
        <tr>
          <th>#</th>
          <th>Ad</th>
          <th>Soyad</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="person in filteredData" :key="person.id">
          <td>{{person.id}}</td>
          <td align="left">{{person.firstName}}</td>
          <td align="left">{{person.lastName}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";

  @Component
  export default class ListData2 extends Vue {
    private _filter = '';

    private data = [
      { id: 1, firstName: 'Alper', lastName: 'Konuralp' },
      { id: 2, firstName: 'Burcu', lastName: 'Konuralp' },
      { id: 3, firstName: 'Yağmur', lastName: 'Konuralp' },
      { id: 4, firstName: 'Ali', lastName: 'Konuralp' },
      { id: 5, firstName: 'Çiğdem', lastName: 'Konuralp' },
      { id: 6, firstName: 'Ela', lastName: 'Konuralp' },
      { id: 7, firstName: 'Demir', lastName: 'Konuralp' },
    ];

    private filteredData: any[] = [];

    private get filter() {
      return this._filter;
    }

    private set filter(f) {
      this._filter = f;

      if (this._filter) {
        this.filteredData = this.data
          .filter((i) => i.firstName.indexOf(this._filter) >= 0
            || i.lastName.indexOf(this._filter) >= 0)
          ;
      }
      else {
        this.filteredData = [...this.data];
      }
    }

    private mounted() {
      this.filteredData = [...this.data];
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
