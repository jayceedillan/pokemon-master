import { Vue } from "vue-property-decorator";

import imageService from '@/services/ImageService';
import pageChange from '@/components/table/PageChange/PageChange'
import _ from "lodash";
export default Vue.extend({
    components: { pageChange },
    props: {
        tableClass: {
            type: String,
            default: ''
        },
        theadClasses: {
            type: String,
            default: ''
        },
        tbodyClasses: {
            type: String,
            default: ''
        },
        data: {
            type: Array,
            default: () => []
        },
        columns: {
            type: Array,
            default: () => []
        }
    },

    watch: {
        data: async function () {
            this.watchData();
        }

    },
    mounted() {
        this.watchData();
    },
    data: () => ({
        datas: [] as any
    }),
    methods: {
        watchData() {
            this.datas = _.cloneDeep(this.data);
            for (const item of this.datas) {
                imageService.getImageUrl(item.url).then((response) => {
                    item.url = response;
                }
                )
            }
        },
        hasValue(item: any, column: string) {
            return item[column.toLowerCase()] !== "undefined";
        },
        itemValue(item: any, column: string, index: number = 0) {


            // console.log(item[column.toLowerCase()]);
            return item[column.toLowerCase()];
        },
        onChanged(selectedRowNumber: number): void {
            this.$emit('onChanged', selectedRowNumber);
        },
        viewDetail() {
            alert('xxx')
            this.$router.push('/pokemon-profile')
        }
    }
})