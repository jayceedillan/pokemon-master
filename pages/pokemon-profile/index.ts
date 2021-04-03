import { Vue } from "vue-property-decorator";
// import baseTable from '~/components/table/BaseTable';
// import card from '~/components/cards/Card';
// import cnotification from '~/components/notification/Notification';
// import { mapGetters } from "vuex";
// import pokemonModel from '@/models/Pokemon-Model';
// import pagination from '@/models/Pagination-Model';
// import cpagination from '@/components/pagination/Pagination';
// import paginationModel from '@/models/Pagination-Model';
export default Vue.extend({
    layout(context) {
        return "MainLayout";
    },

    // components: { baseTable, card, cnotification, cpagination },
    // computed: {
    //     ...mapGetters("Pokemon-Module", [
    //         "pokemonLists"
    //     ]),
    //     totalPages() {
    //         return Math.ceil(this.pokemonLists.count / this.pagination.rowPerPage)
    //     }
    // },
    // async fetch({ store }) {
    //     await store.dispatch('Pokemon-Module/getPokemon', paginationModel);

    // },

    // data: () => ({
    //     paginationModel,
    //     pokemonModel,
    //     pagination,
    //     currentPage: 0
    // }),
    // methods: {
    //     async changedPerPage(rowPerPage: number) {
    //         this.paginationModel.rowPerPage = rowPerPage;
    //         debugger
    //         await this.$store.dispatch('Pokemon-Module/getPokemon', paginationModel);
    //     },
    //     async pageChanged(currentPage: number) {
    //         this.paginationModel.currentPage = currentPage * this.paginationModel.rowPerPage;
    //         debugger
    //         await this.$store.dispatch('Pokemon-Module/getPokemon', paginationModel);
    //     }
    // }
})