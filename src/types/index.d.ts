export {};

declare global {
  namespace Express {
    interface Request {
      query: any;
    }
    interface Response {
      send: Function;
    }
    interface ReqQuery {
      width: string;
      height: string;
      filename: string;
    }
  }
}
