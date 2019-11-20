// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
// eslint-disable-next-line no-unused-vars
import VueRouter from 'vue-router'
// eslint-disable-next-line no-unused-vars
import  maijiaxiuxiangqing from "../components/chengQ/chengQ-maijiaxiu/chengQ-maijiaxiu-xiangqing";
import home from "../view/main/home";
import mine from "../view/main/mine";
import findSingle from "../view/main/findSingle";
import chengQ from "../view/main/chengQ";
import main from "../view/main";
Vue.use(VueRouter)
let router = new VueRouter({
    routes:[

        {path:'/',redirect:'/main/home'},
        {path:'/maijiaxiu', component:maijiaxiuxiangqing},
        {
            path:'/main',
            component:main,
            children:[
                {
                    path:'home',
                    component:home
                },
                {
                    path:'findSingle',
                    component:findSingle
                },
                {
                    path:'mine',
                    component:mine
                },
                {
                    path:'chengQ',
                    component:chengQ
                }
            ]
        }

    ]

})
export default router