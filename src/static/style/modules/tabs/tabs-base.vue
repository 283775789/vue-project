<template group="导航" type="tab选项卡" name="基本">
  <tw-collapse-group disable-toggle-self>
    <ul class="tw-tabs">
      <li class="js-tab@i cmd-for"><a class="cmd-text">选项卡1</a></li>
      <li class="js-tab2"><a>选项卡2</a></li>
      <li class="js-tab3"><a>内容最多8个字内容最</a></li>
    </ul>
    <tw-collapse
      class="xtabs"
      switch=".js-tab1"
      default-open>
      <div class="cmd-box">内容1</div>
    </tw-collapse>
  </tw-collapse-group>
</template>
