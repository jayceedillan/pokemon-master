import { Vue } from "vue-property-decorator";
import PokemonProfile from '~/pages/pokemon-profile/PokemonProfile';

export default Vue.extend({
    components: { PokemonProfile },
    layout(context) {
        return "MainLayout";
    },


    async fetch({ store, route }) {
        await store.dispatch('Pokemon-Module/getPokemonById', route.params.id);
    },
})