

export interface NewsItem {
  id: number;
  title: string;
  summary: string;
  date: string;
  category: string;
  isHot: boolean;
  gradient: string;
}

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('pt-BR', { 
    day: '2-digit', 
    month: 'short', 
    year: 'numeric' 
  });
};

export const createNewsItem = (
  title: string, 
  summary: string, 
  category: string, 
  isHot: boolean = false
): Omit<NewsItem, 'id'> => {
  const gradients: Record<string, string> = {
    'tecnologia': 'from-green-400 to-cyan-400',
    'eventos': 'from-yellow-400 to-orange-400',
    'música': 'from-pink-400 to-rose-400',
    'cultura': 'from-blue-400 to-cyan-400',
    'comunidade': 'from-green-500 to-yellow-500',
    'arte': 'from-purple-400 to-pink-400',
    'vocaloid': 'from-cyan-400 to-blue-400'
  };

  return {
    title,
    summary,
    date: formatDate(new Date()),
    category,
    isHot,
    gradient: gradients[category.toLowerCase()] || 'from-cyan-400 to-purple-400'
  };
};


export const translateCategoryToFilter = (category: string): string => {
  const translations: Record<string, string> = {
    'Technology': 'tecnologia',
    'Events': 'eventos',
    'Music': 'música',
    'Culture': 'cultura',
    'Community': 'comunidade',
    'Art': 'arte',
    'Vocaloid': 'vocaloid'
  };
  
  return translations[category] || category.toLowerCase();
};
