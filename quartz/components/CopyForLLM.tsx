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

CopyForLLM.afterDOMLoaded = `
  function setupCopyLLM() {
    const btn = document.querySelector(".copy-llm-btn")
    if (!btn) return

    btn.addEventListener("click", async () => {
      const content = btn.getAttribute("data-content")
      if (!content) return

      try {
        await navigator.clipboard.writeText(content)
        btn.classList.add("copied")
        btn.textContent = "Copied!"
        setTimeout(() => {
          btn.textContent = "Copy for LLM"
          btn.classList.remove("copied")
        }, 2000)
      } catch (err) {
        console.error("Failed to copy:", err)
      }
    })
  }

  document.addEventListener("nav", setupCopyLLM)
  setupCopyLLM()
`

export default (() => CopyForLLM) satisfies QuartzComponentConstructor
