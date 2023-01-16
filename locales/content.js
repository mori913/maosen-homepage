import en from './en'
import jp from './jp'
import cn from './cn'

import { useRouter } from 'next/router'

let t = en
function content() {
  const router = useRouter()
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
  console.log(t)
  return t
}
content(t)

export default { t, content }
