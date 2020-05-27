export const state = () => ( {
    drawerState: true
} );

export const mutations = {
    setDrawerState ( state, newDrawerState ) {
        state.drawerState = newDrawerState;
    }
};

export const actions = {
    toggleDrawerState ( { commit, getters } ) {
        commit( 'setDrawerState', ! getters.getDrawerState );
    },

    setDrawerState ( { commit }, newDrawerState ) {
        commit( 'setDrawerState', newDrawerState );
    }
};

export const getters = {
    getDrawerState ( state ) {
        return state.drawerState;
    }
};
