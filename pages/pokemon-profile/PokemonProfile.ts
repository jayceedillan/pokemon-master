import { Vue } from "vue-property-decorator";
import card from '@/components/cards/Card';
import { mapGetters } from "vuex";
import pokemonRight from '@/pages/pokemon-profile/pokemon-right/PokemonRight';
import pokemonStats from '@/pages/pokemon-profile/pokemon-stats/PokemonStats';
import pokemonMoves from '@/pages/pokemon-profile/pokemon-moves/PokemonMoves';
export default Vue.extend({
    components: { card, pokemonRight, pokemonStats, pokemonMoves },
    computed: {
        ...mapGetters("Pokemon-Module", [
            "pokemonDetails"
        ])
    },
})