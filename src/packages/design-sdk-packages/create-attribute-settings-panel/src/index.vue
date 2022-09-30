<template>
  <div class="design-layout-main-settings-panel">
    <div class="settings-panel-title-wrap">
      <div class="panel-title">{{ configSettingsPanel.title }}</div>
      <div>
        <el-button text link type="primary">
          {{ configSettingsPanel.actionTitle }}
        </el-button>
      </div>
    </div>
    <div
      :style="{
        overflow: 'hidden',
        lineHeight: '24px',
        padding: '2px 5px',
      }"
      v-html="`${configSettingsPanel.desc}`"
    ></div>
    
    <div
      class="settings-panel-content-wrap"
      :style="{flex: 1}"
    >
      <el-tabs
        type="card"
        v-model="settingsPanelTab"
        @tab-click="onTabChangeClick"
      >
        <el-tab-pane
          v-for="item in settingsGroupFilter"
          :label="item.tabNameCHN"
          :name="item.key"
        >
          <el-scrollbar
          
          >
            <div
              v-for="childItem in item.layout"
              :style="{...childItem.wrapStyle}"
              :class="`attribute-component-wrap ${childItem.wrapClassName ?? '-'}`"
            >
              <ErrorCaptured
                :name="childItem.attributeComponentName"
              >
                <el-radio-group
                  v-model="childItem.defaultProps.value"
                >  
                  <el-radio 
                    v-for="radioItem in childItem.defaultProps.configOptions.options"
                    :label="radioItem.label"
                    :size="radioItem.size"
                    :border="radioItem.border"
                  >
                    {{radioItem.children}}
                  </el-radio>
                </el-radio-group>
              </ErrorCaptured>
            </div>

          </el-scrollbar>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "CreateAttributeSettingsPanel",
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
} from "vue";

import type { TabsPaneContext } from "element-plus";
import ErrorCaptured from "../../component/errorCaptured";

import {
  CreateAttributeSettingsPanelProps,
  CreateAttributeSettingsPanelEmits,
} from "./type";

const emits = defineEmits(CreateAttributeSettingsPanelEmits);
const props = defineProps(CreateAttributeSettingsPanelProps);

const settingsPanelTab = ref("styleCss");
const configSettingsPanel: {
  webComponentLink?: string;
  webComponentName: string;
  linkUUID: string;
  title: string;
  actionTitle: string;
  desc: string;
  group: Array<{
    key: string;
    tabNameCHN: string;
    hidden: boolean;
    layout?: Array<any>;
  }>;
  cover: {
    isShow: boolean;
    data?: any;
  };
  LifeCycles: {};
} = {
  webComponentLink: "",
  webComponentName: "@system/h5/goods",
  linkUUID: "",
  title: "商品",
  actionTitle: "使用说明",
  desc: "商品组件可用于展示普通商品和积分商品，可以按照不同主题和人群等将店内在售商品配置展示在页面内，供用户浏览。",
  group: [
    {
      key: "styleCss",
      tabNameCHN: "样式",
      hidden: false,
      layout: [
        {
          // 当前写法针对 合并组件
          attributeComponentName: [
            {
              name: "@system/attributeComponent/Radio",
              valueKey: "jessie", // object.key | item --->> item 无需填写
            },
          ],
          attributeComponentLink: "",
          defaultProps: {
            value: 'A',
            templateResetValue: false,
            resetDefaultValue: [],
            configOptions: {
            
              options: [
                {
                  label: 'A',
                  size: 'large',
                  border: true,
                  name: '',
                  disabled: false,
                  children: 'A-'
                },
                {
                  label: 'C',
                  size: 'large',
                  border: true,
                  name: '',
                  disabled: false,
                  children: 'B-'
                },
                {
                  label: 'C',
                  size: 'large',
                  border: true,
                  name: '',
                  disabled: false,
                  children: 'C-'
                },
                {
                  label: 'C',
                  size: 'large',
                  border: true,
                  name: '',
                  disabled: false,
                  children: 'D-'
                },
                {
                  label: 'C',
                  size: 'large',
                  border: true,
                  name: '',
                  disabled: false,
                  children: 'E-'
                },
              ]
            }, // 基本配置
          },
          wrapStyle: {

          },
          wrapClassName: '',
          responseValue: 'A',
          rules: []
        },
      ],
    },
    {
      key: "attribute",
      tabNameCHN: "属性",
      hidden: true,
      layout: [
        {
          attributeComponentName: "@system/attributeComponent/button",
          attributeComponentLink: "",
          defaultProps: {
            value: [],
            templateResetValue: false,
            resetDefaultValue: [],
            configOptions: {}
          },
          wrapStyle: {

          },
          wrapClassName: '',
          responseValue: [],
          rules: []
        },
      ],
    },
    {
      key: "senior",
      tabNameCHN: "高级",
      hidden: true,
      layout: [
        {
          attributeComponentName: "@system/attributeComponent/button",
          attributeComponentLink: "",
          defaultProps: {
            value: [],
            templateResetValue: false,
            resetDefaultValue: [],
            configOptions: {}
          },
          wrapStyle: {
          },
          wrapClassName: '',
          responseValue: [],
          rules: []
        },
      ],
    },
    {
      key: "extension",
      tabNameCHN: "扩展",
      hidden: true,
      layout: [
        {
          attributeComponentName: "@system/attributeComponent/button",
          attributeComponentLink: "",
          defaultProps: {
            value: [],
            templateResetValue: false,
            resetDefaultValue: [],
            configOptions: {}
          },
          wrapStyle: {
          },
          wrapClassName: '',
          responseValue: [],
          rules: []
        },
      ],
    },
  ],
  cover: {
    isShow: false,
    data: {
      styleCss: {
        style: {
          background: "pink",
        },
      },
      attribute: {
        jessie: 100,
      },
      senior: {
        handler: {},
      },
      extension: {
        cc: 999,
      },
    }
  },
  LifeCycles: {
    initConfigSettings: (config: any) => {
      console.log(config);
    },
    updateconfigSettings: (config: any) => {
      console.log(config);
    },
    requestFilter(config: any) {
      console.log(config);
    },
  },
};


const settingsGroupFilter = computed(() => configSettingsPanel.group?.filter(item => !item.hidden));


const onModuleTabsChange = () => {
  console.log("指南");
};


const onTabChangeClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};

</script>
<style lang="scss">
.design-layout-main-settings-panel {
  width: 360px;
  height: 100%;
  padding: 2px 5px 2px 5px;
  background-color: #f8f9fa;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .settings-panel-title-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 24px;
    padding: 10px 5px;
    // .panel-title {
    // }
  }
  .settings-panel-content-wrap {
    padding: 5px 0;
    overflow: hidden;
    >.el-tabs{
      height: 100%;
      display: flex;
      flex-direction: column;
      .el-tabs__content {
        flex: 1;
        .el-tab-pane {
          height: 100%;
        }
      }
    }
    .el-tabs__item {
      // &:nth-child(2) {
      //   padding-left: 20px;
      // }
      // &:last-child {
      //   padding-right: 20px;
      // }
    }
  }
}
</style>
