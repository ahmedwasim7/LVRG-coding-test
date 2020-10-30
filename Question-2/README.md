## Approach:
- I have created the Binary Tree and passed it to flatten function.
- flatten function convert the tree into single noded tree using recursion.
- inOrder function simply print the single noded tree in order.


### Test Case # 1
```
let BST = {
  data: 1,
  left: {
    data: 2,
    left: { data: 3, right: null, left: null },
    right: { data: 4, right: null, left: null }
  },
  right: {
    data: 5,
    right: { data: 6, right: null, left: null },
    left: null
  }
}
console.log('Before Function Call')
console.log(BST)
flatten(BST)
console.log(inOrder(BST))
console.log('After Function Call')
console.log(BST)
```

#### Result Printed:
```
Before Function Call
{
  data: 1,
  left: {
    data: 2,
    left: { data: 3, right: null, left: null },
    right: { data: 4, right: null, left: null }
  },
  right: {
    data: 5,
    right: { data: 6, right: null, left: null },
    left: null
  }
}
1 2 3 4 5 6
After Function Call
{
  data: 1,
  left: null,
  right: {
    data: 2,
    left: null,
    right: {
      data: 3,
      left: null,
      right: {
        data: 4,
        left: null,
        right: {
          data: 5,
          left: null,
          right: {
            data: 6,
            left: null,
            right: null
          }
        }
      }
    }
  }
}
```
