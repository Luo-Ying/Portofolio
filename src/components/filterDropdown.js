import '../styles/FilterDropdown.css';

import React, { useState, useEffect, useRef } from 'react';

const FilterDropdown = ({ title, options, onApplyFilters, nbProjects }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleCheckboxChange = (option) => {
        if (selectedOptions.includes(option)) {
            setSelectedOptions(selectedOptions.filter(item => item !== option));
        } else {
            setSelectedOptions([...selectedOptions, option]);
        }
    };

    const handleApply = () => {
        onApplyFilters(selectedOptions);
        setIsOpen(false);
    };

    const handleCancel = () => {
        setIsOpen(false);
    };

    return (
        <div className="filter-dropdown-container" ref={dropdownRef}>
            <button className={`dropdown-btn-dedfault ${selectedOptions.length > 0 ? 'dropdown-btn-applied' : ''}`} onClick={toggleDropdown}>
                {title}
                <span className="arrow">&#9662;</span>
            </button>

            {isOpen && (
                <div className="dropdown-menu">
                    <div className="options-container">
                        {options.map((option, index) => (
                            <div key={index} className="checkbox-option">
                                <label className="checkbox-label" onClick={() => handleCheckboxChange(option)}>
                                    <div className={`custom-checkbox ${selectedOptions.includes(option) ? 'checked' : ''}`}>
                                        {selectedOptions.includes(option) && <span className="checkmark">✓</span>}
                                    </div>
                                    <span>{option}</span>
                                </label>
                            </div>
                        ))}
                    </div>

                    <div className="dropdown-footer">
                        <button className="cancel-btn" onClick={handleCancel}>Annuler</button>
                        <button className="apply-btn" onClick={handleApply}>
                            {/* TODO: Afficher {selectedOptions.length > 0 ? `${selectedOptions.length}+` : `${nbProjects}`} résultats */}
                            Afficher
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FilterDropdown;