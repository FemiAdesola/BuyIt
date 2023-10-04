import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const { keyword: urlKeywordForSearch } = useParams();
  const [keywordSearch, setKeywordSearch] = useState(urlKeywordForSearch || "");

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (keywordSearch) {
      navigate(`/search/${keywordSearch.trim()}`);
      setKeywordSearch("");
    } else {
      navigate("/");
    }
  };

  return (
    <Form onSubmit={submitFormHandler} className="d-flex">
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeywordSearch(e.target.value)}
        value={keywordSearch}
        placeholder="Search Products..."
        className="mr-sm-2 ml-sm-5"
      ></Form.Control>
      <Button
        type="submit"
        variant="outline-secondary"
        className="p-1 btn-lg mx-2 m-1"
      >
        Search
      </Button>
    </Form>
  );
};

export default Search;
