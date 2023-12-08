import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faSun, faMoon, faWallet, faMobile, faCartShopping, faSparkles, faStore, faObjectsColumn } from '@fortawesome/pro-regular-svg-icons'
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
}

export type IconName = keyof typeof icons

type Props = {
  name: keyof typeof icons
  [key: string]: any
}

export default function Icon({ name, ...props }: Props) {
  return <FontAwesomeIcon icon={icons[name]} {...props} />
}
