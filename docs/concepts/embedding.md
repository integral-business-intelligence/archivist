The embedding model is [nomic-embed-text-v1.5](https://huggingface.co/nomic-ai/nomic-embed-text-v1.5-GGUF/tree/main) and is licensed using the Apache-2.0 license.

- We opted to use a fixed embedding model and disallow users to replace with others to protect users who may not realize that embedding models should not be interchanged while the vector values remain static.

- We correctly apply separate task instruction prefixes for (1) embedding source documents and (2) embedding queries. This is an easy-to-overlook requirement of this specific embedding model that highlights our attention to detail and accuracy.

- We have limited the number of vector dimensions to a fixed value of 256 based on performance data published by Nomic. We have decided that this represents a valid point beyond which computational requirements increase substantially without a substantial benefit in accuracy.

- We have selected the Q4_0 quantization

- The model can embed chunks of up to 8192 tokens. The embedding context size / batch size are user-adjustable from the Archivist AI Settings tab. Archivist properly handles context length adjustment beyond the default 2048 token limit by dynamically configuring the llama.cpp backend according to user settings, allowing processing of documents up to 8192 tokens when needed.

- Through systematic testing, we verified the functionality by processing documents of increasing lengths (2500, 4000, and 8000 tokens) at different context settings (2048, 4096, and 8192 tokens). We observed that documents exceeding a particular context setting were truncated at that boundary, while increasing the context length to accommodate the full document resulted in complete semantic representation.

!!! Tip
    If the size of an uploaded document chunk exceeds the embedding model context size / batch size then the upload process will be interrupted. If this occurs, the user should either (1) revise the text splitting strategy to reduce the size of the chunks or (2) increase the embedding model context length / batch size settings in the AI Settings tab. This may result in an annoyance for the user but, without this checkpoint, the embedding model would otherwise create vectors up to the point of the context length / batch size and silently omit the remainder of the text - resulting in erroneous vectors that are invisible to the user.