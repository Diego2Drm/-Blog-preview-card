
type infoProps = {
  illustration: string,
  date: string,
  title: string,
  paragraph: string, 
  avatar: string,
  name: string,
}

function Card({ illustration, date, title, paragraph, avatar, name }: infoProps) {
  return (
    <section className="border-2 border-Gray-950 w-full h-auto bg-White p-5 rounded-xl flex flex-col gap-3 shadow-[6px_10px_#121212] md:w-[25rem] xl:w-[30rem]">
      <img src={illustration} alt="" className='rounded-lg' />
      <button className='bg-Yellow w-24 py-1 rounded-md text-Gray-950 font-bold mt-2 text-sm md:text-base'>
        Learning
      </button>
      <p className='text-Gray-500 font-semibold text-xs md:text-sm'>
        {date}
      </p>
      <h3 className='text-Gray-950 font-bold text-xl md:text-2xl hover:text-Yellow cursor-pointer w-72'>
        {title}
      </h3>
      <p className='text-Gray-500 text-sm md:text-lg pr-5'>
      {paragraph}
      </p>
      <figure className='flex gap-3 items-center mt-2'>
        <img src={avatar} alt="" className='w-12 md:w-14' />
        <p className='text-Gray-950 font-bold md:text-lg'>{name}</p>
      </figure>
    </section>
  );
}; export { Card };