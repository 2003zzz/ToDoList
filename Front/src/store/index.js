import Vuex from 'vuex'
import axios from 'axios';
const baseUrl = 'http://localhost:8080/user'

const store = new Vuex.Store({
    state: {
        phones:[],
        isVisibleForm: false
    },
    getters: {
        getUser(state) 
        {
            return state.phones
        },
        getFormVisible(state) 
        {
            return state.isVisibleForm
        }
    },
    mutations: {
        SET_FORM_VISIBLE(state) {
            state.isVisibleForm = !state.isVisibleForm;
        },

        GET_USERS(state, data) {
            state.phones = data
        },

        SET_USER(state, data) {
            const {id, name, phone } = data    
            state.phones.unshift({ id, name, phone });
        },
        DELETE_USER(state,id)
        {
            state.phones = state.phones.filter(phone => phone.id !== id);
        },
        CHANGE_USER(state, data) 
        {
            const { id, name, phone } = data;
            const phoneEntry = state.phones.find(phone => phone.id === id);
            if (phoneEntry) {
                phoneEntry.name = name;
                phoneEntry.phone = phone;
            }
        }
    },
    actions:{
        setFormVisible({commit}){
            commit('SET_FORM_VISIBLE')
        },
        async AddUser({commit}, data){
            const { name, phone } = data
            try{
                const response = await axios.post(`${baseUrl}/addUser`,{name,phone});
                commit('SET_USER', response.data)
              }
              catch (error)
              {
                  console.log(error);
              }
        },
       async getAllUsers({commit})
        {
          const response =  await axios.get(`${baseUrl}/getAllUsers`)
          commit('GET_USERS', response.data)
        },
        async deleteUser({commit}, id)
        {
            commit('DELETE_USER', id)
           const response = await axios.delete(`${baseUrl}/deleteUser?id=${id}`)
        },
        async updateUser({commit}, data){
            const { id, name, phone } = data
            console.log("Получено: ",data)
            try
            {
                commit('CHANGE_USER', data)
                const response = await axios.put('http://localhost:8080/user/changeUser', {id,name,phone});
            }
            catch (error)
            {
                console.log(error.message);
            }
        }        
    }
})
export default store;

