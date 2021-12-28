<template>
  <div class="modal fade" id="modalAdd">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Item</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="form-floating mb-3">
            <select name="" id="addType" class="form-select">
              <option value="">Appliance</option>
            </select>
            <label for="addType">Item Type</label>
          </div>
          <div class="form-floating">
            <input
              type="text"
              id="addName"
              class="form-control"
              placeholder="Item Name"
            />
            <label for="addName">Name</label>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
          <button class="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalNewNode",
  props: {},
};
</script>