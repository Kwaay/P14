/* eslint-disable import/no-extraneous-dependencies */
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import Dropdown from 'react-dropdown';
import Header from '../../components/Header';
import styles from './Home.module.css';

export default function Home() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [department, setDepartment] = useState('');
  function saveEmployee() {}
  const states = [
    {
      value: 'Alabama',
      abbreviation: 'AL',
    },
    {
      value: 'Alaska',
      abbreviation: 'AK',
    },
    {
      value: 'American Samoa',
      abbreviation: 'AS',
    },
    {
      value: 'Arizona',
      abbreviation: 'AZ',
    },
    {
      value: 'Arkansas',
      abbreviation: 'AR',
    },
    {
      value: 'California',
      abbreviation: 'CA',
    },
    {
      value: 'Colorado',
      abbreviation: 'CO',
    },
    {
      value: 'Connecticut',
      abbreviation: 'CT',
    },
    {
      value: 'Delaware',
      abbreviation: 'DE',
    },
    {
      value: 'District Of Columbia',
      abbreviation: 'DC',
    },
    {
      value: 'Federated States Of Micronesia',
      abbreviation: 'FM',
    },
    {
      value: 'Florida',
      abbreviation: 'FL',
    },
    {
      value: 'Georgia',
      abbreviation: 'GA',
    },
    {
      value: 'Guam',
      abbreviation: 'GU',
    },
    {
      value: 'Hawaii',
      abbreviation: 'HI',
    },
    {
      value: 'Idaho',
      abbreviation: 'ID',
    },
    {
      value: 'Illinois',
      abbreviation: 'IL',
    },
    {
      value: 'Indiana',
      abbreviation: 'IN',
    },
    {
      value: 'Iowa',
      abbreviation: 'IA',
    },
    {
      value: 'Kansas',
      abbreviation: 'KS',
    },
    {
      value: 'Kentucky',
      abbreviation: 'KY',
    },
    {
      value: 'Louisiana',
      abbreviation: 'LA',
    },
    {
      value: 'Maine',
      abbreviation: 'ME',
    },
    {
      value: 'Marshall Islands',
      abbreviation: 'MH',
    },
    {
      value: 'Maryland',
      abbreviation: 'MD',
    },
    {
      value: 'Massachusetts',
      abbreviation: 'MA',
    },
    {
      value: 'Michigan',
      abbreviation: 'MI',
    },
    {
      value: 'Minnesota',
      abbreviation: 'MN',
    },
    {
      value: 'Mississippi',
      abbreviation: 'MS',
    },
    {
      value: 'Missouri',
      abbreviation: 'MO',
    },
    {
      value: 'Montana',
      abbreviation: 'MT',
    },
    {
      value: 'Nebraska',
      abbreviation: 'NE',
    },
    {
      value: 'Nevada',
      abbreviation: 'NV',
    },
    {
      value: 'New Hampshire',
      abbreviation: 'NH',
    },
    {
      value: 'New Jersey',
      abbreviation: 'NJ',
    },
    {
      value: 'New Mexico',
      abbreviation: 'NM',
    },
    {
      value: 'New York',
      abbreviation: 'NY',
    },
    {
      value: 'North Carolina',
      abbreviation: 'NC',
    },
    {
      value: 'North Dakota',
      abbreviation: 'ND',
    },
    {
      value: 'Northern Mariana Islands',
      abbreviation: 'MP',
    },
    {
      value: 'Ohio',
      abbreviation: 'OH',
    },
    {
      value: 'Oklahoma',
      abbreviation: 'OK',
    },
    {
      value: 'Oregon',
      abbreviation: 'OR',
    },
    {
      value: 'Palau',
      abbreviation: 'PW',
    },
    {
      value: 'Pennsylvania',
      abbreviation: 'PA',
    },
    {
      value: 'Puerto Rico',
      abbreviation: 'PR',
    },
    {
      value: 'Rhode Island',
      abbreviation: 'RI',
    },
    {
      value: 'South Carolina',
      abbreviation: 'SC',
    },
    {
      value: 'South Dakota',
      abbreviation: 'SD',
    },
    {
      value: 'Tennessee',
      abbreviation: 'TN',
    },
    {
      value: 'Texas',
      abbreviation: 'TX',
    },
    {
      value: 'Utah',
      abbreviation: 'UT',
    },
    {
      value: 'Vermont',
      abbreviation: 'VT',
    },
    {
      value: 'Virgin Islands',
      abbreviation: 'VI',
    },
    {
      value: 'Virginia',
      abbreviation: 'VA',
    },
    {
      value: 'Washington',
      abbreviation: 'WA',
    },
    {
      value: 'West Virginia',
      abbreviation: 'WV',
    },
    {
      value: 'Wisconsin',
      abbreviation: 'WI',
    },
    {
      value: 'Wyoming',
      abbreviation: 'WY',
    },
  ];
  const defaultOption = states[0];

  return (
    <div className="App">
      <Header />
      <main>
        <section className={styles.container}>
          <div className={styles['form-container']}>
            <h2>Create Employee</h2>
            <form action="#" id="create-employee" onChange={saveEmployee}>
              <label htmlFor="first-name">First Name</label>
              <input
                type="text"
                id="first-name"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <label htmlFor="last-name">Last Name</label>
              <input
                type="text"
                id="last-name"
                onChange={(e) => setLastName(e.target.value)}
              />
              <label htmlFor="date-of-birth">Date of Birth</label>
              <DatePicker
                selected={birthDate}
                dateFormat="dd/MM/yyyy"
                onChange={(date) => setBirthDate(date)}
              />
              <label htmlFor="start-date">Start Date</label>
              <DatePicker
                selected={startDate}
                dateFormat="dd/MM/yyyy"
                onChange={(date) => setStartDate(date)}
              />
              <fieldset className={styles.address}>
                <legend>Address</legend>
                <label htmlFor="street">Street</label>
                <input
                  id="street"
                  type="text"
                  onChange={(e) => setStreet(e.target.value)}
                />
                <label htmlFor="city">City</label>
                <input
                  id="city"
                  type="text"
                  onChange={(e) => setCity(e.target.value)}
                />
                <label htmlFor="state">State</label>
                <Dropdown
                  options={states}
                  onChange={(value) => setState(value)}
                  value={defaultOption.value}
                />
                <label htmlFor="zip-code">Zip Code</label>
                <input
                  id="zip-code"
                  type="number"
                  onChange={(e) => setZipCode(e.target.value)}
                />
              </fieldset>
              <label htmlFor="department">Department</label>
              <Dropdown
                id="department"
                options={[
                  'Sales',
                  'Marketing',
                  'Engineering',
                  'Human Resources',
                  'Legal',
                ]}
                onChange={(value) => setDepartment(value)}
                value={defaultOption.value}
              />
            </form>
            <button onClick="saveEmployee()">Save</button>
          </div>
        </section>
      </main>
    </div>
  );
}
