import { Vue } from "vue-property-decorator";
import baseTable from '~/components/table/BaseTable';
import card from '~/components/cards/Card';
import cnotification from '~/components/notification/Notification';
import { mapGetters } from "vuex";
import pokemonModel from '~/models/PokemonTableModel';
import pagination from '~/models/PaginationModel';
import cpagination from '@/components/pagination/Pagination';
import paginationModel from '~/models/PaginationModel';
export default Vue.extend({
    components: { baseTable, card, cnotification, cpagination },

    layout(context) {
        return "MainLayout";
    },

    computed: {
        ...mapGetters("Pokemon-Module", [
            "pokemonLists"
        ]),
        totalPages() {
            return Math.ceil(this.pokemonLists.count / this.pagination.rowPerPage)
        }
    },
    async fetch({ store }) {
        await store.dispatch('Pokemon-Module/getPokemon', paginationModel);
    },
    data: () => ({
        paginationModel,
        pokemonModel,
        pagination,
        currentPage: 0
    }),
    methods: {
        async changedPerPage(rowPerPage: number) {
            this.paginationModel.rowPerPage = rowPerPage;
            await this.$store.dispatch('Pokemon-Module/getPokemon', paginationModel);
        },
        async pageChanged(currentPage: number) {
            this.paginationModel.currentPage = currentPage * this.paginationModel.rowPerPage;
            await this.$store.dispatch('Pokemon-Module/getPokemon', paginationModel);
        }
    }
})