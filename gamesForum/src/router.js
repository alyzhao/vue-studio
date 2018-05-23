import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// import Schedule from './containers/Schedule.vue';
// import creativity from './containers/creativity.vue';

// import ScrollContainer from 'components/ScrollContainer';

import Index from './containers/index/Index.vue';
import Credit from './components/Credit.vue';
import Activity from './containers/activity/Activity.vue';
import Reunite from  './containers/reunite/Reunite.vue';

// import Forum from './containers/forum/Forum.vue';
// import ForumDetail from './containers/forum/ForumDetail.vue';
// import TopicDetail from './containers/forum/TopicDetail.vue';

import PurchaseTickets from './containers/tickets/PurchaseTickets.vue';
import ReunitDetail from './containers/reunite/ReuniteDetail.vue';
import Explore from './containers/explore/Explore.vue'

import Volunteer from './containers/volunteer/Volunteer.vue';

import Reports from './containers/reports/Reports.vue';

import People from './containers/people/People.vue';

import Guide from './containers/guide/Guide.vue';
import Notice from './containers/guide/Notice.vue';
import Trip from './containers/guide/Trip.vue';
import Schedule from './containers/guide/schedule.vue';

import Faq from './containers/faq/Faq.vue';


import Game from './containers/game/Game.vue';
import GameDetail from './containers/game/GameDetail.vue';

const routes = [
    {path: '/', redirect: '/index'},
    {path: '/index', component: Index},
    {path: '/activity', component: Activity},
    {path: '/explore', component: Explore},
    {path: '/people', component: People},
    {
        path: '/reunite', component: Reunite,
        children: [
            {
                path: ':id',
                component: ReunitDetail,
                props: true
            }
        ]
    },
    {path: '/volunteer', component: Volunteer},
    {path: '/reports', component: Reports},
    {path: '/credit', component: Credit},
    {path: '/purchase', component: PurchaseTickets},
    {path: '/reunitdetail', component: ReunitDetail},
    {path: '/guide', redirect: '/guide/notice'},
    {
        path: '/guide', component: Guide,
        children: [{
            path: 'notice',
            component: Notice
        }, {
            path: 'trip',
            component: Trip
        }, {
            path: 'schedule',
            component: Schedule
        }]
    },
    {path: '/faq', component: Faq},

    {
        path: '/game', component: Game,
        children: [
            {
                path: ':gameId',
                component: GameDetail,
                props: true
            }
        ]
    }
]

export default new Router({
    // mode: 'history',   // 以正常的路由显示
    routes,
    linkActiveClass: 'is-active'    // 这是链接激活时的class, tells the vue-router what class to add to the navigation to make the menu item active
})