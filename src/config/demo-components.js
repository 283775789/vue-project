// 引入css组件示例
import Vue from 'vue'
import Design from '@docs/guides/design'
import DevFlow from '@docs/guides/dev-flow'
import HeaderBase from '@modules/header/header-base'
import HeaderIcon from '@modules/header/header-icon'
import HeaderIconWrap from '@modules/header/header-icon-wrap'
import NavLv2 from '@modules/nav-lv2/nav-lv2'
import Sidebar from '@modules/sidebar/sidebar'
import BodyBase from '@modules/body/body-base'
import Footer from '@modules/footer/footer'
import VamBox from '@modules/widget/vam-box'
import ellipsisBox from '@modules/widget/ellipsis-box'
import TabsBase from '@modules/tabs/tabs-base'
import TabsCard from '@modules/tabs/tabs-card'
import TabsBtn from '@modules/tabs/tabs-btn'
import ButtonAll from '@modules/button/button-all'
import ButtonMain from '@modules/button/button-main'
import ButtonSecondary from '@modules/button/button-secondary'
import ButtonWeaking from '@modules/button/button-weaking'
import Grid from '@modules/grid/grid-avg'
import Fonts from '@modules/fonts/fonts'
import Crumbs from '@modules/crumbs/crumbs'
import StepsArrow from '@modules/steps/steps-arrow'
import StepsStripe from '@modules/steps/steps-stripe'
import StepsRound from '@modules/steps/steps-round'
import StepsRoundLarge from '@modules/steps/steps-round-large'
import FloaterLeft from '@modules/floater/floater-left'
import FloaterRight from '@modules/floater/floater-right'

// 引入vue组件示例
import Poppane from '@comps/poppane/demo/poppane'
import PoppaneAll from '@comps/poppane/demo/poppane-all'
import PoppanePosition from '@comps/poppane/demo/poppane-position'
import Collapse from '@comps/collapse/demo/collapse'
import CollapseGroup from '@comps/collapse/demo/collapse-group'
import ModalBase from '@comps/modal/demo/modal-base'
import ModalAll from '@comps/modal/demo/modal-all'
// import StepsArrow from '@comps/steps/demo/steps-arrow'

// 引入vue指令示例
import Lift from '@directives/lift/demo/lift'
import LiftGroup from '@directives/lift/demo/lift-group'

// 所有的示例组件的组件名必须为【demo+文件名】
// css组件示例
Vue.component('demo-design', Design)
Vue.component('demo-dev-flow', DevFlow)
Vue.component('demo-header-base', HeaderBase)
Vue.component('demo-header-icon', HeaderIcon)
Vue.component('demo-header-icon-wrap', HeaderIconWrap)
Vue.component('demo-nav-lv2', NavLv2)
Vue.component('demo-sidebar', Sidebar)
Vue.component('demo-body-base', BodyBase)
Vue.component('demo-footer', Footer)
Vue.component('demo-vam-box', VamBox)
Vue.component('demo-ellipsis-box', ellipsisBox)
Vue.component('demo-tabs-base', TabsBase)
Vue.component('demo-tabs-card', TabsCard)
Vue.component('demo-tabs-btn', TabsBtn)
Vue.component('demo-button-all', ButtonAll)
Vue.component('demo-button-main', ButtonMain)
Vue.component('demo-button-secondary', ButtonSecondary)
Vue.component('demo-button-weaking', ButtonWeaking)
Vue.component('demo-grid-avg', Grid)
Vue.component('demo-fonts', Fonts)
Vue.component('demo-crumbs', Crumbs)
Vue.component('demo-steps-arrow', StepsArrow)
Vue.component('demo-steps-stripe', StepsStripe)
Vue.component('demo-steps-round', StepsRound)
Vue.component('demo-steps-round-large', StepsRoundLarge)
Vue.component('demo-floater-left', FloaterLeft)
Vue.component('demo-floater-right', FloaterRight)

// vue组件示例
Vue.component('demo-poppane', Poppane)
Vue.component('demo-poppane-all', PoppaneAll)
Vue.component('demo-poppane-position', PoppanePosition)
Vue.component('demo-collapse', Collapse)
Vue.component('demo-collapse-group', CollapseGroup)
Vue.component('demo-modal-base', ModalBase)
Vue.component('demo-modal-all', ModalAll)

// vue指令示例
Vue.component('demo-lift', Lift)
Vue.component('demo-lift-group', LiftGroup)
