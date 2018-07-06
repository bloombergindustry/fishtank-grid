import Vue from 'vue'
import Router from 'vue-router'
import GridLanding from '@/components/GridLanding'
import InsetTenColumnGrid from '@/components/InsetTenColumnGrid'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '12 Column Grid',
      component: GridLanding
    },
    {
      path: '/inset-ten-column-grid',
      name: 'Inset 10 Column Grid',
      component: InsetTenColumnGrid
    },
    {
      path: '/ten-column-inset-grid',
      name: '12 Column Grid',
      component: GridLanding
    }
  ]
})
