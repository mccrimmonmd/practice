// binaryTree := [ { left: binaryTree, right: binaryTree, value: [ string | null ] } | null]

const search = (haystack, needle) => {
  if (haystack == null) return false
  if (haystack.value === needle) return true
  return search(haystack.left, needle) || search(haystack.right, needle)
}

const breadthFirstSearch = (haystack, needle, queue = []) => {
  if (haystack == null) return false
  if (haystack.value === needle) return true
  queue.push(left)
  queue.push(right)
  while (queue.length) {
    if (breadthFirstSearch(queue.shift(), needle, queue)) return true
  }
  return false
}

const binarySearchTree = {
  less: null,
  more: null,
  value: null,
  add: function (thing) {
    if (this.value == null) {
      this.value = thing
      return
    }
    if (thing < this.value) {
      if (this.less == null) {
        this.less = Object.create(binarySearchTree)
      }
      this.less.add(thing)
    }
    else {
      if (this.more == null) {
        this.more = Object.create(binarySearchTree)
      }
      this.more.add(thing)
    }
  },
  contains: function (thing) {
    if (this.value === thing) {
      return true
    }
    else if (thing < this.value) {
      return !!this.less?.contains(thing)
    }
    else {
      return !!this.more?.contains(thing)
    }
  },
  // TODO: remove (no balancing, balancing)
}
