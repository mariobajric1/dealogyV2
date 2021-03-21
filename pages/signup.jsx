import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { useCurrentUser } from '../lib/hooks';

const SignupPage = () => {
  const [user, { mutate }] = useCurrentUser();
  const [errorMsg, setErrorMsg] = useState('');
  useEffect(() => {
    // redirect to home if user is authenticated
    if (user) Router.replace('/');
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const body = {
      email: e.currentTarget.email.value,
      name: e.currentTarget.name.value,
      company: e.currentTarget.company.value,
      password: e.currentTarget.password.value,
      number: e.currentTarget.number.value
    };



    const res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (res.status === 201) {
      const userObj = await res.json();
      mutate(userObj);
    } else {
      setErrorMsg(await res.text());
    }
  };

  return (
    <>

      <div>
        <h2 style={{marginBottom: 48
       }}>Sign up</h2>


        <form 
        style={{width:400,
        margin: 'auto',
        }}
        onSubmit={handleSubmit}>


          {errorMsg ? <p style={{ color: 'red' }}>{errorMsg}</p> : null}
          <label htmlFor="name">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Full name"
            />
          </label>
          <label htmlFor="email">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email address"
            />
          </label>
          <label htmlFor="number">
            <input
              id="number"
              name="number"
              type="number"
              placeholder="Phone number (optional)"
            />
          </label>
          <label htmlFor="company">
            <input
              id="company"
              name="company"
              type="company"
              placeholder="Company"
            />
          </label>
          
          <label htmlFor="password">
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Create a password"
            />
          </label>
          {/* <label htmlFor="confrimPassword">
            <input
              placeholder="Confirm your password"
            />
          </label> */}
          <button type="submit"
          style={{marginTop: 48
          }}>Sign up</button>

          
        </form>
        <p style={{ color: '#777', textAlign: 'center' }}>
         
        </p>
      </div>
    </>
  );
};

export default SignupPage;
