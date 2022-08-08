<template>
  <div class="design-layout-header">
    <div class="design-layout-header-item">
      <div class="logo">
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
      <div>
        <el-breadcrumb :separator-icon="ArrowRight">
          <el-breadcrumb-item>店铺装修平台</el-breadcrumb-item>
          <el-breadcrumb-item>首页</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="design-layout-header-item">
      <div class="title">{{`-------------------title--------------`}}</div>
    </div>
    <div class="design-layout-header-item">
      <div class="setting">
        <div class="setting-item" @click="goDesignPageGuide">
        <i class="iconfont icon-paper-plane"></i>
        <a href="https://github.com/toyuye">指南</a>
      </div>
      <div class="setting-item" @click="onDesignPagePreview">
        <i class="iconfont icon-external-link"></i>
        预览
      </div>
      <div class="setting-item" @click="onDesignPageSave">
        <i class="iconfont icon-save"></i>
        保存
      </div>
      <div class="setting-item setting-item-not">
        <el-dropdown
          size="default"
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
import { ArrowRight } from '@element-plus/icons-vue';
import { createHeaderBarProps, createHeaderBarEmits } from "./type";

export default defineComponent({
  name: "CreateHeaderBar",
  // components:{
  //   ArrowRight,
  // },
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
      ArrowRight
    };
  },
});
</script>

<style lang="scss">
.design-layout-header {
  width: 100%;
  display: flex;
  align-items: center;
  height: 48px;
  display: flex;
  background: #f8f9fa;
  box-shadow: 2px 6px 6px #eee;
  position: relative;
  z-index: 100;
  &-item {
    display: flex;
    align-items: center;
    flex: 1;
    overflow: hidden;
    .logo {
      padding: 0 8px;
      width: 48px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      min-width: 48px;
      overflow: hidden;
    }
    .title {
      text-align: center;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      flex: 1;
    }
    .setting {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex: 1;
      &-item {
        padding: 0px 8px;
        cursor: pointer;
        &:not(.setting-item-not) {
          width: 64px;
          height: 32px;
          line-height: 32px;
          text-align: center;
          border-radius: 2px;
          &:hover {
            background: #eef0f4;
          }
        }
      }
    }
  } 
}
</style>
