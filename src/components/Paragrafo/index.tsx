import { P } from './styles'

export type Props = {
  children: string
  tipo?: 'main' | 'secondary'
  fontSize?: number
}

const Paragrafo = ({ children, tipo = 'main', fontSize }: Props) => (
  <P fontSize={fontSize} tipo={tipo}>
    {children}
  </P>
)

export default Paragrafo
