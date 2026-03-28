import { useState } from 'react';
import { Clock, ExternalLink, MessageCircle, Video, Headphones, Play, Pause } from 'lucide-react';

interface NewsItem {
  id: string;
  rank: number;
  title: string;
  category: string;
  timeAgo: string;
  source: string;
  sourceUrl: string;
  summary: string;
}

const generateMockTopNews = (count: number): NewsItem[] => {
  const categories = ['Finance', 'Tech', 'Politics', 'Sports', 'Environment', 'Health', 'Business', 'Science'];
  const sources = ['Reuters', 'Bloomberg', 'TechCrunch', 'Economic Times', 'The Guardian', 'BBC News'];

  return Array.from({ length: count }, (_, i) => ({
    id: `top-${i + 1}`,
    rank: i + 1,
    title: `Breaking News Story #${i + 1}: Major Development in ${categories[i % categories.length]}`,
    category: categories[i % categories.length],
    timeAgo: `${Math.floor(Math.random() * 12) + 1} hours ago`,
    source: sources[i % sources.length],
    sourceUrl: 'https://example.com',
    summary: `This is a summary of the top ${i + 1} news story of the day. Stay informed with the latest developments and breaking news updates.`
  }));
};

interface TopNewsProps {
  onBack: () => void;
  onChat: (articleId: string) => void;
  onVideo: (articleId: string) => void;
  onAudio: (articleId: string) => void;
}

export function TopNews({ onBack, onChat, onVideo, onAudio }: TopNewsProps) {
  const [selectedCount, setSelectedCount] = useState<25 | 50>(25);
  const [viewMode, setViewMode] = useState<'article' | 'audio' | 'video'>('article');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const news = generateMockTopNews(selectedCount);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Top News of the Day</h1>
          <p className="text-muted-foreground">Quick summaries of the most important stories</p>
        </div>

        <div className="mb-6 flex flex-wrap gap-4">
          <div className="flex gap-2">
            <span className="text-sm font-medium flex items-center">Top:</span>
            {[25, 50].map((count) => (
              <button
                key={count}
                onClick={() => setSelectedCount(count as 25 | 50)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCount === count
                    ? 'bg-blue-600 text-white'
                    : 'bg-accent hover:bg-muted'
                }`}
              >
                {count}
              </button>
            ))}
          </div>

          <div className="flex gap-2 ml-auto">
            <span className="text-sm font-medium flex items-center">View as:</span>
            <button
              onClick={() => setViewMode('article')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                viewMode === 'article'
                  ? 'bg-blue-600 text-white'
                  : 'bg-accent hover:bg-muted'
              }`}
            >
              Article
            </button>
            <button
              onClick={() => setViewMode('audio')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                viewMode === 'audio'
                  ? 'bg-blue-600 text-white'
                  : 'bg-accent hover:bg-muted'
              }`}
            >
              Audio
            </button>
            <button
              onClick={() => setViewMode('video')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                viewMode === 'video'
                  ? 'bg-blue-600 text-white'
                  : 'bg-accent hover:bg-muted'
              }`}
            >
              Video
            </button>
          </div>
        </div>

        {/* Aggregated Audio/Video Controls */}
        <div className="mb-6 bg-card rounded-xl p-4 border border-border shadow-sm">
          <div className="flex flex-wrap items-center gap-4">
            <h3 className="font-semibold">Listen or Watch All Top {selectedCount} Stories</h3>
            <div className="flex gap-3 ml-auto">
              <button
                onClick={() => {
                  setIsPlayingAudio(!isPlayingAudio);
                  setIsPlayingVideo(false);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isPlayingAudio
                    ? 'bg-blue-600 text-white'
                    : 'bg-accent hover:bg-muted'
                }`}
              >
                {isPlayingAudio ? <Pause className="w-4 h-4" /> : <Headphones className="w-4 h-4" />}
                {isPlayingAudio ? 'Pause Audio' : 'Play Audio'}
              </button>
              <button
                onClick={() => {
                  setIsPlayingVideo(!isPlayingVideo);
                  setIsPlayingAudio(false);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isPlayingVideo
                    ? 'bg-blue-600 text-white'
                    : 'bg-accent hover:bg-muted'
                }`}
              >
                {isPlayingVideo ? <Pause className="w-4 h-4" /> : <Video className="w-4 h-4" />}
                {isPlayingVideo ? 'Pause Video' : 'Play Video'}
              </button>
            </div>
          </div>
          {(isPlayingAudio || isPlayingVideo) && (
            <div className="mt-3 text-sm text-muted-foreground">
              {isPlayingAudio && '🎧 Playing audio compilation of all stories...'}
              {isPlayingVideo && '🎥 Playing video compilation of all stories...'}
            </div>
          )}
        </div>

        <div className="space-y-4">
          {news.map((item) => (
            <div
              key={item.id}
              className="bg-card rounded-xl p-5 border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-lg">
                    {item.rank}
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs font-medium">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {item.timeAgo}
                    </div>
                  </div>

                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{item.summary}</p>

                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:underline mb-3"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Source: {item.source}
                  </a>

                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      onClick={() => onChat(item.id)}
                      className="flex items-center gap-2 px-3 py-1.5 bg-accent hover:bg-muted rounded-lg text-xs font-medium transition-colors"
                    >
                      <MessageCircle className="w-3 h-3" />
                      Chat
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}