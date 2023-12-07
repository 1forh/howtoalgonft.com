import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faSun, faMoon } from '@fortawesome/pro-regular-svg-icons'
// import { faCaretDown, faCaretUp } from '@fortawesome/pro-solid-svg-icons'

const icons = {
  chevronDown: faChevronDown,
  sun: faSun,
  moon: faMoon,
}

export type IconName = keyof typeof icons

type Props = {
  name: keyof typeof icons
  [key: string]: any
}

export default function Icon({ name, ...props }: Props) {
  return <FontAwesomeIcon icon={icons[name]} {...props} />
}
