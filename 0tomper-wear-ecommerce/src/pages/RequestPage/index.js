import React, { useEffect } from 'react';

const RequestPage = ({ postData, url }) => {
  useEffect(() => {
    const parsedData = JSON.parse(postData);

    const form = document.createElement('form');
    form.setAttribute('action', url);
    form.setAttribute('method', 'post');

    for (const key in parsedData) {
      const input = document.createElement('input');
      input.setAttribute('type', 'hidden');
      input.setAttribute('value', parsedData[key]);
      input.setAttribute('name', key);
      form.appendChild(input);
    }

    document.body.appendChild(form);
    form.submit();

    return () => {
      document.body.removeChild(form);
    };
  }, [postData, url]);

  return (
    <div>
      <p>Please wait...</p>
    </div>
  );
};

export default RequestPage;
