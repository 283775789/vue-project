<template>
  <tw-collapse-group>
    <ul>
      <li>
        <a class="js-btn2">按钮2</a>
        <tw-collapse
          switch=".js-btn2">
          <div>折叠内容2</div>
        </tw-collapse>
      </li>
      <li>
        <a class="js-btn3">按钮3</a>
        <tw-collapse
          switch=".js-btn3">
          <div>折叠内容3</div>
        </tw-collapse>
      </li>
      <li><a class="jst-close js-btn4">无折叠内容</a></li>
    </ul>
  </tw-collapse-group>
</template>
