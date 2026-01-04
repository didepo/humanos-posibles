import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <div class="dp-license">
          <a href="https://example.com">Diseño de Posibilidades</a>
          <br />
          © 2023 by{" "}
          <a href="https://example.com">Juan Daza Arévalo</a>{" "}
          is licensed under{" "}
          <a href="https://creativecommons.org/licenses/by-nc/4.0/">
            Creative Commons Attribution-NonCommercial 4.0 International
          </a>
          <br />
          <img
            src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"
            alt="Creative Commons"
            style="max-width: 1em; max-height: 1em; margin-left: .2em;"
          />
          <img
            src="https://mirrors.creativecommons.org/presskit/icons/by.svg"
            alt="Attribution"
            style="max-width: 1em; max-height: 1em; margin-left: .2em;"
          />
          <img
            src="https://mirrors.creativecommons.org/presskit/icons/nc.svg"
            alt="NonCommercial"
            style="max-width: 1em; max-height: 1em; margin-left: .2em;"
          />
        </div>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
