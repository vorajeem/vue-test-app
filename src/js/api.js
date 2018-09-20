/*global API_BASE*/

import store from "./store.js"

const api = {
    authenticate(username, password) {
        // API mock
        var promise = new Promise(function(resolve, reject) {
            window.setTimeout(() => {
                if (true) {
                    console.log('authenticated')
                    resolve({
                        data: {
                            session_id: "3dca04ac361bab452e057b3e5d0d4fd5"
                        }
                    })
                }
            }, 1000)
        })
        return promise
    },
    get_thing() {
        // API mock
        var promise = new Promise(function(resolve, reject) {
            window.setTimeout(() => {
                if (true) {
                    resolve({
                        data: {
                            msg: Math.random()
                        }
                    })
                } 
                // else if (Math.random() > 0.5) {
                //     reject({
                //         response: {
                //             status: 401,
                //             statusText: "Unauthorized"
                //         }
                //     })
                // } 
                // else {
                //     reject({
                //         response: {
                //             status: 500,
                //             statusText: "Server Error"
                //         }
                //     })
                // }
            }, 1000)
        })
        return promise
    },
    do_authenticated_thing(data) {
        return store.getters.$http().post(API_BASE + "/data", data)
    }
}

export default api
