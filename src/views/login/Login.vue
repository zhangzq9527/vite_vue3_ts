<template>
  <div>
    <el-form
      ref="loginFormRules"
      :model="loginForm"
      label-width="80px"
      class="loginForm"
      :rules="rules"
      @keyup.enter="submitLogin()"
    >
      <el-form-item label="账号:" prop="username">
        <el-input v-model="loginForm.username" :prefix-icon="Avatar"></el-input>
      </el-form-item>
      <el-form-item label="密码:" prop="password">
        <el-input v-model="loginForm.password" type="password" :prefix-icon="Lock"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="loginbtn" :loading="loading" @click="submitLogin()"
          >登录</el-button
        >
        <router-link to="/Register" style="text-decoration: none">
          <el-button type="primary">注册</el-button>
        </router-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { Avatar, Lock } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { useUserStore } from '../../store/index'

const userStore = useUserStore()
const loginForm = reactive({
  username: '',
  password: '',
})
const loginFormRules = ref()
const rules = reactive({
  username: [
    {
      required: true,
      message: '请输入账号',
      trigger: 'blur',
    },
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur',
    },
  ],
})
const loading = ref(false)

const submitLogin = async () => {
  loading.value = true
  const res = await userStore.login(loginForm)
  console.log(res)
}
</script>

<style lang="scss" scoped>
.loginForm {
  width: 350px;
  position: relative;
  margin: 0 auto;
  margin-top: 20px;
}

.loginbtn {
  margin-left: 50px;
  margin-right: 40px;
}
</style>
