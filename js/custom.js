$(function () {
    // $('.triger_btn').on('click', function (e) {
    //     e.preventDefault();
    //     $('#side_nav').addClass('active')
    // });

    // $('#side_nav .overlay').on('click', function () {
    //     $('#side_nav').removeClass('active')
    // });

    // $('.filter_trigger').on('click', function (e) {
    //     e.preventDefault();
    //     $('#side_nav2').addClass('active')
    // });

    // $('#side_nav2 .overlay').on('click', function () {
    //     $('#side_nav2').removeClass('active')
    // });
})

if (document.getElementById('vaccine')) {

    // Vue.component('button-counter', {
    //     data: function () {
    //         return {
    //             count: 0
    //         }
    //     },
    //     template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
    // })

    const app = new Vue({
        el: '#vaccine',
        data: function(){
            return {
                name: 'hello',
            }
        },
        created: function () {
            console.log('hi');
        }
    })
}