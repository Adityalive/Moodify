import React from "react";
import { Link } from "react-router-dom";

const Landingpage = () => {
  return (
    <div className="bg-background text-on-surface selection:bg-primary selection:text-on-primary font-body">
      {/* TopNavBar */}
      <nav className="fixed top-0 z-50 bg-[#0e0e0e]/70 backdrop-blur-xl flex justify-between items-center px-10 h-20 w-full">
        <div className="text-3xl font-black tracking-tighter text-white">Moodify</div>
        <div className="hidden md:flex items-center gap-8">
          <Link className="font-manrope text-base tracking-wide text-[#a3a6ff] font-bold border-b-2 border-[#a3a6ff] pb-1" to="#">Discover</Link>
          <Link className="font-manrope text-base tracking-wide text-[#adaaaa] hover:text-white transition-colors" to="#">Playlists</Link>
          <Link className="font-manrope text-base tracking-wide text-[#adaaaa] hover:text-white transition-colors" to="#">Journal</Link>
          <Link className="font-manrope text-base tracking-wide text-[#adaaaa] hover:text-white transition-colors" to="#">Premium</Link>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-[#a3a6ff] hover:bg-white/10 rounded-full transition-all active:scale-95 duration-200">
            <span className="material-symbols-outlined">search</span>
          </button>
          <Link to="/login" className="font-manrope text-base font-bold text-[#a3a6ff] hover:text-white transition-colors py-2 px-3">
            Log In
          </Link>
          <Link to="/register" className="font-manrope text-base font-bold bg-primary text-on-primary hover:bg-primary/90 transition-colors py-2 px-5 rounded-full">
            Sign Up
          </Link>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[921px] flex items-end px-10 pb-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              className="w-full h-full object-cover opacity-60 scale-105" 
              data-alt="Moody atmospheric silhouette in a neon purple room" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnfr14qqiYEErZpBYm6oMZjaXOTUIK6gse5y-QSc8wuIN4ZFxLELvO3vZRAFJIEsLengrzLkPaFZSm03zPN-ELKTdJ-TLe1w59Tol9o0cKQT87lqa1UDep5jCj4UcCdUAtq_dDWcUV-pqnnTZEtnazNM2KXlmkgJkuz2wF1_pg4JUgdKjkZDmJHAG_jEDwBzI80Q1zesaKNy7gQ1bW0HwfVSkxnIf7YOYvzqRUi-dcUa0h7rRAX4sKbksVuB6X78d9yM9rRFH_Sz0" 
              alt="Moody atmospheric silhouette"
            />
            <div className="absolute inset-0 editorial-gradient"></div>
          </div>
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-none mb-6">
              Turn every mood into an <span className="text-primary italic">immersive</span> soundtrack.
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant font-light max-w-2xl leading-relaxed">
              Discover songs for focus, joy, heartbreak, and midnight drives.
            </p>
            <div className="mt-10 flex gap-4">
              <Link to="/login" className="bg-primary-container text-on-primary-container px-8 py-4 rounded-full font-bold transition-all hover:bg-primary-container/90 active:scale-95">
                Start Listening
              </Link>
              <button className="border border-outline-variant/20 px-8 py-4 rounded-full font-bold hover:bg-white/5 transition-all">
                Explore Moods
              </button>
            </div>
          </div>
        </section>

        {/* Featured Mixes: Horizontal Scroll */}
        <section className="py-24 pl-10 overflow-hidden">
          <div className="flex justify-between items-end mb-12 pr-10">
            <h2 className="text-4xl font-bold tracking-tight">Featured Mixes</h2>
            <div className="flex gap-2">
              <button className="p-3 bg-surface-container rounded-full hover:bg-surface-container-highest transition-colors">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="p-3 bg-surface-container rounded-full hover:bg-surface-container-highest transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
          <div className="flex gap-6 overflow-x-auto no-scrollbar pr-10">
            <div className="min-w-[400px] group cursor-pointer">
              <div className="aspect-square bg-surface-container-highest rounded-xl overflow-hidden mb-4 transition-transform duration-500 group-hover:scale-[0.98]">
                <img className="w-full h-full object-cover" data-alt="Neon blue and purple abstract sound waves" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHDFG5VDrGmTPIS62W2WNpsBecl8oicctjIQmNN6sm7FdhVeLdlZUSAZ2fflq-S3zBAqDMsKxhcf0SEJ72V5EOkBJU0hvOs7bnVhG-kIMFo7APHzFXbbOWDqUKZy5vBh39v7AtRKz888U443uv6rje_qkQKT-RDPepEQdjIJnKjmju8n6Xa5TSDmRh8X7UsTGkw97T0LLX3UdVO-RcUCa8WYe7sEPoD4O0XtNWBDsfKhbSEH2qCERj_EwlH6gP8Ur5lF2Zg6Yef4s" alt="Neon blue and purple" />
              </div>
              <h3 className="text-xl font-bold">Midnight Sessions</h3>
              <p className="text-on-surface-variant text-sm uppercase tracking-widest mt-1">Deep Techno • Downtempo</p>
            </div>
            <div className="min-w-[400px] group cursor-pointer">
              <div className="aspect-square bg-surface-container-highest rounded-xl overflow-hidden mb-4 transition-transform duration-500 group-hover:scale-[0.98]">
                <img className="w-full h-full object-cover" data-alt="Sun setting over a retro palm tree horizon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKMwP6taZSVQwL0TZy_EVfEUyTQFN9a9yNdA4KeIMDe_B1iBMVOdEiw4tu6Bp2FCyryFWGALSiV_MFn7WBrSGhqKNVUpp0-mQqu6RU1isS1vIMUffBeo3t3A1Cgh3B64VwOucbbptqbBDKd7TR7phCOshc2qBgM1RM4rTOpvKzigOkmuYVWgPjv9i_iQbV3Ntd8yYDozV-fslzFmpBgWunYg2NwZeTmdRk9wZ1WY2WwwXKKDHlrqeH76P9gMnx0aOkyKbMZiCZ5w0" alt="Sun setting" />
              </div>
              <h3 className="text-xl font-bold">Heatwave Nights</h3>
              <p className="text-on-surface-variant text-sm uppercase tracking-widest mt-1">Indie Pop • Tropical House</p>
            </div>
            <div className="min-w-[400px] group cursor-pointer">
              <div className="aspect-square bg-surface-container-highest rounded-xl overflow-hidden mb-4 transition-transform duration-500 group-hover:scale-[0.98]">
                <img className="w-full h-full object-cover" data-alt="Blurred DJ deck in a dark club environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeexhcGclQVNQkf0gFcBJzKohRkNEOPfmYLbgnxZgOlC0Y8cPYYZCF_SOUhIp5dr4-ELhphzlRdJu-kVp2e4xfY9saZvNZ6v3OmWKgK72XXffkyPLKo6b5JQG8zZBQn3OlGAkZpsH6MFntAf7bxJ-FsoQpHyjY9viFMC1kpFAPaI4845K9ykn5aCtvrAHnlQzKAg906n8l44MgU-TkVBTj5FvAz7Maq2TERA_u4MYnlukJvulOJWGID1nBKoovElpBYN-LJitUJEo" alt="Blurred DJ deck" />
              </div>
              <h3 className="text-xl font-bold">Neon Pulse</h3>
              <p className="text-on-surface-variant text-sm uppercase tracking-widest mt-1">Synthwave • Cyberpunk</p>
            </div>
            <div className="min-w-[400px] group cursor-pointer">
              <div className="aspect-square bg-surface-container-highest rounded-xl overflow-hidden mb-4 transition-transform duration-500 group-hover:scale-[0.98]">
                <img className="w-full h-full object-cover" data-alt="Aerial view of ocean waves at twilight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpZ0y_gKvaIn8dOh43v_TS40DwlCupq9x4pi5wC7IGwFzj7smZqdYTaT7mf-95AQ618TgGiVNnd_KjoQPXrF8F3l-rQukJ59cUc_6ZRaE2p6Nfslr7LPZ70YLDUhaD1eum0eZaKg3RHJuTOy55zHCHZPV7u81QPQPY6ZFT0kKCD5Iv0b4pMu7D7HOKJ6SEU0ZAUpFtyijtCk-_suqu-j8csNsARBzlqQRt4X8LM1W-jsPF-FsJqYyax2OrN3hUKNYKQVaGmiBJV7g" alt="Ocean waves" />
              </div>
              <h3 className="text-xl font-bold">Oceanic Drift</h3>
              <p className="text-on-surface-variant text-sm uppercase tracking-widest mt-1">Ambient • Lo-fi Chill</p>
            </div>
          </div>
        </section>

        {/* Mood Discovery: Bento Grid */}
        <section className="py-24 px-10 bg-surface-container-low">
          <h2 className="text-4xl font-bold tracking-tight mb-12">Mood Discovery</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[600px]">
            <div className="md:col-span-2 md:row-span-2 bg-primary/10 rounded-xl p-8 flex flex-col justify-between border border-primary/20 hover:bg-primary/20 transition-all cursor-pointer group">
              <div>
                <span className="material-symbols-outlined text-primary text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                <h3 className="text-4xl font-bold mt-4">Energetic</h3>
              </div>
              <p className="text-primary text-sm font-bold tracking-widest uppercase">32 Playlists Available</p>
            </div>
            <div className="bg-secondary/10 rounded-xl p-6 flex flex-col justify-between border border-secondary/20 hover:bg-secondary/20 transition-all cursor-pointer group">
              <span className="material-symbols-outlined text-secondary text-3xl">psychology</span>
              <h3 className="text-xl font-bold">Focused</h3>
            </div>
            <div className="bg-tertiary/10 rounded-xl p-6 flex flex-col justify-between border border-tertiary/20 hover:bg-tertiary/20 transition-all cursor-pointer group">
              <span className="material-symbols-outlined text-tertiary text-3xl">cloud</span>
              <h3 className="text-xl font-bold">Dreamy</h3>
            </div>
            <div className="md:col-span-2 bg-surface-container-high rounded-xl p-6 flex items-center justify-between border border-outline-variant/10 hover:bg-surface-container-highest transition-all cursor-pointer group">
              <div className="flex items-center gap-6">
                <span className="material-symbols-outlined text-on-surface-variant text-3xl">water_drop</span>
                <h3 className="text-xl font-bold">Melancholic</h3>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </div>
          </div>
        </section>

        {/* Deep Cuts: Sleek List */}
        <section className="py-24 px-10">
          <h2 className="text-4xl font-bold tracking-tight mb-12">Deep Cuts</h2>
          <div className="flex flex-col gap-2">
            {/* Track Item */}
            <div className="group flex items-center justify-between p-4 rounded-xl hover:bg-surface-container-low transition-all">
              <div className="flex items-center gap-6">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <img className="w-full h-full object-cover" data-alt="Vibrant abstract splash of paint" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAykjpwrjmvq_s6SRWIwx_hj0j1vJjHvMDHqQ01urVSaPp7ViRU56jCuYiotPcfTmqVcZ_p9AB5hAttb5YIXG1195vCkIbndMCGs8rs1Q8Zzo-ABHgw574nKAXGEkX1iLC0e8ZaGFnvMN7PooCSR6VKLSr9XswQi50mVBBop3Lu_hBFfWzfoxhaC9DwpVtoAAsgydV65nbLtiJqjR-Xbz4oPLyEofg9_q-CswLnUPk_bO9_xVegyUoUsxWxwi5pGCyBxUsLTf8qCtM" alt="Paint splash" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold group-hover:text-primary transition-colors">Ghost in the Machine</h4>
                  <p className="text-on-surface-variant text-sm">Synthetic Dreams • Archive 02</p>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-12">
                <span className="text-on-surface-variant font-mono text-sm">4:32</span>
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">favorite</span></button>
                  <button className="text-on-surface-variant hover:text-primary"><span class="material-symbols-outlined">more_horiz</span></button>
                </div>
              </div>
            </div>
            {/* Track Item */}
            <div className="group flex items-center justify-between p-4 rounded-xl hover:bg-surface-container-low transition-all">
              <div className="flex items-center gap-6">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <img className="w-full h-full object-cover" data-alt="Blurred concert lights reflecting on glass" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLWyuu280l3E8kdHXvhHhKAOi-2mb5CHtQ2HJBqNUOLELYuzB7EtHJH0mVfQEtDewBOh4qO1phMoN_Nsz7TadC_63KFk_5qe9aJ69_jTAMHhlJESGDdg7AFG401d9WDNFkxHk8kV0EtJJs-8pwhqFQG0kyKU2IrXDVV-ZKORmSd202adT1u_RmtZOIsrmFYzc_DEwX0s2w7dYrIvNO1MN_muX4v1rynk9-N38oczh4TkkN68kl1TctLa4fcry3uKWGHeIvxCSj9bY" alt="Concert lights" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold group-hover:text-primary transition-colors">Midnight Highway</h4>
                  <p className="text-on-surface-variant text-sm">The Drifter • Retro Grade</p>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-12">
                <span className="text-on-surface-variant font-mono text-sm">3:58</span>
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">favorite</span></button>
                  <button className="text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">more_horiz</span></button>
                </div>
              </div>
            </div>
            {/* Track Item */}
            <div className="group flex items-center justify-between p-4 rounded-xl hover:bg-surface-container-low transition-all">
              <div className="flex items-center gap-6">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <img className="w-full h-full object-cover" data-alt="Abstract deep purple and black texture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcJuCJ9d86o1uEqTK8NBXUSFxe-IZDcqbjt8a9-U-NDoSD6qQ1nlmtgznrsxJrnm0ug51TuEFCDbBFPsgTBO4_xUrTMSTxfCD6YYPizcxpKJDB29_O6k5QHbUlwKxJsjobKLzVb5tV4XJ3zW0LJig7I2A4mkz9VRfpCeRiQiv3I8KkPBkaK_Yu4BgWT7tfiZq2W5vg2sPWK1HyKvjfhQUyR_Y7MAyINsda0OiVrl8j-VoBjRN4gq0GH03caSMAgz18iErufMnRZuo" alt="Purple abstract" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold group-hover:text-primary transition-colors">Lower Frequency</h4>
                  <p className="text-on-surface-variant text-sm">Sub-Sonic • Deep Bass 101</p>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-12">
                <span className="text-on-surface-variant font-mono text-sm">5:12</span>
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">favorite</span></button>
                  <button className="text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">more_horiz</span></button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 24/7 Music Discovery */}
        <section className="py-24 px-10 mb-20">
          <div className="relative bg-gradient-to-br from-primary-container to-secondary-container rounded-3xl p-12 overflow-hidden flex flex-col md:flex-row items-center gap-12">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
              <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-primary-container))] from-white via-transparent to-transparent"></div>
            </div>
            <div className="relative z-10 md:w-1/2">
              <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full mb-6">
                <span className="w-2 h-2 bg-error rounded-full animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-white">Live Stream</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-on-primary-container mb-6 leading-tight">24/7 Music Discovery</h2>
              <p className="text-lg text-on-primary-container/80 mb-8 max-w-md">
                Join 40,000 listeners worldwide in our curated live feed. No algorithms, just pure editorial taste, synced in real-time.
              </p>
              <button className="bg-white text-on-primary font-bold px-10 py-5 rounded-full flex items-center gap-3 hover:shadow-2xl hover:scale-105 transition-all">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>radio</span>
                Tune In Now
              </button>
            </div>
            <div className="relative md:w-1/2 flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-[20px] border-white/10 flex items-center justify-center">
                <div className="w-48 h-48 md:w-60 md:h-60 bg-white/10 rounded-full backdrop-blur-xl flex flex-col items-center justify-center text-center p-6">
                  <p className="text-white/60 text-xs uppercase tracking-tighter mb-2">Currently Playing</p>
                  <h4 className="text-white font-bold text-lg leading-tight mb-2">Endless Summer (Mix)</h4>
                  <p className="text-primary-fixed-dim font-bold">42:15</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0e0e0e] w-full py-12 px-10 border-t border-[#484847]/20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 w-full">
          <div className="text-lg font-black text-white">Moodify</div>
          <div className="flex gap-8">
            <Link className="font-manrope text-xs uppercase tracking-widest text-[#adaaaa] hover:text-[#a3a6ff] transition-colors" to="#">Privacy</Link>
            <Link className="font-manrope text-xs uppercase tracking-widest text-[#adaaaa] hover:text-[#a3a6ff] transition-colors" to="#">Terms</Link>
            <Link className="font-manrope text-xs uppercase tracking-widest text-[#adaaaa] hover:text-[#a3a6ff] transition-colors" to="#">Support</Link>
            <Link className="font-manrope text-xs uppercase tracking-widest text-[#adaaaa] hover:text-[#a3a6ff] transition-colors" to="#">Artists</Link>
          </div>
          <div className="text-[#adaaaa] font-manrope text-xs uppercase tracking-widest">© 2026 Moodify. The Sonic Curator.</div>
        </div>
      </footer>
    </div>
  );
};

export default Landingpage;
