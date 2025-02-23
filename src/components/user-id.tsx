import { v4 as uuidv4 } from 'uuid';

const userSessionData = async () => {
    try {

        let userId = await localStorage.getItem('userId');
        if (!userId) {
            userId = uuidv4();
            localStorage.setItem('userId', userId);
        }
        return userId;
    } catch (error) {
        console.error("Error in userSessionData:", error);
        return null;
    }
}

export default userSessionData;