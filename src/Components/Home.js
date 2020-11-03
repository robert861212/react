import React, { Component } from 'react';
import APIAccess from '../../utils/APIAccess';

class Home extends Component {
    render() {
        const username = 'w2s@9rw3';
        const password = '@n@fxzxi';
        APIAccess.authenticate(username, password).then((authresponse) => {
            console.log(authresponse);
            const token = authresponse.json.token;
            console.log("Test log in");
            console.log(token);
            APIAccess.jwt(token).then((jwtresponse) => {
                console.log("Test jwt after log in");
                console.log(jwtresponse.json);
                const safetyReport = "safe report";
                APIAccess.safetyReport(token, safetyReport).then((response) => {
                    console.log("Test safetyreport");
                    console.log(response.json);
                    const timeToFallAsleep = 30;
                    const sleepnessChange = 3;
                    const restednessChange = 5;
                    const energyLevel = 5;
                    APIAccess.dailyMetrics(token, timeToFallAsleep, sleepnessChange, restednessChange, energyLevel).then((response) => {
                        console.log("Test dailyMetrics");
                        console.log(response.json);
                        const one = "test";
                        const two = 2;
                        const three = 2;
                        const four = 2.0;
                        const five_a = 2;
                        const five_b = 2;
                        const five_c = 2;
                        const five_d = 2;
                        const five_e = 2;
                        const five_f = 2;
                        const five_g = 2;
                        const five_h = 2;
                        const five_i = 2;
                        const six = "test";
                        const seven = 2;
                        const eight = 2;
                        const nine = 2;
                        const ten = 2;
                        APIAccess.psqi(token, one, two, three, four, five_a, five_b, five_c, five_d, five_e, five_f, five_g, 
                                       five_h, five_i, six, seven, eight, nine, ten).then((response) => {
                            console.log("Test psql");
                            console.log(response.json);
                            const img = new Image();
                            img.src = "test.png";
                            APIAccess.imageMetrics(token, img).then((response) => {
                                console.log("Test image upload");
                                console.log(response.json);
                                APIAccess.emailAlert(token).then((response) => {
                                    console.log("Test email alert");
                                    console.log(response.json);
                                });
                            });
                        });
                    });
                });
            });
        });
        return (
            <div>
                <h1>Testing
                </h1>
            </div>
        )
    }
}

export default Home;