import React from 'react';

// Using solution for heading ids. https://github.com/rexxars/react-markdown/issues/69

function flatten(text, child) {
  return typeof child === 'string'
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text);
}

export function HeadingRenderer(props) {
  console.log(props);
  const children = React.Children.toArray(props.children);
  const text = children.reduce(flatten, '');
  const slug = text.toLowerCase().replace(/\W/g, '-');
  return React.createElement(`h${props.level}`, { id: slug }, props.children);
}
