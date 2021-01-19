<template>
  <li>
    <nuxt-link :to="node.to">{{ node.title }}</nuxt-link>
    <ul v-if="node.children && node.children.length">
      <node v-for="child in node.children" :node="child" :key="child.id"></node>
    </ul>
  </li>
</template>

<script>
export default {
  name: "node",
  props: {
    node: Object,
  }
};
</script>
