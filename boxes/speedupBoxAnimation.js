alert('Injected');const cachedTimeout = window.setTimeout;window.setTimeout = function() {if ((arguments[0].toString() === `function(){document.addEventListener("mousedown",t.handleClick,!1)}` && arguments[1] === 3250)) {var rarityText = document.querySelector(".styles__rarityText___1PfSA-camelCase").innerHTML;if (rarityText === "Uncommon") {var timeToWait = 1100;} if (rarityText === "Rare") {var timeToWait = 1100;} if (rarityText === "Epic") {var timeToWait = 2500;} if (rarityText === "Legendary") {var timeToWait = 5000;}if (rarityText === "Chroma") {var timeToWait = 10000;}arguments[1] = timeToWait;}return cachedTimeout(...arguments);};const styleElement = document.createElement("style");styleElement.innerHTML = `.styles__mysteryBoxContainerOpen___3Kaky-camelCase {position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:300px;height:270px;padding-bottom:30px;display:flex;justify-content:center;align-items:center;box-shadow:0 0 8px 3px rgba(0,0,0,.2);font-family:TitanOne,sans-serif;color:#fff;font-size:225px;border-radius:7%;background-color:#0bc2cf;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;opacity:0;-webkit-animation:styles__open___1v-ch-camelCase 1s linear;animation:styles__open___1v-ch-camelCase 1s linear}.styles__unlockedBlook___2pr1Z-camelCase {font-size:47px;color:#fff;text-shadow:2px 2px 8px grey;top:calc(50% + 125px);width:100%;-webkit-animation:styles__fadeInCenter___1wf_p-camelCase 0.25s linear 1s forwards;animation:styles__fadeInCenter___1wf_p-camelCase 0.25s linear 1s forwards}.styles__rarityText___1PfSA-camelCase {font-size:34px;top:calc(50% + 190px);letter-spacing:.5px;text-shadow:-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000;-webkit-animation:styles__fadeInCenter___1wf_p-camelCase 0.35s linear 1s forwards;animation:styles__fadeInCenter___1wf_p-camelCase 0.35s linear 1s forwards}.styles__newUnlockText___3gnIw-camelCase {font-family:Nunito,sans-serif;font-size:44px;font-weight:700;text-align:center;color:#fff;text-shadow:2px 2px 8px grey;top:calc(50% - 215px);opacity:0;transform:translateX(-50%);-webkit-animation:styles__fadeInCenter___1wf_p-camelCase 0.25s linear 1s forwards;animation:styles__fadeInCenter___1wf_p-camelCase 0.25s linear 1s forwards}`;document.body.appendChild(styleElement)