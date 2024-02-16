// noinspection TypeScriptValidateTypes

import {createRouter, createWebHistory} from 'vue-router'
import HotelDetailsComponent from '../views/hotel/hotel-details/HotelDetailsLayoutComponent.vue'
import HotelListingLayoutComponent from '../views/hotel/listing/HotelListingLayoutComponent.vue'
import HotelBookingComponent from '../views/hotel/booking/HotelBookingLayoutComponent.vue'
import BookingDetailsLayoutComponent from '../views/hotel/booking/details/BookingDetailsLayoutComponent.vue'
import Home from "../views/Home.vue";
import Hotel from "../views/Hotel.vue";

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
        component: HotelListingLayoutComponent,
        name: 'hotel-listing',
    }, {
        path: '/hotel/details',
        component: HotelDetailsComponent,
        name: 'hotel-details',
    }, {
        path: '/hotel/booking',
        component: HotelBookingComponent,
        name: 'hotel-booking',
    }, {
        path: '/hotel/booking/details',
        component: BookingDetailsLayoutComponent,
        name: 'hotel-booking-details',
    }]
})

export default router

