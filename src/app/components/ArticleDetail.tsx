import { ArrowLeft, MessageSquare, TrendingUp, Video, Headphones, ExternalLink } from 'lucide-react';

interface ArticleDetailProps {
  onBack: () => void;
  onChat: () => void;
  onVideo: () => void;
  onAudio?: () => void;
  source?: string;
  sourceUrl?: string;
}

export function ArticleDetail({ onBack, onChat, onVideo, onAudio, source = 'Economic Times', sourceUrl = 'https://economictimes.com' }: ArticleDetailProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          RBI Increases Interest Rates to Control Inflation
        </h1>

        <a
          href={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-6"
        >
          <ExternalLink className="w-4 h-4" />
          Source: {source}
        </a>

        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🧠</span>
            <h2 className="text-xl font-semibold">1-Minute AI Brief</h2>
          </div>

          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>RBI raised repo rate by 0.25% to 6.75%</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>Decision taken to combat rising inflation concerns</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>This is the third consecutive rate hike this year</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span className="font-semibold">Why it matters: Higher EMIs expected for home and car loans</span>
            </li>
          </ul>
        </div>

        <div className="bg-card rounded-xl p-6 border border-border mb-6">
          <h3 className="font-semibold mb-4">📊 Quick Insights</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <div>
                <p className="text-sm text-muted-foreground">Sentiment</p>
                <p className="font-semibold">Positive 📈</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Impact</p>
              <p className="font-semibold">High</p>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-xl p-6 border border-border mb-6">
          <h3 className="font-semibold mb-4">🎯 Actions</h3>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={onChat}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Ask AI
            </button>
            <button
              onClick={onVideo}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
            >
              <Video className="w-4 h-4" />
              Generate Video
            </button>
            {onAudio && (
              <button
                onClick={onAudio}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
              >
                <Headphones className="w-4 h-4" />
                Listen Audio
              </button>
            )}
          </div>
        </div>

        <div className="bg-card rounded-xl p-6 border border-border">
          <h3 className="font-semibold mb-4">📄 Original Article</h3>
          <div className="prose dark:prose-invert max-w-none">
            <p className="mb-4">
              The Reserve Bank of India (RBI) announced today that it has increased the repo rate by 25 basis points to 6.75%,
              marking the third consecutive rate hike this year as the central bank continues its fight against inflation.
            </p>
            <p className="mb-4">
              The decision comes amid concerns about persistent inflationary pressures in the economy, with retail inflation
              remaining above the RBI's comfort zone for several months. The Monetary Policy Committee (MPC) voted 5-1 in
              favor of the rate increase.
            </p>
            <p className="mb-4">
              "The committee remains focused on withdrawal of accommodation to ensure that inflation remains within the target
              going forward, while supporting growth," RBI Governor said in a statement.
            </p>
            <p>
              This move is expected to impact borrowers, with EMIs on home loans, car loans, and personal loans likely to
              increase in the coming weeks. However, savers may benefit from higher interest rates on fixed deposits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
