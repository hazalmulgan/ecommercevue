import BasketItem from "../../src/components/BasketItem";
import {createLocalVue, mount, RouterLinkStub, shallowMount} from "@vue/test-utils";
import { BootstrapVue} from "bootstrap-vue";
import Vuex from 'vuex';

describe("BasketItem", () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    const store = new Vuex.Store({
        mutations: {
            'DELETE_FROM_CART': jest.fn()
        },
        actions : {
            'setSnackBar' : jest.fn()
        }
    });

    localVue.use(BootstrapVue);


    const wrapper = mount(BasketItem, {
        propsData: {
            basketItem: {
                id: 1,
                image: 'image',
                name: 'name',
                price: 100,
                amount : 1
            }
        },
        stubs: {
            'router-link': RouterLinkStub
        },
        store,
        localVue
    });

    it("it should parse data when component is rendered", () => {
        expect(wrapper.find('.basketName').text()).toBe('name');
        expect(wrapper.find('.basketPrice').text()).toBe("100₺");
        expect(wrapper.find('.basketAmount').text()).toBe("1");
        expect(wrapper.find('img').attributes('src')).toBe('image');
    });

    it("it should add to cart when click the button", () => {
        const basketButton = wrapper.find('button');
        basketButton.trigger('click');
        wrapper.vm.DELETE_FROM_CART = jest.fn();
        wrapper.vm.$store.dispatch = jest.fn();
        wrapper.vm.removeItem();
        expect(wrapper.vm.$store.dispatch).toBeCalledWith("setSnackBar", {
            showing: true,
            text: "The product has been removed from your cart!",
            color: "secondary"
        })

    })
});