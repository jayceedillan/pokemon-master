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

            if (this.pokemonDetails.types === undefined) {
                return ''
            }

            for (const item of this.pokemonDetails.types) {
                types += item.type.name + ',';
            }
            return types.replace(/,+$/, "");
        },
        abilities() {
            let abilities = '';

            if (this.pokemonDetails.abilities === undefined) {
                return ''
            }

            for (const item of this.pokemonDetails.abilities) {
                abilities += item.ability.name + ',';
            }

            return abilities.replace(/,+$/, "");
        },
        picture() {
            return this.pokemonDetails.sprites === undefined ? '' : this.pokemonDetails.sprites.back_default;
        }
    }
})