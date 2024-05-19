import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import React from "react";
import "./Filter.css";

export const Filter = ({ filters, setFilters, categories }) => {
  const [isFilterMenuOn, setIsFilterMenuOn] = useState(false);

  const handleReset = () => {
    setFilters({
      sort: "",
    });
  };

  return (
    <div>
      <div
        className={
          isFilterMenuOn
            ? "filter-container filter-container-mobile-open"
            : "filter-container filter-container-mobile-closed"
        }
      >
        <div
          className={
            !isFilterMenuOn
              ? "filter-header filter-header-mobile-closed"
              : "filter-header filter-header-mobile-open"
          }
        >
          <span
            className="close-tab"
            onClick={() => setIsFilterMenuOn(!isFilterMenuOn)}
          >
            {!isFilterMenuOn ? <TbAdjustmentsHorizontal /> : <RxCross2 />}
          </span>
          <h2>Filters</h2>

          <button
            className={isFilterMenuOn ? "reset-btn" : "reset-btn-hide"}
            onClick={handleReset}
          >
            Reset
          </button>
        </div>

        <div
          className={
            isFilterMenuOn
              ? "filter-types-container filter-types-container-mobile"
              : "filter-types-container"
          }
        >
          <div className="sorting-container">
            <h3>Sort by price</h3>

            <div className="sorting-input-container">
              <label htmlFor="high-to-low">
                Price-high to low
                <input
                  checked={filters.sort === "highToLow"}
                  onChange={() =>
                    setFilters((prevFilters) => ({
                      ...prevFilters,
                      sort: "highToLow",
                    }))
                  }
                  name="sort"
                  id="high-to-low"
                  type="radio"
                />
              </label>

              <label htmlFor="low-to-high">
                Price-low to high
                <input
                  checked={filters.sort === "lowToHigh"}
                  onChange={() =>
                    setFilters((prevFilters) => ({
                      ...prevFilters,
                      sort: "lowToHigh",
                    }))
                  }
                  name="sort"
                  id="low-to-high"
                  type="radio"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
