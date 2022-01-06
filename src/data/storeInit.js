import { createStore } from "vuex";
import currentProperty from "./propertyModel";
import exampleNode from "./exampleNode";

export default createStore({
  state: {
    currentNode: exampleNode,
    currentProperty: currentProperty,
    currentNodeId: 1
  },
  mutations: {
    addNode(state, newNode) {
      console.log("mutations.addNode");
      newNode.parentNodeId = state.currentNodeId;
      state.currentNode.childnodes.push(newNode);
      state.currentProperty.nodes.push(newNode);
    },
    addTask(state, newTask) {
      state.currentNode.tasks.push(newTask);
    }
  }
});
