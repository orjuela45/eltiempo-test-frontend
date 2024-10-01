export const Paragraph: React.FC<{ children: React.ReactNode, customClass?: string }> = ({
  children, customClass
}) => {
  return <p className={`paragraph ${customClass}`}>{children}</p>
}