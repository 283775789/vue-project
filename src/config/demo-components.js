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
import cutoffBox from '@modules/widget/cutoff-box'
import TabsBase from '@modules/tabs/tabs-base'
import TabsCard from '@modules/tabs/tabs-card'
import TabsBtn from '@modules/tabs/tabs-btn'
import ButtonAll from '@modules/button/button-all'
import ButtonMain from '@modules/button/button-main'
import ButtonSecondary from '@modules/button/button-secondary'
import ButtonWeaking from '@modules/button/button-weaking'

// 引入vue组件示例
import ModalBase from '@comps/modal/demo/modal-base'
import ModalAll from '@comps/modal/demo/modal-all'

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
Vue.component('demo-cutoff-box', cutoffBox)
Vue.component('demo-tabs-base', TabsBase)
Vue.component('demo-tabs-card', TabsCard)
Vue.component('demo-tabs-btn', TabsBtn)
Vue.component('demo-button-all', ButtonAll)
Vue.component('demo-button-main', ButtonMain)
Vue.component('demo-button-secondary', ButtonSecondary)
Vue.component('demo-button-weaking', ButtonWeaking)

// vue组件示例
Vue.component('demo-modal-base', ModalBase)
Vue.component('demo-modal-all', ModalAll)
