import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Extract value from input field
    const formdata = new FormData(event.target);
    const email = formdata.get('email');
    const password = formdata.get('password');
    const confirmPassword = formdata.get('confirmPassword');

    // Validation
    if (!email || !password || !confirmPassword) {
      return alert('Pls enter all fields');
    }

    if (password !== confirmPassword) {
      return alert('Passwords do not match');
    }

    const userCredentials = {
      email,
      password,
    };

    // Post the data
    fetch('http://localhost:3001/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userCredentials),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          return alert(data.error);
        }
        navigate('/signin');
      })
      .catch((err) => console.log(err));
  };

  return (
    <main className='my-4'>
      <form
        className='max-w-72 min-h-[80vh] mx-auto flex flex-col items-center gap-4'
        onSubmit={handleSubmit}
      >
        <label className='form-control w-full max-w-xs'>
          <div className='label'>
            <span className='label-text text-xl'>
              Email <span className='text-red-400'>&#42;</span>
            </span>
          </div>
          <input
            type='email'
            className='input input-bordered w-full max-w-xs'
            name='email'
          />
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
            name='password'
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
            name='confirmPassword'
          />
        </label>
        <button className='btn btn-primary w-full'>Sign Up</button>
        <Link to='/signin' className='hover:underline'>
          Already registered? Sign In
        </Link>
      </form>
    </main>
  );
};

export default SignUp;
