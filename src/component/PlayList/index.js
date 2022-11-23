import Header from './Header';
import ContentPlay from './ContentPlay';
import './PlayList.scss';

function PlayList() {
    return (
        <div className="playlist-container">
            <Header />
            <ContentPlay />
        </div>
    );
}

export default PlayList;
