<template>
  <div>
    <div class="card card-user">
      <div class="card-body">
        <div class="author">
          <div class="block block-one"></div>
          <div class="block block-two"></div>
          <div class="block block-three"></div>
          <div class="block block-four"></div>
          <a
            ><img :src="pokemonDetails.sprites.back_default" class="avatar" />
            <h5 class="title display-4">{{ pokemonDetails.name }}</h5></a
          >
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <ul class="list-group">
          <li class="list-group-item">
            <span class="font-weight-bold">Weight:</span>
            {{ pokemonDetails.weight }} kg
          </li>
          <li class="list-group-item">
            <span class="font-weight-bold">Type: </span>
            {{ types }}
          </li>
          <li class="list-group-item">
            <span class="font-weight-bold">Abilities:</span>
            {{ abilities }}
          </li>
          <li class="list-group-item">
            <span class="font-weight-bold">Evolution:</span>
            <ul>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./PokemonRight.ts"></script>