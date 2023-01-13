import Vue from "vue";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faEye, faEyeSlash, faHomeLg, 
    faBoxOpen, faTicketAlt, faTags, faRightFromBracket  } from '@fortawesome/free-solid-svg-icons'

library.add(faEye, faEyeSlash, faHomeLg, faBoxOpen, 
    faTicketAlt, faTags, faRightFromBracket)


Vue.component('font-awesome-icon', FontAwesomeIcon)