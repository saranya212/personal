(function () {
                    var setting = {"height":250,"width":420,"zoom":14,"queryString":"Koottilangadi, Kerala, India","place_id":"ChIJmRM9iWo1pjsRkUa1eRWSWIM","satellite":false,"centerCoord":[11.04246757011114,76.10617885000003],"cid":"0x8358921579b54691","lang":"en","cityUrl":"/india/malappuram-323874","cityAnchorText":"Map of Malappuram, South Kerala, India","id":"map-9cd199b9cc5410cd3b1ad21cab2e54d3","embed_id":"211678"};
                    var d = document;
                    var s = d.createElement('script');
                    s.src = 'https://1map.com/js/script-for-user.js?embed_id=211678';
                    s.async = true;
                    s.onload = function (e) {
                      window.OneMap.initMap(setting)
                    };
                    var to = d.getElementsByTagName('script')[0];
                    to.parentNode.insertBefore(s, to);
                  })();