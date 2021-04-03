<template>
  <div class="col-md-6">
    <div class="form-group">
      <div class="d-flex">
        <div class="mt-2">
          <span for="cars">Show</span>
        </div>
        <div class="ml-2 mr-2">
          <select
            class="form-control"
            v-model="selectedRowNumber"
            @change="onChanged()"
          >
            <option
              class="form-control"
              v-for="row in rowNumbers.rows"
              v-bind:value="row"
              :key="row"
            >
              {{ row }}
            </option>
          </select>
        </div>
        <div class="mt-2">
          <span>Rows</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./PageChange.ts"></script>