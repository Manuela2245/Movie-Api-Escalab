import axios from "axios";
import {BASE_URL,API_KEY_PARAM} from "../config"

export class TVShowApi {
    /* método para el api de forma estático para ser llamado sin instanciar su clase
    Además es asíncrono ya que necesitamos una promesa y poder esperar a la petición */
    static async fetchPopulars(){
        try{
            //Link con url general+ la parte para acceder a tv shows + el api key
            const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
            console.log(response.data.results);
            return response.data.results;
        }catch (err){
            console.log(err);
        }
    }

    static async fetchByTitle(title){
        try{
            //Link con url general+ la parte para acceder a tv shows + el api key
            const response = await axios.get(`${BASE_URL}search/tv${API_KEY_PARAM}&query=${title}`);
            console.log(response.data.results);
            return response.data.results;
        }catch (err){
            console.log(err);
        }
    }

    static async fetchRecommendation(tvShowId){
        try{
            //Link con url general+ la parte para acceder a tv shows + el api key
            const response = await axios.get(`${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}`);
            return response.data.results;
        }catch (err){
            console.log(err);
        }
    }
}

