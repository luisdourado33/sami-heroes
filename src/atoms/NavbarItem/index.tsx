import React from 'react';

type IProps = {
  label: string;
  url?: string;
};

const NavbarItem = ({ label, url = '/' }: IProps) => {
  return <a href={url}>{label}</a>;
};
