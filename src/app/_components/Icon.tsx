import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faSun, faMoon, faWallet, faMobile, faCartShopping, faSparkles, faStore, faObjectsColumn, faExternalLink, faArrowRightLong, faChevronRight } from '@fortawesome/pro-regular-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
// import { faCaretDown, faCaretUp } from '@fortawesome/pro-solid-svg-icons'

const icons = {
  chevronDown: faChevronDown,
  sun: faSun,
  moon: faMoon,
  wallet: faWallet,
  phone: faMobile,
  cart: faCartShopping,
  sparkles: faSparkles,
  store: faStore,
  objectsColumn: faObjectsColumn,
  externalLink: faExternalLink,
  arrowRightLong: faArrowRightLong,
  chevronRight: faChevronRight,
  twitter: faXTwitter,
}

export type IconName = keyof typeof icons

type Props = {
  name: keyof typeof icons
  [key: string]: any
}

export default function Icon({ name, ...props }: Props) {
  return <FontAwesomeIcon icon={icons[name]} {...props} />
}
