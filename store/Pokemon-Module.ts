

import apiService from '@/services/ApiService'
import PaginationModel from '~/models/PaginationModel';
import notificationService from '@/services/NotificationService'
export const state = () => ({
    pokemonLists: [],
    preservecPokemonLists: [],
    pokemonDetails: {}
})

export const getters = {
    pokemonLists: (state: any) => {
        return state.pokemonLists;
    },
    pokemonDetails: (state: any) => {
        return state.pokemonDetails;
    },

}

export const mutations = {
    async setPokemonLists(state: any, pokemonLists: []) {
        state.pokemonLists = pokemonLists;

    },

    async setPreservecPokemonLists(state: any, pokemonLists: []) {
        state.preservecPokemonLists = pokemonLists;
    },
    async updatePokemonLists(state: any, pokemonLists: ['', 0]) {
        state.pokemonLists[pokemonLists[1]] = pokemonLists[0]
    },

    async setpokemonDetails(state: any, pokemonDetails: {}) {
        state.pokemonDetails = pokemonDetails;
    },
}

export const actions = {

    async getPokemon({ commit }: { commit: Function }, paginationModel = PaginationModel): Promise<void> {
        const url = `pokemon/?offset=${paginationModel.currentPage}&limit=${paginationModel.rowPerPage}`;
        const response: any = await apiService.getAll(url);
        commit("setPokemonLists", response.data);
        commit('setPreservecPokemonLists', response.data);
    },
    async getPokemonById({ commit }: { commit: Function }, id: number = 0): Promise<void> {

        try {
            const response: any = await apiService.getAll('pokemon/' + id);
            commit("setpokemonDetails", response.data);
        } catch (error) {
            console.log('record not found')
        }

    },
    async updatePokemon({ commit }: { commit: Function }, updateData: ['', 0]): Promise<void> {
        commit("updatePokemonLists", updateData);
    },

    async onSearch({ commit, state }: any, params: ['', 0]): Promise<void> {

        const response = state.preservecPokemonLists.results.filter((item: any) =>
            item.name.toLowerCase().includes(params[0].toLowerCase()));

        const pokemonObj = {
            count: response.length === params[1] ? state.preservecPokemonLists.count : response.length,
            next: state.preservecPokemonLists.next,
            previous: state.preservecPokemonLists.previous,
            results: response
        }
        commit("setPokemonLists", pokemonObj);
    },
}
