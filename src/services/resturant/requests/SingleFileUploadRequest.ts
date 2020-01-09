import { fetch } from '../../common/DataFetchService';

export const SingleFileUploadRequest = async (
  url: string,
  file: any
): Promise<any> => {
  console.log(file);

  console.log(file);

  let o = {
    query: `mutation ($file: Upload!) {
    singleUpload (file: $file){
      ...on File {
        filename
      }
    }
  }`,
    variables: {
      file: null
    }
  };

  let map = {
    '0': ['variables.file']
  };
  let query = new FormData();
  query.append('operations', JSON.stringify(o));
  query.append('map', JSON.stringify(map));

  query.append('0', file);

  const headers = {
    'Content-Type': 'multipart/form-data'
  };
  const response = await fetch(url, query, 'singleUpload', headers);
  return response;
};
