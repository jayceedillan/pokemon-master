import { Vue } from "vue-property-decorator";
import card from '@/components/cards/Card';
import { mapGetters } from "vuex";
export default Vue.extend({
    components: { card },
    computed: {
        ...mapGetters("Pokemon-Module", [
            "pokemonDetails"
        ]),
        types() {
            let types = '';
            for (const item of this.pokemonDetails.types) {
                types += item.type.name + ',';
            }
            return types.replace(/,+$/, "");
        },
        abilities() {
            let abilities = '';
            for (const item of this.pokemonDetails.abilities) {
                abilities += item.ability.name + ',';
            }
            return abilities.replace(/,+$/, "");
        }
    },
})