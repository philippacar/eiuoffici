/**
 * Represents the structure of a response object.
 */
type ResponseObject = {
  readonly status: 200;
  id: number;
  path: string;
  mime: string;
  data: Uint8Array;
  etag?: string;
  mtime?: number;
};
