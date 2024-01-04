export function RegistrationFormUncontrolled() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('form submitted');
    console.log(e.currentTarget);
    // `FormData` is a built-in JavaScript object that provides a way to easily construct a set of key/value pairs representing form fields and their values.
    // `event.currentTarget` refers to the form element that triggered the submit event. By passing this to `FormData`, you're creating an object that contains all the form's data.
    const formData = new FormData(e.currentTarget);
    // `formData.entries()` returns an iterator allowing for loop over the key/value pairs in the `formData` object. Each pair is an array with two items: the field name (e.g., 'username', 'password') and its corresponding value.
    // `Object.fromEntries()` transforms a list of key-value pairs into an object. Here, it's converting the iterator returned by `formData.entries()` into a regular object.
    const { username, password } = Object.fromEntries(formData.entries());
    console.log('username', username);
    console.log('password', password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        username
        <input required type="text" name="username" placeholder="username" />
      </label>
      <label>
        password
        <input
          required
          type="password"
          name="password"
          placeholder="password"
        />
      </label>
      <button>Submit</button>
    </form>
  );
}
