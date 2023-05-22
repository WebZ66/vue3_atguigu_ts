<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="layout_slider">
      <Logo></Logo>
      <div class="scrollbar">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :background-color="menuBgColor"
          :text-color="menuTextColor"
          active-text-color="red"
        >
          <el-sub-menu index="1">
            <template #title>
              <SvgIcon
                :style="{ 'margin-right': '5px' }"
                :name="'setting'"
              ></SvgIcon>
              <span>Navigator One</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </div>
    </div>
    <!-- 顶部导航 -->
    <div class="layout_tabbar">
      <el-switch
        v-model="themeType"
        class="mt-2"
        style="
          margin-left: 24px;
          --el-switch-on-color: #51189b;
          --el-switch-off-color: #e9db1f;
        "
        inline-prompt
        @change="changeThemeType"
        :active-icon="Moon"
        :inactive-icon="Sunrise"
      />
    </div>
    <!-- 内容展示区域 -->
    <div class="layout_main"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
import { Moon, Sunrise } from '@element-plus/icons-vue'
import Logo from './logo/index.vue'

const themeType = ref<boolean>(true)
const changeThemeType = () => {
  const html = document.querySelector('html')
  let theme = html?.getAttribute('data-theme')
  if (themeType.value) {
    html?.setAttribute('data-theme', 'dark')
  } else {
    html?.setAttribute('data-theme', 'light')
  }
}
const menuBgColor = computed(() => {
  return themeType.value ? '#001529' : '#e8ebb9'
})
const menuTextColor = computed(() => {
  return themeType.value ? '#fff' : '#000'
})
</script>
<style scoped lang="scss">
@import '@/style/theme.scss';
@import '@/style/var_theme.scss';
.layout_container {
  width: 100%;
  height: 100vh;
  .layout_slider {
    color: white;
    width: $base-menu-width;
    height: 100vh;
    @include menu_back_ground;
    @include font_color;
    transition: all 0.3s;
    .scrollbar {
      width: 100%;
      height: calc(100vh - 50px);
      overflow-y: auto;
      .el-menu {
        border-right: none;
      }
      &::v-deep .el-menu-item-group__title {
        padding: 0;
      }
    }
  }

  .layout_tabbar {
    position: fixed;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    top: 0px;
    left: $base-menu-width;
    transition: all 0.3s;
    background-color: red;
    &.fold {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }

  .layout_main {
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    left: $base-menu-width;
    top: $base-tabbar-height;
    padding: 20px;
    overflow: auto;
    transition: all 0.3s;

    &.fold {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
}
</style>
