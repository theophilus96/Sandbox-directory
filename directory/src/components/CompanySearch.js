import React from "react";

function CompanySearch() {
  return (
    <div>
      <form className="rounded shadow mb-4">
        <div className="input-group input-group-lg">
          {/* Text */}
          <span className="input-group-text border-0 pe-1">
            <i className="fe fe-search"></i>
          </span>

          {/* Input */}
          <input
            className="form-control border-0 px-1"
            type="text"
            aria-label="Search our blog..."
            placeholder="Search our blog..."
          />

          {/* Text */}
          <span className="input-group-text border-0 py-0 ps-1 pe-3">
            <a className="btn btn-sm btn-primary" href="blog-search.html">
              Search
            </a>
          </span>
        </div>
      </form>
    </div>
  );
}

export default CompanySearch;
