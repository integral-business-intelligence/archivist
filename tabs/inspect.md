# Overview

The Inspect Tab provides granular visibility and control over the individual text chunks that make up your knowledge base. While the Browse Tab focuses on entire documents, the Inspect Tab lets you examine and manage the specific segments that Archivist uses when answering your questions.

By examining individual chunks, you can verify exactly what content is available to the AI when it answers your questions, helping you understand and predict its responses based on the specific information segments in your database.

The Inspect Tab essentially gives you a "behind the scenes" view of how Archivist organizes information, providing transparency and control over the fundamental building blocks of your personal knowledge base.
# Details

## File and File Set Dropdowns

At the top of the Inspect Tab, you'll find dropdown menus that let you precisely target which chunks to view. You can select a specific file to examine only its chunks, or choose an entire file set to see chunks across multiple documents. This flexibility allows you to focus on exactly the content segments you need to work with.
## Chunk Data Display  

After selecting your target file or file set and clicking Load, a detailed data frame appears showing individual chunks from your selection. Each row represents a single chunk with important metadata, giving you [[Transparency]] into exactly how your documents have been processed and organized for AI retrieval. 

## Chunk Management Operations

The Inspect Tab empowers you with several important chunk management capabilities:

### Add Chunks to File Sets

You can add selected chunks to specific file sets, attaching labels that logically group content across different documents. This organizational feature lets you categorize information by topic, project, or any system that makes sense for your needs.

Need a new category? You can create entirely new file sets directly from this interface and immediately assign chunks to them. This dynamic organization system evolves with your needs, allowing you to continuously refine how your knowledge is structured.

### Delete Chunks from File Sets


### Delete Selected Chunks

The Delete button gives you precise control over which specific chunks remain in your database. You can use this feature at different scales:

- Delete chunks that no longer serve your needs
- Remove all chunks from an entire file by selecting them all at once
- Clear out entire file sets worth of chunks in a single operation

When you delete the last chunk associated with a particular source file, Archivist automatically removes the corresponding source document from your docs folder, maintaining synchronization between your chunks and source files without additional effort.

### Export to CSV Button

This powerful [[Data Portability]] feature lets you export your selected chunks to a standard comma-separated values (CSV) file that opens in Excel, Google Sheets, or any spreadsheet program. This export capability serves several valuable purposes:

- Create backups of your processed chunks for safekeeping
- Transfer your carefully curated chunks to other systems or applications
- Share specific knowledge collections with colleagues (without sharing your entire database)
- Modify chunks externally and then re-import them using the CSV upload method

The export feature completes Archivist's commitment to data portability, ensuring that the work you put into processing and organizing your information isn't locked into a single system. You can use Archivist to ingest documents, carefully segment and organize the information into optimized chunks, and then freely take that processed data with you—whether for archiving, sharing, or use in complementary AI tools.
