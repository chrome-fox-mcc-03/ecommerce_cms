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
  VOverlay,
  VImg
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
    VOverlay,
    VImg
  }
})

export default new Vuetify({
})
