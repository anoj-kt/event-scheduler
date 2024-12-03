const SignUp = () => {
  return (
    <main className='my-4'>
      <form className='max-w-72 min-h-[80vh] mx-auto flex flex-col items-center gap-4'>
        <label className='form-control w-full max-w-xs'>
          <div className='label'>
            <span className='label-text text-xl'>
              Email <span className='text-red-400'>&#42;</span>
            </span>
          </div>
          <input type='text' className='input input-bordered w-full max-w-xs' />
        </label>
        <label className='form-control w-full max-w-xs'>
          <div className='label'>
            <span className='label-text text-xl'>
              Password <span className='text-red-400'>&#42;</span>
            </span>
          </div>
          <input
            type='password'
            className='input input-bordered w-full max-w-xs'
          />
        </label>
        <label className='form-control w-full max-w-xs'>
          <div className='label'>
            <span className='label-text text-xl'>
              Confirm Password <span className='text-red-400'>&#42;</span>
            </span>
          </div>
          <input
            type='password'
            className='input input-bordered w-full max-w-xs'
          />
        </label>
        <button className='btn btn-primary w-full'>Sign Up</button>
      </form>
    </main>
  );
};

export default SignUp;
