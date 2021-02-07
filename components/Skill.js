const Skill = () => {
  return (
    <>
      <header className='text-4xl mt-16 font-bold pt-10 px-5'>
        <h2>Skills & Tools</h2>
      </header>
      <section className='my-16 m-4  px-5 background'>
        <div className='my-7 grid gap-5 grid-cols-3 md:grid-cols-6 '>
          <div className='flex flex-col items-center rounded-lg text-sm my-6'>
            <i
              loading='lazy'
              className='fab fa-js-square  fa-4x background4 mb-1 aria-hidden '
            ></i>
            <div className='px-2 py-1 rounded-lg text-sm background'>
              Javascript
            </div>
          </div>
          <div className='flex flex-col items-center my-6'>
            <i
              loading='lazy'
              className='fab fa-react fa-4x background4 mb-1 aria-hidden'
            ></i>
            <div className='px-2 py-1 rounded-lg text-sm background'>
              React JS
            </div>
          </div>

          <div className='flex flex-col items-center my-6'>
            <i
              loading='lazy'
              className='cib-next-js  fa-4x background4 mb-1 aria-hidden'
            ></i>
            <div className='px-2 py-1 rounded-lg text-sm background'>
              Next JS
            </div>
          </div>
          <div className='flex flex-col items-center my-6'>
            <i
              loading='lazy'
              className='fab fa-node  fa-4x background4 mb-1 aria-hidden'
            ></i>
            <div className='px-2 py-1 rounded-lg text-sm background'>
              Node Js
            </div>
          </div>
          <div className='flex flex-col items-center my-6'>
            <i
              loading='lazy'
              className='cib-mongodb  fa-4x background4 mb-1 aria-hidden'
            ></i>
            <div className='px-2 py-1 rounded-lg text-sm background'>
              MongoDB
            </div>
          </div>
          <div className='flex flex-col items-center my-6'>
            <i
              loading='lazy'
              className='fab fa-html5  fa-4x background4 mb-1 aria-hidden'
            ></i>
            <div className='px-2 py-1 rounded-lg text-sm background'>HTML5</div>
          </div>
          <div className='flex flex-col items-center my-6'>
            <i
              loading='lazy'
              className='fab fa-css3-alt  fa-4x background4 mb-1 aria-hidden'
            ></i>
            <div className='px-2 py-1 rounded-lg text-sm background'>CSS3</div>
          </div>
          <div className='flex flex-col items-center my-6'>
            <i
              loading='lazy'
              className='fab fa-bootstrap  fa-4x background4 mb-1 aria-hidden'
            ></i>
            <div className='px-2 py-1 rounded-lg text-sm background'>
              Bootstrap
            </div>
          </div>
          <div className='flex flex-col items-center my-6'>
            <i
              loading='lazy'
              className='fab fa-adn fa-4x background4 mb-1 aria-hidden'
            ></i>
            <div className='px-2 py-1 rounded-lg text-sm background'>
              Ant Design
            </div>
          </div>
          <div className='flex flex-col items-center my-6'>
            <i
              loading='lazy'
              className='fab fa-git-alt  fa-4x background4 mb-1 aria-hidden'
            ></i>
            <div className='px-2 py-1 rounded-lg text-sm background'>Git</div>
          </div>

          <div className='flex flex-col items-center my-6'>
            <i
              loading='lazy'
              className='fab fa-github-square  fa-4x background4 mb-1 aria-hidden'
            ></i>
            <div className='px-2 py-1 rounded-lg text-sm background'>
              GitHub
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
