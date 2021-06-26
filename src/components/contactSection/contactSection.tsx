import * as React from 'react';
import { Button } from '@diogop_96/portfolio-component-library';

import { ContactSectionProps } from './types';

import * as S from './styles';

const ContactSection = ({
  title,
  description,
  button
}: ContactSectionProps) => {
  return (
    <S.Container id="contact">
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <Button showShadow elementType="a" href={`mailto:${button.url}`}>
        {button.text}
      </Button>
    </S.Container>
  );
};

export default ContactSection;
