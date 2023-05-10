import { useEffect, useState } from 'react';

const useReportTags = (BASE_URL) => {
  const [reportTags, setReportTags] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${BASE_URL}/ReportTag`)
      .then((res) => {
        if (!res.ok) {
          throw new Error();
        }
        return res.json();
      })
      .then((result) => {
        setReportTags(result.data);
      })
      .catch(() => {
        setError(true);
        setIsLoading(true);
      });
  }, [BASE_URL]);

  return { reportTags, error };
};

export default useReportTags;