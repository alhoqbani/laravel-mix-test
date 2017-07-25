import Vue from 'vue'
import Example from '../../../components/Example.vue'
const {expect} = require('chai');

Vue.config.productionTip = false;

describe('Example.vue', () => {
    it('should render correct contents', () => {
        const Constructor = Vue.extend(Example)
        const vm = new Constructor().$mount()

        expect(vm.$el.querySelector('.panel-body').textContent)
            .to.contain('I\'m an example component!')
    })
});
