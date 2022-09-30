<template>
    
</template>
<script lang="ts">
  export default {
    name: "ErrorCaptured",
  };
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
    onErrorCaptured,
    defineEmits,
    defineProps,
    ComponentPublicInstance,
  } from "vue";
  
  import{ dispatchSettingsEventsEmits, dispatchSettingsEventsProps  } from './type';
 
  const emits = defineEmits(dispatchSettingsEventsEmits);
  const props = defineProps(dispatchSettingsEventsProps);
  
  
  </script>
  
  <style lang="scss"></style>
  