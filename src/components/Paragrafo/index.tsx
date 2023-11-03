import { P } from './styles'

export type Props = {
  children: string
  tipo?: 'main' | 'secondary'
}

const Paragrafo = ({ children, tipo = 'main' }: Props) => (
  <P tipo={tipo}>{children}</P>
)

export default Paragrafo
