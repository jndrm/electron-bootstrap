// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

import Vue from 'vue'

// All of the Node.js APIs are available in this renderer process.
const data = {
    node: process.versions.node,
    chrome: process.versions.chrome,
    electron: process.versions.electron,
}

const vue = new Vue({
    el: '#app',
    data: () => data,
})