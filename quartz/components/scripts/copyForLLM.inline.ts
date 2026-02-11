document.addEventListener("nav", () => {
  const btn = document.querySelector<HTMLButtonElement>(".copy-llm-btn")
  if (!btn) return

  const handleClick = async () => {
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
  }

  btn.addEventListener("click", handleClick)
  window.addCleanup(() => btn.removeEventListener("click", handleClick))
})
