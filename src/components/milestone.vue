<template>
  <div style="width: 100%;height: auto;">
    <!-- 上半部分 -->
    <div style="width: 100%;background-image:url(../../static/milestone_background.jpg);">
     <!--  <img src="../jpg/background.png">  -->
    <div style="width: 1500px;height: auto;margin: 0 auto 0;">
      <!-- 标题头 -->
      <div style="width: 100%;height: 98px;border-bottom:2px solid #000000;margin: 0px 0px 30px 0px;">
        <!-- 图标 -->
        <div style="float: left;width: 250px;">
          <a :href="HomePageImgUrl">
            <img src="../../static/logo_black.png" style="width: 70px;margin: 15px 0px 0px 0px;float: left;">
          </a>
        </div>
        <!-- 标题栏按钮按钮 -->
        <div style="float: right;width: 307px;height: 30px;margin: 32px 0px 0px 0px;">
          <!-- 公告 -->
          <div style="float: right;padding: 4px 7px 0px 0px;">
            <a :href="NoticesPageUrl" style="text-decoration: none;">
              <font style="color: #000000;font-size: 13.33px;font-weight: bold;text-transform: uppercase;letter-spacing: 0.2em;">公告</font>
            </a>
          </div>
          <!-- 资源 -->
          <div style="float: right;padding: 4px 30px 0px 0px;">
            <a :href="ResourcesPagerl" style="text-decoration: none;">
              <font style="color: #000000;font-size: 13.33px;font-weight: bold;text-transform: uppercase;letter-spacing: 0.2em;">资源</font>
            </a>
          </div>
          <!-- 进展 -->
          <div style="float: right;padding: 4px 30px 0px 0px;">
            <a :href="ProgressPageUrl" style="text-decoration: none;">
              <font style="color: #000000;font-size: 13.33px;font-weight: bold;text-transform: uppercase;letter-spacing: 0.2em;">进展</font>
            </a>
          </div>
          <!-- 关于 -->
          <div style="float: right;padding: 4px 30px 0px 0px;">
            <a :href="AboutPageUrl" style="text-decoration: none;">
              <font style="color: #000000;font-size: 13.33px;font-weight: bold;text-transform: uppercase;letter-spacing: 0.2em;">关于</font>
            </a>
          </div>
        </div>
      </div>
      <!-- 网页主要内容 -->
      <!-- 宪章标题记住要内容 -->
      <div style="width: 1500px;height: auto;">
        <div style="width: 1200px;height: 630px;margin: 0 auto 0;">
          <el-card body-style="padding:13px;" style="width: 449px;float: left;">
            <img :src="milestoneimgurl" style="width: 423px;">
          </el-card>
          <!-- 标题及文字 -->
          <div style="width: 730px;height: 593px;float: right;">
            <h1 style="font-size: 40px;margin: 0px 0px 15px 0px;">{{title}}</h1>
            <b style="color: #606266;letter-spacing: 0.2em;font-size: 16px;">{{synopsis}}</b>
            <p></p>
            <div style="margin-top: 390px;color:#909399;text-decoration: none;font-size: 12px;letter-spacing: 0.2em;">{{date}}</div>
            <div style="color:#909399;text-decoration: none;font-size: 12px;letter-spacing: 0.2em;">{{readtime}}</div>
          </div>
        </div>
      </div>
      </div>
      </div>
      <!-- 内容 - 放置在局部标签中显示 -->
      <div style="width: 720px;height: auto;margin: 0 auto 0;margin-top: 50px;">
        <el-button :key="b.id" v-for="b in milestonebutton" type="info" plain :icon="b.icon" style="letter-spacing: 0.15em" @click="open(b.url)">{{b.title}}</el-button>
      </div>
      <div v-html="content"></div>
      <!-- 页尾巴 -->
      <div style="width: 1500px;margin: 0 auto 0;">
        <ol style="padding-left: 0px;margin:100px 0px 0px 0px;">
              <li style="list-style-type: none;border-top:1px solid #DCDFE6;padding: 20px 0px 20px 0px;width: 100%;position: relative;overflow: hidden;clear: both;">
                <b style="color: #C0C4CC;font-size: 0.9em;letter-spacing: 0.2em;font-weight: normal;text-transform: uppercase;margin-right: 165px;position: absolute;left: 0px;">脚注</b>
                  <div style="float: right;width: 1110px;float: right;display: flex;flex-direction: column;justify-content:space-between;">
                    <b style="color: #C0C4CC;font-size: 0.9em;letter-spacing: 0.2;font-weight: normal;line-height: 1.4;">
                      与此同时进行的补充研究对大批量培训进行了细致的实验测试，并对以前的文献进行了广泛的回顾，清除了早期工作中的一些不一致之处。他们发现任务之间的并行可能性存在显着差异，我们的工作似乎解释了这种差异的主要部分。他们的工作还表明，大批量培训不会影响泛化。我们相信，有系统的调查，如这一个，其他人都到外地非常有价值的，并且我们致力于在继续工作“AI的科学。” ↩
                    </b>
                  </div>  
              </li>
              <li style="list-style-type: none;border-top:1px solid #DCDFE6;padding: 20px 0px 20px 0px;width: 100%;position: relative;overflow: hidden;clear: both;">
                <b style="color: #C0C4CC;font-size: 0.9em;letter-spacing: 0.2em;font-weight: normal;text-transform: uppercase;margin-right: 165px;position: absolute;left: 0px;">作者</b>
                  <div style="float: right;width: 1110px;float: right;display: flex;flex-direction: column;justify-content:space-between;">
                    <b style="color: #C0C4CC;font-size: 0.9em;letter-spacing: 0.2;font-weight: normal;line-height: 1.4;">
                      Sam McCandlish Jared Kaplan Dario Amodei
                    </b>
                  </div>  
              </li>
              <li style="list-style-type: none;border-top:1px solid #DCDFE6;padding: 20px 0px 20px 0px;width: 100%;position: relative;overflow: hidden;clear: both;">
                <b style="color: #C0C4CC;font-size: 0.9em;letter-spacing: 0.2em;font-weight: normal;text-transform: uppercase;margin-right: 165px;position: absolute;left: 0px;">致谢</b>
                  <div style="float: right;width: 1110px;float: right;display: flex;flex-direction: column;justify-content:space-between;">
                    <b style="color: #C0C4CC;font-size: 0.9em;letter-spacing: 0.2;font-weight: normal;line-height: 1.4;">
                      感谢OpenAI Dota团队（Greg Brockman，Brooke Chan，PrzemysławDebiak，Christy Dennison，David Farhi，RafałJózefowicz，Jakub Pachocki，Michael Petrov，HenriquePondé，Jonathan Raiman，Szymon Sidor，Jie Tang，Filip Wolski和Susan Zhang）他们对这项研究的贡献。
                    </b>
                  </div>  
              </li>
              <li style="list-style-type: none;border-top:1px solid #DCDFE6;padding: 20px 0px 20px 0px;width: 100%;position: relative;overflow: hidden;clear: both;">
                <b style="color: #C0C4CC;font-size: 0.9em;letter-spacing: 0.2em;font-weight: normal;text-transform: uppercase;margin-right: 165px;position: absolute;left: 0px;">编者</b>
                  <div style="float: right;width: 1110px;float: right;display: flex;flex-direction: column;justify-content:space-between;">
                    <b style="color: #C0C4CC;font-size: 0.9em;letter-spacing: 0.2;font-weight: normal;line-height: 1.4;">
                      杰克克拉克和阿什利Pilipiszyn
                    </b>
                  </div>  
              </li>
              <li style="list-style-type: none;border-top:1px solid #DCDFE6;padding: 20px 0px 20px 0px;width: 100%;position: relative;overflow: hidden;clear: both;">
                <b style="color: #C0C4CC;font-size: 0.9em;letter-spacing: 0.2em;font-weight: normal;text-transform: uppercase;margin-right: 165px;position: absolute;left: 0px;">设计</b>
                  <div style="float: right;width: 1110px;float: right;display: flex;flex-direction: column;justify-content:space-between;">
                    <b style="color: #C0C4CC;font-size: 0.9em;letter-spacing: 0.2;font-weight: normal;line-height: 1.4;">
                      贾斯汀杰伊王
                    </b>
                  </div>  
              </li>
              <li style="list-style-type: none;border-top:1px solid #DCDFE6;padding: 20px 0px 20px 0px;width: 100%;position: relative;overflow: hidden;clear: both;">
                <b style="color: #C0C4CC;font-size: 0.9em;letter-spacing: 0.2em;font-weight: normal;text-transform: uppercase;margin-right: 165px;position: absolute;left: 0px;">封面图稿</b>
                  <div style="float: right;width: 1110px;float: right;display: flex;flex-direction: column;justify-content:space-between;">
                    <b style="color: #C0C4CC;font-size: 0.9em;letter-spacing: 0.2;font-weight: normal;line-height: 1.4;">
                      本巴里
                    </b>
                  </div>  
              </li>
            </ol>
      </div>


    <!-- 页尾 -->
    <div style="border-top:1px solid #DCDFE6;width: 1500px;margin:0 auto 0;height: 70px;margin-top: 70px;">
      <div style="height: 30px;width: 220px;float: left;margin-top: 10px;">
        <!-- github -->
        <a :href="GitHubPagerl" target="view_window">
          <img style="height: 25px;float: left;" src="../../static/github.png">
        </a>
        <!-- 微信 -->
        <a href="javascript:void(0)" @click="WeChartVisible = true">
          <img style="height: 25px;float: left;margin-left: 20px;" src="../../static/weixin.png">
        </a>
      </div>
      <!-- 快捷连接 -->
      <div style="height: 30px;width: 1280px;float: left;margin-top: 10px;">
        <!-- 公告 -->
          <div style="float: left;padding: 4px 30px 0px 0px;">
            <a :href="AboutPageUrl" style="text-decoration: none;">
              <font style="color: #909399;font-size: 13.33px;font-weight: bold;text-transform: uppercase;letter-spacing: 0.2em;">关于</font>
            </a>
          </div>
          <!-- 资源 -->
          <div style="float: left;padding: 4px 30px 0px 0px;">
            <a :href="ProgressPageUrl" style="text-decoration: none;">
              <font style="color: #909399;font-size: 13.33px;font-weight: bold;text-transform: uppercase;letter-spacing: 0.2em;">进展</font>
            </a>
          </div>
          <!-- 进展 -->
          <div style="float: left;padding: 4px 30px 0px 0px;">
            <a :href="ResourcesPagerl" style="text-decoration: none;">
              <font style="color: #909399;font-size: 13.33px;font-weight: bold;text-transform: uppercase;letter-spacing: 0.2em;">资源</font>
            </a>
          </div>
          <!-- 关于 -->
          <div style="float: left;padding: 4px 30px 0px 0px;">
            <a :href="NoticesPageUrl" style="text-decoration: none;">
              <font style="color: #909399;font-size: 13.33px;font-weight: bold;text-transform: uppercase;letter-spacing: 0.2em;">公告</font>
            </a>
          </div>
          <!-- 关于 -->
          <div style="float: left;padding: 4px 30px 0px 0px;">
            <a :href="CharterPageUrl" style="text-decoration: none;">
              <font style="color: #909399;font-size: 13.33px;font-weight: bold;text-transform: uppercase;letter-spacing: 0.2em;">宪章</font>
            </a>
          </div>
          <!-- 关于 -->
          <div style="float: left;padding: 4px 30px 0px 0px;">
            <a :href="JoinPageUrl" style="text-decoration: none;">
              <font style="color: #909399;font-size: 13.33px;font-weight: bold;text-transform: uppercase;letter-spacing: 0.2em;">加入</font>
            </a>
          </div>
          <!-- 关于 -->
          <div style="float: left;padding: 4px 30px 0px 0px;">
            <a :href="StatePageUrl" style="text-decoration: none;">
              <font style="color: #909399;font-size: 13.33px;font-weight: bold;text-transform: uppercase;letter-spacing: 0.2em;">声明</font>
            </a>
          </div>
          <b style="float: right;color: #C0C4CC;font-size: 0.4em;letter-spacing: 0.2em;font-weight: bold;;text-transform: uppercase;padding-top: 6px;">@2019-2019 cmaple.cn</b>
      </div>
    </div>
    <!-- 微信公众号展示页面 -->
    <el-dialog
      title="微信公众号"
      :visible.sync="WeChartVisible"
      width="500px"
      center>
        <img style="width: 400px;padding-left: 25px;" src="../../static/WechatIMG485.jpeg">
        <span slot="footer" class="dialog-footer">
          关注微信订阅号，随时获取最新的消息
        </span>
    </el-dialog>
  </div>
