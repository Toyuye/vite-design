<template>
  <div class="design-layout-main-mobile-phone-simulation">
    <div>C端预览</div>
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
  props: {

  },
  emits: {

  },
  components: {
  },
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
}
</style>