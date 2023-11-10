<template>
  <div>
    <div>
      <h2>Please Log In</h2>
      <div id="loginForm">
        <form @submit.prevent="fnLogin">
          <p>
            <input class="w3-input" name="uid" placeholder="Enter your ID" v-model="user_id"><br>
          </p>
          <p>
            <input name="password" class="w3-input" placeholder="Enter your password" v-model="user_pw" type="password">
          </p>
          <p>
            <button type="submit" class="w3-button w3-green w3-round">Login</button>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      user_id: '',
      user_pw: ''
    }
  },
  methods: {
    fnLogin() {
      if (this.user_id === '') {
        alert('ID를 입력하세요.')
        return
      }

      if (this.user_pw === '') {
        alert('비밀번호를 입력하세요.')
        return
      }
      
      console.log(this.user_id + ":" + this.user_pw)
      this.$axios({
        //url: 'http://localhost:8081/auth', // 통신할 웹문서
        url: 'http://localhost:8081/api/member/login',
        method: 'post', // 통신 방식
        Headers: {
          "Content-type": "multipart/form-date"
        },
        data: { // 보낼 데이터
          //foo: 'hi'
          loginId: this.user_id,
          password: this.user_pw
        }
      }).then(res => {
        console.log(res)
        alert('로그인 되었습니다.')
      }).catch(error => {
        console.log(error)
      }).finally(() => {
        console.log("finally")
      })
    }
  }
}
</script>

<style>
#loginForm {
  width: 500px;
  margin: auto;
}
</style>