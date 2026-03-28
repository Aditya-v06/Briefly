import { Sparkles, Brain, Video, Headphones, Newspaper } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface LandingPageProps {
  onLogin: () => void;
  onSignup: () => void;
}

export function LandingPage({ onLogin, onSignup }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-background sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              NewsLens AI
            </div>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <button
                onClick={onLogin}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-blue-600 transition-colors"
              >
                Login
              </button>
              <button
                onClick={onSignup}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="py-20 text-center">
          <div className="mb-6">
            <div className="inline-block p-3 bg-blue-100 dark:bg-blue-900/30 rounded-2xl mb-4">
              <Sparkles className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Briefly
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Your intelligent news companion powered by AI. Get personalized news summaries, interactive discussions, and multimedia content all in one place.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={onSignup}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-lg"
            >
              Get Started Free
            </button>
            <button
              onClick={onLogin}
              className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors text-lg"
            >
              Sign In
            </button>
          </div>
        </section>

        <section className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6">
            <div className="inline-block p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl mb-4">
              <Brain className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="font-semibold mb-2">AI-Powered Summaries</h3>
            <p className="text-sm text-muted-foreground">
              Get concise, intelligent summaries of complex news stories with key points and context
            </p>
          </div>

          <div className="text-center p-6">
            <div className="inline-block p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl mb-4">
              <Video className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="font-semibold mb-2">Video Summaries</h3>
            <p className="text-sm text-muted-foreground">
              Watch AI-generated video content and short-form reels of top news stories
            </p>
          </div>

          <div className="text-center p-6">
            <div className="inline-block p-3 bg-green-100 dark:bg-green-900/30 rounded-xl mb-4">
              <Headphones className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="font-semibold mb-2">Audio Stories</h3>
            <p className="text-sm text-muted-foreground">
              Listen to news like audiobooks on the go with professional narration
            </p>
          </div>

          <div className="text-center p-6">
            <div className="inline-block p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl mb-4">
              <Newspaper className="w-8 h-8 text-orange-600 dark:text-orange-400" />
            </div>
            <h3 className="font-semibold mb-2">Complete Articles</h3>
            <p className="text-sm text-muted-foreground">
              Access full-length articles with sources and interact with AI chatbot for deeper understanding
            </p>
          </div>
        </section>

        <section className="py-16 bg-accent rounded-2xl px-8 text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Experience News Like Never Before</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who stay informed with personalized news feeds, interactive AI discussions, and multimedia content tailored to their interests.
          </p>
          <button
            onClick={onSignup}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Start Your Journey
          </button>
        </section>
      </main>

      <footer className="border-t border-border py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2026 NewsLens AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
