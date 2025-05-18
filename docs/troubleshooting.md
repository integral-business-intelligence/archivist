# 1. Startup is slow

Archivist is a [proof-of-concept application](https://integralbi.ai/archivist-as-proof-of-concept/) that is built to demonstrate some specific technologies that are better suited for networked deployments within a business. These technologies have been packaged into a single installer to reduce the effort required for a user to experience these technologies. Unfortunately, the combination of technologies for networked deployments and a desktop installer package create some latency and bloat. We may consider a rewrite of Archivist in a more desktop-native language but, for now, this is the tradeoff that we've had to make.

# 2. Receiving a chat response is slow

Speeds are primarily affected by your hardware. Archivist needs to load the entire language model into RAM before it can process queries. On modern laptops with an SSD, this typically takes 5-15 seconds. Older systems with traditional hard drives may experience startup delays of 30+ seconds. Memory bandwidth and RAM speed (MHz rating) significantly impact model loading and inference - higher frequency DDR4/DDR5 RAM can reduce loading times by 20-30% compared to slower memory. During operation, your CPU handles most of the processing work - multi-core processors with higher clock speeds will generate responses faster than older CPUs. If you experience slow responses, try closing other memory-intensive applications, as Archivist works best when it has dedicated access to your system's resources. The 2B model is optimized for laptop use, balancing quality with performance constraints, but even this smaller model benefits substantially from modern hardware.

# 3. Voice-to-text is slow

The voice-to-text feature in Archivist relies on Whisper (via Hugging Face Transformers and PyTorch) to convert your spoken words into text. This process is computationally intensive and performance varies based on your hardware. Your first voice transcription in each session will be noticeably slower (typically 15-30 seconds) as the application needs to load the speech recognition model into memory. Once loaded, subsequent voice messages process much faster, usually in 5-15 seconds depending on recording length. Performance depends heavily on your CPU's capabilities - newer multi-core processors with higher clock speeds can process audio significantly faster than older or low-power CPUs. RAM quantity and speed also impact performance, as the transcription model requires sufficient memory bandwidth to efficiently process audio data. For optimal results, keep recordings under 30 seconds when possible and ensure your laptop has at least 8GB of RAM. If you experience slow transcription times, try closing other resource-intensive applications to dedicate more processing power to Archivist. While optimized for CPU-only operation on standard laptops, the voice-to-text feature will still perform best on systems with modern processors and faster memory.

# 4. Pre-Processing is slow

# 5. Pre-Process Batches of Files

# 6. Upload is interrupted due to a problem with embedding model context size