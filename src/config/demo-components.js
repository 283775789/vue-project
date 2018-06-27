// 组件示例
import Vue from 'vue'
import Design from '@docs/guides/design'
import DevFlow from '@docs/guides/dev-flow'
import LayoutWeb from '@modules/layout/layout-web'
import TabsBase from '@modules/tabs/tabs-base'
import TabsCard from '@modules/tabs/tabs-card'
import TabsBtn from '@modules/tabs/tabs-btn'
import ModalBase from '@comps/modal/demo/modal-base'
import ModalAll from '@comps/modal/demo/modal-all'

// 所有的示例组件的组件名必须为【demo+文件名】
Vue.component('demo-design', Design)
Vue.component('demo-dev-flow', DevFlow)
Vue.component('demo-layout-web', LayoutWeb)
Vue.component('demo-tabs-base', TabsBase)
Vue.component('demo-tabs-card', TabsCard)
Vue.component('demo-tabs-btn', TabsBtn)
Vue.component('demo-modal-base', ModalBase)
Vue.component('demo-modal-all', ModalAll)
