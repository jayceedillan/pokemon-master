import { mount } from '@vue/test-utils'
import Card from '@/components/cards/Card.vue'
describe('Card Component', () => {
    test('is a Vue instance', () => {
        //const wrapper = mount(Card)

        const wrapper = mount(Card, {
            propsData: {
                title: 'title',
                subTitle: 'subTitle',
                type: 'type',
                icon: 'icon'
            }
        });

        expect(wrapper.vm).toBeTruthy()
        expect(wrapper.props().title).toBe('title')
        expect(wrapper.props('title')).toBe('title')

        expect(wrapper.props().subTitle).toBe('subTitle')
        expect(wrapper.props('subTitle')).toBe('subTitle')

        expect(wrapper.props().type).toBe('type')
        expect(wrapper.props('type')).toBe('type')

        expect(wrapper.props().icon).toBe('icon')
        expect(wrapper.props('icon')).toBe('icon')
    })
});
