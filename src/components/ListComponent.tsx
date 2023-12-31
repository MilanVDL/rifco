import React from "react";

const ListComponent = () => {
  return (
    <div className="w-full">
      <ul>
        <ListItem text="[NL] KVK: 7333 5193" />
        <ListItem text="[BE] KVK: 0795.727.622" />
      </ul>
    </div>
  );
};

export default ListComponent;

type ListItem = {
  text: any;
};

const ListItem = (props: ListItem) => {
  const { text } = props;

  return (
    <li className="text-body-color mb-4 flex text-base">
      <span className="text-primary mr-2 flex items-center rounded-full text-base">
        <svg width="20" height="8" viewBox="0 0 20 8" className="fill-current">
          <path d="M19.2188 2.90626L17.0625 0.343758C16.875 0.125008 16.5312 0.0937583 16.2812 0.281258C16.0625 0.468758 16.0312 0.812508 16.2188 1.06251L18.25 3.46876H0.9375C0.625 3.46876 0.375 3.71876 0.375 4.03126C0.375 4.34376 0.625 4.59376 0.9375 4.59376H18.25L16.2188 7.00001C16.0312 7.21876 16.0625 7.56251 16.2812 7.78126C16.375 7.87501 16.5 7.90626 16.625 7.90626C16.7812 7.90626 16.9375 7.84376 17.0312 7.71876L19.1875 5.15626C19.75 4.46876 19.75 3.53126 19.2188 2.90626Z"></path>
        </svg>
      </span>
      {text}
    </li>
  );
};
