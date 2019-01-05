import React from 'react';


// found on SO, converts linebreaks in strings to react elements
export const breakLine = (text) => {
  const regex = /(<br \/>)/g;
  return text.split(regex).map(function(line, index) {
      return line.match(regex) ? <br key={"key_" + index} /> : line;
  });
}