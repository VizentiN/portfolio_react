import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

import { Card, LinkBotao } from './styles'

const Projeto = () => (
  <Card>
    <Titulo>Projeto Lista de tarefas</Titulo>
    <Paragrafo tipo="secondary">Lista de tarefas feita com VueJS</Paragrafo>
    <LinkBotao>View</LinkBotao>
  </Card>
)

export default Projeto
