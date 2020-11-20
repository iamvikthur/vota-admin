import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminAccounts from '../components/AdminAccounts'
import ViewUsers from '../components/ViewUsers'
import ManageUser from '../components/Users/ManageUser'
import Event from '../components/Event/Event'
import AddEvent from '../components/Event/AddEvent'
import Feedbacks from '../components/Feedbacks'
import publicData from '../components/publicData'
import News from '../components/News/News'
import AddNews from '../components/News/AddNews'
import Survey from '../components/Survey'
import UserSubmissions from '../components/UserSubmissions'
import CandidatesRequest from '../components/Elections/CandidatesRequest'
import ElectionsView from '../components/Elections/ElectionsView'
import NewElection from '../components/Elections/NewElection'
import singleElectionView from '../components/Elections/singleElectionView'
import Donations from '../components/Donations'
import Login from '../components/auth/login'
import noData from '../components/noData'
import Dashboard from '../components/Dashboard'
import notFound from '../components/notFound'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/view_users',
    name: 'ViewUsers',
    component: ViewUsers
  },
  {
    path: '/manage_user',
    name: 'ManageUser',
    component: ManageUser
  },
  {
    path: '/donations',
    name: 'Donations',
    component: Donations
  },
  {
    path: '/survey',
    name: 'Survey',
    component: Survey
  },
  {
    path: '/public_data',
    name: 'publicData',
    component: publicData
  },
  {
    path: '/user_submissions',
    name: 'UserSubMissions',
    component: UserSubmissions
  },
  {
    path: '/candidates_request',
    name: 'CandidatesRequest',
    component: CandidatesRequest
  },
  {
    path: '/new_election',
    name: 'NewElection',
    component: NewElection
  },
  {
    path: '/elections_view',
    name: 'ElectionView',
    component: ElectionsView
  },
  {
    path: '/manage_election',
    name: 'singleElectionView',
    component: singleElectionView
  },
  {
    path: '/admin_accounts',
    name: 'AdminAccounts',
    component: AdminAccounts
  },
  {
    path: '/manage_event',
    name: 'Event',
    component: Event
  },
  {
    path: '/add_event',
    name: 'AddEvent',
    component: AddEvent
  },
  {
    path: '/feedbacks',
    name: 'Feedbacks',
    component: Feedbacks
  },
  {
    path: '/manage_news',
    name: 'News',
    component: News
  },
  {
    path: '/add_news',
    name: 'AddNews',
    component: AddNews
  },
  {
    path: '/no_data',
    name: 'noData',
    component: noData
  },
  {
    path: '*',
    name: '404',
    component: notFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
