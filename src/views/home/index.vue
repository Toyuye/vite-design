<template>
  <div>
    <DesignEditor></DesignEditor>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
// import cc from "systemjs";
import { getLCP, getFID, getCLS } from "web-vitals";

// getCLS(console.log);
// getFID(console.log);
// getLCP(console.log);

import DesignEditor from "@/packages/design-sdk-packages/create-design-editor/src/index.vue";
export default defineComponent({
  name: "Home",
  components: {
    DesignEditor,
  },
  setup() {
    onMounted(() => {
      // getLCP(console.log, true);
      // _PerformanceObserver();
    });

    // const _PerformanceObserver = () => {
    //   const Cobserver = new PerformanceObserver((l) => {
    //     console.log(l,"sssssssssssssss");
    //     console.log(l.getEntries(),'————————————————————————————————————————————————');
    //   });
    //   Cobserver.observe({
    //     entryTypes: [
    //       "element",
    //       "event",
    //       "first-input",
    //       "largest-contentful-paint",
    //       "layout-shift",
    //       "longtask",
    //       "mark",
    //       "measure",
    //       "navigation",
    //       "paint",
    //       "resource"
    //     ],
    //   });
    // };

    return {};
  },
});
</script>

<style></style>
