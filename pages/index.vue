<template>
  <card>
    <div class="table-responsive text-left">
      <base-table
        :data="pokemonLists.results"
        :columns="pokemonModel.columns"
        @onChanged="changedPerPage"
        thead-classes="text-primary"
      >
      </base-table>
      <cpagination :totalPages="totalPages" @pageChanged="pageChanged" />
    </div>
    <cnotification />
  </card>
</template>

 <script lang="ts" src="./index.ts"></script>