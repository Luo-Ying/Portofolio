import { useState } from 'react';
import frenchFlag from '../assets/france.png';
import ukFlag from '../assets/united-kingdom.png';
import chinaFlag from '../assets/china.png';

import { currentLanguage } from '../utils/globalVars';


const DropDownLanguage = ({ handleLanguageEffect }) => {

    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div className="language-selector-circle" style={{
            position: 'fixed',
            right: '20px',
            top: '20px',
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'

        }}>
            <button
                className="lang-circle-btn"
                onClick={() => setShowDropdown(!showDropdown)}
                style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    border: 'none',
                    cursor: 'pointer',
                    backgroundColor: 'transparent',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <img
                    src={
                        currentLanguage.language === 'fr' ? frenchFlag :
                            currentLanguage.language === 'en' ? ukFlag :
                                chinaFlag
                    }
                    alt="current language flag"
                    className="lang-circle-icon"
                    style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        border: 'none',
                    }}
                />
            </button>

            {showDropdown && (
                <div className="lang-dropdown" style={{
                    position: 'fixed',
                    right: '20px',
                    top: '80px', // Positioned below header height
                    width: 'fit-content',
                    height: 'auto', // Allow height to grow based on content
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px', // Add spacing between language options
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    backgroundColor: '#1e2228', // Add background
                    padding: '20px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Add subtle shadow
                    borderRadius: '8px' // Rounded corners for dropdown

                }}>
                    {currentLanguage.language !== 'fr' && (
                        <button
                            className="lang-option"
                            onClick={() => {
                                handleLanguageEffect('fr');
                                setShowDropdown(false);
                            }}
                            style={{
                                width: '30px',
                                height: '30px',
                                borderRadius: '50%',
                                border: 'none',
                                cursor: 'pointer',
                                backgroundColor: 'transparent',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '10px'
                            }}
                        >
                            <img src={frenchFlag} alt="french flag" className="lang-dropdown-icon" style={{
                                width: '30px',
                                height: '30px',
                                borderRadius: '50%',
                                border: 'none',
                            }} /> <span className="lang-dropdown-text" style={{ color: 'white' }}>FR</span>
                        </button>
                    )}
                    {currentLanguage.language !== 'en' && (
                        <button
                            className="lang-option"
                            onClick={() => {
                                handleLanguageEffect('en');
                                setShowDropdown(false);
                            }}
                            style={{
                                width: '30px',
                                height: '30px',
                                borderRadius: '50%',
                                border: 'none',
                                padding: 0,
                                cursor: 'pointer',
                                backgroundColor: 'transparent',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '10px'
                            }}
                        >
                            <img src={ukFlag} alt="UK flag" className="lang-dropdown-icon" style={{
                                width: '30px',
                                height: '30px',
                                borderRadius: '50%',
                                border: 'none',
                            }} /> <span className="lang-dropdown-text" style={{ color: 'white' }}>EN</span>
                        </button>
                    )}
                    {currentLanguage.language !== 'zh' && (
                        <button
                            className="lang-option"
                            onClick={() => {
                                handleLanguageEffect('zh');
                                setShowDropdown(false);
                            }}
                            style={{
                                width: '30px',
                                height: '30px',
                                borderRadius: '50%',
                                border: 'none',
                                cursor: 'pointer',
                                backgroundColor: 'transparent',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '10px'
                            }}
                        >
                            <img src={chinaFlag} alt="china flag" className="lang-dropdown-icon" style={{
                                width: '30px',
                                height: '30px',
                                borderRadius: '50%',
                                border: 'none',
                            }} /> <span className="lang-dropdown-text" style={{ color: 'white' }}>ZH</span>
                        </button>
                    )}
                </div>
            )}
        </div>
    )
}

export default DropDownLanguage;