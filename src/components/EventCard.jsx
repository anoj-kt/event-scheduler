const EventCard = () => {
  return (
    <div className='card bg-neutral w-full shadow-xl mb-4'>
      <div className='card-body'>
        <h2 className='card-title text-primary'>
          Event name
          <div className='badge badge-secondary'>24 Dec 2024</div>
        </h2>
        <div className='flex gap-2 my-2'>
          <svg
            className='h-6 fill-primary'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 384 512'
          >
            <path d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z' />
          </svg>
          <span>Sesame Street 10, 10101, Berlin</span>
        </div>
        <p className='truncate'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptas
          provident adipisci. Aspernatur nihil odit debitis obcaecati officiis
          quam temporibus!
        </p>
      </div>
    </div>
  );
};

export default EventCard;
