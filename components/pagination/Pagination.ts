import { Vue } from "vue-property-decorator";
import _ from 'lodash';
export default Vue.extend({
    props: {
        totalPages: {
            type: Number,
            default: 0
        },
    },

    data: () => ({
        currentPage: 0
    }),

    methods: {
        setFirst() {
            this.currentPage = 0;
            this.$emit('pageChanged', this.currentPage);
        },
        setLast() {
            this.currentPage = this.totalPages;
            this.$emit('pageChanged', this.currentPage - 1);
        },
        setPage(e: any, pageNumber: number) {
            e.preventDefault();
            this.currentPage = pageNumber;
            this.$emit('pageChanged', this.currentPage - 1);
        },
        limitButton(pageNumber: number) {
            return Math.abs(pageNumber - this.currentPage) < 6 || pageNumber == this.totalPages - 1 || pageNumber == 0;
        },

    }
})