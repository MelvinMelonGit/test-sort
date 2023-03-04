const { createApp } = Vue

  createApp({
    data() {
      return {
        items: ['one', 'two', 'three', 'four'],
        dragItem: '',
        dragTarget: '',
        dragIndex: -1,
        targetIndex: -1,
        placeholder: false
      }
    },
    methods: {
        dragStart(e) {
            e.target.classList.add('border-dashed')
            this.dragItem = e.target.innerText
            this.dragIndex = this.items.indexOf(this.dragItem)
        },
        dragEnd(e) {
            e.target.classList.remove('border-dashed')
        },
        dragEnter(e) {
            e.target.classList.add('bg-red-500')
            this.dragTarget = e.target.innerText
            this.targetIndex = this.items.indexOf(this.dragTarget)
        },
        dragLeave(e) {
            e.target.classList.remove('bg-red-500')
        },
        drop(e) {
            e.target.classList.remove('bg-red-500')
            this.items[this.dragIndex] = this.dragTarget
            this.items[this.targetIndex] = this.dragItem
            this.dragIndex = -1,
            this.targetIndex = -1
        },
    },
  }).mount('#app')