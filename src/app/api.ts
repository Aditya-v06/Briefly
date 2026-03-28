// Backend API endpoints
const API_BASE_URL = 'YOUR_API_BASE_URL_HERE';

export interface Article {
  id: string;
  title: string;
  summary: string;
  category: string;
  timeAgo: string;
  sentiment: 'positive' | 'negative' | 'neutral';
  source: string;
  sourceUrl: string;
  content: string;
  aiSummary: {
    keyPoints: string[];
    whyItMatters: string;
  };
}

export interface ChatMessage {
  role: 'user' | 'ai';
  content: string;
}

// Mock data for demonstration
const mockArticles: Article[] = [
  {
    id: '1',
    title: 'RBI Increases Interest Rates to Control Inflation',
    summary: 'Central bank raises repo rate by 0.25% in third consecutive hike this year',
    category: 'Finance',
    timeAgo: '2 hours ago',
    sentiment: 'positive',
    source: 'Economic Times',
    sourceUrl: 'https://economictimes.com',
    content: 'Full article content here...',
    aiSummary: {
      keyPoints: [
        'RBI raised repo rate by 0.25% to 6.75%',
        'Decision taken to combat rising inflation concerns',
        'This is the third consecutive rate hike this year'
      ],
      whyItMatters: 'Higher EMIs expected for home and car loans'
    }
  },
  {
    id: '2',
    title: 'Tech Giants Announce AI Partnership',
    summary: 'Major technology companies join forces to develop responsible AI frameworks',
    category: 'Tech',
    timeAgo: '5 hours ago',
    sentiment: 'positive',
    source: 'TechCrunch',
    sourceUrl: 'https://techcrunch.com',
    content: 'Full article content here...',
    aiSummary: {
      keyPoints: [
        'Five major tech companies sign AI safety agreement',
        'Focus on ethical AI development and deployment',
        'New standards for transparency and accountability'
      ],
      whyItMatters: 'Could reshape how AI is developed and regulated globally'
    }
  },
  {
    id: '3',
    title: 'Global Markets React to Economic Data',
    summary: 'Stock markets show mixed response to latest GDP figures',
    category: 'Finance',
    timeAgo: '8 hours ago',
    sentiment: 'neutral',
    source: 'Bloomberg',
    sourceUrl: 'https://bloomberg.com',
    content: 'Full article content here...',
    aiSummary: {
      keyPoints: [
        'GDP growth slows to 2.1% in Q4',
        'Investors cautious amid uncertainty',
        'Federal Reserve hints at policy adjustments'
      ],
      whyItMatters: 'Could influence investment strategies and interest rates'
    }
  }
];

// Fetch all articles
export async function fetchArticles(): Promise<Article[]> {
  try {
    // In production, uncomment this:
    // const response = await fetch(`${API_BASE_URL}/api/articles`);
    // if (!response.ok) throw new Error('Failed to fetch articles');
    // return await response.json();

    // Mock implementation
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockArticles), 500);
    });
  } catch (error) {
    console.error('Error fetching articles:', error);
    return mockArticles;
  }
}

// Fetch single article by ID
export async function fetchArticle(id: string): Promise<Article | null> {
  try {
    // In production, uncomment this:
    // const response = await fetch(`${API_BASE_URL}/api/articles/${id}`);
    // if (!response.ok) throw new Error('Failed to fetch article');
    // return await response.json();

    // Mock implementation
    return new Promise((resolve) => {
      setTimeout(() => {
        const article = mockArticles.find(a => a.id === id);
        resolve(article || null);
      }, 300);
    });
  } catch (error) {
    console.error('Error fetching article:', error);
    return null;
  }
}

// Send chat message and get AI response
export async function sendChatMessage(
  articleId: string,
  message: string
): Promise<string> {
  try {
    // In production, uncomment this:
    // const response = await fetch(`${API_BASE_URL}/api/chat`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ articleId, message })
    // });
    // if (!response.ok) throw new Error('Failed to send message');
    // const data = await response.json();
    // return data.response;

    // Mock implementation
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('This is a demo AI response. In production, this would use your backend API to generate contextual responses based on the article and user question.');
      }, 800);
    });
  } catch (error) {
    console.error('Error sending chat message:', error);
    return 'Sorry, I encountered an error. Please try again.';
  }
}

// Generate video summary
export async function generateVideo(articleId: string): Promise<{
  videoUrl: string;
  script: string;
}> {
  try {
    // In production, uncomment this:
    // const response = await fetch(`${API_BASE_URL}/api/generate-video`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ articleId })
    // });
    // if (!response.ok) throw new Error('Failed to generate video');
    // return await response.json();

    // Mock implementation
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          videoUrl: '/mock-video.mp4',
          script: 'AI-generated video script would be returned here from your backend.'
        });
      }, 1000);
    });
  } catch (error) {
    console.error('Error generating video:', error);
    throw error;
  }
}

// Save user preferences
export async function savePreferences(preferences: {
  interests: string[];
  experienceLevel: string;
}): Promise<void> {
  try {
    // In production, uncomment this:
    // const response = await fetch(`${API_BASE_URL}/api/preferences`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(preferences)
    // });
    // if (!response.ok) throw new Error('Failed to save preferences');

    // Mock implementation
    return new Promise((resolve) => {
      setTimeout(() => {
        localStorage.setItem('userPreferences', JSON.stringify(preferences));
        resolve();
      }, 300);
    });
  } catch (error) {
    console.error('Error saving preferences:', error);
    throw error;
  }
}
