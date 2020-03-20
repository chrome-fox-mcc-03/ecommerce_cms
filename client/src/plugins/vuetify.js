import Vue from 'vue'
import Vuetify, {
  VDataTable,
  VSpacer,
  VTextField,
  VCol,
  VRow,
  VContainer,
  VCard,
  VCardTitle,
  VDialog,
  VDivider,
  VToolbar,
  VToolbarTitle,
  VBtn,
  VIcon,
  VTextarea,
  VCheckbox,
  VApp
} from 'vuetify/lib'

Vue.use(Vuetify, {
  components: {
    VDataTable,
    VSpacer,
    VTextField,
    VCol,
    VRow,
    VContainer,
    VCard,
    VCardTitle,
    VDialog,
    VDivider,
    VToolbar,
    VToolbarTitle,
    VBtn,
    VIcon,
    VTextarea,
    VCheckbox,
    VApp
  }
})

export default new Vuetify({
})
