import { mount } from '@vue/test-utils'
import Pagination from '@/components/pagination/Pagination.vue';

describe('Card Component', () => {
    test('is a Vue instance', async () => {
        const wrapper = mount(Pagination, {
            propsData: {
                totalPages: 1118
            }
        });
        expect(wrapper.vm).toBeTruthy()
        expect(wrapper.props().totalPages).toBe(1118)
        expect(wrapper.props('totalPages')).toBe(1118)
        wrapper.find('li.page-item').trigger('click')
        expect(wrapper.vm.currentPage).toBe(0)
        wrapper.find('li.last').trigger('click')
        expect(wrapper.vm.currentPage).toBe(1118)
        wrapper.find('a.page-link').trigger('click')

        wrapper.vm.$emit('pageChanged', wrapper.vm.currentPage - 1)

        await wrapper.vm.$nextTick()
        expect(wrapper.emitted().pageChanged).toBeTruthy()
    })
});