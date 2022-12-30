import { useMemo } from 'react';
// Config
import appConfig from "../config";

const useImage = (imagePath, size = 'w1280') => {
    const generateUrl = useMemo(() => {
        if(!imagePath) {
            return '';
        }
        return `${appConfig.IMAGE_BASE_URL}/${size}${imagePath}`
    },[imagePath]);

    return generateUrl;
}

export default useImage;