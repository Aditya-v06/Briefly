import { useState } from 'react';
import { Clock, ExternalLink, MessageCircle, Video, Headphones } from 'lucide-react';

interface ArticleData {
  id: string;
  title: string;
  category: string;
  timeAgo: string;
  source: string;
  sourceUrl: string;
  summary: string;
  content: string;
}

const mockArticles: ArticleData[] = [
  {
    id: '1',
    title: 'RBI Increases Interest Rates to Control Inflation',
    category: 'Finance',
    timeAgo: '2 hours ago',
    source: 'Economic Times',
    sourceUrl: 'https://economictimes.com',
    summary: 'Central bank raises repo rate by 0.25% in third consecutive hike this year',
    content: 'The Reserve Bank of India (RBI) has announced a 25 basis points increase in the repo rate, taking it to 6.75%. This marks the third consecutive rate hike this year as the central bank continues its efforts to combat rising inflation. The decision was taken during the Monetary Policy Committee meeting held this week.\n\nThe rate hike is expected to impact EMIs for home loans, car loans, and other borrowings, potentially affecting millions of borrowers across the country. Financial experts suggest that this move, while necessary to control inflation, may slow down economic growth in the short term.\n\nEconomists have welcomed the measured approach taken by the RBI, noting that the 25 basis points increase strikes a balance between controlling inflation and supporting economic growth. Market analysts predict that this may not be the last rate hike of the year, with further increases possible if inflation remains above the target range.'
  },
  {
    id: '2',
    title: 'Tech Giants Announce AI Partnership',
    category: 'Tech',
    timeAgo: '5 hours ago',
    source: 'TechCrunch',
    sourceUrl: 'https://techcrunch.com',
    summary: 'Major technology companies join forces to develop responsible AI frameworks',
    content: 'In an unprecedented move, five of the world\'s largest technology companies have announced a partnership to develop comprehensive frameworks for responsible AI development and deployment. The partnership includes commitments to transparency, accountability, and ethical AI practices.\n\nThe agreement focuses on establishing new standards for AI safety, including rigorous testing protocols, transparency in AI decision-making processes, and mechanisms for addressing potential biases in AI systems. Industry experts view this as a significant step toward addressing growing concerns about AI safety and ethics.\n\nThe partnership will establish an independent oversight board comprising AI researchers, ethicists, and policy experts to monitor compliance and provide guidance on best practices. This initiative could reshape how AI is developed and regulated globally, setting new industry standards for responsible innovation.'
  },
  {
    id: '3',
    title: 'Global Markets React to Economic Data',
    category: 'Finance',
    timeAgo: '8 hours ago',
    source: 'Bloomberg',
    sourceUrl: 'https://bloomberg.com',
    summary: 'Stock markets show mixed response to latest GDP figures',
    content: 'Global stock markets displayed mixed reactions today following the release of latest GDP growth figures that showed economic growth slowing to 2.1% in Q4, down from 2.8% in the previous quarter. Investors are parsing the data for signals about future monetary policy decisions.\n\nThe Federal Reserve has indicated it is closely monitoring economic indicators and may adjust its policy stance accordingly. Market analysts suggest that the slower growth could prompt a more dovish approach to interest rate decisions in the coming months.\n\nEuropean and Asian markets showed varying responses, with some indices gaining on expectations of continued central bank support, while others declined on concerns about the global economic outlook. Traders are now focusing on upcoming employment data and inflation figures for further direction.'
  }
];

interface CompleteArticlesProps {
  onBack: () => void;
  onChat: (articleId: string) => void;
  onVideo: (articleId: string) => void;
  onAudio: (articleId: string) => void;
}

export function CompleteArticles({ onBack, onChat, onVideo, onAudio }: CompleteArticlesProps) {
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);

  const handleArticleClick = (articleId: string) => {
    setSelectedArticle(selectedArticle === articleId ? null : articleId);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Complete Articles</h1>
          <p className="text-muted-foreground">Read full-length articles with detailed analysis</p>
        </div>

        <div className="space-y-6">
          {mockArticles.map((article) => (
            <div
              key={article.id}
              className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs font-medium">
                  {article.category}
                </span>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  {article.timeAgo}
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-3">{article.title}</h2>

              <a
                href={article.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline mb-4"
              >
                <ExternalLink className="w-4 h-4" />
                Source: {article.source}
              </a>

              <p className="text-muted-foreground mb-4">{article.summary}</p>

              {selectedArticle === article.id && (
                <div className="mb-4 p-4 bg-accent rounded-lg">
                  <p className="text-sm whitespace-pre-line">{article.content}</p>
                </div>
              )}

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => handleArticleClick(article.id)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  {selectedArticle === article.id ? 'Hide Article' : 'Read Full Article'}
                </button>

                <button
                  onClick={() => onChat(article.id)}
                  className="flex items-center gap-2 px-4 py-2 bg-accent hover:bg-muted rounded-lg text-sm font-medium transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat
                </button>

                <button
                  onClick={() => onVideo(article.id)}
                  className="flex items-center gap-2 px-4 py-2 bg-accent hover:bg-muted rounded-lg text-sm font-medium transition-colors"
                >
                  <Video className="w-4 h-4" />
                  Video
                </button>

                <button
                  onClick={() => onAudio(article.id)}
                  className="flex items-center gap-2 px-4 py-2 bg-accent hover:bg-muted rounded-lg text-sm font-medium transition-colors"
                >
                  <Headphones className="w-4 h-4" />
                  Audio
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}