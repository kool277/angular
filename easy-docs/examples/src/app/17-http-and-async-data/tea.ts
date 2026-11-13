/** One tea, as the server sends it. */
export interface Tea {
  id: number;
  name: string;
  price: number;
}

/** A tea that is not saved yet: the server gives it an id. */
export interface NewTea {
  name: string;
  price: number;
}
