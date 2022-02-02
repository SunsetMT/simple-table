import {createStore} from 'vuex'

export default createStore({
    state: {
        users: new Map(Object.entries({
            1: {id: 1, name: 'Grisha', mail: 'grisha.serebrov@mail.ru', phone: '+79312678355'},
            2: {id: 2, name: 'Misha', mail: 'grisha.serebrov@mail.ru', phone: '+79312678355'},
            3: {id: 3, name: 'Vova', mail: 'grisha.serebrov@mail.ru', phone: '+79312678355'},
            4: {id: 4, name: 'Elena', mail: 'grisha.serebrov@mail.ru', phone: '+79312678355'},
            5: {id: 5, name: 'Gena', mail: 'grisha.serebrov@mail.ru', phone: '+79312678355'},
        })),

        freeId: 6
    },
    getters: {
        USERS(state){
            return state.users;
        },
        USER: state => id => {
            return state.users.get(id);
        },

        FREE_ID(state){
            return state.freeId;
        }
    },
    mutations: {
        ADD_TO_USERS(state, el){
            el.id = state.freeId;
            state.users.set(state.freeId + '', el);
            state.freeId++;
        },
        DEL_FROM_USERS(state, id){
            state.users.delete(String(id));
            console.log(state.users);
        },
    },
    actions: {
        ADD_USER({commit}, user){
            commit('ADD_TO_USERS', user);
        },
        DEL_USER({commit}, id){
            commit('DEL_FROM_USERS', id)
        }
    },
    modules: {}
})
