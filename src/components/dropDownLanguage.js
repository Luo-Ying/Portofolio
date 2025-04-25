import { useState, useEffect, useRef } from 'react';
import frenchFlag from '../assets/france.png';
import ukFlag from '../assets/united-kingdom.png';
import chinaFlag from '../assets/china.png';

import { currentLanguage } from '../utils/globalVars';


const DropDownLanguage = ({ handleLanguageEffect }) => {

    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="language-selector-circle" ref={dropdownRef}>
            <button className="lang-circle-btn" onClick={() => setShowDropdown(!showDropdown)} >
                <img
                    src={
                        currentLanguage.language === 'fr' ? frenchFlag :
                            currentLanguage.language === 'en' ? ukFlag :
                                chinaFlag
                    }
                    alt="current language flag"
                    className="lang-circle-icon" />
            </button>

            {showDropdown && (
                <div className="lang-dropdown">
                    {currentLanguage.language !== 'fr' && (
                        <button
                            className="lang-option"
                            onClick={() => {
                                handleLanguageEffect('fr');
                                setShowDropdown(false);
                            }}>
                            <img src={frenchFlag} alt="french flag" className="lang-dropdown-icon" /> <span className="lang-dropdown-text">FR</span>
                        </button>
                    )}
                    {currentLanguage.language !== 'en' && (
                        <button
                            className="lang-option"
                            onClick={() => {
                                handleLanguageEffect('en');
                                setShowDropdown(false);
                            }}>
                            <img src={ukFlag} alt="UK flag" className="lang-dropdown-icon" /> <span className="lang-dropdown-text">EN</span>
                        </button>
                    )}
                    {currentLanguage.language !== 'zh' && (
                        <button
                            className="lang-option"
                            onClick={() => {
                                handleLanguageEffect('zh');
                                setShowDropdown(false);
                            }}>
                            <img src={chinaFlag} alt="china flag" className="lang-dropdown-icon" /> <span className="lang-dropdown-text">ZH</span>
                        </button>
                    )}
                </div>
            )}
        </div>
    )
}

export default DropDownLanguage;