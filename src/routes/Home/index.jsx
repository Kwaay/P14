/* eslint-disable import/no-extraneous-dependencies */
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import Header from '../../components/Header';
import styles from './Home.module.css';

export default function Home() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [department, setDepartment] = useState('');
  function saveEmployee() {}

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
              <input
                id="date-of-birth"
                type="text"
                onChange={(e) => setBirthDate(e.target.value)}
              />
              <label htmlFor="start-date">Start Date</label>
              <DatePicker
                selected={startDate}
                dateFormat="dd/MM/yyyy"
                onChange={(date) => setStartDate(date)}
              />
              <fieldset className="address">
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
                <select
                  name="state"
                  id="state"
                  onChange={(e) => setState(e.target.value)}
                ></select>
                <label htmlFor="zip-code">Zip Code</label>
                <input
                  id="zip-code"
                  type="number"
                  onChange={(e) => setZipCode(e.target.value)}
                />
              </fieldset>
              <label htmlFor="department">Department</label>
              <select
                name="department"
                id="department"
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option>Sales</option>
                <option>Marketing</option>
                <option>Engineering</option>
                <option>Human Resources</option>
                <option>Legal</option>
              </select>
            </form>
            <button onClick="saveEmployee()">Save</button>
          </div>
        </section>
      </main>
    </div>
  );
}
