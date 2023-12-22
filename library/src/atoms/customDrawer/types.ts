export interface BoxesProps {
  boxes: BoxProp[]
  customSmallLogo?: string
  customLargeLogo?: string
  handleItemOnClick?: (box?: BoxProp) => void
}

export interface BoxProp {
  id: string
  title: string
  icon: React.ReactNode
}
