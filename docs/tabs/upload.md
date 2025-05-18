# Overview

The Upload Tab is where you expand your personal knowledge database by adding documents for Archivist to learn from. This straightforward interface allows you to directly upload files that will be processed, understood, and made available for your AI conversations. There's no need to use the Pre-Processing Tab first—though that option remains available if you want extra control—as Archivist can handle your documents directly from this interface, automatically preparing them for AI interaction and storing them in your private database for immediate use in your queries.

The upload process performs a series of steps:

1. Text splitting
2. Creation of embedding vectors
3. Creation of metadata
4. Storage of vectors and metadata in the vector database

# Text Splitting Methods

## Fixed Chunk Size Method

This straightforward approach divides your document into sections of consistent length. You can customize both the chunk size (how many characters or tokens appear in each section) and chunk overlap (how much content repeats between adjacent chunks). This method works well for most general documents where you want reliable, consistent processing without manual intervention.
## CSV Row-Based Method

For maximum precision, you can upload a CSV file where each row contains a pre-defined chunk of text. This powerful option lets you prepare your content exactly as you want it divided—perhaps breaking at logical topic changes or keeping related concepts together. Though it requires more preparation, this method gives you complete control over chunk boundaries, allowing you to organize information optimally for your specific needs. Simply place your text chunks in column A of your spreadsheet, save as CSV, and upload.

==The CSV method supports [[Data Portability]] by enabling users to...==
## Custom Delimiter Method

This flexible approach lets you upload a text file where you've inserted special character patterns (delimiters) at points where you want the text split into chunks. For example, you might use "###" or "---" between sections of a document. When uploading, you'll specify which delimiter pattern you've used, and Archivist will create chunks precisely at those boundaries. This balance between automation and control is perfect for when you want to split content at logical breakpoints without the manual work of creating a CSV.

# Embedding Process

See [embedding](concepts/embedding.md)

# Metadata

# Vector Database

# Notes

1. By default, all documents are split into chunks and the chunks are labeled with metadata indicating the name of the source file and all chunks are added to the [[File Sets|File Set]] "All Docs".
2. At the time of upload, users can specify whether they want to add the uploaded document to an existing File Set, to create a new File Set, or not add it to any File Set (other than "All Docs").
3. At the time of upload, a copy of the source file is created in a user data directory to facilitate [[Transparency]] by enabling users to have quick access to source data to validate information coming back from the AI model.
