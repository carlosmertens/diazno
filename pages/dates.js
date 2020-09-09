import React, { useState } from 'react';
import fetch from 'isomorphic-fetch';

import PageLayout from '../components/PageLayout';
import { Dates } from '../components/Dates';
import PhotoDates from '../components/PhotoDates';
import { ContentContainer } from '../components/ContentContainer';
import { PageHeader } from '../components/PageHeader';

const today = new Date().getTime();

const DatesPage = ({ dates }) => {
  const [search, setSearch] = useState('');

  return (
    <PageLayout>
      <PageHeader>Dates</PageHeader>
      <ContentContainer>
        <div className='flex justify-center'>
          <div>
            <PhotoDates />
          </div>
          <div>
            <div className='px-8 grid gap-6'>
              <input
                onChange={(e) => setSearch(e.target.value)}
                type='text'
                placeholder='Find event...'
                className='w-full'
              />
              <Dates
                title='Upcoming Dates'
                events={dates.filter(
                  (d) =>
                    new Date(d.Date).getTime() > today &&
                    d.Event.toLowerCase().includes(search.toLowerCase())
                )}
              />
              <Dates
                title='Previous Dates'
                events={dates.filter(
                  (d) =>
                    new Date(d.Date).getTime() < today &&
                    d.Event.toLowerCase().includes(search.toLowerCase())
                )}
              />
            </div>
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
