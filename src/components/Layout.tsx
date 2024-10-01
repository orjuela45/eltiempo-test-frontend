import { Header } from './'

export const Layout: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  )
}