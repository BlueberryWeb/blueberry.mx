import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ 'VIEWS/Home')
},
{
    path: '/weare',
    name: 'weare',
    component: () => import(/* webpackChunkName: "weare" */ 'VIEWS/Weare')
},
{
    path: '/portafolio',
    name: 'portafolio',
    component: () => import(/* webpackChunkName: "portafolio" */ 'VIEWS/Portafolio')
},

{
    path: '/branding',
    name: 'branding',
    component: () => import(/* webpackChunkName: "branding" */ 'VIEWS/Branding')
},
{
    path: '/design',
    name: 'design',
    component: () => import(/* webpackChunkName: "comprehensive design" */ 'VIEWS/Design')
},
{
    path: '/audiovisual',
    name: 'audiovisual',
    component: () => import(/* webpackChunkName: "comprehensive design" */ 'VIEWS/Audiovisual')
},
{
    path: '/photo',
    name: 'photo',
    component: () => import(/* webpackChunkName: "photo" */ 'VIEWS/Photography')
},
{
    path: '/web_development',
    name: 'web_development',
    component: () => import(/* webpackChunkName: "comprehensive design" */ 'VIEWS/WebDevelopment')
},
{
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "photo" */ 'VIEWS/ContactUs')
},
{
    path: '/proyect1',
    name: 'proyect1',
    component: () => import(/* webpackChunkName: "photo" */ 'VIEWS/Proyect1')
},
{
    path: '/proyect2',
    name: 'proyect2',
    component: () => import(/* webpackChunkName: "photo" */ 'VIEWS/Proyect2')
},
{
    path: '/proyect3',
    name: 'proyect3',
    component: () => import(/* webpackChunkName: "photo" */ 'VIEWS/Proyect3')
},
{
    path: '/privacy',
    name: 'privacy',
    component: () => import(/* webpackChunkName: "photo" */ 'VIEWS/Privacy')
},
{
    path: '/terms',
    name: 'terms',
    component: () => import(/* webpackChunkName: "photo" */ 'VIEWS/Terms')
},
{
    path: '/cookies',
    name: 'cookies',
    component: () => import(/* webpackChunkName: "photo" */ 'VIEWS/Cookies')
}]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router