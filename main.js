import './src/js/components/contacts'
import './src/js/components/headerSearch'
import './src/js/components/floatingNav'
import './src/js/components/sliders'
import './src/js/components/imageFlipper'
import './src/js/components/messengers'
import './src/js/components/formValidations'
import './src/js/components/modals'
import './src/js/components/miniShop2Callbacks'

import { initQuantity, applyQuantity } from './src/js/components/quantity'
import { applyOptionItems, initOptionItems } from './src/js/components/optionItems'
import { initBuyInClick, applyBuyInClick } from './src/js/components/buyInClick'
import { initStickyFilter } from './src/js/components/stickyFilter'
import { initViewFilter } from './src/js/components/viewFilter'
import { applyOptionsModal, initOptionsModal } from './src/js/components/optionsModal'
import { initProductGallery } from './src/js/components/productGallery'
import { initTab } from './src/js/components/tab'
import { initReviewsForm } from './src/js/components/reviewsForm'
import { initCalc } from './src/js/components/calc'
import { initProductSlider } from './src/js/components/productSlider'
import { initCheaper } from './src/js/components/cheaper'
import { initDiscountCode } from './src/js/components/discount-code'
import { initOrderCountry } from './src/js/components/orderCountry'
import { initOrderTotal } from './src/js/components/orderTotal'
import { initOrderDeliveryPrice } from './src/js/components/orderDeliveryPrice'
import { initOrderPaymentDescription } from './src/js/components/orderPaymentDescription'
import { initContactsSelect } from './src/js/components/contacts-select'

import 'normalize.css'
import './src/scss/styles.scss'
import 'choices.js/public/assets/styles/choices.css'

initOptionItems()
initBuyInClick()
initQuantity()
initOptionsModal()
initStickyFilter()
initViewFilter()
initProductGallery()
initTab()
initReviewsForm()
initCalc()
initProductSlider()
initCheaper()
initDiscountCode()
initOrderCountry()
initOrderTotal()
initOrderDeliveryPrice()
initOrderPaymentDescription()
initContactsSelect()

// событие на упешную отправку
$(document).on('af_complete', function (event, response) {
  response.form[0].dataset.state = response.success ? 'success' : 'fail'
})

// применить скрипты к загруженным карточкам
$(document).on('mse2_load', function (e, response) {
  const offset = (response.data.page - 1) * +mse2Config.start_limit
  const mse2_results = document.getElementById('mse2_results')
  const addedCards = Array.from(mse2_results.children).slice(offset)

  addedCards.forEach((card) => {
    card.querySelectorAll('[data-buy-in-click]')?.forEach(applyBuyInClick)
    card.querySelectorAll('[data-quantity]')?.forEach(applyQuantity)
    card.querySelectorAll('[data-options-modal]')?.forEach(applyOptionsModal)
    card.querySelectorAll('[data-option-items]')?.forEach(applyOptionItems)
  })
})
