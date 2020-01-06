import fs, { createReadStream } from 'fs';

import axios from 'axios';

class ValidationError {
  public name: string;
  public message: any;
  constructor(message: any) {
    this.message = message;
    this.name = 'ValidationError';
  }
}

interface DataFetchResult {
  status: number;
  data: any;
}

const responseAssembler = (result: DataFetchResult | null, action: string) => {
  console.log(result);

  if (!result || result.status !== 200) {
    throw new ValidationError('NO_DATA');
  }

  const data = result.data.data[action];
  if (data.errors) {
    throw new ValidationError('NO_DATA');
  }

  return data;
};

export const fetch = async (
  url: string,
  query: any,
  action: string,
  headers: any = {}
) => {
  console.log(query);

  let result;
  try {
    result = await axios({
      method: 'post',
      url,
      headers,
      data: query
    });
  } catch (e) {
    throw new Error(e);
  }

  return responseAssembler(result, action);
};
