import React from 'react';

interface Props {
  title: string;
  className: string;
  onClick: () => void;
}

const Button = ({ title, className, onClick }: Props) => {
  return (
    <button onClick={onClick} className={className}>
      {title}
    </button>
  );
};

export default Button;
