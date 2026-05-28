export interface ContactRequestBody {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export interface ContactResponseBody {
  message: string;
}
