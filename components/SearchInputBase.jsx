import React from "react";
import { PropTypes } from "prop-types";

const defaultProps = {
    onChange: () => { },
    completeOptions: [],
};

const propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    placeholder: PropTypes.string,
};

const SearchInputBase = ({ id, name, completeOptions, onChange, placeholder }) => {
    return (
        <>
            <input
                type="search"
                id={id}
                name={name || id}
                aria-label="Search for items"
                onChange={onChange}
                list={`DataList_${id}`}
                placeholder={placeholder}
            ></input>
            <datalist id={`DataList_${id}`}>
                {Array.isArray(completeOptions) &&
                    completeOptions.map((hint, index) => (
                        <option key={index} value={hint} />
                    ))}
            </datalist>
        </>
    );
};
SearchInputBase.propTypes = propTypes;
SearchInputBase.defaultProps = defaultProps;

export default SearchInputBase;