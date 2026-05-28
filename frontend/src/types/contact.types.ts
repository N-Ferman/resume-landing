export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

export interface ContactResponse {
  message: string;
}
