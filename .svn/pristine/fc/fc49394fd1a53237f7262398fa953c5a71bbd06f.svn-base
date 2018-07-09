var schema;
export default function(Vue, opts = {}) {
  Vue.directive('validate', {
    bind(el, binding, vnode, oldVnode) {
    },
    inserted(el, binding, vnode) {
      let input = el.getElementsByTagName('input');
      let node = input[0].nextSibling;
      let createNode = document.createElement('span');
      createNode.className = 'validata-error';
      createNode.innerHTML = 'vueas';
      schema = binding.value;
      el.insertBefore(createNode, node);
    },
    update(el, binding) {
      let node = el.querySelector('.validata-error');
      node.innerHTML = '全家';
      console.log(node);
      console.log(this);
    }
  })
};
