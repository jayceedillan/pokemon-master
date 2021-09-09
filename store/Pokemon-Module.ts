import apiService from '@/services/ApiService'
import PaginationModel from '~/models/PaginationModel'

export const state = () => ({
  pokemonLists: [],
  preservecPokemonLists: [],
  pokemonDetails: {},
  evolutionsDetails: {},
  ability: {},
})

export const getters = {
  pokemonLists: (state: { pokemonLists: [] }) => {
    return state.pokemonLists
  },
  pokemonDetails: (state: { pokemonDetails: {} }) => {
    return state.pokemonDetails
  },
  evolutionsDetails: (state: { evolutionsDetails: {} }) => {
    return state.evolutionsDetails
  },
  ability: (state: { ability: {} }) => {
    return state.ability
  },
}

export const mutations = {
  setPokemonLists(state: { pokemonLists: [] }, pokemonLists: []) {
    state.pokemonLists = pokemonLists
  },
  setPreservecPokemonLists(
    state: { preservecPokemonLists: [] },
    preservecPokemonLists: []
  ) {
    state.preservecPokemonLists = preservecPokemonLists
  },
  updatePokemonLists(state: { pokemonLists: string[] }, pokemonLists: ['', 0]) {
    state.pokemonLists[pokemonLists[1]] = pokemonLists[0]
  },

  setpokemonDetails(state: { pokemonDetails: {} }, pokemonDetails: {}) {
    state.pokemonDetails = pokemonDetails
  },
  setEvolutionsDetails(
    state: { evolutionsDetails: {} },
    evolutionsDetails: {}
  ) {
    state.evolutionsDetails = evolutionsDetails
  },

  setAbility(state: { ability: {} }, ability: {}) {
    state.ability = ability
  },
}

export const actions = {
  async getPokemon(
    { commit }: { commit: Function },
    paginationModel = PaginationModel
  ): Promise<void> {
    const url = `pokemon/?offset=${paginationModel.currentPage}&limit=${paginationModel.rowPerPage}`
    const response = await apiService.getAll(url)
    commit('setPokemonLists', response.data)
    commit('setPreservecPokemonLists', response.data)
  },
  async getPokemonById(
    { commit }: { commit: Function },
    id: number = 0
  ): Promise<void> {
    try {
      const response = await apiService.getAll('pokemon/' + id)
      commit('setpokemonDetails', response.data)
    } catch (error) {
      console.log('record not found')
    }
  },

  async getEvolutionDetailsId(
    { commit }: { commit: Function },
    id: number = 0
  ): Promise<void> {
    try {
      const response = await apiService.getAll('evolution-chain/' + id)
      commit('setEvolutionsDetails', response.data)
    } catch (error) {
      console.log('record not found')
    }
  },

  async getAbilityId(
    { commit }: { commit: Function },
    id: number = 0
  ): Promise<void> {
    try {
      const response = await apiService.getAll('ability/' + id)
      commit('setAbility', response.data)
    } catch (error) {
      console.log('record not found')
    }
  },
  updatePokemon({ commit }: { commit: Function }, updateData: ['', 0]) {
    commit('updatePokemonLists', updateData)
  },
  onSearch(
    {
      commit,
      state,
    }: {
      commit: Function
      state: {
        preservecPokemonLists: {
          results: any[]
          count: number
          next: string
          previous: string
        }
      }
    },
    params: ['', 0]
  ) {
    const response = state.preservecPokemonLists.results.filter(
      (item: { name: string }) =>
        item.name.toLowerCase().includes(params[0].toLowerCase())
    )

    const pokemonObj = {
      count:
        response.length === params[1]
          ? state.preservecPokemonLists.count
          : response.length,
      next: state.preservecPokemonLists.next,
      previous: state.preservecPokemonLists.previous,
      results: response,
    }
    commit('setPokemonLists', pokemonObj)
  },
}
