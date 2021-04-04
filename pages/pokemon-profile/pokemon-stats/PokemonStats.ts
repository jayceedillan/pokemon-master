import { Vue } from "vue-property-decorator";
import card from '@/components/cards/Card';
import { mapGetters } from "vuex";
export default Vue.extend({
    components: { card },
    computed: {
        ...mapGetters("Pokemon-Module", [
            "pokemonDetails"
        ]),
    },
    methods: {
        value(idx: number) {
            return this.pokemonDetails.stats === undefined
                ? 0
                : this.pokemonDetails.stats[idx].base_stat
        }
    }
})