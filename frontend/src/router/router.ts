// noinspection TypeScriptValidateTypes

import {createRouter, createWebHistory} from 'vue-router'
import HotelBookingDetails from '../views/HotelBookingDetails.vue'
import HotelListing from '../views/HotelListing.vue'
import HotelBookingComponent from '../views/HotelBookingCheckout.vue'
import HotelBookingCheckoutDetails from '../views/HotelBookingCheckoutDetails.vue'
import Home from "../views/Home.vue";
import Hotel from "../views/HotelLanding.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        component: Home,
        name: 'home'
    }, {
        path: '/hotel',
        component: Hotel,
        name: 'hotel'
    }, {
        path: '/hotel/listing',
        component: HotelListing,
        name: 'hotel-listing',
    }, {
        path: '/hotel/details',
        component: HotelBookingDetails,
        name: 'hotel-details',
    }, {
        path: '/hotel/booking',
        component: HotelBookingComponent,
        name: 'hotel-booking',
    }, {
        path: '/hotel/booking/details',
        component: HotelBookingCheckoutDetails,
        name: 'hotel-booking-details',
    }]
})

export default router

