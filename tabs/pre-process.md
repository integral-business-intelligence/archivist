# Overview

The Pre-process Tab provides a powerful tool for preparing your documents for AI interaction. This optional feature converts various file formats into plain text that's optimized for use with language models.

This versatile preprocessing feature serves multiple purposes—it helps prepare documents for upload into your Archivist database for RAG conversations, but also supports interoperability with other AI platforms. You can convert documents here and then use the resulting text files wherever you need them, making Archivist a valuable tool in your broader AI workflow.

This could be a step in the upload process. But keeping it separate gives the user the option to quickly convert a portion to text and then gives them the option of whether to upload the whole thing or maybe they want to extract or add splitting tokens. It's another sacrifice of convenience that we think gives them more control.
# Document Input

Upload documents in different formats—PDF, DOCX, images with text, and more—to convert them into AI-ready text. Behind the scenes, Archivist uses the robust [[IBM Docling]] program to handle the conversion process accurately.

## Processing Modes

Use Docling + Vision Language Model (VLM) to generate text descriptions of pictures in the processed documents. This is as opposed to separating the images, using a vision embedding model, and maintaining a parallel set of embeddings, as well as having to manage the many image files. It is a midpoint in rigor between ignoring the images and intensive processing. By choosing this method we are also able to use a visual processing model which is adapted to llama-cpp-python/gguf.
# Text Output

Once conversion is complete, the extracted text appears in a visual display area where you can review. There are a few options for what to do with your converted text:

- **Save as Text:** Export the content as a simple .txt file
- **Save as Markdown:** Export the content as a .md file, preserving basic formatting
- **Copy to Clipboard:** Quickly copy the entire text to paste elsewhere

# See Also
---

[[Privacy]]
[[Data Portability]]
[[Transparency]]
