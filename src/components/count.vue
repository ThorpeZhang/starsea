<template>
        <div>
            <h2>{{msg}}</h2>
            <hr/>
            <h3>{{this.$store.state.count}}</h3>
            <button @click="$store.commit('add')">add</button>
            <button @click="$store.commit('login','ztt')">login</button>
        </div>
    </template>
    <script>
        //import store from '../store.js'
        export default{
            name: 'count',
            data(){
                return{
                    msg:'Hello Vuex',

                }
            },
            computed:{
                username:function(){
                    return this.$store.state.username;
                }
            }
            //store

        }
    </script>