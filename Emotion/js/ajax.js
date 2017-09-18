define(function() {
    return {
        get: function(request) {
            var oReq = new XMLHttpRequest();

            var url = request.url;
            var success = request.success;
            var error = request.error;

            oReq.onreadystatechange = function() {

                if (oReq.readyState == 4 && (oReq.status == 200 || oReq.status == 204)) {

                    if (typeof success == 'function') {
                        console.log('GET status: ' + oReq.status + ", Url: " + url);
                        success(oReq.responseText);
                    }

                } else if (oReq.readyState == 4) {
                    if (typeof error == 'function') {
                        console.log('GET status: ' + oReq.status + ", Url: " + url);
                        if(oReq.status == 429){
                            error(oReq.status, oReq.responseText);
                        }

                        error(oReq.status, oReq.responseText);
                    }
                }
            }

            oReq.open("get", url, true);

            switch (request.headerType) {
                case 1:
                    oReq.setRequestHeader("Content-type", "application/json");
                    break;
                case 2:
                    oReq.setRequestHeader("Content-type", "application/octet-stream");
                    break;

            }

            oReq.setRequestHeader("Ocp-Apim-Subscription-Key", request.key);

            oReq.send();
        },

        post: function(request) {
            var oReq = new XMLHttpRequest();

            var url = request.url;
            var success = request.success;
            var error = request.error;
            var body = request.body;

            oReq.onreadystatechange = function() {
                if (oReq.readyState == 4 && (oReq.status == 200 || oReq.status == 201 || oReq.status == 202)) {

                    if (typeof success == 'function') {
                        console.log('POST status: ' + oReq.status + ", Url: " + url);
                        success(JSON.parse(oReq.responseText));
                    }

                } else if (oReq.readyState == 4) {
                    if (typeof error == 'function') {
                        console.log('POST status: ' + oReq.status + ", Url: " + url);
                        error(oReq.status, JSON.parse(oReq.responseText));
                    }
                }
            }

            oReq.open("post", url, true);

            switch (request.headerType) {
                case 1:
                    oReq.setRequestHeader("Content-type", "application/json");
                    break;
                case 2:
                    oReq.setRequestHeader("Content-type", "application/octet-stream");
                    break;

            }
            oReq.setRequestHeader("Ocp-Apim-Subscription-Key", request.key);

            oReq.send(body);
        },

        put: function(request) {
            var oReq = new XMLHttpRequest();

            var url = request.url;
            var success = request.success;
            var error = request.error;
            // var head = request.head;
            var body = request.body;

            oReq.onreadystatechange = function() {
                if (oReq.readyState == 4 && oReq.status == 200) {

                    if (typeof success == 'function') {
                        console.log('PUT status: ' + oReq.status + ", Url: " + url);
                        success(oReq.responseText);
                    }

                } else if (oReq.readyState == 4) {
                    if (typeof error == 'function') {
                        console.log('PUT status: ' + oReq.status + ", Url: " + url);
                        error(oReq.status, oReq.responseText);
                    }
                }
            }

            oReq.open("put", url, true);

            switch (request.headerType) {
                case 1:
                    oReq.setRequestHeader("Content-type", "application/json");
                    break;
                case 2:
                    oReq.setRequestHeader("Content-type", "application/octet-stream");
                    break;

            }

            oReq.setRequestHeader("Ocp-Apim-Subscription-Key", request.key);

            oReq.send(body);
        },
        delete: function(request) {

            var oReq = new XMLHttpRequest();

            var url = request.url;
            var success = request.success;
            var error = request.error;

            oReq.onreadystatechange = function() {
                if (oReq.readyState == 4 && (oReq.status == 200 || oReq.status == 204)) {

                    if (typeof success == 'function') {
                        console.log('DELETE status: ' + oReq.status + ", Url: " + url);
                        success(oReq.responseText);
                    }

                } else if (oReq.readyState == 4) {
                    if (typeof error == 'function') {
                        console.log('DELETE status: ' + oReq.status + ", Url: " + url);
                        error(oReq.status, oReq.responseText);
                    }
                }
            }

            oReq.open("delete", url, true);

            switch (request.headerType) {
                case 1:
                    oReq.setRequestHeader("Content-type", "application/json");
                    break;
                case 2:
                    oReq.setRequestHeader("Content-type", "application/octet-stream");
                    break;

            }

            oReq.setRequestHeader("Ocp-Apim-Subscription-Key", request.key);

            oReq.send();
        }
    }

});
