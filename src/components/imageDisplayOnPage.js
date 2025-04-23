import '../styles/projectDeatils.css';

const ImageDisplayOnPage = ({ image, setImageToDisplay }) => {
    return (
        <div className="image-display-on-page" onClick={() => setImageToDisplay(null)}>
            <img src={image} className="image-display-on-page-image" alt="Project image" />
        </div>
    );
};

export default ImageDisplayOnPage;