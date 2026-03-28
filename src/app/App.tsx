import { useEffect, useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { LoginPage } from './components/LoginPage';
import { SignupPage } from './components/SignupPage';
import { Navbar } from './components/Navbar';
import { AIBriefCard } from './components/AIBriefCard';
import { NewsCard } from './components/NewsCard';
import { ArticleDetail } from './components/ArticleDetail';
import { ChatScreen } from './components/ChatScreen';
import { VideoScreen } from './components/VideoScreen';
import { PreferencesScreen } from './components/PreferencesScreen';
import { ShortVideos } from './components/ShortVideos';
import { AudioSection } from './components/AudioSection';
import { CompleteArticles } from './components/CompleteArticles';
import { TopNews } from './components/TopNews';
import { fetchArticles, type Article } from './api';

type Screen =
  | 'landing'
  | 'login'
  | 'signup'
  | 'preferences'
  | 'dashboard'
  | 'article'
  | 'chat'
  | 'video'
  | 'shortVideos'
  | 'audio'
  | 'completeArticles'
  | 'topNews';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('landing');
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const userLoggedIn = localStorage.getItem('isLoggedIn');
    const hasPreferences = localStorage.getItem('userPreferences');

    if (userLoggedIn === 'true') {
      setIsLoggedIn(true);
      if (hasPreferences) {
        setCurrentScreen('dashboard');
      } else {
        setCurrentScreen('preferences');
      }
    }

    // Load articles
    loadArticles();
  }, []);

  const loadArticles = async () => {
    setLoading(true);
    const data = await fetchArticles();
    setArticles(data);
    setLoading(false);
  };

  const handleLoginSuccess = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
    setCurrentScreen('dashboard');
  };

  const handleSignupSuccess = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
    setCurrentScreen('preferences');
  };

  const handlePreferencesComplete = () => {
    setCurrentScreen('dashboard');
  };

  if (currentScreen === 'landing') {
    return (
      <LandingPage
        onLogin={() => setCurrentScreen('login')}
        onSignup={() => setCurrentScreen('signup')}
      />
    );
  }

  if (currentScreen === 'login') {
    return (
      <LoginPage
        onBack={() => setCurrentScreen('landing')}
        onLoginSuccess={handleLoginSuccess}
      />
    );
  }

  if (currentScreen === 'signup') {
    return (
      <SignupPage
        onBack={() => setCurrentScreen('landing')}
        onSignupSuccess={handleSignupSuccess}
      />
    );
  }

  if (currentScreen === 'preferences') {
    return <PreferencesScreen onComplete={handlePreferencesComplete} />;
  }

  if (currentScreen === 'article') {
    return (
      <ArticleDetail
        onBack={() => setCurrentScreen('dashboard')}
        onChat={() => setCurrentScreen('chat')}
        onVideo={() => setCurrentScreen('video')}
        onAudio={() => setCurrentScreen('audio')}
      />
    );
  }

  if (currentScreen === 'chat') {
    return (
      <ChatScreen
        onBack={() => setCurrentScreen('dashboard')}
        topic="News Discussion"
      />
    );
  }

  if (currentScreen === 'video') {
    return <VideoScreen onBack={() => setCurrentScreen('dashboard')} />;
  }

  if (currentScreen === 'shortVideos') {
    return <ShortVideos onBack={() => setCurrentScreen('dashboard')} />;
  }

  if (currentScreen === 'audio') {
    return (
      <div className="min-h-screen bg-background">
        <Navbar
          onProfileClick={() => setCurrentScreen('preferences')}
          onChatClick={() => setCurrentScreen('chat')}
          onShortVideosClick={() => setCurrentScreen('shortVideos')}
          onAudioClick={() => setCurrentScreen('audio')}
          onArticlesClick={() => setCurrentScreen('completeArticles')}
          onTopNewsClick={() => setCurrentScreen('topNews')}
          onDashboardClick={() => setCurrentScreen('dashboard')}
        />
        <AudioSection onBack={() => setCurrentScreen('dashboard')} />
      </div>
    );
  }

  if (currentScreen === 'completeArticles') {
    return (
      <div className="min-h-screen bg-background">
        <Navbar
          onProfileClick={() => setCurrentScreen('preferences')}
          onChatClick={() => setCurrentScreen('chat')}
          onShortVideosClick={() => setCurrentScreen('shortVideos')}
          onAudioClick={() => setCurrentScreen('audio')}
          onArticlesClick={() => setCurrentScreen('completeArticles')}
          onTopNewsClick={() => setCurrentScreen('topNews')}
          onDashboardClick={() => setCurrentScreen('dashboard')}
        />
        <CompleteArticles
          onBack={() => setCurrentScreen('dashboard')}
          onChat={(id) => setCurrentScreen('chat')}
          onVideo={(id) => setCurrentScreen('video')}
          onAudio={(id) => setCurrentScreen('audio')}
        />
      </div>
    );
  }

  if (currentScreen === 'topNews') {
    return (
      <div className="min-h-screen bg-background">
        <Navbar
          onProfileClick={() => setCurrentScreen('preferences')}
          onChatClick={() => setCurrentScreen('chat')}
          onShortVideosClick={() => setCurrentScreen('shortVideos')}
          onAudioClick={() => setCurrentScreen('audio')}
          onArticlesClick={() => setCurrentScreen('completeArticles')}
          onTopNewsClick={() => setCurrentScreen('topNews')}
          onDashboardClick={() => setCurrentScreen('dashboard')}
        />
        <TopNews
          onBack={() => setCurrentScreen('dashboard')}
          onChat={(id) => setCurrentScreen('chat')}
          onVideo={(id) => setCurrentScreen('video')}
          onAudio={(id) => setCurrentScreen('audio')}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar
        onProfileClick={() => setCurrentScreen('preferences')}
        onChatClick={() => setCurrentScreen('chat')}
        onShortVideosClick={() => setCurrentScreen('shortVideos')}
        onAudioClick={() => setCurrentScreen('audio')}
        onArticlesClick={() => setCurrentScreen('completeArticles')}
        onTopNewsClick={() => setCurrentScreen('topNews')}
        onDashboardClick={() => setCurrentScreen('dashboard')}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-8">
          <AIBriefCard
            title="RBI Increases Interest Rates to Control Inflation"
            keyPoints={[
              'RBI raised repo rate by 0.25% to 6.75%',
              'Decision taken to combat rising inflation concerns',
              'This is the third consecutive rate hike this year'
            ]}
            whyItMatters="Higher EMIs expected for home and car loans, affecting millions of borrowers"
            onReadMore={() => setCurrentScreen('article')}
            onChat={() => setCurrentScreen('chat')}
            onVideo={() => setCurrentScreen('video')}
            onAudio={() => setCurrentScreen('audio')}
          />
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-4">📰 Top Stories For You</h2>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-muted-foreground">Loading news...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {articles.map((article) => (
                <NewsCard
                  key={article.id}
                  title={article.title}
                  summary={article.summary}
                  category={article.category}
                  timeAgo={article.timeAgo}
                  sentiment={article.sentiment}
                  source={article.source}
                  sourceUrl={article.sourceUrl}
                  onClick={() => setCurrentScreen('article')}
                  onChat={() => setCurrentScreen('chat')}
                  onVideo={() => setCurrentScreen('video')}
                  onAudio={() => setCurrentScreen('audio')}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}