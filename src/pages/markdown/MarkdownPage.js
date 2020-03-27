// @flow
import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Container, Loader } from 'semantic-ui-react';
import Markdown from 'react-markdown';
import NoMatch from '../404';

const LOAD_STATUS = {
  FAIL: 'FAIL',
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
};

function useGettingMarkdown(markdownName) {
  const [status, setStatus] = useState(LOAD_STATUS.LOADING);
  const [content, setContent] = useState('');

  useEffect(() => {
    async function fetchMarkdown() {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/documents/${markdownName}.md`);
        const isMarkdownFile = response.headers.get('Content-Type').includes('text/markdown');

        if (!isMarkdownFile) throw new Error(`${markdownName} doesn't match with any file`);

        const markdown = await response.text();
        setStatus(LOAD_STATUS.SUCCESS);
        setContent(markdown);
      } catch (e) {
        setStatus(LOAD_STATUS.FAIL);
        console.error(e);
      }
    }

    fetchMarkdown();
  }, [markdownName]);

  return {
    content,
    status,
  };
}

const MarkdownPage = () => {
  const { pathname } = useLocation();
  const markdownName = pathname.slice(1);
  const { content = '', status } = useGettingMarkdown(markdownName);

  switch (status) {
    case LOAD_STATUS.LOADING:
      return <Loader active inline="centered" />;

    case LOAD_STATUS.FAIL:
      return <NoMatch />;

    case LOAD_STATUS.SUCCESS:
    default:
      return (
        <Container>
          <Markdown source={content} />
        </Container>
      );
  }
};

export default MarkdownPage;
