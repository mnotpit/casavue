import { createStore } from "vuex";
import currentProperty from "./propertyModel";
import exampleNode from "./exampleNode";

export default createStore({
  state: {
    currentNode: exampleNode,
    currentProperty: currentProperty,
    currentNodeId: 0
  },
  mutations: {
    addNode(state, newNode) {
      console.log("mutations.addNode");
      state.currentNode.childnodes.push(newNode);
    },
    addTask(state, newTask) {
      state.currentNode.tasks.push(newTask);
    }
  }
});
