// Types para el proyecto de Lorena Magriñat

export interface Book {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  publishDate: string;
  amazonLink?: string;
  stripeLink?: string;
  isComingSoon?: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface NewsletterForm {
  email: string;
}

export interface NavItem {
  href: string;
  label: string;
}

export interface SocialLink {
  href: string;
  label: string;
  icon: string;
}
