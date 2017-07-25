import Vue from 'vue'
import Example from '../../../js/components/Example.vue'

const {expect} = require('chai');

Vue.config.productionTip = false;

describe('Example.vue', () => {
    it('should render correct contents', () => {
        const Constructor = Vue.extend(Example)
        const vm = new Constructor().$mount()

        expect(vm.$el.querySelector('.panel-body').textContent)
            .to.contain('I\'m an example component!')
    })

    // Evaluate the results of functions in
    // the raw component options
    it('sets the correct default data', () => {
        // expect(Example.data).be.function
        const defaultData = Example.data()
        expect(defaultData.message).to.equal('hello!')
    })

    // Inspect the component instance on mount
    it('correctly sets the message when created', () => {
        const vm = new Vue(Example).$mount()
        expect(vm.message).to.equal('bye!')
    })
    // Mount an instance and inspect the render output
    it('renders the correct message', (done) => {
        const Ctor = Vue.extend(Example)
        const vm = new Ctor().$mount()

        Vue.nextTick(() => {
            expect(vm.$el.querySelector('.message').textContent).to.equal('bye!')
            done();
        })
    })
    // Inspect the generated HTML after a state update
    it('updates the rendered message when vm.message updates', done => {
        const vm = new Vue(Example).$mount()
        vm.message = 'foo'
        // wait a "tick" after state change before asserting DOM updates
        Vue.nextTick(() => {
            expect(vm.$el.querySelector('.message').textContent).to.equal('foo')
            done()
        })
    })


});
