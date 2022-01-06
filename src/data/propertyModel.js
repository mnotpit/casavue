/**
 * Basic structure of a single node
const PropNode = {
  id: 0,
  name: "",
  parentNodeId: 0,
  details: [],
  resources: []
};
 */

export default {
  propertyDetail: [{ name: "Purchase Year", detailValue: "2013" }],
  name: "Trails End Property",
  nodes: [
    {
      nodeId: 1,
      parentNodeId: 0,
      name: "Trails End",
      nodeTypeId: 0,
      resources: []
    },
    {
      nodeId: 2,
      parentNodeId: 1,
      nodeTypeId: 1,
      name: "Structures"
    },
    {
      nodeId: 3,
      parentNodeId: 2,
      nodeTypeId: 10,
      name: "House"
    }
  ],
  tasks: [
    { nodeId: 1, taskName: "node1 task1", taskStatus: false },
    { nodeId: 1, taskName: "node1 task2", taskStatus: true }
  ],
  nodeTypes: [
    { typeId: 0, name: "Property" },
    { typeId: 1, name: "Structures Group" },
    { typeId: 2, name: "Outdoor Features Group" },
    { typeId: 3, name: "Utilities Group" },
    { typeId: 10, name: "Structure" },
    { typeId: 20, name: "Level" },
    { typeId: 30, name: "Interior Space" },
    { typeId: 40, name: "Appliance Group" },
    { typeId: 41, name: "Furnishing Group" },
    { typeId: 1000, name: "Basic Item" },
    { typeId: 1001, name: "Appliance" }
  ],
  nodeTypeChildren: [
    { parentTypeId: 0, childTypeIds: [1, 2, 3, 1000] },
    { parentTypeId: 1, childTypeIds: [10] },
    { parentTypeId: 2, childTypeIds: [] },
    { parentTypeId: 20, childTypeIds: [30, 1000] },
    { parentTypeId: 30, childTypeIds: [40, 41] }
  ]
};
