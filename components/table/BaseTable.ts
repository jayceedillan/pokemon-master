import { Vue } from "vue-property-decorator";

import imageService from '@/services/ImageService';
import pageChange from '~/components/table/PageChanged/PageChanged'
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
    created() {
        this.datas = [];
    },
    mounted() {
        this.watchData();
    },
    data: () => ({
        datas: [{ name: '', url: '', picture: '' }] as any,
        search: '',
        selectedRowNumber: 10
    }),
    methods: {
        watchData() {
            this.datas = _.cloneDeep(this.data);
            const tempData = [] as any;
            for (const item of this.datas) {
                imageService.getImageUrl(item.url).then((response) => {
                    const splitUrl = item.url.toString().split('/')
                    let index = splitUrl.indexOf('pokemon');
                    const id = Number(splitUrl[++index]);
                    tempData.push({ name: item.name, url: response, id: id })
                }
                )
            }

            this.datas = tempData;
        },
        hasValue(item: any, column: string) {
            return item[column.toLowerCase()] !== "undefined";
        },
        itemValue(item: any, column: string, index: number = 0) {
            return item[column.toLowerCase()];
        },
        onChanged(selectedRowNumber: number): void {
            this.selectedRowNumber = selectedRowNumber;
            this.$emit('onChanged', selectedRowNumber);
        },

        onSearch(): void {
            this.$store.dispatch('Pokemon-Module/onSearch', [this.search.toLowerCase(), this.selectedRowNumber]);
        },
    }
})