export interface BoxesProps {
  boxes: {
    id: string
    title: string
    icon: React.ReactNode
  }[]
  customSmallLogo?: string
  customLargeLogo?: string
  handleItemOnClick: (box: object) => void
}
