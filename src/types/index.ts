export interface AreaOfCare {
  id: string;
  title: string;
  tagline: string;
  description: string;
  typicalConcerns: string[];
  clinicalFocus: string[];
  icon: string;
  badge?: string;
}

export interface PatientArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  image: string;
  fullContent: {
    intro: string;
    keyTakeaways: string[];
    sections: { heading: string; body: string }[];
    conclusion: string;
  };
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'first-visit' | 'appointments' | 'rehabilitation';
}

export interface EnquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  reason: string;
  preferredContact: 'phone' | 'whatsapp' | 'email';
  preferredTime: 'morning' | 'afternoon' | 'evening';
  briefNotes: string;
}
