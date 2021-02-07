import React, { useState } from 'react';
import Link from 'next/link';

const state = {
  name: '',
  email: '',
  message: '',
};

const Contact = () => {
  const [values, setValues] = useState(state);
  const { name, email, message } = values;

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(e.target.name, ' ----- ', e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/api/contact`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    }).then((response) => {
      console.log('hey', response);
      console.log('Fetch: ', response);
    });
  };
  return (
    <>
      <header className=' text-4xl mt-16 px-5 font-bold  '>
        <h2>Contact Me</h2>
        <p className='text-base font-thin'>I'd love to hear your thoughts!</p>
      </header>
      <section className='mt-8 py-8 m-4 background' id='contact'>
        <div className='md:mx-6 flex flex-col flex-wrap md:flex-row text-center '>
          <div className='md:w-6/12 md:px-0 p-5 my-5 '>
            <div>
              <h2 className=' text-2xl font-bold  '>Shugi Yen Lazala</h2>
              <p className='font-thin'>Nagoya, Japan</p>
              <a
                href='mailto: shugi.lazala@yahoo.com'
                className=' mt-3 inline-block background2'
              >
                shugi.lazala@yahoo.com
              </a>
            </div>
            <div>
              <Link href='/Shugi-Yen-Lazala-Resume.pdf'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  className=' mt-3 inline-block background2'
                >
                  Download CV
                </a>
              </Link>
            </div>

            <div className='flex flex-row flex-wrap mt-7 justify-center'>
              <div className='mr-4'>
                <a
                  href='https://www.linkedin.com/in/shugi-yen-lazala-5b681a179/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <span className='mb-2 flex flex-row items-end  background p-2 rounded-lg text-sm '>
                    <i className='fab fa-linkedin mr-2 fa-lg' />
                    Linked In
                  </span>
                </a>
              </div>

              <div className='mr-4'>
                <a
                  href='https://github.com/shugi99'
                  target='_blank'
                  rel='noreferrer'
                >
                  <span className='mb-2 flex flex-row items-end  background p-2 rounded-lg text-sm'>
                    <i class='fab fa-github-square mr-2 fa-lg'></i>
                    GitHub
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className=' px-5 py-10 my-2 justify-between w-full  md:w-6/12 sm:w-1/12 background5 rounded-2xl '>
            <form
              className='flex flex-col space-y-3 m-auto w-full'
              name='contact'
              method='post'
              onSubmit={handleSubmit}
            >
              <input type='hidden' name='form-name' value='contact' />

              <label htmlFor='name'>
                <h3>Name</h3>
              </label>
              <input
                type='text'
                value={name}
                onChange={handleChange}
                name='name'
                id='name'
                className='background4 border3'
                required
              ></input>
              <label htmlFor='email'>
                {' '}
                <h3>Email</h3>
              </label>
              <input
                type='email'
                value={email}
                onChange={handleChange}
                name='email'
                id='email'
                className='background4 border3'
                required
              ></input>
              <label htmlFor='message'>
                {' '}
                <h3>Message</h3>
              </label>
              <textarea
                name='message'
                onChange={handleChange}
                id='message'
                cols='25'
                rows='5'
                value={message}
                className='background4 border3'
                required
              ></textarea>
              <button
                type='submit'
                className='border3  p-2 rounded-lg w-auto mr-auto background '
                onClick={handleSubmit}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        {/* <div
        className='relative md:bottom-56 mr-auto ml-auto md:mr-auto md:ml-0 max-w-xs md:max-w-sm'
        onClick={() => window.scroll(0, 0)}
      >
        <picture>
          <source
            srcSet='./images/rocket-320.webp 320w, ./images/rocket.webp 768w'
            type='image/webp'
          />
          <source
            srcSet='./images/rocket.png'
            sizes='(min-width: 768px) 50vw, 100vw'
            type='image/png'
          />
          <img
            width='500px'
            height='500px'
            loading='lazy'
            alt='red rocket flying'
          />
        </picture>
      </div> */}
      </section>
    </>
  );
};

export default Contact;
