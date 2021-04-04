<template>
  <div>
    <div class="row mt-4">
      <div class="col-md-3 shadow-sm bg-white rounded col-height">
        <div class="card bg-white">
          <div class="card-body text-center">
            <p class="card-text display-4">
              {{ pokemonDetails.stats[0].base_stat }}
            </p>
            <p class="card-text">HP</p>
          </div>
        </div>
      </div>
      <div class="col-md-3 shadow-sm bg-white rounded col-height">
        <div class="card bg-white">
          <div class="card-body text-center">
            <p class="card-text display-4">
              {{ pokemonDetails.stats[1].base_stat }}
            </p>
            <p class="card-text">Attack</p>
          </div>
        </div>
      </div>
      <div class="col-md-3 shadow-sm bg-white rounded col-height">
        <div class="card bg-white">
          <div class="card-body text-center">
            <p class="card-text display-4">
              {{ pokemonDetails.stats[2].base_stat }}
            </p>
            <p class="card-text">Defense</p>
          </div>
        </div>
      </div>
      <div class="col-md-3 shadow-sm bg-white rounded col-height">
        <div class="card bg-white">
          <div class="card-body text-center">
            <p class="card-text display-4">
              {{ pokemonDetails.stats[3].base_stat }}
            </p>
            <p class="card-text">Special-Attack</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-md-3 shadow-sm bg-white rounded col-height">
        <div class="card bg-white">
          <div class="card-body text-center">
            <p class="card-text display-4">
              {{ pokemonDetails.stats[4].base_stat }}
            </p>
            <p class="card-text">Special-Defense</p>
          </div>
        </div>
      </div>
      <div class="col-md-3 shadow-sm bg-white rounded col-height">
        <div class="card bg-white">
          <div class="card-body text-center">
            <p class="card-text display-4">
              {{ pokemonDetails.stats[5].base_stat }}
            </p>
            <p class="card-text">Speed</p>
          </div>
        </div>
      </div>

      <div class="col-md-3 shadow-sm bg-white rounded col-height">
        <div class="card bg-white">
          <div class="card-body text-center">
            <p class="card-text display-4">
              {{ pokemonDetails.base_experience }}
            </p>
            <p class="card-text">Happiness</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./PokemonStats.ts"></script>