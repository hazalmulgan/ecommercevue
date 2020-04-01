import ProductItem from "../../src/components/ProductItem";
import {createLocalVue, shallowMount} from "@vue/test-utils";
import {BootstrapVue} from "bootstrap-vue";

describe("ProductItem", () => {
    const localVue = createLocalVue();
    localVue.use(BootstrapVue);
    const wrapper = shallowMount(ProductItem, {
        propsData: {
            productItem: {
                id: 1,
                image: 'image',
                name: 'name',
                price: 100,
                currency: "currency"
            }
        },
        localVue
    });

    it("it should parse data when component is rendered", () => {
        expect(wrapper.find('.name').text()).toBe('name');
        expect(wrapper.find('.price').text()).toBe("100");
        expect(wrapper.find('.currency').text()).toBe("currency");
        expect(wrapper.find('img').attributes('src')).toBe('image');
    });
});