<template>
  <form fxFlex fxFlexFill fxLayout="column" fxLayoutAlign="start center">
    <div fxFlex fxLayout="row" class="inputArea" fxLayoutAlign="end center">
      <label fxFlex fxFlexFill class="TextField">Title:</label>
      <input
        Gap="20"
        fxFlex
        fxLayoutAlign="start end"
        class="input"
        name="title"
        v-model="formData.title"
        type="text"
        placeholder="Add title"
      />
    </div>

    <div fxFlex fxLayout="row" class="inputArea" fxLayoutAlign="end center">
      <label fxFlex fxFlexFill class="TextField">Text:</label>
      <input
        Gap="20"
        :maxlength="maxTextLength"
        fxFlex
        fxLayoutAlign="start center"
        class="input"
        name="text"
        v-model="formData.text"
        type="text"
        placeholder="Add text"
      />
    </div>
    <div fxFlex fxLayout="row" class="inputArea charCount">
      <label class="TextField">{{ remainingCharacters() }}</label>
    </div>

    <div fxFlex fxLayout="row" class="inputArea" fxLayoutAlign="end center">
      <label fxFlex fxFlexFill class="TextField">Date field:</label>
      <input
        Gap="20"
        fxFlex
        fxLayoutAlign="start center"
        class="input"
        name="date"
        v-model="formData.date"
        type="date"
        placeholder="Add date"
      />
    </div>

    <div fxFlex fxLayout="row" fxFlexFill class="footerbtns">
      <div fxFlex class="updatebtn">
        <button
          fxFlex
          class="submitButton"
          v-show="editMode"
          @click.prevent="cancelUpdate()"
        >
          cancel update
        </button>
      </div>
      <div fxFlex class="cancelBtn">
        <button fxFlex class="submitButton" @click.prevent="submit()">
          {{ editMode ? "Update" : "Add" }}
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import FormData from "../helpers/form.js";
import { createToaster } from "@meforma/vue-toaster";

export default {
  name: "FormComponent",
  data() {
    return {
      editMode: false,
      formData: new FormData(),
      toaster: createToaster({
        position: "top-right",
      }),
      maxTextLength: 300,
    };
  },

  methods: {
    // Submit the form
    submit() {
      // Check if all the fields are filled
      if (!this.validForm()) {
        this.toaster.warning(`Fill all the fields`);
        return;
      }

      if (this.editMode) {
        // Emit the event to the parent component (detail.vue)
        this.$emit("update-data", this.formData);
        this.editMode = false;
      } else {
        // Emit the event to the parent component (detail.vue)
        this.$emit("add-data", this.formData);
      }
      // Reset the form after submit
      this.formData = new FormData();
    },

    //check if all the fields are filled
    validForm() {
      return this.formData.title && this.formData.text && this.formData.date;
    },

    //calcute the remaining characters in the text field
    remainingCharacters() {
      return this.formData.text.length + "/" + this.maxTextLength;
    },

    enterEditMode(form) {
      // Create a new object to avoid changing the original data (which is passed by reference)
      this.formData = new FormData();
      this.formData.id = form.id;
      this.formData.title = form.title;
      this.formData.text = form.text;
      this.formData.date = form.date;
      this.editMode = true;
    },

    cancelUpdate() {
      // Reset the form and Cancel the edit mode
      this.formData = new FormData();
      this.editMode = false;
    },
  },
};
</script>

<style scoped>
.inputArea {
  width: 80%;
}
.charCount {
  place-content: end;
}

.updatebtn {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
.cancelBtn {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.TextField {
  width: 100px;
}

label {
  letter-spacing: 6px;
  text-transform: uppercase;
  font-size: 0.8em;
  color: #000000;
}

.input {
  display: inline-block;
  border: none;
  text-align: left;
  box-shadow: 3px 2px rgb(48, 21, 112);
  padding: 10px;
  width: 100%;
  margin: 10px 0;
  background: transparent;
  color: #000000;
}

.input:focus {
  background: none;
  border: none;
  color: #000000;
}

.submitButton {
  background: black;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin: 20px 0;
  padding: 10px 30px;
  border: 2px solid #fff;
}

.submitButton:hover {
  background: linear-gradient(to right, #005c53, #9fc131);
  border: 2px solid rgba(69, 39, 160, 0.4);
}

.footerbtns {
  place-content: space-between;
}

::placeholder {
  color: black;
  letter-spacing: 6px;
  text-transform: uppercase;
  font-size: 0.8em;
  color: #000000;
}
</style>
