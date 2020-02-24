import Vue from 'vue'
// import HelloWorld from '../../../src/page/home'
// import { mount } from '@vue/test-utils'
import HelloWorld from '@/page/editType'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.panel-title').textContent)
      .toEqual('图片类型调整')
  })
})
