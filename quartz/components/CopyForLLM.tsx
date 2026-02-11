// @ts-ignore
import script from "./scripts/copyForLLM.inline"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import style from "./styles/copyForLLM.scss"

const CopyForLLM: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const text = fileData.text
  if (!text) return null

  return (
    <div class={classNames(displayClass, "copy-for-llm")}>
      <button class="copy-llm-btn" data-content={text} aria-label="Copy page markdown content">
        Copy for LLM
      </button>
    </div>
  )
}

CopyForLLM.css = style
CopyForLLM.afterDOMLoaded = script

export default (() => CopyForLLM) satisfies QuartzComponentConstructor
