# Overview

The Browse Tab serves as your file management center, providing a clear view of all files currently stored in your Archivist database. Once you've uploaded documents through the Upload Tab, this interface allows you to see your complete knowledge collection at a glance. Here you can explore your files and manage your personal knowledge base. The Browse Tab gives you visibility into exactly what information the AI can access when answering your questions, helping you maintain an organized and effective document collection.

# Details

## File Information Display

When you load files from your database, they appear in an organized data frame showing important details about each document—including filename, number of chunks created, and which file sets each document belongs to. This at-a-glance view helps you understand how your knowledge base is structured.

## Search and Filter

Located above the data frame, a filter option lets you quickly locate specific files by typing part of a filename. As you type, the display automatically narrows to show only matching documents, making it easy to find exactly what you need in larger collections.

## File Selection and Operations

Click on any row in the data frame to select an individual file. Once selected, you can perform various operations using the buttons at the bottom of the tab:

### Open Selected File Button

This valuable feature opens the original source document that was uploaded to Archivist. When you upload files, Archivist automatically stores a copy of the original in your user data directory. This means you can always reference the complete, original document to verify information or check context when reviewing AI responses. This [[Transparency]] allows you to easily validate answers against their source material with just a click.

### Open Docs Folder Button

This convenient shortcut opens the system folder containing all your source documents. Instead of navigating through numerous directories to find your files, this button takes you directly to the location where Archivist stores all original document copies. This makes it easy to access, organize, or back up your entire document collection at once, saving you time when you need to work with multiple files outside of Archivist.

### Clean Up Orphaned Files Button

Sometimes files may appear in your documents folder without properly associated database entries—perhaps from manually copying files to the directory or from interrupted processing operations. The Clean Up button scans your document directory for these "orphaned" files (source documents that don't have corresponding chunks in the database) and removes them. This maintenance feature helps keep your document storage clean and properly synchronized with the database, ensuring everything you see is fully functional within Archivist.

### Delete Selected File Button

When you need to remove a document from your knowledge base, select it in the data frame and click this button. Archivist thoroughly cleans up by removing both the original source document from your docs folder and all associated text chunks from the database. This complete removal ensures no fragments remain to potentially appear in future AI responses, giving you full control over exactly what information remains in your personal knowledge base.

# Warning: Editing Source Documents Does Not Update Your Database

Be aware that if you edit the source documents in your docs folder, these changes will not automatically appear in your database or affect your AI query results. This is a deliberate architectural design decision in Archivist.

When you upload a document, Archivist processes it into chunks and stores these chunks in the database—this processed version is what the AI uses to answer your questions. If you later make changes to the source document:

- Your edits will be saved to the source file, however, the AI will continue using the original, unmodified chunks in the database
- Your queries will return answers based on the original content, not your updated version

To update content in your database:

- Delete the outdated file using the Delete Selected File button
- Upload the updated version through the Upload Tab
- This creates fresh chunks based on your latest content

This approach ensures database integrity and gives you explicit control over when content updates occur, preventing accidental or unauthorized changes to your knowledge base.
