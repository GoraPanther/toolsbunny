document.addEventListener("DOMContentLoaded", () => {
    // 1. Fixed Header
    const headerHTML = `
    <nav style="position: fixed !important; top: 0; left: 0; width: 100%; z-index: 9999;" class="bg-black/80 backdrop-blur-md py-6 px-10 flex items-center justify-between border-b border-zinc-900">
        <a href="/" class="font-bold text-white tracking-widest flex items-center gap-2">
            <img src="https://github.com/ToolsBunny/toolsbunny/blob/main/logo.png?raw=true" class="w-6" alt="Logo"> TOOLSBUNNY
        </a>
        <div class="hidden md:flex gap-8 text-xs text-zinc-400">
            <a href="/#ai" class="hover:text-white">AI TOOLS</a>
            <a href="/#creators" class="hover:text-white">CREATORS</a>
            <a href="/#digital" class="hover:text-white">DIGITAL USERS</a>
        </div>
    </nav>
    <div style="height: 80px;"></div>`;

    // 2. Footer with Share/Bookmark
    const footerHTML = `
    <footer class="py-10 mt-10 border-t border-zinc-900 text-center text-zinc-600 text-[10px] uppercase tracking-widest">
        <div class="mb-6 flex justify-center gap-8">
            <button onclick="window.print()" class="hover:text-white transition">Bookmark Page</button>
            <button onclick="if(navigator.share) navigator.share({title: document.title, url: window.location.href})" class="hover:text-white transition">Share Tool</button>
        </div>
        <p>&copy; 2026 Toolsbunny — Privacy-First Utilities.</p>
    </footer>`;

    // 3. Inject
    document.body.insertAdjacentHTML("afterbegin", headerHTML);
    document.body.insertAdjacentHTML("beforeend", footerHTML);
});