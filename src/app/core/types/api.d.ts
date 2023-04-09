export interface APIResponse<T = any> {
  body: T;
  messages: string[];
}
