import { Vue } from "vue-property-decorator";
import rowNumbers from '@/utils/constant/RowsNumber'
export default Vue.extend({
    data: () => ({
        rowNumbers,
        selectedRowNumber: 10,
    }),
    methods: {
        onChanged(): void {
            this.$emit('onChanged', this.selectedRowNumber);
        }
    }
})