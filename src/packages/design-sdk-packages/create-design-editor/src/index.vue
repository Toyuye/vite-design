<template>
    <div
        class="create-design-editor-wrap"
        v-loading="loading"
        element-loading-text="组件正在加载中，请稍等......"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.5)"
    >
        <CreateHeaderBar></CreateHeaderBar>
        <div class="design-layout-main">
            <CreateAvailableComponent></CreateAvailableComponent>
            <CreateMobilePhoneSimulation></CreateMobilePhoneSimulation>
            <CreateAttributeSettingsPanel></CreateAttributeSettingsPanel>
        </div>
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
} from 'vue';

import CreateHeaderBar from '../../create-header-bar';
import CreateAvailableComponent from '../../create-available-component';
import CreateMobilePhoneSimulation from '../../create-mobile-phone-simulation';
import CreateAttributeSettingsPanel from '../../create-attribute-settings-panel';

console.log(CreateAvailableComponent,'______________________>>>>')
export default defineComponent({
    name: "CreateDesignEditor",
    components: {
        CreateHeaderBar,
        CreateAvailableComponent,
         CreateMobilePhoneSimulation,
        CreateAttributeSettingsPanel,
    },
    setup() {
        const loading = ref(true);
        onMounted(() => {
            console.log(loading,'loading----->>>>');
            setTimeout(() => {
                loading.value = false;
            }, 2000)
        })

        return {
            loading,
        }
    },
})
</script>
<style lang="scss">

.create-design-editor-wrap{
    width: 100vw;
    height: 100vh;
}

.design-layout-main {
    display: flex;
    width: 100vw;
    height: calc(100% - 48px);
    position: relative;
}
</style>