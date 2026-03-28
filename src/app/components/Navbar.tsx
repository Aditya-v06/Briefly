import { useState } from 'react';
import { Search, User, MessageCircle, Video, Headphones, Newspaper, TrendingUp, Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  onProfileClick?: () => void;
  onChatClick?: () => void;
  onShortVideosClick?: () => void;
  onAudioClick?: () => void;
  onArticlesClick?: () => void;
  onTopNewsClick?: () => void;
  onDashboardClick?: () => void;
}

export function Navbar({
  onProfileClick,
  onChatClick,
  onShortVideosClick,
  onAudioClick,
  onArticlesClick,
  onTopNewsClick,
  onDashboardClick
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (callback?: () => void) => {
    setMobileMenuOpen(false);
    callback?.();
  };

  return (
    <nav className="border-b border-border bg-background sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-6">
            <button
              onClick={onDashboardClick}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              Briefly
            </button>

            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={onShortVideosClick}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-accent transition-colors text-sm font-medium"
              >
                <Video className="w-4 h-4" />
                Short Videos
              </button>

              <button
                onClick={onAudioClick}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-accent transition-colors text-sm font-medium"
              >
                <Headphones className="w-4 h-4" />
                Audio
              </button>

              <button
                onClick={onArticlesClick}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-accent transition-colors text-sm font-medium"
              >
                <Newspaper className="w-4 h-4" />
                Articles
              </button>

              <button
                onClick={onTopNewsClick}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-accent transition-colors text-sm font-medium"
              >
                <TrendingUp className="w-4 h-4" />
                Top News
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center bg-input-background rounded-lg px-3 py-2 w-64">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search news..."
                className="ml-2 bg-transparent outline-none w-full text-sm text-foreground"
              />
            </div>

            {onChatClick && (
              <button
                onClick={onChatClick}
                className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                aria-label="AI Chatbot"
                title="AI Chatbot"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
            )}

            <ThemeToggle />

            <button
              onClick={onProfileClick}
              className="p-2 rounded-lg bg-accent hover:bg-muted transition-colors"
              aria-label="Profile"
            >
              <User className="w-5 h-5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-accent hover:bg-muted transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              <button
                onClick={() => handleNavClick(onShortVideosClick)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-accent transition-colors text-sm font-medium"
              >
                <Video className="w-5 h-5" />
                Short Videos
              </button>

              <button
                onClick={() => handleNavClick(onAudioClick)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-accent transition-colors text-sm font-medium"
              >
                <Headphones className="w-5 h-5" />
                Audio
              </button>

              <button
                onClick={() => handleNavClick(onArticlesClick)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-accent transition-colors text-sm font-medium"
              >
                <Newspaper className="w-5 h-5" />
                Complete Articles
              </button>

              <button
                onClick={() => handleNavClick(onTopNewsClick)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-accent transition-colors text-sm font-medium"
              >
                <TrendingUp className="w-5 h-5" />
                Top News
              </button>

              <div className="md:hidden mt-2 px-4">
                <div className="flex items-center bg-input-background rounded-lg px-3 py-2">
                  <Search className="w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search news..."
                    className="ml-2 bg-transparent outline-none w-full text-sm text-foreground"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}