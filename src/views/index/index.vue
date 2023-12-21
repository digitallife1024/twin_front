<script setup lang="ts">
import ItemWrap from "@/components/item-wrap";
import LeftTop from "./left-top.vue";
import LeftCenter from "./left-center.vue";
import LeftBottom from "./left-bottom.vue";
import CenterMap from "./center-map.vue";
import CenterBottom from "./center-bottom.vue";
import RightTop from "./right-top.vue";
import RightCenter from "./right-center.vue";
import RightBottom from "./right-bottom.vue";
</script>

<template>
  <div class="index-box">
    <div class="content_left">
      <!-- <div class="pagetab">
        <div class="item">实时监测</div>
        <div class="item">统计分析</div>
      </div> -->
      <ItemWrap class="content_left-top content_lr-item" title="设备总览">
        <LeftTop />
      </ItemWrap>
      <ItemWrap class="content_left-center content_lr-item" title="用户总览">
        <LeftCenter />
      </ItemWrap>
      <ItemWrap
        class="content_left-bottom content_lr-item"
        title="设备监测"
        style="padding: 0 10px 16px 10px"
      >
        <LeftBottom />
      </ItemWrap>
    </div>
    <div class="content_center">
      <CenterMap class="content_center_top" title="设备分布图" />
      <ItemWrap class="content_center-bottom" title="折线图">
        <CenterBottom />
      </ItemWrap>
    </div>
    <div class="content_right">
      <ItemWrap class="content_left-bottom content_lr-item" title="警报次数">
        <RightTop />
      </ItemWrap>
      <ItemWrap
        class="content_left-bottom content_lr-item"
        title="警报排名(TOP8)"
        style="padding: 0 10px 16px 10px"
      >
        <RightCenter />
      </ItemWrap>
      <ItemWrap class="content_left-bottom content_lr-item" title="警报信息">
        <RightBottom />
      </ItemWrap>
    </div>
  </div>
</template>

<style scoped lang="scss">
.index-box {
  width: 100%;
  display: flex;
  min-height: calc(100% - 64px);
  justify-content: space-between;
}
//左边 右边 结构一样
.content_left,
.content_right {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  width: 540px;
  box-sizing: border-box;
  flex-shrink: 0;
}
.content_center {
  flex: 1;
  margin: 0 54px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .content_center-bottom {
    height: 315px;
  }
}

.content_lr-item {
  height: 310px;
}
</style>
