import { fetch } from '../../common/DataFetchService';

export const SingleFileUploadRequest = async (
  url: string,
  file: any
): Promise<any> => {
  console.log(file);

  const query = `mutation{
  singleUpload(file:${file}){
    ...on File {filename}
  }
}`;

  const response = await fetch(url, query, 'singleUpload');
  return response;
};
