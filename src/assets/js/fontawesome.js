import Vue from "vue";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'

library.add(faEye, faEyeSlash)


Vue.component('font-awesome-icon', FontAwesomeIcon)