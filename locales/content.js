import en from './en'
import jp from './jp'
import cn from './cn'

function Region(router) {
  let t = en
  const { locale } = router
  switch (locale) {
    case 'jp':
      t = jp
      break
    case 'cn':
      t = cn
      break
    default:
      t = en
  }
  return t
}

export default Region
