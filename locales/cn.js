import { Link } from '@chakra-ui/react'
export default{
  name: '叶茂森',
  works: '项目',
  photography: '摄影',
  blog: '博客',
  source: '代码',
  greeting: "你好，我现在东京大学研究生二年级在读",
  briefIntroduction: '工程师（开发者，码农，机械设计）',
  work: '自己紹介',
  workContent: (
    <>
      東京大学大学院修士課程2年で、自分が欲しいと思うバイオメディカル機器を作ることに情熱を燃やしている。企画・設計から実際の問題解決まで、製品立ち上げに関わる全てのことに長けている。仕事以外の時間は、カメラと一緒に過ごすのが好き。現在、医用精密工学研究室
      <Link href="http://www.bmpe.t.u-tokyo.ac.jp/">(BMPE)</Link>に在籍中。
    </>
  ),
  love: '兴趣',
  loveContent: (
    <>
      摄影、
      <Link href="https://space.bilibili.com/159065754/bangumi" target="_blank">
        动漫
      </Link>
      、轻小说、日本流行音乐
    </>
  ),
  web: '連絡',
  bio: '学歴',
  educationContent1: (
    <>
      東京大学工学部 生物影像系 研究生二年级。<br></br>指导教师：
      <Link href="https://sites.google.com/site/keinakagawa6/home?authuser=0">
        中川桂一
      </Link>
    </>
  ),
  educationContent2: '华中科技大学 机械设计制造及其自动化　本科毕业',
  educationContent3: '崇仁县第一中学 高中毕业',
  research: '现在的研究',
  tpm: '深层双光子显微镜',
  tpmContent:
    '开发一个基于声光波导（PAG）的系统，用于测量活体大脑皮层的神经活动，以阐明皮层功能。',
  robot: '人形机器人',
  robotContent:'人型机器人是为了参加RoboCup和FIRA等比赛而制造的。',
  collaboration: '合作项目',
  project: '课程项目',
  ivr:'介入放射装置',
  ivrContent:'设计肺癌干预装置和创建步进电机的控制软件。',
  nba: 'NBA冠军预测',
  nbaContent:'NBA数据和地理可视化分析网站，预测2022年的NBA冠军。',
  job: '工作比较',
  jobContent:'这个安卓应用允许用户根据年薪、年终奖和退休福利等项目来比较工作机会。',
  dfs: '分布式文件系统',
  dfsContent:"创建了一个远程过程调用（RPC）服务，并把它变成一个分布式文件系统（DFS）。",
  country:"国家",
  japan:"日本",
  china:"中国",
  german:"德国",
}
