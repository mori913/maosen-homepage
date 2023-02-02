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
  love: '趣味',
  loveContent: (
    <>
      撮影、
      <Link href="https://space.bilibili.com/159065754/bangumi" target="_blank">
        アニメ
      </Link>
      、ライトノベル、ジェイ-ポップ
    </>
  ),
  web: '連絡',
  bio: '学歴',
  educationContent1: (
    <>
      東京大学工学研究科 バイオエンジニアリング 修士二年。<br></br>指導教員：
      <Link href="https://sites.google.com/site/keinakagawa6/home?authuser=0">
        中川桂一
      </Link>
    </>
  ),
  educationContent2: '華中科技大学 知能機械工学　卒業',
  educationContent3: '崇仁県第一高校 卒業',
  research: '现在的研究',
  tpm: '深部組織二光子顕微鏡',
  tpmContent:
    '生きた脳皮質の神経活動計測を目指し、音響光導波路（PAG）に基づく皮質の機能を解明するためのシステムを開発する。',
  robot: '人間ロボット',
  robotContent:'ロボカップやFIRAなど大会を参加するために、人間ロボットを作られた',
  collaboration: '共同課題',
  project: 'クラスプロジェクト',
  ivr:'画像下治療装置',
  ivrContent:'肺癌の介入装置の設計とステップモータの制御ソフトウェアの作成',
  nba: 'NBA分析',
  nbaContent:'NBAデータや地理の可視化分析サイト、2022年のNBAチャンピオンを予測する。',
  job: '職種比較',
  jobContent:'年収、年間賞与、退職金などの項目から求人情報を比較できるアンドロイドアプリケーションです。',
  dfs: '分散型ファイルシステム',
  dfsContent:"このプロジェクトは、リモートプロシージャコール（RPC）サービスを生成し、そのサービスを分散ファイルシステム（DFS）に変えます。",
  country:"国家",
  japan:"日本",
  china:"中国",
  german:"ドイツ",
}
