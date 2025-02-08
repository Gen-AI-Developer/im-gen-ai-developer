export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030303]/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="font-semibold text-white/60 hover:text-white/90 text-xl font-serif ">
            SAAR 
          </a>
          <div className="flex gap-8">
            <a href="#about" className="text-sm text-white/60 hover:text-white/90">
              ABOUT
            </a>
            <a href="#weddings" className="text-sm text-white/60 hover:text-white/90">
              PROJECTS
            </a>
            <a href="#contact" className="text-sm text-white/60 hover:text-white/90">
              CONTACT
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

