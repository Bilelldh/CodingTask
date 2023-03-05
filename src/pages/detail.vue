<template>
  <div fxFlexFill fxLayout="column" class="mainD">
    <div fxFlex="10" fxLayoutAlign="start center">
      <button class="logouBtn" @click="logout()">log out</button>
    </div>

    <div fxFlex="40" fxLayoutAlign="center center">
      <formComponent
        ref="ChildFormRef"
        @update-data="updateData"
        @add-data="addData"
      />
    </div>

    <div fxFlex class="bg">
      <div class="tbl-header" fxFlex>
        <table cellpadding="0" cellspacing="0" border="0" fxFlex>
          <thead>
            <tr>
              <th v-for="(header, index) in tableHeader" :key="index">
                {{ header }}
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="tbl-content">
        <table cellpadding="0" cellspacing="0" border="0">
          <tbody>
            <tr :key="data.id" v-for="data in dataList">
              <td>{{ data.title }}</td>
              <td>{{ data.date }}</td>
              <td>
                <button
                  fxFlex="30"
                  fxLayoutAlign="center center"
                  @click="triggerEdit(data)"
                >
                  Edit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import formComponent from "../components/form.vue";

export default {
  name: "DetailComponent",

  components: {
    formComponent,
  },
  data() {
    return {
      tableHeader: ["Title", "Date", "Edit"],
      dataList: [],
    };
  },
  methods: {
    // add data to dataList
    addData(data) {
      this.dataList.push(data);
    },

    // trigger edit mode in child component
    triggerEdit(data) {
      this.$refs.ChildFormRef.enterEditMode(data);
    },

    // update data in dataList
    updateData(data) {
      this.dataList.forEach((item, index) => {
        if (item.id === data.id) {
          this.dataList.splice(index, 1, data);
        }
      });
    },

    // logout and remove token
    logout() {
      localStorage.removeItem("isLogged");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
  table-layout: fixed;
}

.tbl-header {
  background-color: rgba(255, 255, 255, 0.3);
}

.tbl-content {
  height: 300px;
  overflow-x: auto;
  margin-top: 0px;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

th {
  padding: 20px 15px;
  text-align: left;
  font-weight: 500;
  font-size: 17px;
  color: #fff;
  text-transform: uppercase;
}

td {
  padding: 15px;
  text-align: left;
  vertical-align: middle;
  font-weight: 300;
  font-size: 17px;
  color: #fff;
  border-bottom: solid 1px rgba(255, 255, 255, 0.1);
}

button {
  background: transparent;
  border: 2px solid rgba(69, 39, 160, 0.4);
  color: #ffffff;
  font-family: sans-serif;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin: 20px 0;
  padding: 10px 30px;
  border: 2px solid #fff;
}

.logouBtn {
  background: white;
  border: 2px solid rgba(69, 39, 160, 0.4);
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin: 20px 0;
  padding: 10px 30px;
  border: 2px solid #000;
  margin-left: 15px;
}

.logouBtn:hover {
  background: linear-gradient(to right, #005c53, #9fc131);
  border: 2px solid rgba(69, 39, 160, 0.4);
  color: white;
}
</style>
