import axios from "axios";
import { BASE_URL } from "../../utils/constants";

export const getData = async (url = "" ) => {
    try {
        const result = await axios.get(BASE_URL + url)
        console.log(result?.data);
        return result?.data;
    } catch (error) {
        console.log("error while getting list", error);
        return error;
    }
}