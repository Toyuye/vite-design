<template>
  <div class="design-layout-main-module">
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
  createAvailableComponentProps,
  createAvailableComponentEmits
} from "./type";

export default defineComponent({
  name: "CreateAvailableComponent",
  props: createAvailableComponentProps,
  emits: createAvailableComponentEmits,
  setup() {
    const onModuleTabsChange = () => {
      console.log("指南");
    };
    
    return {
      onModuleTabsChange,
    };
  },
});
</script>
<style lang="scss">
.design-layout-main-module {
  width: 320px;
  min-width: 320px;
  background-color: #f8f9fa;
  position: relative;
  z-index: 2;
}
</style>