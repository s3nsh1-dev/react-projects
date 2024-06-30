import React from "react";
export default function Component({ title, handle }) {
  // const title = props.title;
  // const handle = props.handle;
  // both same
  // const { title, handle } = props;
  return (
    <div>
      <h2>Title is {title}</h2>
      <h3>Handle is {handle}</h3>
    </div>
  );
}
