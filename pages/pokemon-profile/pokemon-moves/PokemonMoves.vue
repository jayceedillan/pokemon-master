<template>
  <div class="row mt-4">
    <div class="col-md-12 text-left">
      <div class="form-group">
        <label>Moves</label
        ><textarea
          rows="4"
          cols="80"
          class="form-control"
          v-model="moves"
        ></textarea>
      </div>
    </div>
  </div>
</template>
<style lang="scss" src="./PokemonMoves.scss" ></style>
<script lang="ts" src="./PokemonMoves.ts"></script>