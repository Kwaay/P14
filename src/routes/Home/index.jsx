/* eslint-disable import/no-extraneous-dependencies */
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';

import DatePicker from 'react-datepicker';
import Dropdown from 'react-dropdown';
import Modal from '@k_ben/k-reactmodal';
import Header from '../../components/Header';
import styles from './Home.module.css';

import { setEmployee } from '../../store/EmployeeSlice';

export default function Home() {
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
    control,
  } = useForm();

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

  const dispatch = useDispatch();

  return (
    <div className="App">
      <Header />
      <main>
        {isSubmitSuccessful && (
          <Modal
            type="success"
            title={'Success'}
            content={"L'employé a bien été créé"}
            height="150px"
            width="300px"
            position="topleft"
            delay={5000}
            buttonPosition="bottomright"
          />
        )}

        <section className={styles.container}>
          <div className={styles['form-container']}>
            <h2>Create Employee</h2>
            <form
              action="#"
              id="create-employee"
              onSubmit={handleSubmit((data) => {
                dispatch(
                  setEmployee({
                    firstName: data.firstName,
                    lastName: data.lastName,
                    birthDate: +data.birthDate,
                    startDate: +data.startDate,
                    street: data.street,
                    city: data.city,
                    state: data.state.value,
                    zipCode: data.zipCode,
                    department: data.department.value,
                  }),
                );
              })}
            >
              <label>First Name</label>
              <input
                type="text"
                {...register('firstName', {
                  required: {
                    value: true,
                    message: 'Le prénom est obligatoire',
                  },
                  minLength: {
                    value: 2,
                    message: 'Veuillez entrer au moins deux caractères',
                  },
                  maxLength: {
                    value: 20,
                    message: 'Veuillez entrer au maximum 20 caractères',
                  },
                })}
                aria-invalid={errors.firstName ? 'true' : 'false'}
              />
              {errors.firstName && (
                <p role="alert">{errors.firstName?.message}</p>
              )}

              <label>Last Name</label>
              <input
                type="text"
                {...register('lastName', {
                  required: {
                    value: true,
                    message: 'Le nom est obligatoire',
                  },
                  minLength: {
                    value: 2,
                    message: 'Veuillez entrer au moins deux caractères',
                  },
                  maxLength: {
                    value: 20,
                    message: 'Veuillez entrer au maximum 20 caractères',
                  },
                })}
                aria-invalid={errors.lastName ? 'true' : 'false'}
              />
              {errors.lastName && (
                <p role="alert">{errors.lastName?.message}</p>
              )}
              <label>Date of Birth</label>
              <Controller
                control={control}
                name="birthDate"
                rules={{
                  required: 'Veuillez sélectionner une date de naissance',
                }}
                render={({ field: { onChange, value } }) => (
                  <DatePicker
                    dateFormat="dd/MM/yyyy"
                    onChange={onChange}
                    selected={+value}
                    error={!!errors.birthDate}
                    helperText={
                      errors.birthDate ? errors.birthDate.message : ''
                    }
                    aria-invalid={errors.birthDate ? 'true' : 'false'}
                  />
                )}
              ></Controller>
              {errors.birthDate && (
                <p role="alert">{errors.birthDate?.message}</p>
              )}
              <label>Start Date</label>
              <Controller
                control={control}
                name="startDate"
                rules={{
                  required: 'Veuillez sélectionner une date de début',
                }}
                render={({ field: { onChange, value } }) => (
                  <DatePicker
                    dateFormat="dd/MM/yyyy"
                    onChange={onChange}
                    selected={+value}
                    error={!!errors.startDate}
                    helperText={
                      errors.startDate ? errors.startDate.message : ''
                    }
                    aria-invalid={errors.startDate ? 'true' : 'false'}
                  />
                )}
              ></Controller>
              {errors.startDate && (
                <p role="alert">{errors.startDate?.message}</p>
              )}
              <fieldset className={styles.address}>
                <legend>Address</legend>
                <label>Street</label>
                <input
                  type="text"
                  {...register('street', {
                    required: {
                      value: true,
                      message: 'Veuillez indiquer un numéro de rue',
                    },
                    minLength: {
                      value: 2,
                      message: 'Veuillez entrer au moins deux caractères',
                    },
                  })}
                  aria-invalid={errors.street ? 'true' : 'false'}
                />
                {errors.street && <p role="alert">{errors.street?.message}</p>}
                <label>City</label>
                <input
                  type="text"
                  {...register('city', {
                    required: {
                      value: true,
                      message: 'Veuillez indiquer une ville',
                    },
                    minLength: {
                      value: 2,
                      message: 'Veuillez entrer au moins deux caractères',
                    },
                  })}
                  aria-invalid={errors.city ? 'true' : 'false'}
                />
                {errors.city && <p role="alert">{errors.city?.message}</p>}
                <label>State</label>
                <Controller
                  control={control}
                  name="state"
                  rules={{
                    required: 'Veuillez sélectionner un état',
                  }}
                  render={({ field: { onChange, value } }) => (
                    <Dropdown
                      options={states}
                      aria-invalid={errors.state ? 'true' : 'false'}
                      onChange={onChange}
                      selected={value}
                      error={!!errors.state}
                      helperText={errors.state ? errors.state.message : ''}
                    />
                  )}
                ></Controller>

                {errors.state && <p role="alert">{errors.state?.message}</p>}
                <label>Zip Code</label>
                <input
                  type="number"
                  {...register('zipCode', {
                    required: {
                      value: true,
                      message: 'Le code postal est obligatoire',
                    },
                    minLength: {
                      value: 2,
                      message:
                        'Le code postal ne peut pas être inférieur à 2 caractères',
                    },
                    maxLength: {
                      value: 5,
                      message:
                        'Le code postal ne peut pas être inférieur à 5 caractères',
                    },
                  })}
                  aria-invalid={errors.zipCode ? 'true' : 'false'}
                />
                {errors.zipCode && (
                  <p role="alert">{errors.zipCode?.message}</p>
                )}
              </fieldset>
              <label>Department</label>
              <Controller
                control={control}
                name="department"
                rules={{
                  required: 'Veuillez sélectionner un département',
                }}
                render={({ field: { onChange, value } }) => (
                  <Dropdown
                    options={[
                      'Sales',
                      'Marketing',
                      'Engineering',
                      'Human Resources',
                      'Legal',
                    ]}
                    aria-invalid={errors.department ? 'true' : 'false'}
                    onChange={onChange}
                    selected={value}
                    error={!!errors.department}
                    helperText={
                      errors.department ? errors.department.message : ''
                    }
                  />
                )}
              ></Controller>
              {errors.department && (
                <p role="alert">{errors.department?.message}</p>
              )}
              <input type="submit" value="Save" />
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
