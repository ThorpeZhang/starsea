import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const state = {
    count:111,
    flag: window.sessionStorage.getItem('flag'),
    username: window.sessionStorage.getItem('username')
}

const mutations ={
    login(state,username){
        //this.$alert('login')
        state.username=username;
        state.flag=true;
        window.sessionStorage.setItem('username',username);
        window.sessionStorage.setItem('flag',true);
    },
    logout(state){
        state.username='';
        state.flag=false;
        window.sessionStorage.removeItem('username');
        window.sessionStorage.removeItem('flag');
    },
    add(state){
        state.count++;
    }
}

const getter = {
    isLogin: function(state) {
        if(window.sessionStorage.getItem('flag')){
            store.commit('login',window.sessionStorage.getItem('username'));
        }
        return state.flag;
    },
    username: function(state) {
        return state.username;
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getter
});