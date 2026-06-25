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
                    <a href="/developers/prompt-optimizer.html" class="p-2 hover:bg-[#080808] hover:text-[#635BFF] rounded text-xs transition-all">Prompt Optimizer</a>
                    </div>
            </div>

            <div class="relative group py-2">
                <button class="hover:text-white flex items-center gap-1 transition-colors">Content Creators ▾</button>
                <div class="absolute top-full left-0 mt-1 hidden group-hover:flex flex-col bg-[#16161A] border border-[#2A2A35] rounded-md p-2 w-56 shadow-xl z-50">
                    <a href="/creators/token-counter.html" class="p-2 hover:bg-[#080808] hover:text-[#00FFC2] rounded text-xs transition-all">Token Counter & Estimator</a>
                    </div>
            </div>

            <div class="relative group py-2">
                <button class="hover:text-white flex items-center gap-1 transition-colors">Digital Users ▾</button>
                <div class="absolute top-full left-0 mt-1 hidden group-hover:flex flex-col bg-[#16161A] border border-[#2A2A35] rounded-md p-2 w-56 shadow-xl z-50">
                    <a href="/digital-users/image-compressor.html" class="p-2 hover:bg-[#080808] hover:text-[#FFB800] rounded text-xs transition-all">Image Compressor</a>
                    </div>
            </div>
            
        </div>

        <a href="https://twitter.com/toolsbunny" target="_blank" class="text-zinc-400 hover:text-white text-sm hidden sm:inline-block transition-colors">Follow updates</a>
    </nav>
    <div class="h-[68px]"></div> `;

    // Automatically hooks and mounts the compiled navigation system into the active DOM window frame
    document.body.insertAdjacentHTML("afterbegin", navbarHTML);
});