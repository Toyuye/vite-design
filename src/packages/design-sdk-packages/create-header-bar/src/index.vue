<template>
  <div class="design-layout-header">
    <div class="design-layout-header-logo">
      <svg 
        height="32"
        aria-hidden="true"
        viewBox="0 0 16 16"
        version="1.1"
        width="32"
        data-view-component="true"
        class="octicon octicon-mark-github v-align-middle"
      >
        <path 
          fill-rule="evenodd"
          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
        >
        </path>
      </svg>
    </div>
    <div class="design-layout-header-title">{{ "-----title-----" }}</div>
    <div class="design-layout-header-setting">
      <div class="layout-header-setting-item" @click="goDesignPageGuide">
        <i class="iconfont icon-paper-plane"></i>
        <a href="https://github.com/toyuye">指南</a>
      </div>
      <div class="layout-header-setting-item" @click="onDesignPagePreview">
        <i class="iconfont icon-external-link"></i>
        预览
      </div>
      <div class="layout-header-setting-item" @click="onDesignPageSave">
        <i class="iconfont icon-save"></i>
        保存
      </div>
      <div class="layout-header-setting-item">
        <el-dropdown
          size="small"
          split-button
          type="primary"
          @command="v => onDropDownCommand[v]()"
        >
          发布
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="onDesignPageImmediatelyRelease">
                立即发布
              </el-dropdown-item>
              <el-dropdown-item command="onDesignPageRegularRelease">
                定时发布
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
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

import { createHeaderBarProps, createHeaderBarEmits } from "./type";

export default defineComponent({
  name: "CreateHeaderBar",
  props: createHeaderBarProps,
  emits: createHeaderBarEmits,
  setup() {
    const goDesignPageGuide = () => {
      console.log("指南");
    };
    
    const onDesignPagePreview = () => {
      console.log("预览");
    };
    
    const onDesignPageSave = () => {
      console.log("页面保存");
    };

    const onDropDownCommand = {
      onDesignPageImmediatelyRelease: () => {
        console.log('立即发布')
      },
      onDesignPageRegularRelease: () => {
        console.log('定时发布')
      }
    }

    return {
      goDesignPageGuide,
      onDesignPagePreview,
      onDropDownCommand,
      onDesignPageSave,
    };
  },
});
</script>

<style lang="scss">
.design-layout-header {
  width: 100%;
  display: flex;
  align-items: center;
  height: 50px;
  display: flex;
  background: #f8f9fa;
  border-bottom: 1px solid #e9e7ec;
  box-shadow: 2px 6px 6px #eee;
  position: relative;
  z-index: 100;
  &-logo {
    padding-left: 20px;
    width: 320px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    min-width: 320px;
    overflow: hidden;
    .template-change-handle {
      font-size: 14px;
      color: #595961;
      cursor: pointer;
      height: 32px;
      display: flex;
      align-items: center;
      padding: 0 10px;
      border-radius: 6px;
      transition: all 0.3s;
      &:hover {
        background: #eef0f4;
      }
      > i {
        margin: 0 5px;
        &:first-child {
          margin-left: 0;
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
  &-title {
    background: pink;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 475px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  &-setting {
    display: flex;
    justify-content: flex-end;
    width: 360px;
    box-sizing: border-box;
    padding-right: 20px;
    align-items: center;
    min-width: 360px;
    .layout-header-setting-item {
      cursor: pointer;
      color: #595961;
      &:not(:last-child) {
        height: 32px;
        width: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        margin-right: 10px;
        transition: all 0.3s;
        > i {
          margin-right: 5px;
        }
        &:hover {
          background: #eef0f4;
        }
      }
      a {
        color: #595961;
        &:hover {
          color: #595961;
        }
      }
    }
  }
}
</style>
