import { Vue } from "vue-property-decorator";
import pokemonProfile from '~/pages/pokemon-profile/PokemonProfile';

export default Vue.extend({
    components: { pokemonProfile },
    layout(context) {
        return "MainLayout";
    },


    async fetch({ store, route }) {
        await store.dispatch('Pokemon-Module/getPokemonById', route.params.id);
    },
})