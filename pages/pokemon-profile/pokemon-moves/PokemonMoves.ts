import { Vue } from "vue-property-decorator";
import card from '@/components/cards/Card';
import { mapGetters } from "vuex";
export default Vue.extend({
    components: { card },
    computed: {
        ...mapGetters("Pokemon-Module", [
            "pokemonDetails"
        ]),
        moves() {
            let types = '';
            for (const item of this.pokemonDetails.moves) {
                types += item.move.name + ',';
            }
            return types.replace(/,+$/, "");
        }
    },
})