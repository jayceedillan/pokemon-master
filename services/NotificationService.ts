import Vue from 'vue';
export default {
    success(title: string, text: string) {
        alert('xxx')
        Vue.notify({
            group: 'foo',
            title: title,
            text: text
        })
    },

    show(group: any, title: string, text: string, type = '') {
        Vue.notify({
            group,
            title: title,
            text,
            type,
        })
    },
    clean(group: string) {
        Vue.notify({ group, clean: true })
    }

}