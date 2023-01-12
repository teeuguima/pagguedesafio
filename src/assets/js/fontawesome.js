import Vue from "vue";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { faHomeLg } from "@fortawesome/free-solid-svg-icons";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import { faTicketAlt } from "@fortawesome/free-solid-svg-icons";
import { faTags } from "@fortawesome/free-solid-svg-icons";

library.add(faEye, faEyeSlash, faHomeLg, faBoxOpen, faTicketAlt, faTags)


Vue.component('font-awesome-icon', FontAwesomeIcon)