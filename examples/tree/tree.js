// demo data
var data =[{
  name: '李纳尼',
  children: [
  {
    name: '简介',
    children: [{
        name: '快乐',
        children: [
        {name: '经济'},
        {name: '经济'},
        {name: '经济'},
        {name: '经济'}
        ]
    }]
  }]
},{
  name: '李纳尼',
  children: [
  {
    name: '简介',
    children: [{
        name: '快乐',
        children: [
        {name: '经济'},
        {name: '经济'},
        {name: '经济'},
        {name: '经济'}
        ]
    }]
  }]
},{
  name: '李纳尼',
  children: [
  {
    name: '简介',
    children: [{
        name: '快乐',
        children: [
        {name: '经济'},
        {name: '经济'},
        {name: '经济'},
        {name: '经济'}
        ]
    }]
  }]
}]

// define the item component
Vue.component('item', {
  template: '#item-template',
  props: {
    model: Object
  },
  data: function() {
    return {
      open: false
    }
  },
  computed: {
    isFolder: function() {
      return this.model.children &&
        this.model.children.length
    }
  },
  methods: {
    toggle: function() {
      if (this.isFolder) {
        this.open = !this.open
      }
    },
    changeType: function() {
      if (!this.isFolder) {
        Vue.set(this.model, 'children', [])
        this.addChild()
        this.open = true
      }
    },
    addChild: function() {
      this.model.children.push({
        name: 'new stuff'
      })
    }
  }
})

// boot up the demo
var demo = new Vue({
  el: '#demo',
  data: {
    treeDatas: data
  }
})
