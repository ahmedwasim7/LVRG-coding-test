const flatten = node => {
  if (node == null) return

  if (node.left == null && node.right == null) return

  if (node.left != null) {
    flatten(node.left)

    let tempNode = node.right
    node.right = node.left
    node.left = null

    let curr = node.right;
    while (curr.right != null)
      curr = curr.right

    curr.right = tempNode
  }

  flatten(node.right)
}

const inOrder = node => {
  if (node == null) return

  inOrder(node.left)
  console.log(node.data + ' ')
  inOrder(node.right)
}
