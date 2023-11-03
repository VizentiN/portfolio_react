import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>About me</Titulo>
    <Paragrafo tipo="main">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ducimus
      minima sapiente officia cumque provident optio veniam? Ex quos, aperiam
      nobis alias eos aliquid quam, nulla, saepe a facilis asperiores!
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=VizentiN&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=VizentiN&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
