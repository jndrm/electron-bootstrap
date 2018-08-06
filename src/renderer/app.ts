// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

import Vue from "vue"
import router from "./router"

// All of the Node.js APIs are available in this renderer process.
const data = {
    chrome: process.versions.chrome,
    electron: process.versions.electron,
    node: process.versions.node,
}

Vue.config.devtools = false
Vue.config.productionTip = false

const vue = new Vue({
    data: () => data,
    router,
}).$mount("#app")
