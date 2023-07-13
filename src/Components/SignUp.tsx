const SignUp = function () {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [joinAs, setJoinAs] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  // const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  // };
  return (
    <section className="h-screen">
      <div className="md:grid md:grid-cols-[520px_1fr]">
        <div className="item-center hidden max-w-full flex-col justify-center gap-4  bg-sign-up bg-cover bg-center p-4 text-center text-white md:flex">
          <h3 className="text-3xl font-bold">Chatter</h3>
          <p>
            Unleash the Power of Words, Connect with Like-minded Readers and
            Writers
          </p>
        </div>

        {/* Register */}
        <div className=" h-screen p-4">
          <div className="mx-auto flex h-auto max-w-sm flex-col gap-3">
            <div className="text-md text-center text-2xl font-semibold">
              <h4>Register as a Writer/Reader</h4>
            </div>
            <form className="flex flex-col gap-4">
              <div className="flex gap-3">
                <div>
                  <label htmlFor="firstName">First Name</label>
                  <input
                    className="w-full rounded border p-1"
                    type="text"
                    id="firstName"
                  />
                </div>
                <div>
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    className="w-full rounded border p-1"
                    type="text"
                    id="lastName"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                  className="w-full rounded border p-1"
                  type="text"
                  id="email"
                />
              </div>

              <div>
                <label htmlFor="role">You're joining as?</label>
                <select className="w-full rounded border p-1" id="role">
                  <option value="writer">Writer</option>
                  <option value="developer">Developer</option>
                </select>
              </div>

              <div>
                <label htmlFor="password">Password:</label>
                <input
                  className="w-full rounded border p-1"
                  type="password"
                  id="password"
                  required
                />
              </div>

              <div>
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                  className="w-full rounded border p-1"
                  type="password"
                  id="confirmPassword"
                  required
                />
              </div>

              <div>
                <input
                  className="w-full bg-blue-800 p-1 text-white"
                  type="submit"
                  value="Create Account"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
