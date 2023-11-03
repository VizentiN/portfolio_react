import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, ThemeButton, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Lucas Vizentin</Titulo>
      <Paragrafo tipo="secondary" fontSize={16}>
        VizentiN
      </Paragrafo>
      <Descricao tipo="main" fontSize={12}>
        Full-stack Developer
      </Descricao>
      <ThemeButton>Change Theme</ThemeButton>
    </SidebarContainer>
  </aside>
)

export default Sidebar
