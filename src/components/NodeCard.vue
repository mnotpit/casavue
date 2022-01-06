<template>
  <div class="card">
    <div class="card-header">
      <h5>Appliances</h5>
      <ul class="nav nav-tabs card-header-tabs" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            data-bs-toggle="tab"
            data-bs-target="#items"
            role="tab"
          >
            <i class="fas fa-network-wired" /> Items
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            data-bs-toggle="tab"
            data-bs-target="#details"
          >
            <i class="fas fa-list" /> Details
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" data-bs-toggle="tab" data-bs-target="#tasks">
            <i class="fas fa-check" /> Tasks
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            data-bs-toggle="tab"
            data-bs-target="#resources"
          >
            <i class="fas fa-paperclip" /> Resources
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            data-bs-toggle="tab"
            data-bs-target="#history"
          >
            <i class="fas fa-clock" /> History
          </button>
        </li>
      </ul>
    </div>

    <div class="tab-content">
      <div class="tab-pane active" id="items" role="tabpanel">
        <NodeChildNodes :childNodes="node.childnodes" />
      </div>
      <div class="tab-pane" id="details" role="tabpanel">
        <NodeDetails :details="node.details" />
      </div>
      <div class="tab-pane" id="tasks" role="tabpanel">
        <NodeTasks :tasks="node.tasks" />
      </div>
      <div class="tab-pane" id="resources" role="tabpanel">
        <NodeResources :resources="node.resources" />
      </div>
      <div class="tab-pane" id="history" role="tabpanel">
        <NodeHistory />
      </div>
    </div>
  </div>
</template>

<script>
import NodeChildNodes from "./features/childnodes/NodeChildNodes";
import NodeDetails from "./features/details/NodeDetails";
import NodeTasks from "./features/tasks/NodeTasks";
import NodeHistory from "./features/history/NodeHistory";
import NodeResources from "./features/resources/NodeResources";

export default {
  name: "NodeCard",
  components: {
    NodeChildNodes,
    NodeDetails,
    NodeTasks,
    NodeResources,
    NodeHistory,
  },
  props: {
    node: Object,
  },
};
</script>