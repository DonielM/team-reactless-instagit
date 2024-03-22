import "../styles/SearchBtn.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState } from "react";
import Autosuggest from "react-autosuggest";

function SearchBtn() {
  const token = "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";
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${inputValue}`,
        {
          method: "GET",
          headers: {
            Authorization: `token ${token}`,
            Accept: "application/vnd.github.v3+json",
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const userData = await response.json();
      console.log(userData); // Here, you can do whatever you want with the user data
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  const getSuggestions = async (value) => {
    const response = await fetch(
      `https://api.github.com/search/users?q=${value}`,
      {
        method: "GET",
        headers: {
          Authorization: `token ${token}`,
          Accept: "application/vnd.github.v3+json",
        },
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.items.map((item) => item.login);
  };

  const onSuggestionsFetchRequested = async ({ value }) => {
    const suggestions = await getSuggestions(value);
    setSuggestions(suggestions);
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onChange = (event, { newValue }) => {
    setInputValue(newValue);
  };

  const onSuggestionSelected = (event, { suggestion }) => {
    setInputValue(suggestion);
  };

  const inputProps = {
    placeholder: "Please input the username",
    className:"form-control custom-border",
    value: inputValue,
    onChange: onChange,
  };

  return (
    <section className="py-5 text-center container " id="searchContainer">
      <div className="row py-lg-8">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h2 className="fw-light">Search Github Username  </h2>
          <p className="lead text-muted">
            Start by searching for username or name of repo that you want to
            view.
          </p>
          <div className="container-fluid search-container">
            <div className="d-flex align-items-center justify-content-center">
              <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                onSuggestionsClearRequested={onSuggestionsClearRequested}
                getSuggestionValue={(suggestion) => suggestion}
                renderSuggestion={(suggestion) => <div>{suggestion}</div>}
                inputProps={inputProps}
                onSuggestionSelected={onSuggestionSelected}
              />
                <button
                className="btn btn-outline-warning my-3 mb-3"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchBtn;