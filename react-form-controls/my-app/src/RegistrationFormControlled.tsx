import { useState } from 'react';

export function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('password', password);
    console.log('username', username);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        username
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          name="username"
          type="text"
          placeholder="username"
          required
        />
      </label>
      <label>
        Password
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          placeholder="password"
          required
          type="password"
        />
      </label>
      <button>Submit</button>
    </form>
  );
}
