<template>
  <card>
    <div class="row">
      <div class="col-md-3">
        <pokemon-right />
      </div>
      <div class="col-md-9">
        <div class="card">
          <div class="card-header text-left">
            <h5 class="title">Pokemon Profile</h5>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-12 text-left">
                <div class="form-group">
                  <label>About</label
                  ><textarea
                    rows="4"
                    cols="80"
                    placeholder="Here can be your description"
                    class="form-control"
                  ></textarea>
                </div>
              </div>
            </div>

            <pokemon-stats />
            <pokemon-moves />
          </div>

          <div class="card-footer text-left">
            <nuxt-link to="/" class="btn btn-success" fill="">Back</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </card>
</template>
<style lang="scss">
.col-height {
  height: 90px !important;
}
</style>
<script lang="ts" src="./PokemonProfile.ts"></script>