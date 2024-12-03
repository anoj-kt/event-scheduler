import EventCard from '../components/EventCard';

const Home = () => {
  return (
    <main className='max-w-screen-2xl px-4 mx-auto my-4'>
      <h1 className='text-3xl text-center mb-4'>All Events</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-cols-max justify-items-center gap-12'>
        {/* Displaying a few event cards for styling ONLY FOR NOW. 
        This will eventually need to be displayed with data from the backend */}
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </main>
  );
};

export default Home;
