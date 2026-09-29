// Pie de página propio de Diseño de Posibilidades (licencia CC BY-NC 4.0).
// Reemplaza al Footer de Quartz sin modificar el motor.
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"

export default (() => {
  const Licencia: QuartzComponent = ({ displayClass }: QuartzComponentProps) => (
    <footer class={`${displayClass ?? ""} dp-licencia`}>
      <p>
        <strong>Diseño de Posibilidades</strong> © 2023 Juan Daza Arévalo ·{" "}
        <a href="https://creativecommons.org/licenses/by-nc/4.0/deed.es" rel="license">
          CC BY-NC 4.0
        </a>
      </p>
      <p class="dp-creditos">
        Publicado con <a href="https://quartz.jzhao.xyz/">Quartz</a>
      </p>
    </footer>
  )
  Licencia.css = style
  return Licencia
}) satisfies QuartzComponentConstructor
