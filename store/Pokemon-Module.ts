

import apiService from '@/services/ApiService'
import PaginationModel from '~/models/PaginationModel';

export const state = () => ({
    pokemonLists: [],
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
    },
    async getPokemonById({ commit }: { commit: Function }, id: number): Promise<void> {
        debugger
        const response: any = await apiService.getAll('pokemon/' + id);
        commit("setpokemonDetails", response.data);
    },
    async updatePokemon({ commit }: { commit: Function }, updateData: ['', 0]): Promise<void> {
        commit("updatePokemonLists", updateData);
    },
}
