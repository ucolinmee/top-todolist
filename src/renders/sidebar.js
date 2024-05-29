import bullseyeImg from '../assets/images/bullseye.svg';
import calendar7Img from '../assets/images/calendar7.svg';
import documentsImg from '../assets/images/documents.svg';

const loadSidebarImages = () => {
    const images = document.querySelectorAll('.toggle-views img');
    const links = [bullseyeImg, calendar7Img, documentsImg];
    
    for (var i = 0; i < images.length; i++) {
        images[i].src = links[i];
    }
}

export default loadSidebarImages;