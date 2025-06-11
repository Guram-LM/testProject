import { useState, useTransition } from "react";
import { useLoaderData } from "react-router-dom";

export const HomePage = () => {
  const cantryData = useLoaderData();
  const [pending, startTransition] = useTransition();
  const [value, setValue] = useState("");
  const [countries, setCountries] = useState(cantryData);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (e.target.value.trim() === "") {
      setCountries(cantryData);
      return;
    }

    fetch(`https://restcountries.com/v3.1/name/${e.target.value}`)
      .then((res) => res.json())
      .then((newResponse) => startTransition(() => setCountries(newResponse)))
      .catch(() => startTransition(() => setCountries([])));
  };

  console.log(countries);

  return (
    <div>
      <input type="text" onChange={onChange} value={value} />
      {pending && <p>Loading . . .</p>}
      {!Array.isArray(countries) ? (
        <p>please enter a name</p>
      ) : (
        countries?.map((cantry: any) => (
          <div key={cantry.cca2}>
            <h2>{cantry.name.common} </h2>
          </div>
        ))
      )}
    </div>
  );
};
