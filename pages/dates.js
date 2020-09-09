import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-fetch';

import PageLayout from '../components/PageLayout';
import { Dates } from '../components/Dates';
import PhotoDates from '../components/PhotoDates';
import { ContentContainer } from '../components/ContentContainer';
import { PageHeader } from '../components/PageHeader';

const today = new Date().getTime();

const DatesPage = ({ dates }) => {
  return (
    <PageLayout>
      <PageHeader>Dates</PageHeader>
      <ContentContainer>
        <div className='flex justify-center items-center'>
          <div>
            <PhotoDates />
          </div>
          <div className='px-8 grid gap-6'>
            <Dates
              title='Upcoming Dates'
              events={dates.filter((d) => new Date(d.Date).getTime() > today)}
            />
            <Dates
              title='Previous Dates'
              events={dates.filter((d) => new Date(d.Date).getTime() < today)}
            />
          </div>
        </div>
      </ContentContainer>
    </PageLayout>
  );
};

export const getStaticProps = async () => {
  const dates = await fetch('https://api.airtable.com/v0/appgik94wpMxBWur6/Shows', {
    headers: {
      Authorization: `Bearer ${process.env.AIRTABLE_PASSWORD}`,
    },
  })
    .then((r) => r.json())
    .then((stuff) => stuff.records.map((r) => r.fields));

  return { props: { dates }, revalidate: true };
};

export default DatesPage;
