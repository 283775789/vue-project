<template>
  <div>
    <h2>颜色体系</h2>
    <table>
      <thead>
        <tr>
          <th style="width:10%;">颜色集</th>
          <th style="width:20%;">概要</th>
          <th>成员</th>
          <th>应用场景</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowspan="5">主题色</td>
          <td rowspan="5">品牌定位,引导用户行为,分离主次关系等。</td>
          <td>主色</td>
          <td>主按钮背景、导航背景、主视觉单元</td>
        </tr>
        <tr>
          <td>辅色</td>
          <td>辅助按钮背景、次视觉单元</td>
        </tr>
        <tr>
          <td>弱化色</td>
          <td>弱化按钮背景、弱化视觉单元</td>
        </tr>
        <tr>
          <td>滑过色(自动计算)</td>
          <td>相关视觉单元鼠标滑过效果<br />计算公式:饱和度增加6%,亮度降低6%</td>
        </tr>
        <tr>
          <td>激活色(自动计算)</td>
          <td>相关视觉单元激活，选中效果<br />计算公式:饱和度增加10%,亮度降低10%</td>
        </tr>
        <tr>
          <td rowspan="3">背景色</td>
          <td rowspan="3">划分区块或功能</td>
          <td>页面背景</td>
          <td>页面主体背景</td>
        </tr>
        <tr>
          <td>页脚背景</td>
          <td>页面底部版权信息区背景</td>
        </tr>
        <tr>
          <td>禁用背景</td>
          <td>按钮禁用，或表单控件禁用等</td>
        </tr>
        <tr>
          <td rowspan="3">标识色</td>
          <td rowspan="3">提示操作级别，系统的感情色彩呈现。</td>
          <td>成功</td>
          <td>提示正常完成的反馈信息</td>
        </tr>
        <tr>
          <td>警告</td>
          <td>提示不可恢复或有风险的信息</td>
        </tr>
        <tr>
          <td>错误</td>
          <td>提示异常信息</td>
        </tr>
        <tr>
          <td rowspan="8">文本色</td>
          <td rowspan="8">让用户快速识别关键信息，区分信息层级</td>
          <td>主文本色</td>
          <td>一般为系统的默认字体颜色,主要内容</td>
        </tr>
        <tr>
          <td>辅助文本</td>
          <td>次要信息</td>
        </tr>
        <tr>
          <td>弱化文本</td>
          <td>突显主文本，表达参考信息</td>
        </tr>
        <tr>
          <td>禁用文本</td>
          <td>用于禁用按钮等</td>
        </tr>
        <tr>
          <td>高亮文本</td>
          <td>要求识别度最高的关键信息</td>
        </tr>
        <tr>
          <td>错误文本</td>
          <td>表单错误提示等</td>
        </tr>
        <tr>
          <td>链接色</td>
          <td>用于链接，标签等</td>
        </tr>
        <tr>
          <td>占位文本</td>
          <td>表单占位提示信息</td>
        </tr>
        <tr>
          <td rowspan="3">边框色</td>
          <td rowspan="3">模块划分, 降低用户学习成本</td>
          <td>主边框</td>
          <td>不同模块区分</td>
        </tr>
        <tr>
          <td>辅边框</td>
          <td>同模块内容区分</td>
        </tr>
        <tr>
          <td>禁用边框</td>
          <td>用于特定的禁用元素</td>
        </tr>
      </tbody>
    </table>
    <h2>字体体系</h2>
    <table>
      <thead>
        <tr>
          <th style="width:10%;">分类</th>
          <th style="width:20%;">概要</th>
          <th>成员</th>
          <th>应用场景</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowspan="2">字体家族</td>
          <td rowspan="2">使信息易读，友好，专业</td>
          <td>web端字体</td>
          <td>
            <div>用于PC-Web端项目,取值如下：</div>
            <div>"Microsoft YaHei",SimSun,'\5b8b\4f53',sans-serif;</div>
          </td>
        </tr>
        <tr>
          <td>移动端字体</td>
          <td>
            <div>用于移动端项目,取值如下：</div>
            <div>"-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
             "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
             SimSun, sans-serif;</div>
          </td>
        </tr>
        <tr>
          <td rowspan="4">字号</td>
          <td rowspan="4">使信息层次分明，提升阅读体验</td>
          <td>小字号(12px)</td>
          <td>需要尽可能多的显示器上显示信息或受限于容器尺寸限制等情形时使用</td>
        </tr>
        <tr>
          <td>默认字号(14px)</td>
          <td>
            <img src="https://gw.alipayobjects.com/zos/rmsportal/yriUFbqOPtVniYYiikfb.png" style="width:480px;" />
            <br>
            为系统的默认字体，以保证整个系统所传递信息的最佳阅读体验
          </td>
        </tr>
        <tr>
          <td>中号字体(16px)</td>
          <td>用于标题或需突出显示的信息</td>
        </tr>
        <tr>
          <td>大号字体(20px)</td>
          <td>重点强调信息</td>
        </tr>
      </tbody>
    </table>
    <h2>间距体系</h2>
    <p>如果信息之间关联性越高，它们之间的距离就应该越接近，也越像一个视觉单元；反之，则它们的距离就应该越远，也越像多个视觉单元。亲密性的根本目的是实现组织性，让用户对页面结构和信息层次一目了然。</p>
    <table>
      <thead>
        <tr>
          <th style="width:10%;">分类</th>
          <th style="width:20%;">概要</th>
          <th>成员</th>
          <th>应用场景</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>行高</td>
          <td>看不见的文字容器</td>
          <td>默认行高(1.5)</td>
          <td>
            <div>行高可以认为是一个看不见的盒子(行高演示)，一般用于多行文字显示时增强信息的可读性；在单行文字时，设置过小有可能会导致文字被截断，所以我们采用了Bootstrap4的1.5倍文字大小来做为行高，但这也是导致视觉间距与设计稿实际间距看起来不相等的罪魁祸首，所以如果系统对间距有很精确的要求，可以用scss函数getExactSpacing($spacing, $font-size, $line-height)来修正为完全与设计稿一致的间距尺寸。</div>
            <div></div>
          </td>
        </tr>
        <tr>
          <td rowspan="6">间距</td>
          <td rowspan="6">划分信息层级</td>
          <td>间距步长(5px)</td>
          <td>用于确定整个系统的间距最小跳跃单位</td>
        </tr>
        <tr>
          <td>超小间距(10px)</td>
          <td>如标题与内容之间</td>
        </tr>
        <tr>
          <td>小间距(15px)</td>
          <td>同一模块的不同元素之间</td>
        </tr>
        <tr>
          <td>中间距(20px)</td>
          <td>不同模块之间</td>
        </tr>
        <tr>
          <td>大间距(30px)</td>
          <td>用于视觉布局，调控模块留白</td>
        </tr>
        <tr>
          <td>超大间距(40px)</td>
          <td>用于视觉布局，调控模块留白</td>
        </tr>
      </tbody>
    </table>
    <h2>尺寸体系</h2>
    <table>
      <thead>
        <tr>
          <th style="width:10%;">分类</th>
          <th style="width:20%;">概要</th>
          <th>成员</th>
          <th>应用场景</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowspan="5">控件高度</td>
          <td rowspan="5">用于控件排版,使排版简洁，规范</td>
          <td>高度步长(6px)</td>
          <td>控制高度的最小跳跃单位</td>
        </tr>
        <tr>
          <td>小高度(24px)</td>
          <td>节约排版空间时使用</td>
        </tr>
        <tr>
          <td>默认高度(30px)</td>
          <td>用于文本框，按钮等</td>
        </tr>
        <tr>
          <td>中高度(36px)</td>
          <td>大文本框，大按钮</td>
        </tr>
        <tr>
          <td>大高度(42px)</td>
          <td>突显操作特性，如登录页面输入框入按钮</td>
        </tr>
        <tr>
          <td rowspan="7">控件宽度</td>
          <td rowspan="7">用于控件排版,使排版简洁，规范</td>
          <td>宽度步长(40px)</td>
          <td>控件宽度的最小跳跃单位</td>
        </tr>
        <tr>
          <td>默认宽度(100%)</td>
          <td>默认宽度为父容器的宽度</td>
        </tr>
        <tr>
          <td>超小宽度(80px)</td>
          <td>节约排版空间时使用</td>
        </tr>
        <tr>
          <td>小宽度(120px)</td>
          <td>节约排版空间时使用</td>
        </tr>
        <tr>
          <td>中宽度(160px)</td>
          <td>随输入内容的多少而定</td>
        </tr>
        <tr>
          <td>大宽度(200px)</td>
          <td>随输入内容的多少而定</td>
        </tr>
        <tr>
          <td>超大宽度(240px)</td>
          <td>随输入内容的多少而定</td>
        </tr>
      </tbody>
    </table>
    <h2>响应式体系</h2>
    <div>虽然从用户体验与业界主流应用来说，并不推荐同时响应PC,Pad,phone三端的设计，但响应式布局仍然有其不可取代的优点，所以天闻UI框架体系然保留了类bootstrap的超强响应式体系，但为了更自然的书写css，以桌面应用为主的系统(pc-web)端摒弃了Bootstrap的移动端优先原则，而改为了PC端优先，以移动端为主的系统，依然保持移动端优先。</div>
    <table>
      <thead>
        <tr>
          <th style="width:10%;">分类</th>
          <th style="width:20%;">概要</th>
          <th>成员</th>
          <th>描述</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowspan="5">PC-Web端系统</td>
          <td rowspan="5">PC端优先</td>
          <td>默认(pc)</td>
          <td>所有默认的css都为pc端优先</td>
        </tr>
        <tr>
          <td>pad横屏(lpad)</td>
          <td>@media (max-width:1199px) {...}</td>
        </tr>
        <tr>
          <td>pad坚屏(pad)</td>
          <td>@media (max-width:991px) {...}</td>
        </tr>
        <tr>
          <td>手机横屏(lphone)</td>
          <td>@media (max-width:767px) {...}</td>
        </tr>
        <tr>
          <td>手机坚屏(phone)</td>
          <td>@media (max-width:575px) {...}</td>
        </tr>
        <tr>
          <td rowspan="5">移动App</td>
          <td rowspan="5">移动端优先</td>
          <td>默认(phone)</td>
          <td>所有默认的css都为移动端优先</td>
        </tr>
        <tr>
          <td>手机横屏(lphone)</td>
          <td>@media (min-width:576px) {...}</td>
        </tr>
        <tr>
          <td>pad坚屏(pad)</td>
          <td>@media (min-width:768px) {...}</td>
        </tr>
        <tr>
          <td>pad横屏(lpad)</td>
          <td>@media (min-width:992px) {...}</td>
        </tr>
        <tr>
          <td>PC端(pc)</td>
          <td>@media (min-width:1200px) {...}</td>
        </tr>
        <tr>
          <td rowspan="2">栅格</td>
          <td rowspan="2">均分栅格</td>
          <td>栅格数量</td>
          <td>12列</td>
        </tr>
        <tr>
          <td>栅格间隔</td>
          <td>20px</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'design'
}
</script>
