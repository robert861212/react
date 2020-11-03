const SERVICE_URL = 'https://cognaflask.herokuapp.com';
// const SERVICE_URL = 'http://localhost:5000';
export default {
    // authenticate
    authenticate(username, password) {
        const URL = `${SERVICE_URL}/authenticate`;
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
        };
        const payload = {
            method: 'POST',
            headers,
            body: JSON.stringify({
                username,
                password,
            }),
        };
        return fetch(URL, payload).then(response => 
            response.json().then(json => ({
                code: response.status,
                json: json,})).catch(error => ({
                code: response.status,
                json: error}))).catch(error => alert(error));
    },

    // jwt
    jwt(token) {
        const URL = `${SERVICE_URL}/jwt`;
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            Authorization: `Bearer ${token}`,
        };
        const payload = {
            method: 'POST',
            headers,
        };
        return fetch(URL, payload).then(response => 
            response.json().then(json => ({
                code: response.status,
                json: json,})).catch(error => ({
                code: response.status,
                json: error}))).catch(error => alert(error));
    },

    // safeReport
    safetyReport(token, safetyReport) {
        const URL = `${SERVICE_URL}/safetyreport`;
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            Authorization: `Bearer ${token}`,
        };
        const payload = {
            method: 'POST',
            headers,
            body: JSON.stringify({
                'safety_report': safetyReport
            }),
        };
        return fetch(URL, payload).then(response => 
            response.json().then(json => ({
                code: response.status,
                json: json,})).catch(error => ({
                code: response.status,
                json: error}))).catch(error => alert(error));
    },

    // dailyMetrics
    dailyMetrics(token, timeToFallAsleep, sleepnessChange, restednessChange, energyLevel) {
        const URL = `${SERVICE_URL}/dailymetrics`;
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            Authorization: `Bearer ${token}`,
        };
        const payload = {
            method: 'POST',
            headers,
            body: JSON.stringify({
                'time_to_fall_asleep': timeToFallAsleep,  
                'sleepness_change': sleepnessChange,      
                'restedness_change': restednessChange,  
                'energy_level': energyLevel
            }),
        };
        return fetch(URL, payload).then(response => 
            response.json().then(json => ({
                code: response.status,
                json: json,})).catch(error => ({
                code: response.status,
                json: error}))).catch(error => alert(error));
    },

    // imageMetrics
    imageMetrics(token, binaryImage) {
        const URL = `${SERVICE_URL}/imagemetrics`;
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            Authorization: `Bearer ${token}`,
        };
        const payload = {
            method: 'POST',
            headers,
            body: binaryImage
        };
        return fetch(URL, payload).then(response => 
            response.json().then(json => ({
                code: response.status,
                json: json,})).catch(error => ({
                code: response.status,
                json: error}))).catch(error => alert(error));
    },

    // psqi
    psqi(token, one, two, three, four, five_a, five_b, five_c, five_d, five_e, five_f, five_g, five_h, five_i, six, seven, eight, nine, ten) {
        const URL = `${SERVICE_URL}/psqi`;
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            Authorization: `Bearer ${token}`,
        };
        const payload = {
            method: 'POST',
            headers,
            body: JSON.stringify({
                "one": one, 
                "two": two, 
                "three": three, 
                "four": four, 
                "five_a": five_a, 
                "five_b": five_b, 
                "five_c": five_c,
                "five_d": five_d,
                "five_e": five_e,
                "five_f": five_f, 
                "five_g": five_g,
                "five_h": five_h,
                "five_i": five_i,
                "six": six,
                "seven": seven,
                "eight": eight,
                "nine": nine,
                "ten": ten
            }),
        };
        return fetch(URL, payload).then(response => 
            response.json().then(json => ({
                code: response.status,
                json: json,})).catch(error => ({
                code: response.status,
                json: error}))).catch(error => alert(error));
    },

    // emailAlert
    emailAlert(token) {
        const URL = `${SERVICE_URL}/emailalert`;
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            Authorization: `Bearer ${token}`,
        };
        const payload = {
            method: 'GET',
            headers
        };
        return fetch(URL, payload).then(response => 
            response.json().then(json => ({
                code: response.status,
                json: json,})).catch(error => ({
                code: response.status,
                json: error}))).catch(error => alert(error));
    },
};