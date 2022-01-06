<template>
  <div>
    <Breadcrumbs :breadcrumbs="contextNode.breadcrumbs" />
    <NodeCard :node="contextNode" />
    <ModalNewNode />
  </div>
</template>

<script>
import Breadcrumbs from "./components/features/breadcrumbs/Breadcrumbs";
import NodeCard from "./components/NodeCard";
import ModalNewNode from "./components/ModalNewNode";

export default {
  name: "App",
  components: {
    Breadcrumbs,
    NodeCard,
    ModalNewNode,
  },
  data() {
    return {
      //      cn: cn,
    };
  },
  computed: {
    contextNode() {
      const n = this.$store.state.currentNode;
      return n;
    },
    children() {
      const nodeId = this.$store.state.currentNodeId;
      return this.$store.state.currentProperty.nodes.filter(
        (n) => n.parentNodeId === nodeId
      );
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
