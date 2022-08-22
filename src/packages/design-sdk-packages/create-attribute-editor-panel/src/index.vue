<template>
  <div class="design-layout-settings-panel">
    <div>编排属性属性设置————————————————————————————————</div>
  </div>
</template>
<script lang="ts">

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

export default defineComponent({
  name: "CreateAttributeEditorPanel",
  props: CreateAttributeEditorPanelProps,
  emits: CreateAttributeEditorPanelEmits,
  components: {
    Grid,
    Search,
    Tools,
    Avatar,
    MoreFilled,
  },
  setup() {
    const onModuleTabsChange = () => {
      console.log("指南");
    };
    return {
      onModuleTabsChange,
      Grid,
      Search,
      Tools,
      Avatar,
    };
  },
});
</script>
<style lang="scss">
.design-layout-main-setting-panel {
  
}
</style>