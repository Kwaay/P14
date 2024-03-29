/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import Dropdown from 'react-dropdown';
import Header from '../../components/Header';
import styles from './Home.module.css';

import { setEmployee } from '../../store/EmployeeSlice';

export default function Home() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState(Date.now() - 20000000);
  const [startDate, setStartDate] = useState(Date.now() - 20000000);
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [department, setDepartment] = useState('');

  const states = [
    {
      label: 'Alabama',
      value: 'AL',
    },
    {
      label: 'Alaska',
      value: 'AK',
    },
    {
      label: 'American Samoa',
      value: 'AS',
    },
    {
      label: 'Arizona',
      value: 'AZ',
    },
    {
      label: 'Arkansas',
      value: 'AR',
    },
    {
      label: 'California',
      value: 'CA',
    },
    {
      label: 'Colorado',
      value: 'CO',
    },
    {
      label: 'Connecticut',
      value: 'CT',
    },
    {
      label: 'Delaware',
      value: 'DE',
    },
    {
      label: 'District Of Columbia',
      value: 'DC',
    },
    {
      label: 'Federated States Of Micronesia',
      value: 'FM',
    },
    {
      label: 'Florida',
      value: 'FL',
    },
    {
      label: 'Georgia',
      value: 'GA',
    },
    {
      label: 'Guam',
      value: 'GU',
    },
    {
      label: 'Hawaii',
      value: 'HI',
    },
    {
      label: 'Idaho',
      value: 'ID',
    },
    {
      label: 'Illinois',
      value: 'IL',
    },
    {
      label: 'Indiana',
      value: 'IN',
    },
    {
      label: 'Iowa',
      value: 'IA',
    },
    {
      label: 'Kansas',
      value: 'KS',
    },
    {
      label: 'Kentucky',
      value: 'KY',
    },
    {
      label: 'Louisiana',
      value: 'LA',
    },
    {
      label: 'Maine',
      value: 'ME',
    },
    {
      label: 'Marshall Islands',
      value: 'MH',
    },
    {
      label: 'Maryland',
      value: 'MD',
    },
    {
      label: 'Massachusetts',
      value: 'MA',
    },
    {
      label: 'Michigan',
      value: 'MI',
    },
    {
      label: 'Minnesota',
      value: 'MN',
    },
    {
      label: 'Mississippi',
      value: 'MS',
    },
    {
      label: 'Missouri',
      value: 'MO',
    },
    {
      label: 'Montana',
      value: 'MT',
    },
    {
      label: 'Nebraska',
      value: 'NE',
    },
    {
      label: 'Nevada',
      value: 'NV',
    },
    {
      label: 'New Hampshire',
      value: 'NH',
    },
    {
      label: 'New Jersey',
      value: 'NJ',
    },
    {
      label: 'New Mexico',
      value: 'NM',
    },
    {
      label: 'New York',
      value: 'NY',
    },
    {
      label: 'North Carolina',
      value: 'NC',
    },
    {
      label: 'North Dakota',
      value: 'ND',
    },
    {
      label: 'Northern Mariana Islands',
      value: 'MP',
    },
    {
      label: 'Ohio',
      value: 'OH',
    },
    {
      label: 'Oklahoma',
      value: 'OK',
    },
    {
      label: 'Oregon',
      value: 'OR',
    },
    {
      label: 'Palau',
      value: 'PW',
    },
    {
      label: 'Pennsylvania',
      value: 'PA',
    },
    {
      label: 'Puerto Rico',
      value: 'PR',
    },
    {
      label: 'Rhode Island',
      value: 'RI',
    },
    {
      label: 'South Carolina',
      value: 'SC',
    },
    {
      label: 'South Dakota',
      value: 'SD',
    },
    {
      label: 'Tennessee',
      value: 'TN',
    },
    {
      label: 'Texas',
      value: 'TX',
    },
    {
      label: 'Utah',
      value: 'UT',
    },
    {
      label: 'Vermont',
      value: 'VT',
    },
    {
      label: 'Virgin Islands',
      value: 'VI',
    },
    {
      label: 'Virginia',
      value: 'VA',
    },
    {
      label: 'Washington',
      value: 'WA',
    },
    {
      label: 'West Virginia',
      value: 'WV',
    },
    {
      label: 'Wisconsin',
      value: 'WI',
    },
    {
      label: 'Wyoming',
      value: 'WY',
    },
  ];
  const defaultOption = states[0].label;
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Header />
      <main>
        <section className={styles.container}>
          <div className={styles['form-container']}>
            <h2>Create Employee</h2>
            <form action="#" id="create-employee">
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
                selected={new Date(birthDate)}
                dateFormat="dd/MM/yyyy"
                onChange={(date) => setBirthDate(date.getTime())}
              />
              <label htmlFor="start-date">Start Date</label>
              <DatePicker
                selected={new Date(startDate)}
                dateFormat="dd/MM/yyyy"
                onChange={(date) => setStartDate(date.getTime())}
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
                  onChange={({ value }) => setState(value)}
                  value={defaultOption}
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
                onChange={({ value }) => setDepartment(value)}
                value="Sales"
              />
            </form>
            <button
              onClick={() => {
                dispatch(
                  setEmployee({
                    firstName,
                    lastName,
                    birthDate,
                    startDate,
                    street,
                    city,
                    state,
                    zipCode,
                    department,
                  }),
                );
              }}
            >
              Save
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