</template>
<script>
export default {

  data () {

    return {
      //里程碑配图
      milestoneimgurl:'https://d4mucfpksywv.cloudfront.net/research-covers/musenet/1x-no-mark.jpg',
      //里程碑标题
      title:'了解蜂巢系统',
      //里程碑简介
      synopsis:'蜂巢系统是一个分布式服务的在线服务的合集。蜂巢系统是一个致力于解决广大用户相关问题的人工智能系统，我们团队将保证我们所开发的人工智能将适用于益于全人类的方向。蜂巢系统采用分布式的系统架构，可以灵活的管理相关的模块。我们的办公地点灵活，只要有网络并且你有相关的技术和兴趣就可以加入我们，一起完善蜂巢系统。',
      //里程碑日期
      date:'2019年7月26日',
      //里程碑阅读时间
      readtime:'16分钟阅读',
      //按钮信息
      milestonebutton:[
        {
          icon:'el-icon-document',
          title:'阅读论文',
          url:'https://www.sogou.com/'
        },
        {
          icon:'el-icon-paperclip',
          title:'查看源码',
          url:'https://www.baidu.com/'
        },
      ],
      //里程碑内容
      content:
      `<div style="width: 720px;height: auto;margin: 0 auto 0;margin-top:20px;">
        <div style="width: 100%;margin: 0px 0px 0px 0px;">
          <h3 style="margin: 0px 0px 0px 0px;">
            <font style="color: #606266;font-weight: normal;font-size: 0.8em;letter-spacing: 0.1em;">
              在过去几年中，AI研究人员通过数据并行来加速神经网络训练取得了越来越大的成功，数据并行性将大批量数据分散到许多机器上。研究人员成功地使用了成千上万的批量大小进行图像分类和语言建模，甚至数百万用于玩游戏Dota 2的RL代理。这些大批量数据允许将越来越多的计算量有效地投入到单个模型的训练中，并且是人工智能训练计算快速增长的重要推动者。但是，过大的批量大小显示出算法回报的迅速减少，并且不清楚为什么这些限制对于某些任务更大而对其他任务更小
            </font>
          </h3>
          <img src="https://openai.com/content/images/2018/12/noise-summary-3.svg">
          <h3 style="margin: 0px 0px 0px 0px;">
            <font style="color: #DCDFE6;font-weight: normal;font-size: 0.6em;letter-spacing: 0.01em;">
              梯度噪声标度（在训练中适当平均）解释了在跨越六个数量级的任务范围内关键批量大小的绝大多数（r2 = 80％）变化。批量大小以图像数量，标记（用于语言模型）或观察（用于游戏）来测量。
            </font>
          </h3>
          <h3 style="margin: 20px 0px 0px 0px;">
            <font style="color: #606266;font-weight: normal;font-size: 0.8em;letter-spacing: 0.1em;">
              这种类型的统计广泛用于样本 大小 的选择，并已提出了使用在深 学习，但尚未对现代训练运行进行系统测量或应用。我们对上图所示的各种机器学习任务进行了验证，包括图像识别，语言建模，Atari游戏和Dota。具体来说，我们针对所有这些任务进行了各种批量训练（分别调整学习率），并将训练中的加速比与噪声量表预测应该发生的比较进行了比较。由于大批量通常需要仔细和昂贵的调整或特殊学习率计划才能有效，因此提前知道上限在培训新模型方面提供了显着的实际优势。
            </font>
          </h3>
          <h3 style="margin: 20px 0px 0px 0px;">
            <font style="color: #606266;font-weight: normal;font-size: 0.8em;letter-spacing: 0.1em;">
              我们发现，在培训的壁挂时间和我们用于进行培训的总体积计算（与美元成本成比例）之间进行权衡时，可视化这些实验的结果是有帮助的。在非常小的批量大小的情况下，批量加倍可以让我们在不使用额外计算的情况下进行一半的训练（我们运行两倍的筹码一半）。在非常大的批量大小下，更多的并行化不会导致更快的培训。曲线中间有一个“弯曲”，渐变噪声标度预测弯曲发生的位置。
            </font>
          </h3>
             <img src="https://openai.com/content/images/2018/12/basic-scaling-1.svg">
          <h3 style="margin: 0px 0px 0px 0px;">
            <font style="color: #DCDFE6;font-weight: normal;font-size: 0.6em;letter-spacing: 0.01em;">
              增加并行性使得在合理的时间内训练更复杂的模型成为可能。我们发现帕累托前沿图是可视化算法和尺度之间比较的最直观方式。
            </font>
          </h3>
          <h3 style="margin: 20px 0px 0px 0px;">
            <font style="color: #606266;font-weight: normal;font-size: 0.8em;letter-spacing: 0.1em;">
              我们通过设置性能水平（比如在Beam Rider的Atari游戏中得分为1000）来制作这些曲线，并观察在不同批量大小下训练到该性能所需的时间。结果与我们模型的预测相对匹配，跨越了许多不同的绩效目标值。
            </font>
          </h3>
          <el-divider></el-divider>
          <h3 style="margin: 20px 0px 0px 0px;">
            <font style="color: #303133;font-weight: bolder;font-size: 1.1em;letter-spacing: 0.1em;">
              梯度噪声标度中的模式
            </font>
          </h3>
          <h3 style="margin: 20px 0px 0px 0px;">
            <font style="color: #606266;font-weight: normal;font-size: 0.8em;letter-spacing: 0.1em;">
              我们已经观察到梯度噪声量表中的几种模式，这些模式提供了关于AI训练未来可能具有的线索。
            </font>
          </h3>
          <h3 style="margin: 20px 0px 0px 0px;">
            <font style="color: #606266;font-weight: normal;font-size: 0.8em;letter-spacing: 0.1em;">
              首先，在我们的实验中，噪声标度通常在训练过程中增加一个数量级或更多。直观地说，这意味着网络在训练早期学习任务的“更明显”特征，并在以后学习更复杂的特征。例如，在图像分类器的情况下，网络可能首先学习识别大多数图像中存在的小尺度特征（例如边缘或纹理），而稍后将这些部分组合成更一般的概念，例如猫和狗。 。要查看各种各样的边缘或纹理，网络只需要看到少量图像，因此噪声比例较小; 一旦网络更多地了解更大的对象，它就可以一次处理更多的图像，而不会看到重复的数据。
            </font>
          </h3>
          <h3 style="margin: 20px 0px 0px 0px;">
            <font style="color: #606266;font-weight: normal;font-size: 0.8em;letter-spacing: 0.1em;">
              我们看到一些初步迹象表明，在同一数据集上不同模型具有相同的效果 - 更强大的模型具有更高的梯度噪声标度，但这仅仅是因为它们实现了更低的损耗。因此，有一些证据表明，训练中增加的噪声尺度不仅仅是收敛的假象，而是因为模型变得更好而发生。如果这是真的，那么我们期望未来的，更强大的模型具有更高的噪声规模，因此可以更加并行化。
            </font>
          </h3>
          <h3 style="margin: 20px 0px 0px 0px;">
            <font style="color: #606266;font-weight: normal;font-size: 0.8em;letter-spacing: 0.1em;">
             其次，主观上更困难的任务也更适合并行化。在监督学习的背景下，从MNIST到SVHN到ImageNet都有明显的进展。在强化学习的背景下，从Atari Pong到Dota 1v1到Dota 5v5有明显的进展，最佳批量大小相差10,000倍以上。因此，随着AI进入新的和更困难的任务，我们希望模型能够容忍更高的批量。
            </font>
          </h3>
           <h3 style="margin: 40px 0px 0px 0px;">
            <font style="color: #303133;font-weight: bolder;font-size: 1.1em;letter-spacing: 0.1em;">
              启示
            </font>
          </h3>
          <h3 style="margin: 20px 0px 0px 0px;">
            <font style="color: #606266;font-weight: normal;font-size: 0.8em;letter-spacing: 0.1em;">
              数据并行度显着影响AI功能的进展速度。更快的培训使更强大的模型成为可能，并通过更快的迭代时间加速研究。
            </font>
          </h3>
          <h3 style="margin: 20px 0px 0px 0px;">
            <font style="color: #606266;font-weight: normal;font-size: 0.8em;letter-spacing: 0.1em;">
              在早期的AI和Compute研究中，我们观察到用于训练最大ML模型的计算每3.5个月翻一番，我们注意到这种趋势是由经济学（愿意花钱计算）和算法并行训练的能力。后一因素（算法可并行性）难以预测，其限制尚不清楚，但我们目前的结果代表了系统化和量化的一步。特别是，我们有证据表明，相同任务中更困难的任务和更强大的模型将允许比我们迄今为止看到的更激进的数据并行性，这为训练计算的持续快速指数增长提供了关键驱动因素。（这甚至没有考虑到最近模型并行性的进步，这可以允许在数据并行性之上进一步并行化）。
            </font>
          </h3>
          <h3 style="margin: 20px 0px 0px 0px;">
            <font style="color: #606266;font-weight: normal;font-size: 0.8em;letter-spacing: 0.1em;">
              培训计算的持续增长及其明显可预测的算法基础进一步突出了未来几年人工智能能力快速增长的可能性，并强调研究的紧迫性，以确保这些系统是安全的，并且负责任地使用它们。人工智能政策的一个核心挑战是如何使用这样的措施来预测未来人工智能系统的特征，并利用这些知识来构思让社会最大化上行并最大限度地减少这些技术的缺点的政策。
            </font>
          </h3>
          <h3 style="margin: 20px 0px 0px 0px;">
            <font style="color: #606266;font-weight: normal;font-size: 0.8em;letter-spacing: 0.1em;">
              OpenAI致力于继续进行严格的分析，让我们对AI的未来发展前景有所预见，并采取行动解决这些分析引发的问题。
            </font>
          </h3>
          <h3 style="margin: 20px 0px 0px 0px;">
            <font style="color: #606266;font-weight: normal;font-size: 0.8em;letter-spacing: 0.1em;">
              如果你想学习“人工智能科学”并帮助我们使神经网络培训更加数据化，那么考虑申请OpenAI的工作。
            </font>
          </h3>
          
        </div>
      </div>`,
      //微信弹窗属性
      WeChartVisible: false,
      //加入我们展示图
      HomePageImgUrl:'/',
      HomePageTextUrl:'/',
      //关于
      AboutPageUrl:'/about',
      //进展
      ProgressPageUrl:'/progress',
      //资源
      ResourcesPagerl:'/resources',
      //公告
      NoticesPageUrl:'/notices',
      //加入我们
      JoinPageUrl:'/join',
      //宪章
      CharterPageUrl:'/charter',
      //声明
      StatePageUrl:'/state',
      //微信
      WeChartPageUrl:'',
      //github
      GitHubPagerl:'https://github.com/congfeng12'
    }
  },
  created(){
    //页面加载时执行

  },methods: {
    open(url){
      window.open(""+url);
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
