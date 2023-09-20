import React from "react";

const Message = ({ message }) => {
  return (
    <section className="flex flex-col items-center justify-center h-[60vh]">
      <img src="/assets/imgs/network.png" alt="network error" className="w-[200px]"/>
      <p>{message}</p>
    </section>
  );
};

export default Message;
