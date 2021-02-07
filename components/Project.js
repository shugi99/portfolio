import projects from '../projectData';
import Image from 'next/image';

const Project = () => {
  return (
    <>
      <section className='my-28 mt-48 pt-48  px-5' id='projects'>
        <header className='text-5xl  font-bold pt-10'>
          <h1>Projects</h1>
        </header>
        <div className='my-7 space-y-24 '>
          {projects.map((project, index) => (
            <article
              className='flex flex-wrap md:justify-between md:items-center background'
              key={index}
            >
              <div className='px-2 py-1 rounded-lg text-sm background1'>
                <Image src={'/ProjectPic.png'} width={500} height={500}></Image>
              </div>

              <div className='flex flex-col overflow-auto  space-y-3 my-3 mx-1 w-full md:w-5/12 '>
                <h3 className='uppercase font-bold text-lg'>{project.title}</h3>
                <p>{project.description}</p>
                <div className='flex overflow-auto space-x-3 pb-2'>
                  {project.tools.map((disc, index) => (
                    <span
                      className='  px-2 py-1 rounded-lg text-sm background'
                      key={index}
                    >
                      {disc}
                    </span>
                  ))}
                </div>
                <div className='w-auto flex space-x-5 relative'>
                  <a
                    href={project.githubfront}
                    target='_blank'
                    rel='noreferrer'
                    className='px-2  rounded-lg text-sm background6'
                  >
                    <i
                      loading='lazy'
                      className='fab fa-github-square  background1 mr-1'
                    ></i>
                    client
                  </a>
                  <a
                    href={project.githubback}
                    target='_blank'
                    rel='noreferrer'
                    className='px-2  rounded-lg text-sm background6'
                  >
                    <i
                      loading='lazy'
                      className='fab fa-github-square  background1 mr-1'
                    ></i>
                    server
                  </a>
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noreferrer'
                    className='px-2  rounded-lg text-sm background6'
                  >
                    <i
                      loading='lazy'
                      className='fas fa-external-link-alt  background1 mr-1'
                    ></i>
                    view project
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Project;
