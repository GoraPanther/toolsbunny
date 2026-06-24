document.addEventListener("DOMContentLoaded", () => {
    const navbarHTML = `
    <nav class="bg-[#16161A] border-b border-[#2A2A35] py-4 px-6 fixed top-0 w-full z-50 flex items-center justify-between">
        <a href="/" class="flex items-center gap-2 font-['Space_Grotesk'] font-bold text-white text-lg tracking-tight">
            🐰 TOOLSBUNNY
        </a>
        
        <div class="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
            <div class="relative group py-2">
                <button class="hover:text-white flex items-center gap-1">Content Creators ▾</button>
                <div class="absolute top-full left-0 mt-1 hidden group-hover:flex flex-col bg-[#16161A] border border-[#2A2A35] rounded-md p-2 w-48 shadow-xl">
                    <a href="/creators/token-counter.html" class="p-2 hover:bg-[#080808] hover:text-[#00FFC2] rounded">Token Counter</a>
                    <a href="/creators/asset-dashboard.html" class="p-2 hover:bg-[#080808] hover:text-[#00FFC2] rounded">Asset Dashboard</a>
                </div>
            </div>

            <div class="relative group py-2">
                <button class="hover:text-white flex items-center gap-1">AI Developers ▾</button>
                <div class="absolute top-full left-0 mt-1 hidden group-hover:flex flex-col bg-[#16161A] border border-[#2A2A35] rounded-md p-2 w-48 shadow-xl">
                    <a href="/developers/prompt-optimizer.html" class="p-2 hover:bg-[#080808] hover:text-[#00FFC2] rounded">Prompt Optimizer</a>
                </div>
            </div>
            
            </div>

        <a href="https://twitter.com/toolsbunny" target="_blank" class="text-zinc-400 hover:text-white text-sm">Follow updates</a>
    </nav>
    <div class="h-[68px]"></div> `;

    // Inject the navbar at the absolute top of the body
    document.body.insertAdjacentHTML("afterbegin", navbarHTML);
});