<template>
  <div class="design-layout-main-module">
    <div class="activitybar">
      <div class="composite-bar">
        <div class="actions-bar">
          <div 
            v-for="actionItem  in [
              {icon: 'Grid', text: '组件管理器(Ctrl+shif+E)', tabsId: 'Grid'},
              {icon: 'Search', text: '搜索(Ctrl+shif+F)', tabsId: 'Search'}
            ]"
            :key="actionItem.tabsId"
          >
            <el-tooltip
              :content="actionItem.text"
              placement="right"
            >
              <div class="action-item">
                <el-icon
                  :size="24"
                >
                  <component :is="actionItem.icon"></component>
                </el-icon>
              </div>
            </el-tooltip>
          </div>
        </div>
      </div>
      <div class="monaco-action-bar">
        <div class="actions-bar">
          <div 
            v-for="actionItem  in [
              {icon: 'Avatar', text: '账号', tabsId: 'Avatar'},
              {icon: 'Tools', text: '管理', tabsId: 'Tools'},
            ]"
            :key="actionItem.tabsId"
          >
            <el-tooltip
              :content="actionItem.text"
              placement="right"
            >
              <div class="action-item">
                <el-icon
                  :size="24"
                >
                  <component :is="actionItem.icon"></component>
                </el-icon>
              </div>
            </el-tooltip>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "CreateAvailableComponent" 
}
</script>
<script lang="ts" setup>
import {
  computed,
  defineComponent,
  nextTick,
  onMounted,
  provide,
  ref,
  watch,
  reactive,
} from "vue";
import {
  Grid,
  Search,
  Tools,
  Avatar,
  MoreFilled
} from '@element-plus/icons-vue';

import {
  createAvailableComponentProps,
  createAvailableComponentEmits
} from "./type";

defineEmits(createAvailableComponentEmits);
defineProps(createAvailableComponentProps);

const onModuleTabsChange = () => {
      console.log("指南");
};
</script>

<style lang="scss">
.design-layout-main-module {
  .activitybar {
    background-color: #f8f9fa;
    position: relative;
    z-index: 2;
    width: 48px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  .actions-bar {
    .action-item {
      width: 48px;
      height: 48px;
      box-sizing: border-box;
      padding: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #666;
      &:hover {
        color: #333;
      }
    }
  }
}
</style>