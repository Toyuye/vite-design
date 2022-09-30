<template>
  <div
    class="design-layout-main-mobile-phone-simulation"
  >
    <el-scrollbar
      with = "100%"
      height="100%"
      :always="true"
    >
      <div
        class="mobile-phone-container"
        :style="{
          width: '375px',
          minHeight: '667px',
          background: 'red',
          position: 'relative',
          top: '50px',
          left: 'calc(50% + 180px)',
          transform: 'translateX(-50%)'
        }"

      >
      </div>
    </el-scrollbar>
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
  CreateMobilePhoneSimulationProps,
  CreateMobilePhoneSimulationEmits
} from "./type";

export default defineComponent({
  name: "CreateMobilePhoneSimulation",
 
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
.design-layout-main-mobile-phone-simulation {
  height: 100%;
  white-space: wrap;
  word-break: break-all;
  flex: 1;
  background: -webkit-linear-gradient(top, transparent 31px, #e9ebed 31px), -webkit-linear-gradient(left, transparent 31px, #e9ebed 31px);
  background-size: 31px 31px;
}
</style>