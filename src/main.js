import Vue from "vue";
import Vuex from "vuex";
//import PropNode from "./models";
import App from "./App.vue";

Vue.use(Vuex);
Vue.config.productionTip = false;
/*
const currentProperty = {
  nodes: [{ id: 1, name: "", type: "", resources: [] }],
  tasks: []
};
*/
const exampleNode = {
  id: 1111,
  name: "testnode1",
  nodetype: 5,
  nodeparent: 111,
  childnodes: [
    { id: 1, name: "child1" },
    { id: 2, name: "child2" },
    { id: 3, name: "child3" },
    { id: 4, name: "child4" }
  ],
  details: [
    { id: 1, detailname: "brand", detailvalue: "GE" },
    { id: 2, detailname: "purchase store", detailvalue: "Best Buy" },
    { id: 3, detailname: "package price", detailvalue: "$2000" }
  ],
  tasks: [
    { id: 1, name: "Finish PropJot", status: false },
    { id: 2, name: "Convert vue to mobile app", status: true }
  ],
  resources: [
    { id: 1, name: "Menards Black Friday", url: "https://menards.com" },
    { id: 2, name: "Jot my info", url: "http://jotmy.info" }
  ],
  breadcrumbs: [
    { name: "Trails End", path: "/n/0" },
    { name: "Structures", path: "/n/1" },
    { name: "Main House", path: "/n/2" },
    { name: "First Floor", path: "/n/3" },
    { name: "Kitchen", path: "/n/4" }
  ]
};

const pjstore = new Vuex.Store({
  state: {
    currentNode: exampleNode,
    currentNodeId: 0
  },
  mutations: {
    addNode(state, newNode) {
      console.log("mutations.addNode");
      state.childnodes.push(newNode);
    },
    addTask(state, newTask) {
      state.tasks.push(newTask);
    }
  }
});

new Vue({
  render: (h) => h(App),
  store: pjstore
}).$mount("#pjapp");
