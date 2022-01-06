<template>
  <div class="list-group list-group-flush">
    <ChildNodeItem
      v-for="node in childNodes"
      :key="node.nodeId"
      :id="node.nodeId"
      :name="node.name"
    />
    <a
      href=""
      class="list-group-item list-group-item-primary d-flex justify-content-center"
      data-bs-toggle="modal"
      data-bs-target="#modalAdd"
      ><i class="fas fa-plus-square fs-4"></i
    ></a>
  </div>
</template>

<script>
import ChildNodeItem from "./ChildNodeItem";

export default {
  name: "NodeChildNodes",
  props: {
    childNodes: Array,
  },
  components: {
    ChildNodeItem,
  },
};
</script>