document.addEventListener("DOMContentLoaded", () => {
    const navbarHTML = `
    <nav class="bg-[#16161A] border-b border-[#2A2A35] py-4 px-6 fixed top-0 w-full z-50 flex items-center justify-between">
        <a href="/" class="flex items-center gap-2 font-['Space_Grotesk'] font-bold text-white text-lg tracking-tight">
            🐰 TOOLSBUNNY
        </a>
        
        <div class="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
            
            <div class="relative group py-2">
                <button class="hover:text-white flex items-center gap-1 transition-colors">AI Tools ▾</button>
                <div class="absolute top-full left-0 mt-1 hidden group-hover:flex flex-col bg-[#16161A] border border-[#2A2A35] rounded-md p-2 w-56 shadow-xl z-50">
                    <a href="/developers/token-counter.html" class="p-2 hover:bg-[#080808] hover:text-[#635BFF] rounded text-xs transition-all">Token Counter & Cost Calculator</a>
                    <a href="/developers/system-prompt-injector.html" class="p-2 hover:bg-[#080808] hover:text-[#635BFF] rounded text-xs transition-all">System Prompt Injector</a>
                    <a href="/developers/text-stripper.html" class="p-2 hover:bg-[#080808] hover:text-[#635BFF] rounded text-xs transition-all">Markdown & LaTeX Stripper</a>
                    <a href="/developers/prompt-generator.html" class="p-2 hover:bg-[#080808] hover:text-[#635BFF] rounded text-xs transition-all">Prompt Variations Generator</a>
                    <a href="/developers/text-diff-tool.html" class="p-2 hover:bg-[#080808] hover:text-[#635BFF] rounded text-xs transition-all">AI Output Diff Space</a>
                    <a href="/developers/prompt-chunker.html" class="p-2 hover:bg-[#080808] hover:text-[#635BFF] rounded text-xs transition-all">Smart Prompt Chunking Station</a>
                    <a href="/developers/tone-analyzer.html" class="p-2 hover:bg-[#080808] hover:text-[#635BFF] rounded text-xs transition-all">Tone & Readability Dashboard</a>
                    <a href="/developers/chat-log-formatter.html" class="p-2 hover:bg-[#080808] hover:text-[#635BFF] rounded text-xs transition-all">Chat History Payload Formatter</a>
                    <a href="/developers/image-base64-resizer.html" class="p-2 hover:bg-[#080808] hover:text-[#635BFF] rounded text-xs transition-all">Vision API Image Optimizer</a>
                    <a href="/developers/parameter-visualizer.html" class="p-2 hover:bg-[#080808] hover:text-[#635BFF] rounded text-xs transition-all">Hyperparameter Visualizer</a>
                    <a href="/developers/embedding-distance.html" class="p-2 hover:bg-[#080808] hover:text-[#635BFF] rounded text-xs transition-all">Local Embedding Similarity Calculator</a>
                    <a href="/developers/json-schema-validator.html" class="p-2 hover:bg-[#080808] hover:text-[#635BFF] rounded text-xs transition-all">JSON Structured Schema Lint Space</a>
                    <a href="/developers/csv-dataset-factory.html" class="p-2 hover:bg-[#080808] hover:text-[#635BFF] rounded text-xs transition-all">CSV Few-Shot Dataset Factory</a>
                    <a href="/developers/parameter-cheat-sheet.html" class="p-2 hover:bg-[#080808] hover:text-[#635BFF] rounded text-xs transition-all">System Parameter Cheat Sheet</a>
                    <a href="/developers/api-status-monitor.html" class="p-2 hover:bg-[#080808] hover:text-[#635BFF] rounded text-xs transition-all">API Infrastructure Status Monitor</a>                    </div>
            </div>

            <div class="relative group py-2">
                <button class="hover:text-white flex items-center gap-1 transition-colors">Content Creators ▾</button>
                <div class="absolute top-full left-0 mt-1 hidden group-hover:flex flex-col bg-[#16161A] border border-[#2A2A35] rounded-md p-2 w-56 shadow-xl z-50">
                    <a href="/creators/title-hook-previewer.html" class="p-2 hover:bg-[#080808] hover:text-[#00FFC2] rounded text-xs transition-all">Title & Hook A/B Tester</a>
        <a href="/creators/script-read-time-calculator.html" class="p-2 hover:bg-[#080808] hover:text-[#00FFC2] rounded text-xs transition-all">Video Script Read-Time Calc</a>
        <a href="/creators/thumbnail-contrast-tester.html" class="p-2 hover:bg-[#080808] hover:text-[#00FFC2] rounded text-xs transition-all">Thumbnail Contrast Simulator</a>
        <a href="/creators/social-character-counter.html" class="p-2 hover:bg-[#080808] hover:text-[#00FFC2] rounded text-xs transition-all">Social Media Char Counter</a>
        <a href="/creators/aspect-ratio-calculator.html" class="p-2 hover:bg-[#080808] hover:text-[#00FFC2] rounded text-xs transition-all">Aspect Ratio Calculator</a>
        <a href="/creators/shorts-safe-zone-tester.html" class="p-2 hover:bg-[#080808] hover:text-[#00FFC2] rounded text-xs transition-all">Shorts Safe Zone Tester</a>
        <a href="/creators/video-bitrate-calculator.html" class="p-2 hover:bg-[#080808] hover:text-[#00FFC2] rounded text-xs transition-all">Bitrate Target Calculator</a>
        <a href="/creators/content-concept-spinner.html" class="p-2 hover:bg-[#080808] hover:text-[#00FFC2] rounded text-xs transition-all">Concept Spinner</a>
        <a href="/creators/description-template-generator.html" class="p-2 hover:bg-[#080808] hover:text-[#00FFC2] rounded text-xs transition-all">Desc Template Generator</a>
        <a href="/creators/cpm-earnings-forecaster.html" class="p-2 hover:bg-[#080808] hover:text-[#00FFC2] rounded text-xs transition-all">CPM Earnings Forecaster</a>
        <a href="/creators/subtitle-caption-sanitizer.html" class="p-2 hover:bg-[#080808] hover:text-[#00FFC2] rounded text-xs transition-all">Caption Text Sanitizer</a>
        <a href="/creators/retention-curve-plotter.html" class="p-2 hover:bg-[#080808] hover:text-[#00FFC2] rounded text-xs transition-all">Retention Curve Plotter</a>
        <a href="/creators/tag-csv-array-builder.html" class="p-2 hover:bg-[#080808] hover:text-[#00FFC2] rounded text-xs transition-all">Tag CSV Array Builder</a>
        <a href="/creators/sponsor-pacing-tracker.html" class="p-2 hover:bg-[#080808] hover:text-[#00FFC2] rounded text-xs transition-all">Sponsor Pacing Tracker</a>
        <a href="/creators/deployment-manifest-checklist.html" class="p-2 hover:bg-[#080808] hover:text-[#00FFC2] rounded text-xs transition-all">Distribution Checklist</a>
                    </div>
            </div>

            <div class="relative group py-2">
                <button class="hover:text-white flex items-center gap-1 transition-colors">Digital Users ▾</button>
                <div class="absolute top-full left-0 mt-1 hidden group-hover:flex flex-col bg-[#16161A] border border-[#2A2A35] rounded-md p-2 w-56 shadow-xl z-50">
                    <a href="/digital-users/prompt-optimizer.html" class="p-2 hover:bg-[#080808] hover:text-[#FFB800] rounded text-xs transition-all">AI Prompt Optimizer & Shrinker</a>
        <a href="/digital-users/data-cleaner.html" class="p-2 hover:bg-[#080808] hover:text-[#FFB800] rounded text-xs transition-all">CSV/JSON Raw Data Cleaner</a>
        <a href="/digital-users/svg-optimizer.html" class="p-2 hover:bg-[#080808] hover:text-[#FFB800] rounded text-xs transition-all">Smart SVG Optimizer</a>
        <a href="/digital-users/pdf-redactor.html" class="p-2 hover:bg-[#080808] hover:text-[#FFB800] rounded text-xs transition-all">Web-Safe PDF Redactor</a>
        <a href="/digital-users/theme-generator.html" class="p-2 hover:bg-[#080808] hover:text-[#FFB800] rounded text-xs transition-all">Dynamic CSS Theme Generator</a>
        <a href="/digital-users/meta-debugger.html" class="p-2 hover:bg-[#080808] hover:text-[#FFB800] rounded text-xs transition-all">Meta Tag Debugger</a>
        <a href="/digital-users/security-auditor.html" class="p-2 hover:bg-[#080808] hover:text-[#FFB800] rounded text-xs transition-all">Hash & Password Auditor</a>
        <a href="/digital-users/markdown-converter.html" class="p-2 hover:bg-[#080808] hover:text-[#FFB800] rounded text-xs transition-all">Markdown to HTML/PDF</a>
        <a href="/digital-users/font-compressor.html" class="p-2 hover:bg-[#080808] hover:text-[#FFB800] rounded text-xs transition-all">Font Compressor & Subsetter</a>
        <a href="/digital-users/json-to-typescript.html" class="p-2 hover:bg-[#080808] hover:text-[#FFB800] rounded text-xs transition-all">JSON to TS Interface Engine</a>
        <a href="/digital-users/timezone-matcher.html" class="p-2 hover:bg-[#080808] hover:text-[#FFB800] rounded text-xs transition-all">Timezone Meeting Window Calc</a>
        <a href="/digital-users/fluid-typography.html" class="p-2 hover:bg-[#080808] hover:text-[#FFB800] rounded text-xs transition-all">Fluid Typography Calculator</a>
        <a href="/digital-users/sql-formatter.html" class="p-2 hover:bg-[#080808] hover:text-[#FFB800] rounded text-xs transition-all">SQL Query Prettifier</a>
        <a href="/digital-users/regex-tester.html" class="p-2 hover:bg-[#080808] hover:text-[#FFB800] rounded text-xs transition-all">Regex Playground & Explainer</a>
        <a href="/digital-users/og-image-builder.html" class="p-2 hover:bg-[#080808] hover:text-[#FFB800] rounded text-xs transition-all">OG Image Automation Builder</a>
                    </div>
            </div>
            
        </div>

        <a href="https://twitter.com/toolsbunny" target="_blank" class="text-zinc-400 hover:text-white text-sm hidden sm:inline-block transition-colors">Follow updates</a>
    </nav>
    <div class="h-[68px]"></div> `;

    // Automatically hooks and mounts the compiled navigation system into the active DOM window frame
    document.body.insertAdjacentHTML("afterbegin", navbarHTML);
});