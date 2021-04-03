

import apiService from '@/services/ApiService'
import PaginationModel from '~/models/PaginationModel';

export const state = () => ({
    pokemonLists: []
})

export const getters = {
    pokemonLists: (state: any) => {
        return state.pokemonLists;
    },

}

export const mutations = {
    async setPokemonLists(state: any, pokemonLists: []) {
        debugger
        state.pokemonLists = pokemonLists;
    },

    async updatePokemonLists(state: any, pokemonLists: ['', 0]) {

        debugger
        state.pokemonLists[pokemonLists[1]] = pokemonLists[0]
        debugger
    }
}

export const actions = {

    async getPokemon({ commit }: { commit: Function }, paginationModel = PaginationModel): Promise<void> {

        const url = `pokemon/?offset=${paginationModel.currentPage}&limit=${paginationModel.rowPerPage}`;
        const response: any = await apiService.getAll(url);

        // const pokemonList = [];
        // for (const item of response.data.results) {

        //     const imageUrl = await apiService.getAll(item.url);
        //     pokemonList.push({ name: item.name, picture: imageUrl.data.sprites.back_default })

        // }

        commit("setPokemonLists", response.data);
    },
    async updatePokemon({ commit }: { commit: Function }, updateData: ['', 0]): Promise<void> {

        commit("updatePokemonLists", updateData);
    },
}
