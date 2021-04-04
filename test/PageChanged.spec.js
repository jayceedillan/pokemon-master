import { mount } from '@vue/test-utils'
import PageChanged from '@/components/table/PageChanged/PageChanged.vue'
describe('PageChanged Component', () => {
    test('is a Vue instance', async () => {
        //const wrapper = mount(Card)

        const wrapper = mount(PageChanged);

        expect(wrapper.vm).toBeTruthy()
        const button = wrapper.find('select')
        await button.trigger('onchanged')
        // expect(wrapper.vm.selectedRowNumber).toBe(20)
        wrapper.vm.$emit('onChanged', wrapper.vm.selectedRowNumber)
        await wrapper.vm.$nextTick()
        expect(wrapper.emitted().onChanged).toBeTruthy()

    })
});
