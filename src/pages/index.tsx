import * as React from 'react';
import axios from 'axios';
import useSWR from 'swr';

const fetcher = async url => {
  const { data, status } = await axios.get(url);

  if (status !== 200) {
    throw new Error(data.message);
  }

  return data;
};

const IndexPage = () => {
  const { data, error } = useSWR(`/api/behance/projects`, fetcher);

  return <div> </div>;
};

export default IndexPage;
