<template>
  <div class="container bg">
    <div class="img">
      <img
        class="img"
        :src="require('@/assets/login.png')"
        alt="no login logo found"
      />
    </div>
    <div class="login-content">
      <form @submit.prevent="login()">
        <img :src="require('@/assets/user.png')" alt="no user logo found" />
        <h2 class="title">Log In</h2>
        <div class="input-div one">
          <div class="i">
            <i class="fas fa-user"></i>
          </div>
          <div class="div">
            <h5>Username</h5>
            <input v-model="username" type="text" class="input blur" />
          </div>
        </div>
        <div class="input-div pass">
          <div class="i">
            <i class="fas fa-lock"></i>
          </div>
          <div class="div">
            <h5>Password</h5>
            <input v-model="password" type="password" class="input blur" />
          </div>
        </div>
        <input type="submit" class="btn" value="Login" />
      </form>
    </div>
  </div>
</template>

<script>
import { createToaster } from "@meforma/vue-toaster";

export default {
  name: "LoginComponent",
  methods: {
    //login method
    login() {
      //check if username and password is correct
      if (this.username === "admin" && this.password === "admin") {
        //set isLogged to true
        localStorage.setItem("isLogged", true);
        //redirect to detail page
        this.$router.push("/detail");
      } else {
        //show error message
        this.toaster.warning(`Invalid crediantials `);
      }
    },
  },
  data() {
    return {
      toaster: createToaster({
        position: "top-right",
      }),
      username: "",
      password: "",
    };
  },
};
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 7rem;
}

.img {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.login-content {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
}

.img img {
  width: 500px;
}

form {
  width: 360px;
}

.login-content img {
  height: 100px;
}

.login-content h2 {
  margin: 15px 0;
  color: #000000;
  text-transform: uppercase;
  font-size: 2.9rem;
}

.login-content .input-div {
  position: relative;
  display: grid;
  grid-template-columns: 7% 93%;
  margin: 25px 0;
  padding: 5px 0;
  border-bottom: 2px solid #d9d9d9;
}

.i {
  color: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
}

.input-div > div {
  position: relative;
  height: 45px;
}

.input-div > div > h5 {
  position: absolute;
  left: 10px;
  transform: translateY(-50%);
  color: #ffffff;
  font-size: 18px;
  transition: 0.3s;
}

.input-div > div > input {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: none;
  padding: 0.5rem 0.7rem;
  font-size: 1.2rem;
  color: #000;
}

.btn {
  display: block;
  width: 100%;
  height: 50px;
  border-radius: 25px;
  outline: none;
  border: none;
  background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
  background-size: 200%;
  font-size: 1.2rem;
  color: #fff;
  text-transform: uppercase;
  margin: 1rem 0;
  cursor: pointer;
  transition: 777ms;
}
.btn:hover {
  background-position: right;
  display: block;
  background-image: linear-gradient(to left, aqua, #38d39f, lightcyan);
  transform: scale(104%);
}

@media screen and (max-width: 1050px) {
  .container {
    grid-gap: 5rem;
  }
}

@media screen and (max-width: 1000px) {
  form {
    width: 290px;
  }

  .login-content h2 {
    font-size: 2.4rem;
    margin: 8px 0;
  }

  .img img {
    width: 400px;
  }
}

@media screen and (max-width: 900px) {
  .container {
    grid-template-columns: 1fr;
  }

  .img {
    display: none;
  }

  .login-content {
    justify-content: center;
  }
}
</style>
