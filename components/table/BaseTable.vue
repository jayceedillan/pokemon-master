<template>
  <div class="container">
    <div class="row">
      <page-change @onChanged="onChanged" />

      <div class="col-md-6 d-flex justify-content-end">
        <div class="form-group mt-2">
          <input placeholder="Search" class="form-control" />
        </div>
      </div>
    </div>
    <table class="table tablesorter" :class="tableClass">
      <thead :class="theadClasses">
        <tr>
          <slot name="columns">
            <th v-for="column in columns" :key="column">{{ column }}</th>
          </slot>
        </tr>
      </thead>
      <tbody :class="tbodyClasses">
        <tr v-for="(item, index) in datas" :key="index">
          <slot :row="item">
            <template v-for="(column, index) in columns">
              <td :key="index" v-if="hasValue(item, column)">
                <img
                  v-if="column === 'picture' || column === 'url'"
                  :src="itemValue(item, column, index)"
                />
                <span v-if="column !== 'url'">
                  {{ itemValue(item, column, index) }}</span
                >
              </td>
            </template>
          </slot>
          <td>
            <div class="d-flex justify-content-end">
              <button
                type="button"
                class="btn btn-outline-info bg-button"
                @click="viewDetail()"
              >
                View
              </button>
            </div>
          </td>
        </tr>
      </tbody>
      <!-- <div class="d-flex justify-content-center" v-if="columns.length === 0">
        <div
          class="spinner-border"
          style="width: 3rem; height: 3rem"
          role="status"
        >
          <span class="sr-only">Loading...</span>
        </div>
      </div> -->
    </table>
  </div>
</template>
<style lang="css" scoped>
img {
  width: 80px;
  height: 80px;
  transition: transform 0.2s;
}

img:hover {
  transform: scale(2);
}

.bg-button {
  background: linear-gradient(0deg, #30a7d7, #30a7d7) !important;
}
</style>
   
<script lang="ts" src="./BaseTable.ts"></script>