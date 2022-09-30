<template>
  <div
    :style="{marginBottom: '20px'}"
    v-if="isErrorCaptured"
  >
    {{ props.name }}组件渲染出错, 请联系客服人员
  </div>
  <slot v-else></slot>
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
import { errorCapturedProps, errorCapturedEmits } from "./type";

const emits = defineEmits(errorCapturedEmits);
const props = defineProps(errorCapturedProps);

const isErrorCaptured = ref(false);
onErrorCaptured((err: unknown, instance: ComponentPublicInstance | null, info: string) => {
  console.log(props.name,'start___________________________________________________________________>')
  console.log('err', err);
  console.log('instance', instance)
  console.log('info', info);
  console.log(props.name,'end___________________________________________________________________>',)
  isErrorCaptured.value = true;
  return false;
});
</script>

<style lang="scss"></style>
