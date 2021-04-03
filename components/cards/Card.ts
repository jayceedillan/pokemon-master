import { Vue } from "vue-property-decorator";

export default Vue.extend({
    props: {
        title: String,
        subTitle: String,
        type: String,
        icon: String
    },
})