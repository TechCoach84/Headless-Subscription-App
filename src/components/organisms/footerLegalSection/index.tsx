import React from 'react';
import {CopyrightsProps} from '#/globalTypes';

export default function FooterLegalSection(props: CopyrightsProps) {
  const {copyrightMessage} = props;
  return (
    <section
      className={'w-full px-48 py-5 bg-fontGrey'}
      data-testid={'legal-section'}
    >
      <p className={'text-sm text-start'}>&copy;{copyrightMessage}</p>
    </section>
  );
}
