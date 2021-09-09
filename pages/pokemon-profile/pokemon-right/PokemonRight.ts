import { Vue } from 'vue-property-decorator'
import card from '@/components/cards/Card'
import { mapGetters } from 'vuex'
export default Vue.extend({
  components: { card },
  data: () => ({
    evolutionEvolve: [],
  }),
  computed: {
    ...mapGetters('Pokemon-Module', ['pokemonDetails', 'evolutionsDetails']),

    types() {
      let types = ''
      debugger
      if (this.pokemonDetails?.types) {
        return ''
      }

      for (const item of this.pokemonDetails.types) {
        types += item.type.name + ','
      }
      return types.replace(/,+$/, '')
    },
    abilities() {
      let abilities = ''

      if (this.pokemonDetails?.abilities) {
        return ''
      }

      for (const item of this.pokemonDetails.abilities) {
        abilities += item.ability.name + ','
      }

      return abilities.replace(/,+$/, '')
    },
    picture() {
      return this.pokemonDetails?.sprites
        ? this.pokemonDetails.sprites.back_default
        : ''
    },
    evolutionEvolveRemoveNull() {
      return this.evolutionEvolve.filter((x: string) => x !== '')
    },
  },
  async mounted() {
    try {
      this.evolutionEvolve = await this.evolutionsDetails.chain.evolves_to[0].evolves_to[0].evolution_details.map(
        (x: any) => {
          return x.item === null ? '' : x.item.name
        }
      )
    } catch {
      this.evolutionEvolve = []
    }
  },
})
