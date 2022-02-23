<template>
    <div class="design-layout-main-module">
        <div style="height: 100%">
          <div class="module-tabs-wrap">
            <div
              @click="() => onModuleTabsChange(tabItem.name)"
              :class="{
                'module-tabs-item': true,
                'module-tabs-item-active': activeTabsComponent == tabItem.name
              }"
              v-for="tabItem in moduleTabs"
              :key="tabItem.name"
            >
              <el-tooltip
                effect="dark"
                :content="tabItem.tips"
                placement="bottom"
                :tabindex="-1"
              >
                <div class="tips-wrap">
                  <i :class="`iconfont icon-${tabItem.iconName}`"></i>
                </div>
              </el-tooltip>
            </div>
          </div>
          <div
            class="module-create-package-wrap"
            v-if="
              activeTabsComponent == 'ModulePackageComponent' ||
                activeTabsComponent == 'ModuleManagementComponent'
            "
          >
            <div class="module-create-package-title">
              {{
                activeTabsComponent == "ModulePackageComponent"
                  ? "我的组件包"
                  : "组件管理"
              }}
            </div>
            <div class="module-create-package-tips">
              {{
                activeTabsComponent == "ModulePackageComponent"
                  ? "拖拽至中间使用"
                  : "上下拖动可重新排序"
              }}
            </div>
            <div class="module-create-package" @click="onCreatePackage">
              创建组件包
            </div>
          </div>
          <component :is="activeTabsComponent"></component>
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
    
    // const onDesignPagePreview = () => {
    //   console.log("预览");
    // };
    
    // const onDesignPageSave = () => {
    //   console.log("页面保存");
    // };

    // const onDropDownCommand = {
    //   onDesignPageImmediatelyRelease: () => {
    //     console.log('立即发布')
    //   },
    //   onDesignPageRegularRelease: () => {
    //     console.log('定时发布')
    //   }
    // }

    return {
      onModuleTabsChange,
    //   onDesignPagePreview,
    //   onDesignPageSave,
    //   onDropDownCommand,
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