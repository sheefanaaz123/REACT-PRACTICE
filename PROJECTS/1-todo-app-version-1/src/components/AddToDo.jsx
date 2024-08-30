import React from "react";

function AddToDo() {
  return (
    <div className="input">
      <div class="row">
        <div class="col-6">
          <input type="text" placeholder="Enter Todo Here " />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success s1">
            Success
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
