<template>
  <div class="design-layout-main-settings-panel">
    <div class="settings-panel-title-wrap">
      <div  class="panel-title">{{settingsPanelData.title}}</div>
      <div>
        <el-button
          text
          link
          type="primary"
        >
          {{settingsPanelData.actionTitle}}
        </el-button>
      </div>
    </div>
    <div
      :style="{
        overflow: 'hidden',
        lineHeight: '24px',
        padding: '2px 5px'
      }"
      v-html="`${settingsPanelData.desc}`"
    ></div>
    <div class="settings-panel-content-wrap">
      <el-tabs
        :stretch="true"
        v-model="settingsPanelTab"
        @tab-click="onTabChangeClick"
      >
        <el-tab-pane
          v-for="item in settingsPanelData.configSettings"
          v-show="item.hidden"
          :label="item.tabNameCHN"
          :name="item.key"
        ></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "CreateAttributeSettingsPanel",
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

import type { TabsPaneContext } from 'element-plus'
 
import {
  CreateAttributeSettingsPanelProps,
  CreateAttributeSettingsPanelEmits
} from "./type";
defineEmits(CreateAttributeSettingsPanelEmits);
defineProps(CreateAttributeSettingsPanelProps);
const settingsPanelTab = ref('styleCss');
const settingsPanelData: {
  webComponentLink?: string;
  webComponentName: string,
  linkUUID: string,
  title: string,
  actionTitle: string,
  desc: string;
  configSettings: Array<{key: string, tabNameCHN: string, hidden: boolean, layout?: Array<any>}>,
  cover: {

  },
  LifeCycles: {

  }
} = {
  webComponentLink: '',
  webComponentName: '@system/h5/goods',
  linkUUID: '',
  title: '商品',
  actionTitle: '使用说明',
  desc: '商品组件可用于展示普通商品和积分商品，可以按照不同主题和人群等将店内在售商品配置展示在页面内，供用户浏览。',
  configSettings: [
    {
      key: 'styleCss', 
      tabNameCHN: '样式',
      hidden: false,
      layout: [
        {
        // 当前写法针对 合并组件
         attributeComponentName: {
            '@system/attribute/button': {
              value: 'childItem.jessie'
            }
         },
         attributeComponentLink: '',
         defaultProps: {
          value: [],
          templateResetValue: false,
          resetDefaultValue: []
         },
         responseValue: [],
        }
      ]
    },
    {
      key: 'attribute',
      tabNameCHN: '属性',
      hidden: false,
      layout: [
        {
         attributeComponentName: '@system/attribute/button',
         attributeComponentLink: '',
         defaultProps: {
          value: [],
          templateResetValue: false,
          resetDefaultValue: []
         },
         responseValue: [],
        }
      ],
    },
    {
      key: 'senior',
      tabNameCHN: '高级',
      hidden: false,
      layout: [
        {
         attributeComponentName: '@system/attribute/button',
         attributeComponentLink: '',
         defaultProps: {
          value: [],
          templateResetValue: false,
          resetDefaultValue: []
         },
         responseValue: [],
        }
      ]
    },
    {
      key: 'extension',
      tabNameCHN: '扩展',
      hidden: false,
      layout: [
        {
         attributeComponentName: '@system/attribute/button',
         attributeComponentLink: '',
         defaultProps: {
          value: [],
          templateResetValue: false,
          resetDefaultValue: []
         },
         responseValue: [],
        }
      ]
    }
  ],
  cover: {
    styleCss: {
      style: {
        background: 'pink'
      }
    },
    attribute: {
      jessie: 100,
    },
    senior: {
      handler: {

      }
    },
    extension: {
      cc: 999
    }
  },
  LifeCycles: {
    initConfigSettings: (config: any) => {
      console.log(config)
    },
    updateconfigSettings: (config: any) => {
      console.log(config)
    },
    requestFilter(config: any) {
      console.log(config);
    }
  }
};

const onModuleTabsChange = () => {
  console.log("指南");
};

const onTabChangeClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>
<style lang="scss">

.design-layout-main-settings-panel {
  width: 360px;
  height: 100%;
  padding: 2px 5px 2px 5px;
  background-color: #f8f9fa;
  box-sizing: border-box;
  .settings-panel-title-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 24px;
    padding: 10px 5px;
    .panel-title {
      
    }
  }
  .settings-panel-content-wrap {
    padding: 5px 0;
    .el-tabs__item {
      &:nth-child(2) {
        padding-left: 20px;
      }
      &:last-child {
        padding-right: 20px;
      }
    }
  }
}
</style>