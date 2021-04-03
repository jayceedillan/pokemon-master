import { Vue } from "vue-property-decorator";
import editProfile from '@/pages/pokemon-profile/ViewProfile';

export default Vue.extend({
    components: { editProfile },
    layout(context) {
        return "MainLayout";
    },


    async fetch({ store, route }) {
        await store.dispatch('Pokemon-Module/getPokemonById', route.params.id);
    },
})