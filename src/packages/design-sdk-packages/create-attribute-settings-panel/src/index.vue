<template>
  <div class="design-layout-main-settings-panel">
    <div class="settings-panel-title-wrap">
      <div>{{settingsPanelData.title}}</div>
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
        stretch
        v-model="settingsPanelTab"
        @tab-click="onTabChangeClick"
      >
        <el-tab-pane
          v-for=" vv in settingsPanelData.configLayout"
          :label="settingsPanelData.configSettings[vv].nameCHN"
          
        ></el-tab-pane>
      </el-tabs>
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

import type { TabsPaneContext } from 'element-plus'
 
import {
  CreateAttributeSettingsPanelProps,
  CreateAttributeSettingsPanelEmits
} from "./type";


export default defineComponent({
  name: "CreateAttributeSettingsPanel",
  props: CreateAttributeSettingsPanelProps,
  emits: CreateAttributeSettingsPanelEmits,
  components: {
  },
  setup() {
    
    const settingsPanelTab = ref('attribute');
    
    const settingsPanelData: {
      webComponentIdentity: string,
      uuidLink: string,
      title: string,
      actionTitle: string,
      desc: string;
      configSettings: {
        attribute?: {
          nameCHN: string;
          hidden: boolean; 
        },
        style?:  {
          nameCHN: string;
          hidden: boolean;
        },
        senior?: {
          nameCHN: string;
          hidden: boolean;
        },
        extensions?: {
          nameCHN: string;
          hidden: boolean;
        }
      };
      configLayout: 'attribute'| 'style' | 'senior' | 'extension'[]
    } = {
      webComponentIdentity: 'ToyuyeSystemGoods',
      uuidLink: '',
      title: '商品',
      actionTitle: '使用说明',
      desc: '商品组件可用于展示普通商品和积分商品，可以按照不同主题和人群等将店内在售商品配置展示在页面内，供用户浏览。',
      configSettings: {
        attribute: {
          nameCHN: '属性',
          hidden: false,
        },
        style: {
          nameCHN: '样式',
          hidden: false,
        },
        senior: {
          nameCHN: '高级',
          hidden: false
        },
        extensions: {
          nameCHN: '扩展',
          hidden: false
        }
      },
      configLayout: ['attribute', 'style', 'senior', 'extension'],
      LifeCycles: {
        initConfigSettings: (config: any) => {
          
        },
        updateconfigSettings: (config: any) => {

        }
      }
    };

    const onModuleTabsChange = () => {
      console.log("指南");
    };

    const onTabChangeClick = (tab: TabsPaneContext, event: Event) => {
      console.log(tab, event)
    }

    return {
      settingsPanelData,
      onModuleTabsChange,
      settingsPanelTab,
      onTabChangeClick
    };
  },
});
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