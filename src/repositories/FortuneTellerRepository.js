import { Axios } from 'axios';
import FortuneTeller from '../models/FortuneTeller';

class FortuneTellerRepository {

    constructor() {
        this.axios = Axios;
    }

    findAll(fortuneTellerId) {
        return this.axios
            .get('/v1/fortune_teller', {
                params: { fortune_teller_id: fortuneTellerId },
            })
            .then((res) => res.data.map((item) => FortuneTeller.fromJSON(item)));
    }
}