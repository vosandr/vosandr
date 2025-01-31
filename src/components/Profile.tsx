import {
  AuxiliaryText,
  BodyText,
  HeaderText,
  Link,
  NumberOfUsersAuxiliaryText,
  NumberOfUsersText,
} from 'components/Text'
import { Suspense } from 'react'
import { classnames } from 'classnames/tailwind'
import { useSnapshot } from 'valtio'
import { userCount } from 'helpers/userCount'
import IconButton from 'components/IconButton'
import Loader from 'components/Loader'
import currentGradient from 'helpers/currentGradient'
import formatNumber from 'helpers/formatNumber'

const profileContainer = classnames(
  'flex',
  'flex-row',
  'justify-center',
  'flex-wrap',
  'items-center',
  'gap-12'
)
const profileTextContainer = classnames('flex', 'flex-col', 'flex-1')
const imageContainer = classnames('relative', 'overflow-hidden')
const circle = classnames(
  'w-72',
  'h-72',
  'sm:w-96',
  'sm:h-96',
  'rounded-full',
  'bg-gradient-to-tr',
  currentGradient.length > 2 ? 'via-accent-via' : undefined,
  'from-accent-start',
  'to-accent-end'
)
const profileImage = classnames('absolute', 'inset-x-0', 'inset-y-4')
const imageOverlay = classnames('absolute', 'inset-0')
const socialButtonsContainer = classnames(
  'flex',
  'flex-row',
  'mt-4',
  'space-x-4',
  'mb-2'
)

function NumberOfUsers() {
  const userCountSnapshot = useSnapshot(userCount)
  return (
    <NumberOfUsersText>
      {formatNumber(userCountSnapshot.userCount.count)}
    </NumberOfUsersText>
  )
}

export default function Profile() {
  return (
    <div className={profileContainer}>
      <div className={profileTextContainer}>
        <HeaderText>Vosandr</HeaderText>
        <div className={socialButtonsContainer}>
          <IconButton icon="github" url="https://github.com/vosandr" />
          <IconButton icon="email" url="mailto:vosirandr.com" />
          <IconButton
            icon="signal"
            url="https://signal.group/#CjQKIANQhtx87gyu4Jd1bL0iQJDX5AEOkj4zxVIR1X296MgcEhBLv8lcSXSuVE8ZWYsVy0zh"
          />
          <IconButton icon="telegram" url="https://t.me/vosandrchat" />
        </div>
      </div>
    </div>
  )
}
