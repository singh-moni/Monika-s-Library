import { useEffect, useReducer } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import BookItem from "./components/BookItem";
import ReadingBlock from "./components/ReadingBlock";

// Initial state
const initialState = {
  search: "",
  query: "Astronomy",
  books: [],
  id: "",
  term: false,
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SEARCH":
      return { ...state, search: action.payload };
    case "SET_QUERY":
      return { ...state, query: action.payload, search: "" };
    case "SET_BOOKS":
      return { ...state, books: action.payload };
    case "SET_ID":
      return { ...state, id: action.payload, term: true };
    case "SET_TERM":
      return { ...state, term: action.payload };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${state.query}&key=AIzaSyCJbUF_JRiOk9R6abyiAZ3QddT6TQ_LAO0`
    )
      .then((res) => res.json())
      .then((result) => {
        dispatch({ type: "SET_BOOKS", payload: result.items });
      })
      .catch((error) => alert(error.message));
  }, [state.query]);

  const getSearch = (e) => {
    e.preventDefault();
    if (state.search !== "") {
      dispatch({ type: "SET_QUERY", payload: state.search });
    } else {
      alert("Please Enter Book Name!!");
    }
  };

  const checkIt = (id) => {
    dispatch({ type: "SET_ID", payload: id });
  };

  return (
    <div className="App">
      <h1 className="title">Monika's library</h1>

      <SearchForm
        search={state.search}
        setSearch={(search) => dispatch({ type: "SET_SEARCH", payload: search })}
        getSearch={getSearch}
      />

      <div className="books">
        {state.books.map((book, key) => (
          <BookItem key={key} book={book} checkIt={checkIt} />
        ))}
      </div>

      {state.term && <ReadingBlock id={state.id} setTerm={(term) => dispatch({ type: "SET_TERM", payload: term })} />}
    </div>
  );
}

export default App;