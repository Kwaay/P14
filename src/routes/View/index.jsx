/* eslint-disable import/no-extraneous-dependencies */

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';
import Header from '../../components/Header';
import styles from './View.module.css';

export default function View() {
  const [columns, setColumns] = useState([]);
  const [pending, setPending] = useState(true);
  const employeesList = useSelector(({ employee }) => employee.employees);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setColumns([
        {
          name: 'First Name',
          selector: (row) => row.firstName,
          sortable: true,
        },
        {
          name: 'Last Name',
          selector: (row) => row.lastName,
          sortable: true,
        },
        {
          name: 'Start Date',
          selector: (row) =>
            new Date(row.startDate).toLocaleString('fr-FR', {
              timeZone: 'UTC',
            }),
          sortable: true,
        },
        {
          name: 'Department',
          selector: (row) => row.department,
          sortable: true,
        },
        {
          name: 'Date of Birth',
          selector: (row) =>
            new Date(row.birthDate).toLocaleString('fr-FR', {
              timeZone: 'UTC',
            }),
          sortable: true,
        },
        {
          name: 'Street',
          selector: (row) => row.street,
          sortable: true,
        },
        {
          name: 'City',
          selector: (row) => row.city,
          sortable: true,
        },
        {
          name: 'State',
          selector: (row) => row.state,
          sortable: true,
        },
        {
          name: 'Zip Code',
          selector: (row) => row.zipCode,
          sortable: true,
        },
      ]);
      setPending(false);
    }, 2000);
    return () => clearTimeout(timeout);
  });

  return (
    <div className="App">
      <Header />
      <main className={styles.main}>
        <section className={styles.container}>
          <DataTable
            className={styles.rdt_TableHeader}
            direction="auto"
            fixedHeader={true}
            fixedHeaderScrollHeight="300px"
            progressPending={pending}
            title={'View Employees'}
            columns={columns}
            data={employeesList}
            responsive={true}
            dense
          />
        </section>
      </main>
    </div>
  );
}
