import { Clock, ExternalLink, MessageCircle, Video, Headphones } from 'lucide-react';

interface NewsCardProps {
  title: string;
  summary: string;
  category: string;
  timeAgo: string;
  sentiment?: 'positive' | 'negative' | 'neutral';
  source?: string;
  sourceUrl?: string;
  onClick?: () => void;
  onChat?: () => void;
  onVideo?: () => void;
  onAudio?: () => void;
}

export function NewsCard({
  title,
  summary,
  category,
  timeAgo,
  sentiment = 'neutral',
  source = 'News Source',
  sourceUrl = '#',
  onClick,
  onChat,
  onVideo,
  onAudio
}: NewsCardProps) {
  const handleActionClick = (e: React.MouseEvent, action?: () => void) => {
    e.stopPropagation();
    action?.();
  };

  return (
    <div
      onClick={onClick}
      className="bg-card rounded-xl p-5 border border-border shadow-sm hover:shadow-md transition-all cursor-pointer group"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs font-medium">
          {category}
        </span>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="w-3 h-3" />
          {timeAgo}
        </div>
      </div>

      <h3 className="font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
        {title}
      </h3>

      <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
        {summary}
      </p>

      <a
        href={sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:underline mb-4"
      >
        <ExternalLink className="w-3 h-3" />
        Source: {source}
      </a>

      <div className="flex items-center gap-2 flex-wrap">
        <button
          onClick={(e) => handleActionClick(e, onClick)}
          className="text-sm text-blue-600 dark:text-blue-400 font-medium hover:underline"
        >
          Read Article
        </button>

        {onChat && (
          <button
            onClick={(e) => handleActionClick(e, onChat)}
            className="flex items-center gap-1 px-2 py-1 bg-accent hover:bg-muted rounded text-xs font-medium transition-colors"
          >
            <MessageCircle className="w-3 h-3" />
            Chat
          </button>
        )}

        {onVideo && (
          <button
            onClick={(e) => handleActionClick(e, onVideo)}
            className="flex items-center gap-1 px-2 py-1 bg-accent hover:bg-muted rounded text-xs font-medium transition-colors"
          >
            <Video className="w-3 h-3" />
            Video
          </button>
        )}

        {onAudio && (
          <button
            onClick={(e) => handleActionClick(e, onAudio)}
            className="flex items-center gap-1 px-2 py-1 bg-accent hover:bg-muted rounded text-xs font-medium transition-colors"
          >
            <Headphones className="w-3 h-3" />
            Audio
          </button>
        )}
      </div>
    </div>
  );
}
