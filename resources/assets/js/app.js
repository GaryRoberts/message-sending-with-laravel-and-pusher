/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

Vue.component('post-component', require('./components/PostComponent.vue'));

const app = new Vue({
    el: '#app',
    created() {
        Echo.private('post.created')
            .listen('PostCreated', (e) => {
                alert(e.post.title); //question showing
                //$('#success').html(e.post.title);
                console.log(e.post.title)
                console.log("Loaded")
            });
    }
});