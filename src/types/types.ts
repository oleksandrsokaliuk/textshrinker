interface IShrinkerApiResult {
  code: string;
  short_link: string;
  full_short_link: string;
  short_link2: string;
  full_short_link2: string;
  share_link: string;
  full_share_link: string;
  original_link: string;
}

export interface IShrinkerState {
  longUrl: string;
  shortUrl: string;
}

export interface IShrinkerApi {
  ok: boolean;
  result: IShrinkerApiResult;
}
