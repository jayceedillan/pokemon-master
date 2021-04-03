<template>
  <card>
    <div class="row">
      <div class="col-md-3">
        <div class="card card-user">
          <div class="card-body">
            <div class="author">
              <div class="block block-one"></div>
              <div class="block block-two"></div>
              <div class="block block-three"></div>
              <div class="block block-four"></div>
              <a
                ><img
                  :src="pokemonDetails.sprites.back_default"
                  class="avatar"
                />
                <h5 class="title">{{ pokemonDetails.name }}</h5></a
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <ul class="list-group">
              <li class="list-group-item">
                <span class="font-weight-bold">Weight:</span>
                {{ pokemonDetails.weight }}
              </li>
              <li class="list-group-item">
                <span class="font-weight-bold">Type:</span>
              </li>
              <li class="list-group-item">
                <span class="font-weight-bold">Abilities:</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-9">
        <div class="card">
          <div class="card-header text-left">
            <h5 class="title">Edit Profile</h5>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-5 pr-md-1 text-left">
                <div class="form-group">
                  <label class="control-label"> Company (disabled) </label
                  ><input
                    aria-describedby="addon-right addon-left"
                    placeholder="Company"
                    disabled="disabled"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="col-md-3 px-md-1 text-left">
                <div class="form-group">
                  <label class="control-label"> Username </label
                  ><input
                    aria-describedby="addon-right addon-left"
                    placeholder="Username"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="col-md-4 pl-md-1 text-left">
                <div class="form-group">
                  <label class="control-label"> Email address </label
                  ><input
                    aria-describedby="addon-right addon-left"
                    type="email"
                    placeholder="mike@email.com"
                    class="form-control"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 pr-md-1 text-left">
                <div class="form-group">
                  <label class="control-label"> First Name </label
                  ><input
                    aria-describedby="addon-right addon-left"
                    placeholder="First Name"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="col-md-6 pl-md-1 text-left">
                <div class="form-group">
                  <label class="control-label"> Last Name </label
                  ><input
                    aria-describedby="addon-right addon-left"
                    placeholder="Last Name"
                    class="form-control"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 text-left">
                <div class="form-group">
                  <label class="control-label"> Address </label
                  ><input
                    aria-describedby="addon-right addon-left"
                    placeholder="Home Address"
                    class="form-control"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4 pr-md-1 text-left">
                <div class="form-group">
                  <label class="control-label"> City </label
                  ><input
                    aria-describedby="addon-right addon-left"
                    placeholder="City"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="col-md-4 px-md-1 text-left">
                <div class="form-group">
                  <label class="control-label"> Country </label
                  ><input
                    aria-describedby="addon-right addon-left"
                    placeholder="Country"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="col-md-4 pl-md-1 text-left">
                <div class="form-group">
                  <label class="control-label"> Postal Code </label
                  ><input
                    aria-describedby="addon-right addon-left"
                    placeholder="ZIP Code"
                    class="form-control"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-8 text-left">
                <div class="form-group">
                  <label>About Me</label
                  ><textarea
                    rows="4"
                    cols="80"
                    placeholder="Here can be your description"
                    class="form-control"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          <div class="card-footer text-left">
            <button type="button" class="btn btn-success" fill="">Save</button>
          </div>
        </div>
      </div>
    </div>
  </card>
</template>

<script lang="ts" src="./ViewProfile.ts"></script>