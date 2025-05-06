## Retrieval Augmented Generation (RAG)

RAG is like giving an AI assistant access to your personal library of information. Imagine you're asking a smart friend a question—normally, they can only answer based on what they already know. But with RAG, it's as if your friend can quickly search through your documents, find the most relevant information, and use that specific knowledge to give you a better answer. When you use Archivist, the system takes your question, searches through your uploaded files for the most relevant content, and then uses that information to create its response. This means you get answers that are specifically informed by your own documents—whether that's company reports, research papers, or personal notes—rather than just generic information. It's like having an intelligent assistant who has actually read all your important materials and can reference them directly when answering your questions.

## The RAG Pipeline: How Archivist Works Behind the Scenes

Retrieval Augmented Generation in Archivist follows a structured pipeline that transforms your documents into AI-accessible knowledge. While the interface keeps things simple, here's a glimpse at what happens under the hood:

### Document Ingestion
The process begins when you upload files through the Upload Tab. During this phase, Archivist:
- Accepts your documents in various formats (PDF, DOCX, TXT, etc.)
- Processes the text content, including extracting text from images when possible
- Breaks the text into manageable "chunks" using your selected splitting method (fixed size, CSV rows, or custom delimiters)
- Preserves metadata connections between chunks and their source documents
- Stores a copy of the original document for reference and verification

### Text Embedding
Once your document is chunked, Archivist converts each text segment into a mathematical representation:
- Each chunk is processed through an embedding model that transforms words into numerical vectors
- These vectors capture the semantic meaning of the text, not just keywords
- Similar concepts receive similar vector representations, even if using different terminology
- This transformation allows the system to understand relationships between ideas
- The embedding process happens locally on your device, keeping your data private

### Vector Storage
After embedding, these mathematical representations are organized in a vector database:
- Each text chunk's vector is stored alongside the actual text content
- Metadata tags maintain connections to source documents and file sets
- The database is optimized for similarity searching, not just keyword matching
- This structure enables semantic understanding rather than simple text matching
- The entire database is stored locally on your device, never in the cloud

### Retrieval Process
When you ask a question in the Query Tab, Archivist:
- Converts your question into the same vector space using the embedding model
- Searches the vector database for chunks with similar vector representations
- Retrieves the most semantically relevant text chunks based on similarity scores
- Filters results according to your file and file set selections
- Sends these relevant text chunks to the AI model along with your question
- The AI model uses this context to generate an informed response based specifically on your documents

This entire pipeline happens privately on your local device, ensuring your sensitive documents never leave your control while still providing powerful AI-enhanced document interaction.