import { Brain, MessageSquare, Video, Headphones } from 'lucide-react';

interface AIBriefCardProps {
  title: string;
  keyPoints: string[];
  whyItMatters: string;
  onReadMore?: () => void;
  onChat?: () => void;
  onVideo?: () => void;
  onAudio?: () => void;
}

export function AIBriefCard({
  title,
  keyPoints,
  whyItMatters,
  onReadMore,
  onChat,
  onVideo,
  onAudio
}: AIBriefCardProps) {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
      <div className="flex items-center gap-2 mb-4">
        <Brain className="w-6 h-6" />
        <h2 className="text-xl font-semibold">Your AI Brief - Top Story Today</h2>
      </div>

      <h3 className="text-2xl font-bold mb-4">{title}</h3>

      <div className="space-y-2 mb-4">
        {keyPoints.map((point, index) => (
          <div key={index} className="flex items-start gap-2">
            <span className="text-blue-200 mt-1">•</span>
            <p className="text-blue-50">{point}</p>
          </div>
        ))}
      </div>

      <div className="bg-white/10 rounded-lg p-3 mb-4 backdrop-blur-sm">
        <p className="text-sm font-semibold mb-1">Why it matters:</p>
        <p className="text-blue-50">{whyItMatters}</p>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          onClick={onReadMore}
          className="px-4 py-2 bg-white text-purple-600 rounded-lg hover:bg-blue-50 transition-colors"
        >
          Read More
        </button>
        <button
          onClick={onChat}
          className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors flex items-center gap-2"
        >
          <MessageSquare className="w-4 h-4" />
          Chat
        </button>
        <button
          onClick={onVideo}
          className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors flex items-center gap-2"
        >
          <Video className="w-4 h-4" />
          Video
        </button>
        <button
          onClick={onAudio}
          className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors flex items-center gap-2"
        >
          <Headphones className="w-4 h-4" />
          Audio
        </button>
      </div>
    </div>
  );
}
