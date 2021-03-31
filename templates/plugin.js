import Vue from 'vue'
import { gsap } from 'gsap'

Vue.directive('gsap', (el, binding) => {
  const options = { ...binding.value }
  const modifiers = binding.modifiers

  if (modifiers.set) {
    gsap.set(el, options)
  }

  if (modifiers.to) {
    gsap.to(el, options)
  }

  if (modifiers.from) {
    gsap.from(el, options)
  }

  if (modifiers.fromTo) {
    gsap.fromTo(el, { ...binding.value[0] }, { ...binding.value[1] })
  }
})

Vue.prototype.$gsap = gsap

<% if (
  Object.keys(options.extraPlugins).length ||
  Object.keys(options.extraEases).length
  ) { %>
    if (process.client) {
      <% if (options.extraPlugins.cssRule) { %>
        const { CSSRulePlugin } = require('gsap/CSSRulePlugin')
        Vue.prototype.$CSSRulePlugin = CSSRulePlugin
        gsap.registerPlugin(CSSRulePlugin)
      <% } %>

      <% if (options.extraPlugins.draggable) { %>
        const { Draggable } = require('gsap/Draggable')
        Vue.prototype.$Draggable = Draggable
        gsap.registerPlugin(Draggable)
      <% } %>

      <% if (options.extraPlugins.easel) { %>
        const { EaselPlugin } = require('gsap/EaselPlugin')
        Vue.prototype.$EaselPlugin = EaselPlugin
        gsap.registerPlugin(EaselPlugin)
      <% } %>
             
      <% if (options.extraPlugins.drawSVG) { %>
        const { DrawSVGPlugin } = require('gsap/DrawSVGPlugin')
        Vue.prototype.$DrawSVGPlugin = DrawSVGPlugin
gsap.registerPlugin(DrawSVGPlugin);
      <% } %>


      <% if (options.extraPlugins.motionPath) { %>
        const { MotionPathPlugin } = require('gsap/MotionPathPlugin')
        Vue.prototype.$MotionPathPlugin = MotionPathPlugin
        gsap.registerPlugin(MotionPathPlugin)
      <% } %>

      <% if (options.extraPlugins.pixi) { %>
        const { PixiPlugin } = require('gsap/PixiPlugin')
        Vue.prototype.$PixiPlugin = PixiPlugin
        gsap.registerPlugin(PixiPlugin)
      <% } %>

      <% if (options.extraPlugins.text) { %>
        const { TextPlugin } = require('gsap/TextPlugin')
        Vue.prototype.$TextPlugin = TextPlugin
        gsap.registerPlugin(TextPlugin)
      <% } %>

      <% if (options.extraPlugins.scrollTo) { %>
        const { ScrollToPlugin } = require('gsap/ScrollToPlugin')
        Vue.prototype.$ScrollToPlugin = ScrollToPlugin
        gsap.registerPlugin(ScrollToPlugin)
      <% } %>

      <% if (options.extraPlugins.scrollTrigger) { %>
        const { ScrollTrigger } = require('gsap/ScrollTrigger')
        Vue.prototype.$ScrollTrigger = ScrollTrigger
        gsap.registerPlugin(ScrollTrigger)
      <% } %>

      <% if (options.extraEases.expoScaleEase) { %>
        const { ExpoScaleEase } = require('gsap/EasePack')
        Vue.prototype.$ExpoScaleEase = ExpoScaleEase
        gsap.registerPlugin(ExpoScaleEase)
      <% } %>
      
      <% if (options.extraEases.roughEase) { %>
        const { RoughEase } = require('gsap/EasePack')
        Vue.prototype.$RoughEase = RoughEase
        gsap.registerPlugin(RoughEase)
      <% } %>

      <% if (options.extraEases.slowMo) { %>
        const { SlowMo } = require('gsap/EasePack')
        Vue.prototype.$SlowMo = SlowMo
        gsap.registerPlugin(SlowMo)
      <% } %>
    }
<% } %>
