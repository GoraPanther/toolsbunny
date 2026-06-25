document.addEventListener("DOMContentLoaded", () => {
    const headerHTML = `
    <nav style="position: fixed !important; top: 0; left: 0; width: 100%; z-index: 9999;" class="bg-black/80 backdrop-blur-md py-6 px-10 flex items-center justify-between border-b border-zinc-900">
        <a href="/" class="font-bold text-white tracking-widest">🐰 TOOLSBUNNY</a>
        <div class="hidden md:flex gap-8 text-xs text-zinc-400">
            <a href="/#ai" class="hover:text-white">AI TOOLS</a>
            <a href="/#creators" class="hover:text-white">CREATORS</a>
            <a href="/#digital" class="hover:text-white">DIGITAL USERS</a>
        </div>
    </nav>
    <div style="height: 80px;"></div>`;

    const footerHTML = `
    <footer class="py-10 text-center text-zinc-600 text-[10px] uppercase tracking-widest border-t border-zinc-900">
        &copy; 2026 Toolsbunny — Privacy-First Utilities.
    </footer>`;

    document.body.insertAdjacentHTML("afterbegin", headerHTML);
    document.body.insertAdjacentHTML("beforeend", footerHTML);
});