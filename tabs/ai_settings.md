# Overview

The AI Settings Tab puts you in control of how Archivist's artificial intelligence operates, allowing you to tailor the system to your specific needs and preferences. This powerful customization center is organized into three intuitive sections, each addressing a different aspect of the AI's behavior.

Here you can adjust everything from which AI model powers your conversations to how it interprets your questions and what specialized knowledge it brings to your interactions. Whether you're looking for casual assistance or need precise, technical responses, the AI Settings Tab lets you configure Archivist to work exactly the way you want it to.

These settings directly influence how the AI responds in your chats, making this tab essential for users who want to optimize their experience. From basic model selection to advanced prompting strategies, the three configuration cards in this tab give you comprehensive control over your AI assistant's capabilities and personality.

# Details

## Model Selection and Configuration Options

### Default Models

Archivist provides a thoughtfully curated AI experience built around the versatile IBM Granite 3.2 2B model. This lightweight yet powerful model is specifically chosen to run smoothly on standard laptops and computers without requiring specialized GPU hardware, making advanced AI accessible to everyday business users. When you first install Archivist, you'll find two model options available:

1. IBM Granite 3.2 2B (Standard)
	- The default configuration with balanced performance
	- Ready for general queries and document-based conversations
	- Pre-optimized settings for most business use cases

2. IBM Granite 3.2 2B by Integral Business Intelligence
	- The same core model but with the "IBM Granite Advanced Configuration" applied
	- Allows you to personalize how the AI interprets requests and formulates responses
	- Created automatically when you modify prompt settings

Both of these initial models are protected and cannot be deleted, ensuring you always have a functioning baseline AI experience.
### Paid License Model Features

For paid license holders, Archivist unlocks additional model management capabilities:

- Upload compatible models specific to your industry or use case
- Manage your model collection as your needs evolve
- Delete custom models when no longer needed (while core models remain protected)

This approach gives you both simplicity and flexibility—start working immediately with optimized defaults, then customize as you become more familiar with your specific needs.

## Model Registry/Management

⚠️ Important: Model Management Guidelines
Using AI Models in the Application

This application uses a secure model registry system to manage AI models. For the best experience and to avoid errors, please follow these guidelines:

Do Not Manually Modify Model Files

- **Do not manually add model files** to the application directories. Models added outside the application interface will not be recognized or function properly.
- **Do not manually delete or modify model files** from application directories. This can cause errors and potentially corrupt the application.

Proper Model Management

- **Always use the application interface** to upload new models (requires a premium license).
- **Always use the application's delete function** to remove models you no longer need.
- If you encounter an error indicating a model is missing, use the application's repair or refresh function to resolve this issue.

Why These Guidelines Matter

Our application uses a secure registration system that keeps track of your installed models. This system ensures:

- Your models remain available after application updates
- Only properly validated models are used
- The integrity of your application installation is maintained

Bypassing this system by manually manipulating files will lead to errors that may prevent the application from functioning correctly.

Thank you for helping us maintain a stable and secure environment for your AI workflows.
### Model Parameters

#### Context Length 
Adjust the maximum context length (in tokens) that the AI model can process at once. This controls how much information the model can consider when generating responses. A larger context length allows for more comprehensive understanding of complex queries and documents, but requires more system RAM. Adjust this setting based on your computer's capabilities and the complexity of your typical conversations.

#### Embedding Model Context Length 
This setting determines the maximum size of text chunks that can be processed when embedding documents into your database. If you plan to use large chunk sizes during document upload, ensure this value is set high enough to accommodate them. If the embedding context length is smaller than your chosen chunk size, the upload operation will not complete successfully (which is a good thing, instead of silently truncating information). Balance this against your system's memory constraints for optimal performance.

#### Temperature 
Control the creativity and variability of the AI's responses with the temperature setting. Lower values (closer to 0) produce more deterministic, focused responses that stick closely to the most probable outputs. Higher values (closer to 1) introduce more randomness, creativity, and exploration in the responses. Professional users typically prefer lower temperatures for factual consistency, while creative applications might benefit from higher settings.

#### Number of RAG Chunks
Specify exactly how many relevant text chunks from your database will be provided to the AI model during RAG conversations. This important setting balances comprehensiveness against focus: higher numbers give the AI more potential information to work with but may introduce noise, while lower numbers keep responses tightly focused on the most relevant information. Archivist selects the most semantically similar chunks to your query, up to this specified limit.

#### Citations Toggle 
When enabled, this feature adds transparent source references to AI responses in RAG mode, showing exactly which files and chunk numbers contributed to each answer. Citations appear at the end of the response, allowing you to verify information against your original documents. This powerful [[Transparency]] feature is especially valuable in professional contexts where accountability and fact-checking are important, giving you confidence in the AI's responses by making its information sources explicit.

## Prompt Configuration

The Prompt Configuration card gives you precise control over how the AI interprets your requests and formulates its responses. At its center is a customizable text area where you can craft your system prompt—the foundational instructions that shape the AI's understanding of its role and responsibilities.

### System Prompt

This primary text field is where you define the AI's personality, knowledge focus, response style, and operational parameters. A well-crafted system prompt can dramatically improve the relevance and quality of your AI interactions. For example, you might instruct the AI to focus on academic writing, to prioritize brevity, or to emphasize practical business applications in its responses.

### Special Token Controls
For advanced users and specialized models, Archivist provides four optional input fields that allow you to insert specific tokens at critical positions in the conversation flow:

- Before System Prompt: Special tokens that signal the beginning of system instructions
- After System Prompt: Tokens that mark the transition from system instructions to conversation
- Before User Message: Tokens that indicate when a user input begins
- After User Message: Tokens that signal the end of user input

These token fields accommodate the technical requirements of various AI models, which may use specific markers to properly interpret different parts of the conversation. While not needed for most standard interactions, these options ensure compatibility with specialized models that require particular formatting.

### Scope of Application
The system prompt and special tokens configured here apply to all models in your Archivist installation, with one exception: the "IBM Granite 3.2 2B by Integral Business Intelligence" model. That model instead uses the specialized configuration from the IBM Granite Advanced Configuration card, giving you two separate prompt frameworks to work with.

This flexibility allows you to maintain a general prompt setup for most models while taking advantage of Granite's unique capabilities through its dedicated advanced configuration.
## IBM Granite Advanced Configuration

What makes IBM Granite particularly valuable is its ability to operate in different specialized modes—capabilities that typically require complex prompt engineering to access. Archivist makes these advanced features available through simple button selections:

Operation Modes:
- Standard Chat Mode: General conversation and information
- RAG Mode: Focused on retrieving and using information from your documents
- Reasoning Mode: Enhanced critical thinking for complex questions

Response Length Controls:
- Normal: Balanced information density
- Short: Concise, to-the-point answers
- Long: Comprehensive, detailed explanations

RAG Response Styles (when in RAG Mode):
- Default: Balanced approach to using your documents
- Extractive: Near-direct quotes from your source materials
- Abstractive: Paraphrased summaries that capture key concepts

After selecting your preferred configuration, clicking "Save Granite Configuration" applies these settings to the "IBM Granite 3.2 2B by Integral Business Intelligence" option in your model selection dropdown.

# See Also
---

[[IBM]]
