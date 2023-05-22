<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <!-- 登录的表单 -->
        <el-form
          ref="ruleFormRef"
          class="login_form"
          :model="loginForm"
          :rules="rules"
        >
          <h1>Hello {{ time }}</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item prop="username">
            <el-input
              :prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              :prefix-icon="Lock"
              type="password"
              v-model="loginForm.password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="login(ruleFormRef)">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { reactive, ref, onMounted, onBeforeUnmount } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import useUserStore from '@/store/modules/user'
import { getTime } from '@/utils/time'
const userStore = useUserStore()
const ruleFormRef = ref<FormInstance>()
const loginForm = reactive({
  username: 'zdszs',
  password: '111111'
})
const login = async (ruleFormRef: FormInstance | undefined) => {
  //登录成功后，将用户状态存入到store中
  if (!ruleFormRef) return
  await ruleFormRef.validate((valid, fields) => {
    if (valid) {
      userStore.userLogin('/user', loginForm)
    } else {
      console.log('error')
    }
  })
}

/* 获取时间 */
const time = ref<string>(`${getTime()}`)
let timer = null
const getNowTime = () => {
  timer = setInterval(() => {
    time.value = getTime()
  }, 1000)
}
getNowTime()
onBeforeUnmount(() => {
  timer = null
})

const rules = reactive<FormRules>({
  username: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 5, max: 5, message: 'Length should be 5', trigger: 'blur' }
  ],
  password: [
    {
      required: true,
      message: 'Please input Activity password',
      trigger: 'blur'
    },
    { min: 6, max: 6, message: 'Length should be 6', trigger: 'blur' }
  ]
})
</script>
<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;

  .login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    padding: 40px;

    h1 {
      color: white;
      font-size: 40px;
    }

    h2 {
      font-size: 20px;
      color: white;
      margin: 20px 0px;
    }

    .login_btn {
      width: 100%;
    }
  }
}
</style>
