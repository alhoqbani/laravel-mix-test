import * as getters from '../../../../js/store/getters';

describe('getters', () => {
    it('getTasks', () => {
        const state = {
            tasks: ['first', 'second', 'third']
        }
        expect(getters.getTasks(state))
            .to.deep.equal(state.tasks)
    })
});
