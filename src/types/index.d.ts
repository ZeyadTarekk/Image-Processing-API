export {};

declare global {
  namespace Express {
    interface Request {
      query: Object;
    }
    interface Response {
      send: Function;
    }
    interface Object {
      width: string;
      height: string;
      filename: string;
    }
  }
}
