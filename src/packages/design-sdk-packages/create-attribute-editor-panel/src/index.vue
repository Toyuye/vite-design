<template>
  <div class="design-layout-settings-panel">
    <div>编排属性属性设置————————————————————————————————</div>
  </div>
</template>
<script lang="ts">
export default {
  name: "CreateAttributeEditorPanel",
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
  CreateAttributeEditorPanelProps,
  CreateAttributeEditorPanelEmits
} from "./type";
const onModuleTabsChange = () => {
  console.log("指南");
};
</script>

<style lang="scss">
.design-layout-main-setting-panel {
  
}
</style>