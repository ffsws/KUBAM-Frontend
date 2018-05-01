riot.tag2('add-button', '<div class="button-container"> <div class="plus-icon"></div> </div>', 'add-button .button-container,[data-is="add-button"] .button-container{ background-color: rgb(41,182,246); color: white; font-size: 28px; border-radius: 999px; width: 50px; height: 50px; cursor: pointer; position: fixed; right: 28px; bottom: 50px; } add-button .button-container:hover,[data-is="add-button"] .button-container:hover{ background-color: rgb(40, 153, 230); } add-button .plus-icon,[data-is="add-button"] .plus-icon{ height: 50px; width: 50px; background: url(\'icons/plus_icon.png\') no-repeat center center; }', '', function(opts) {
});
riot.tag2('app', '<top-bar store="{this.opts.store}"></top-bar> <side-bar store="{this.opts.store}"></side-bar> <content store="{this.opts.store}"></content>', '', '', function(opts) {
});
riot.tag2('content', '<loading-spinner if="{this.opts.store.getState().isLoading}"></loading-spinner> <router> <route path="/images"> <serverimages-overview store="{passStore}"></serverimages-overview> </route> <route path="/infrastructure"> <infra-overview store="{passStore}"></infra-overview> </route> <route path="/hosts"> <hosts store="{passStore}"></hosts> </route> <route path="/hosts/..."> <hosts store="{passStore}"></hosts> </route> <route path="/network"> <network store="{passStore}"></network> </route> <route path="/settings"> <settings store="{passStore}"></settings> </route> <route path="/feedback"> <feedback store="{passStore}"></feedback> </route> <route path="/tutorial"> <tutorial store="{passStore}"></tutorial> </route> </router> <div id="modal-shadow" style="display:none;"> <div id="modal-container"> <div id="modal-box"> <modal></modal> </div> </div> </div>', 'content { position: absolute; left: 200px; top: 50px; padding: 20px; } content #modal-shadow,[data-is="content"] #modal-shadow{ position: fixed; display: table; top: 0; left: 0; height: 100%; width: 100%; z-index: 9999; background-color: rgba(0,0,0,0.6); } content #modal-container,[data-is="content"] #modal-container{ display:table-cell; text-align:center; padding-top: 5%; } content #modal-box,[data-is="content"] #modal-box{ position: relative; display: inline-block; background-color: white; border-radius: 4px; padding: 34px; }', '', function(opts) {
        passStore = this.opts.store
});
riot.tag2('dashboard-box', '<div class="dashGrpBox"> <div class="dashGrpTitle"> {this.opts.name} </div> <div class="dashGrpStatus"> <div class="dashGrpStatBox {green: this.opts.green>0} {group-passive: this.opts.green==0}">{this.opts.green}</div> <div class="dashGrpStatBox {yellow: this.opts.yellow>0} {group-passive: this.opts.yellow==0}">{this.opts.yellow}</div> <div class="dashGrpStatBox {red: this.opts.red>0} {group-passive: this.opts.red==0}">{this.opts.red}</div> <div class="dashGrpStatBox {gray: this.opts.gray>0} {group-passive: this.opts.gray==0}">{this.opts.gray}</div> </div> </div>', 'dashboard-box .dashGrpBox,[data-is="dashboard-box"] .dashGrpBox{ width: 400px; background-color: white; box-shadow: 0 1px 3px 0px #cecece; border-radius: 5px; cursor: pointer; margin-bottom: 10px; margin-right: 20px; border: 2px solid white; position: relative; float: left; } dashboard-box .dashGrpTitle,[data-is="dashboard-box"] .dashGrpTitle{ height: 36px; line-height: 36px; border-bottom: 1px solid #d6d6d6; padding: 0 7px; position: relative; } dashboard-box .dashGrpStatus,[data-is="dashboard-box"] .dashGrpStatus{ height: 50px; line-height: 50px; } dashboard-box .dashGrpStatBox,[data-is="dashboard-box"] .dashGrpStatBox{ color: white; width: 80px; height: 34px; line-height: 34px; text-align: center; margin-top: 8px; margin-left: 16px; background-color: black; float: left; } dashboard-box .group-passive,[data-is="dashboard-box"] .group-passive{ background-color: rgb(220,220,220); } dashboard-box .green,[data-is="dashboard-box"] .green{ background-color: rgb(131, 209, 131); } dashboard-box .yellow,[data-is="dashboard-box"] .yellow{ background-color: rgb(255, 195, 91); } dashboard-box .red,[data-is="dashboard-box"] .red{ background-color: rgb(255, 160, 160); } dashboard-box .gray,[data-is="dashboard-box"] .gray{ background-color: rgb(168, 168, 168); }', '', function(opts) {
});  
riot.tag2('dashboard', '<div id="server-health"> <div class="servergroup clearfloat" each="{categories}"> <h1 class="categoryHeader serverCat">{type}</h1> <servergroup-box each="{group in groups}" id="{group.id}" name="{group.name}" green="{group.green}" yellow="{group.yellow}" red="{group.red}" gray="{group.gray}"> </servergroup-box> </div> </div>', 'dashboard ucs-content,[data-is="dashboard"] ucs-content{ padding: 10px; } dashboard .server-type,[data-is="dashboard"] .server-type{ font-size: 0.7em; font-style: italic; } dashboard .add-group,[data-is="dashboard"] .add-group{ font-size: 6.5em; color: rgb(41,182,246); } dashboard .svrGrpCreationDialog,[data-is="dashboard"] .svrGrpCreationDialog{ text-align: center; background-color: white; padding: 10px 50px; margin-bottom: 20px; } dashboard .svrGrpCreationDialog span,[data-is="dashboard"] .svrGrpCreationDialog span{ margin-right: 50px; } dashboard .servergroup,[data-is="dashboard"] .servergroup{ position: relative; overflow:auto; padding-bottom: 5px; }', '', function(opts) {

        categories = [
           {
               'type': '',
               'groups': [
                   {
                       'id': 1,
                       'name': 'Kubernetes',
                       'green': 20,
                       'yellow': 1,
                       'red': 1,
                       'gray': 2
                   }
               ]
           },
           {
               'type': '',
               'groups': [
                   {
                       'id': 4,
                       'name': 'Bare-metal Hypervisor Servers',
                       'green': 40,
                       'yellow': 2,
                       'red': 2,
                       'gray': 0
                   }
               ]
           },
           {
               'type': '',
               'groups': [
                   {
                       'id': 6,
                       'name': 'Bare-metal OS Servers',
                       'green': 2,
                       'yellow': 0,
                       'red': 0,
                       'gray': 0
                   }
               ]
           }
        ]

        this.createSvrGroup = function() {
            var promise = new Promise(function(resolve, reject) {

              if (true) {
                  setTimeout(resolve("Stuff worked!"), 5000000000);
              }
              else {
                reject(Error("It broke"));
              }
            });

            promise.then(function(y) {
                setTimeout(console.log(y), 5000);
            });

            var modal_title = document.getElementById('modal-title');
            var modal_content = document.getElementById('modal-content');

            modal_title.innerHTML = 'Add a new Servergroup'

            modal_content.innerHTML = '';
            var tag = document.createElement("new-servergroup");
            modal_content.append(tag)
            riot.mount(tag, 'new-servergroup');

            var modal_shadow = document.getElementById('modal-shadow')
            modal_shadow.style.display = 'table'
        }.bind(this)
});
riot.tag2('fancy-box', '<div class="fancy-box"> <yield></yield> </div>', 'fancy-box .fancy-box,[data-is="fancy-box"] .fancy-box{ background-color: #FFFFFF; box-shadow: 0 1px 3px 0px #cecece; box-sizing: border-box; float: left; width: 160px; height: 160px; line-height: 160px; border-radius: 5px; margin-right: 20px; text-align: center; vertical-align: middle; cursor: pointer; border: 2px solid rgb(255,255,255); } fancy-box .fancy-box:hover,[data-is="fancy-box"] .fancy-box:hover{ border: 2px solid rgb(41,182,246); box-shadow: 0 1px 3px 0px #29b6f6; } fancy-box .fancy-box:active,[data-is="fancy-box"] .fancy-box:active{ border: 2px solid rgb(41,182,246); box-shadow: 0 1px 3px 0px #29b6f6; }', '', function(opts) {
});
riot.tag2('fancy-button', '<button class="{opts.color}" type="button"> <yield></yield> </button>', 'fancy-button button,[data-is="fancy-button"] button{ background-color: rgb(41,182,246); color: #FFFFFF; border: none; height: 40px; line-height: 28px; font-size: 14px; font-weight: 100; margin: 5px; padding: 0 15px; min-width: 100px; border-radius: 12px; cursor: pointer; } fancy-button button:hover,[data-is="fancy-button"] button:hover{ background-color: rgb(40, 153, 230); color: #FFFFFF; border: none; } fancy-button button:active,[data-is="fancy-button"] button:active{ background-color: rgb(35, 140, 211); color: #FFFFFF; border: none; } fancy-button button:visited,[data-is="fancy-button"] button:visited{ background-color: rgb(35, 140, 211); color: #FFFFFF; border: none; } fancy-button button:focus,[data-is="fancy-button"] button:focus{ outline:0; } fancy-button .red,[data-is="fancy-button"] .red{ background-color: rgb(212, 0, 0); } fancy-button .red:hover,[data-is="fancy-button"] .red:hover{ background-color: rgb(190, 0, 0); } fancy-button .red:active,[data-is="fancy-button"] .red:active{ background-color: rgb(170, 0, 0); } fancy-button .gray,[data-is="fancy-button"] .gray{ background-color: rgb(150, 150, 150); } fancy-button .gray:hover,[data-is="fancy-button"] .gray:hover{ background-color: rgb(135, 135, 135); } fancy-button .gray:active,[data-is="fancy-button"] .gray:active{ background-color: rgb(135, 135, 135); }', '', function(opts) {
});
riot.tag2('fancy-dropdown', '<label for="{this.opts.inputid}">{this.opts.tag}</label> <select name="{this.opts.inputid}" id="{this.opts.inputid}"> <yield></yield> </select>', 'fancy-dropdown { margin: 10px; } fancy-dropdown select,[data-is="fancy-dropdown"] select,fancy-dropdown label,[data-is="fancy-dropdown"] label{ display:block; } fancy-dropdown select,[data-is="fancy-dropdown"] select{ color: #54596c; border: 1px solid #ccc; border-radius: 4px; font-size: 14px; width: 225px; padding: 12px; text-overflow: ellipsis; padding: 5px 10px; white-space: nowrap; -webkit-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1); -webkit-appearance: button; -webkit-padding-start: 12px; -webkit-user-select: none; background-image: url(\'./icons/select_arrow.png\'); background-position: 96% center; background-repeat: no-repeat; } fancy-dropdown select:hover,[data-is="fancy-dropdown"] select:hover,fancy-dropdown select:active,[data-is="fancy-dropdown"] select:active,fancy-dropdown select:focus,[data-is="fancy-dropdown"] select:focus{ outline: none; } fancy-dropdown label,[data-is="fancy-dropdown"] label{ font-size: 12px; color: #8089a2; margin-bottom: 2px; }', '', function(opts) {
});
riot.tag2('fancy-input', '<label for="{this.opts.inputid}">{this.opts.tag}</label> <input id="{this.opts.inputid}" name="{this.opts.inputid}" type="{this.opts.settype}">', 'fancy-input { margin: 10px; } fancy-input input,[data-is="fancy-input"] input,fancy-input label,[data-is="fancy-input"] label{ display:block; } fancy-input input,[data-is="fancy-input"] input{ padding: 12px; color: #54596c; border: 1px solid #ccc; border-radius: 4px; font-size: 14px; width: 200px; } fancy-input input:hover,[data-is="fancy-input"] input:hover,fancy-input input:active,[data-is="fancy-input"] input:active,fancy-input input:focus,[data-is="fancy-input"] input:focus{ outline: none; border: 1px solid #20B4F6; } fancy-input label,[data-is="fancy-input"] label{ font-size: 12px; color: #8089a2; margin-bottom: 2px; }', '', function(opts) {
});
riot.tag2('fancy-table', '<div class="table"><yield></yield></div>', 'fancy-table .table,[data-is="fancy-table"] .table,fancy-table .tr,[data-is="fancy-table"] .tr,fancy-table .th,[data-is="fancy-table"] .th,fancy-table .td,[data-is="fancy-table"] .td{ border: 1px solid #ecedf1; background-color: #FFF; } fancy-table .th,[data-is="fancy-table"] .th,fancy-table .td,[data-is="fancy-table"] .td{ padding: 12px; font-size: 0.8em; } fancy-table .th,[data-is="fancy-table"] .th{ background-color: #363c51; color: #FFF; font-weight: 100; }', '', function(opts) {
});
riot.tag2('fancy-textarea', '<label for="{this.opts.inputid}">{this.opts.tag}</label> <textarea rows="4" cols="60" name="{this.opts.inputid}" id="{this.opts.inputid}"></textarea>', 'fancy-textarea { margin: 10px; } fancy-textarea textarea,[data-is="fancy-textarea"] textarea,fancy-textarea label,[data-is="fancy-textarea"] label{ display:block; } fancy-textarea textarea,[data-is="fancy-textarea"] textarea{ padding: 12px; color: #54596c; border: 1px solid #ccc; border-radius: 4px; font-size: 14px; width: 200px; } fancy-textarea textarea:hover,[data-is="fancy-textarea"] textarea:hover,fancy-textarea textarea:active,[data-is="fancy-textarea"] textarea:active,fancy-textarea textarea:focus,[data-is="fancy-textarea"] textarea:focus{ outline: none; border: 1px solid #20B4F6; } fancy-textarea label,[data-is="fancy-textarea"] label{ font-size: 12px; color: #8089a2; margin-bottom: 2px; }', '', function(opts) {
});
riot.tag2('feedback', '<div class="container>"> <form> Thank you for your feedback. Your opinion is very important for us.<br> <hr> <fancy-input tag="Contact Information" inputid="feedback-contact"> </fancy-input> <fancy-textarea tag="Message" inputid="feedback-message"> </fancy-textarea> <fancy-button onclick="{send_feedback}">Send</fancy-button> </form> </div>', 'feedback form,[data-is="feedback"] form{ font-size: 14px; color:black; font-weight: 400; padding-top: 25px; padding-left: 45px; padding-right: 45px; padding-bottom: 25px; background-color: white; } feedback textarea,[data-is="feedback"] textarea{ vertical-align: top; } feedback select,[data-is="feedback"] select,feedback textarea,[data-is="feedback"] textarea{ width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; margin-top: 6px; margin-bottom: 16px; resize: vertical; } feedback fancy-button,[data-is="feedback"] fancy-button{ margin-left: -15px; }', '', function(opts) {
        this.send_feedback = function() {
            var instance = axios.create({
                baseURL: 'https://feedback.kubam.io/',
                timeout: 1000,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            user = document.getElementById('feedback-contact').value;
            message = document.getElementById('feedback-message').value;

            if(message != null) {
                out = 'Contact: ' + user || 'Not provided'
                out += ' \n '
                out += 'Message: ' + message
                console.log(out)

            instance.post('/v1/feedback', {
                message: out
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
            } else {
                console.error('NO MESSAGE DEFINED!')
            }
        }.bind(this)
});





riot.tag2('hosts', '<div class="svrGrpServers"> <div class="top-actions"> <fancy-dropdown inputid="actions" class="table-input"> <option value="none">Actions</option> <option value="buildimage">Build Image</option> <option value="deploy">Deploy</option> </fancy-dropdown> </div> <div class="table"> <div class="tr"> <div class="th">Select items<input type="checkbox"></div> <div class="th">Hostname</div> <div class="th">IP</div> <div class="th">Role</div> <div class="th">Server Group</div> <div class="th">Images</div> <div class="th">Network Group</div> </div> </div> </div> <add-button onclick="{addHost}">Add Host</add-button>', 'hosts .top-actions,[data-is="hosts"] .top-actions{ height: 55px; margin-bottom: 5px; } hosts fancy-dropdown,[data-is="hosts"] fancy-dropdown{ position: relative; top: 7px; float:left; } hosts fancy-button,[data-is="hosts"] fancy-button{ position: relative; left: 7px; float:left; } hosts servergroup-view,[data-is="hosts"] servergroup-view{ padding-bottom: 20px; } hosts .svrGrpSettings,[data-is="hosts"] .svrGrpSettings{ background-color: white; padding: 25px; margin-bottom: 20px; clear: both; overflow:auto; } hosts .table-input,[data-is="hosts"] .table-input{ margin: 0; } hosts .marginright25px,[data-is="hosts"] .marginright25px{ margin-right: 25px; } hosts .svrGrpServers,[data-is="hosts"] .svrGrpServers{ background-color: white; padding: 20px; overflow:auto; } hosts .filter-input,[data-is="hosts"] .filter-input{ background-color: white; padding: 10px; font-size: 0.9em; } hosts .filter-input input,[data-is="hosts"] .filter-input input{ border-width: 0 0 1px 0; border-color: gainsboro; border-style: solid; width: 400px; margin-bottom: 5px; } hosts .filter-input input:active,[data-is="hosts"] .filter-input input:active,hosts .filter-input input:focus,[data-is="hosts"] .filter-input input:focus{ border-color: rgb(41,182,246); } hosts .filter-input input:focus,[data-is="hosts"] .filter-input input:focus{ outline: none; }', '', function(opts) {

        this.addHost = function() {
            var modal_title = document.getElementById('modal-title');
            var modal_content = document.getElementById('modal-content');

            modal_title.innerHTML = 'Add a new Host'

            modal_content.innerHTML = '';
            var tag = document.createElement("new-host");
            modal_content.append(tag)
            store = this.opts.store
            riot.mount(tag, 'new-host', store);

            var modal_shadow = document.getElementById('modal-shadow')
            modal_shadow.style.display = 'table'
        }.bind(this)

        let store = this.opts.store

        store.dispatch({
            type: 'FETCH_HOSTS'
        })

        let currentValue
        this.opts.store.subscribe(function(){
            let previousValue = currentValue;
            currentValue = store.getState()
            currentTab = window.location.hash.substr(1);
            if (JSON.stringify(previousValue) !== JSON.stringify(currentValue)) {
                if(currentTab == 'images') {
                    riot.update();
                }
            }
        })

        this.closeModal = function() {
            document.getElementById('modal-shadow').style.display = 'None';
        }.bind(this)

});
riot.tag2('new-host', '<form> <fancy-input tag="Hostname" input-id="servergroup-new-hostname"></fancy-input> <fancy-input tag="IP" input-id="servergroup-new-ip"></fancy-input> <fancy-dropdown name="Role" tag="Role"> <option value="Master">Master</option> <option value="Worker">Worker</option> </fancy-dropdown><br> <fancy-dropdown name="Server Group" tag="Server Group"> <option value="option1">Option 1</option> <option value="option2">Option 2</option> </fancy-dropdown><br> <fancy-dropdown name="Images" tag="Images"> <option value="image1">Image 1</option> <option value="image2">Image 2</option> </fancy-dropdown><br> <fancy-dropdown name="Network Group" tag="Network Group"> <option value="networkgroup1">Network Group 1</option> <option value="networkgroup2">Network Group 2</option> </fancy-dropdown><br> </form> <fancy-button onclick="{addHost}">Create</fancy-button> <fancy-button color="gray" onclick="{closeModal}">Cancel</fancy-button>', 'new-host form,[data-is="new-host"] form{ text-align: left; }', '', function(opts) {

            this.addHost = function() {
            passStore.dispatch({
                type: 'ADD_HOST',
                data: {
                    'key': document.getElementById('settings-view-key').value
            }})
            this.closeModal()
        }.bind(this)

        this.closeModal = function() {
            document.getElementById('modal-shadow').style.display = 'None';
        }.bind(this)
});
riot.tag2('infra-overview', '<div class="infra-group"> <div class="infra-container-big"> <div class="table"> <div class="tr"> <div class="th"><input type="checkbox"> </div> <div class="th">Name</div> <div class="th">Description</div> <div class="th">Type</div> <div class="th">Health</div> <div class="th">Mgmt IP</div> <div class="th">Tenant</div> <div class="th">Action</div> </div> <div class="tr" each="{comp in this.opts.store.getState().infracomponents}"> <div class="td"><input type="checkbox"></div> <div class="td">{comp.name}</div> <div class="td">{comp.description}</div> <div class="td">{comp.type}</div> <div class="td">HEALTH</div> <div class="td">{comp.credentials.ip}</div> <div class="td">{comp.credentials.user}</div> <div class="td"> <img src="./icons/edit.svg" class="table-icon"> <img src="./icons/delete.svg" class="table-icon"> </div> </div> </div> </div> </div> <add-button onclick="{addController}">Add Controller</add-button>', 'infra-overview .tablewidth,[data-is="infra-overview"] .tablewidth{ width: 720px; } infra-overview .infra-group,[data-is="infra-overview"] .infra-group{ padding-bottom: 15px; } infra-overview .infra-container,[data-is="infra-overview"] .infra-container{ background-color: white; padding: 20px; } infra-overview .infra-container-big,[data-is="infra-overview"] .infra-container-big{ background-color: white; padding: 34px 20px; }', '', function(opts) {

        let currentValue
        let store = this.opts.store

        store.dispatch({
            type: 'FETCH_INFRA'
        })

        this.opts.store.subscribe(function(){
            let previousValue = currentValue;
            currentValue = store.getState()
            currentTab = window.location.hash.substr(1);
            if (JSON.stringify(previousValue) !== JSON.stringify(currentValue)) {
                if(currentTab == 'infrastructure') {
                    riot.update();
                }
            }
        })

        this.content=[
            {
                'type': 'UCS Manager',
                'health': 'UP',
                'ip': '64.101.169.13',
                'tenant': 'Michael M.',
                'model': 'UCS-M.6248UP',
                'firmware': '...',
                'description': 'Austria'
            },
            {
                'type': 'ACI',
                'health': 'DOWN',
                'ip': '64.101.169.13',
                'tenant': 'Lara',
                'model': '...',
                'firmware': '...',
                'description': 'Spain'
            }
        ]

        this.addController = function() {
            var modal_title = document.getElementById('modal-title');
            var modal_content = document.getElementById('modal-content');

            modal_title.innerHTML = 'Add a new Controller';

            modal_content.innerHTML = '';
            var tag = document.createElement("new-controller");
            modal_content.append(tag)
            passStore = this.opts.store
            riot.mount(tag, 'new-controller', passStore);

            var modal_shadow = document.getElementById('modal-shadow')
            modal_shadow.style.display = 'table'
        }.bind(this)
});
riot.tag2('new-controller', '<div> <fancy-dropdown tag="Type" inputid="srvgroup-new-type"> <option value="ucsm">UCS Manager</option> <option value="imc">UCS Standalone</option> <option value="aci">ACI Fabric</option> </fancy-dropdown> <fancy-input tag="Name" inputid="srvgroup-new-name"> </fancy-input> <fancy-input tag="Description" inputid="srvgroup-new-description"> </fancy-input> <fancy-input tag="IP Address" inputid="srvgroup-new-ip"> </fancy-input> <fancy-input tag="Username" inputid="srvgroup-new-username"> </fancy-input> <fancy-input tag="Password" inputid="srvgroup-new-password" settype="password"> </fancy-input> </div> <fancy-button onclick="{createSrvGroup}">Create</fancy-button> <fancy-button color="gray" onclick="{closeModal}">Cancel</fancy-button>', 'new-controller { text-align: left; }', '', function(opts) {
        this.closeModal = function() {
            document.getElementById('modal-shadow').style.display = 'None';
        }.bind(this)

        this.createSrvGroup = function() {
            passStore.dispatch({
                type: 'CREATE_SRVGROUP',
                data: {
                    'type': document.getElementById('srvgroup-new-type').value,
                    'name': document.getElementById('srvgroup-new-name').value,
                    'description': document.getElementById('srvgroup-new-description').value,
                    'credentials': {
                        'user': document.getElementById('srvgroup-new-username').value,
                        'password': document.getElementById('srvgroup-new-password').value,
                        'ip': document.getElementById('srvgroup-new-ip').value
                    }
                }
            })
            this.closeModal()
        }.bind(this)
});
riot.tag2('loading-spinner', '<img src="icons/loader.gif" alt="Loading">', 'loading-spinner img,[data-is="loading-spinner"] img{ margin-left: 15px; margin-top: 15px; }', '', function(opts) {
});
riot.tag2('modal', '<div> <div id="close-modal">x</div> <div id="modal-title"></div> <div id="modal-content"> <yield></yield> </div> </div>', 'modal #close-modal,[data-is="modal"] #close-modal{ position: absolute; right: 10px; top: 10px; display: inline-block; cursor: pointer; font-size: 1.05em; color: gray; } modal #modal-title,[data-is="modal"] #modal-title{ font-weight: 500; font-size: 18px; padding-top: 9px; padding-bottom: 18px; }', '', function(opts) {
        window.addEventListener('load',function(){
            document.getElementById("close-modal").addEventListener("click", closeModal);
        });

        function closeModal() {
            document.getElementById('modal-shadow').style.display = 'None';
        }
});
riot.tag2('network', '<add-button onclick="{addNetworkGroup}"> Add Network Group </add-button> <div class="network-group"> <div class="network-container-big"> <div class="table"> <div class="tr"> <div class="th">Network Name</div> <div class="th">Netmask</div> <div class="th">Router</div> <div class="th">Name Server</div> <div class="th">NTP Server</div> <div class="th">Proxy Server</div> <div class="th">VLAN</div> </div> <div class="tr" each="{nw in this.opts.store.getState().networks}"> <div class="td">{nw.name}</div> <div class="td">{nw.netmask}</div> <div class="td">{nw.gateway}</div> <div class="td">{nw.nameserver}</div> <div class="td">{nw.ntpserver}</div> <div class="td">{nw.proxy}</div> <div class="td">{nw.vlan}</div> </div> </div> </div> </div>', 'network .network-group,[data-is="network"] .network-group{ padding-bottom: 15px; background-color: white; padding: 20px; } network .network-container,[data-is="network"] .network-container{ background-color: white; padding: 20px; }', '', function(opts) {
        let currentValue
        let store = this.opts.store

        store.dispatch({
            type: 'FETCH_NETWORKGROUPS'
        })

        this.opts.store.subscribe(function(){
            let previousValue = currentValue;
            currentValue = store.getState()
            currentTab = window.location.hash.substr(1);
            if (JSON.stringify(previousValue) !== JSON.stringify(currentValue)) {
                if(currentTab == 'network') {
                    riot.update();
                }
            }
        })

        this.addNetworkGroup = function() {
            var modal_title = document.getElementById('modal-title');
            var modal_content = document.getElementById('modal-content');

            modal_title.innerHTML = 'Add a new Network group'

            modal_content.innerHTML = '';
            var tag = document.createElement("new-networkgroup");
            modal_content.append(tag)
            riot.mount(tag, 'new-networkgroup');

            var modal_shadow = document.getElementById('modal-shadow')
            modal_shadow.style.display = 'table'
        }.bind(this)
});

riot.tag2('new-networkgroup', '<form> <div class="network-container"> <fancy-input tag="Network Group Name" inputid="network-view-groupname"> </fancy-input> <fancy-input tag="Netmask" inputid="network-view-netmask"> </fancy-input> <fancy-input tag="Router" inputid="network-view-router"> </fancy-input> <fancy-input tag="Name Server" inputid="network-view-nameserver"> </fancy-input> <fancy-input tag="NTP Server" inputid="network-view-ntp"> </fancy-input> <fancy-input tag="Proxy Server (optional)" inputid="network-view-proxy"> </fancy-input> <fancy-input tag="VLAN (optional)" inputid="network-view-vlan"> </fancy-input> </div> </form> <fancy-button onclick="{createNetworkGroup}">Create</fancy-button> <fancy-button color="gray" onclick="{closeModal}">Cancel</fancy-button>', 'new-networkgroup form,[data-is="new-networkgroup"] form{ text-align: left; align-items: left; }', '', function(opts) {

        this.closeModal = function() {
            document.getElementById('modal-shadow').style.display = 'None';
        }.bind(this)

        this.createNetworkGroup = function() {
            passStore.dispatch({
                type: 'CREATE_NETWORKGROUP',
                data: {
                    'name': document.getElementById('network-view-groupname').value,
                    'netmask': document.getElementById('network-view-netmask').value,
                    'gateway': document.getElementById('network-view-router').value,
                    'nameserver': document.getElementById('network-view-nameserver').value,
                    'ntpserver': document.getElementById('network-view-ntp').value,
                    'proxy': document.getElementById('network-view-proxy').value,
                    'vlan': document.getElementById('network-view-vlan').value
                }
            })
            this.closeModal()
        }.bind(this)
});
riot.tag2('new-serverimage', '<form> <fancy-input tag="Name" inputid="mapping-name"> </fancy-input> <fancy-dropdown name="ISO" tag="ISO" inputid="mapping-iso"> <option each="{img in passStore.getState().isos}" riot-value="{img}">{img.substring(0,21)}...</option> </fancy-dropdown><br> </form> <fancy-button onclick="{createImageMapping}">Create</fancy-button> <fancy-button color="gray" onclick="{closeModal}">Cancel</fancy-button>', 'new-serverimage form,[data-is="new-serverimage"] form{ text-align: left; }', '', function(opts) {
        passStore.dispatch({
            type: 'FETCH_IMAGES'
        })

        this.closeModal = function() {
            document.getElementById('modal-shadow').style.display = 'None';
        }.bind(this)

        this.createImageMapping = function() {
            passStore.dispatch({
                type: 'CREATE_IMGMAPPING',
                data: {
                    'name': document.getElementById('mapping-name').value,
                    'iso': document.getElementById('mapping-iso').value
                }
            })
            this.closeModal()
        }.bind(this)
});
riot.tag2('serverimages-overview', '<div class="osgroup" hide="{this.opts.store.getState().isLoading}"> <div class="os-container"> <div class="table"> <div class="tr"> <div class="th">Name</div> <div class="th">ISO</div> <div class="th">Delete</div> </div> <div class="tr" each="{img in this.opts.store.getState().iso_map}"> <div class="td">{img.os}</div> <div class="td">{img.file}</div> <div class="td"> <img src="./icons/delete.svg" class="table-icon"> </div> </div> </div> </div> </div> <add-button onclick="{addServerimage}">Add new Image</add-button>', 'serverimages-overview .os-container,[data-is="serverimages-overview"] .os-container{ background-color: white; padding: 34px 20px; } serverimages-overview .osgroup,[data-is="serverimages-overview"] .osgroup{ margin-bottom: 25px; margin-right: 25px; float: left; } serverimages-overview .osselect,[data-is="serverimages-overview"] .osselect{ background-color: #363c51; font-size: 0.95em; color: white; border: 1px solid #ecedf1; padding: 10px; width: 580px; } serverimages-overview .centeralign,[data-is="serverimages-overview"] .centeralign{ text-align: center; } serverimages-overview .tablewidth,[data-is="serverimages-overview"] .tablewidth{ width: 600px; }', '', function(opts) {
        let store = this.opts.store

        store.dispatch({
            type: 'FETCH_MAPPINGS'
        })

        this.addServerimage = function() {
            var modal_title = document.getElementById('modal-title');
            var modal_content = document.getElementById('modal-content');

            modal_title.innerHTML = 'Add a new Image'

            modal_content.innerHTML = '';
            var tag = document.createElement("new-serverimage");
            modal_content.append(tag)
            passStore = this.opts.store
            riot.mount(tag, 'new-serverimage', passStore);

            var modal_shadow = document.getElementById('modal-shadow')
            modal_shadow.style.display = 'table'
        }.bind(this)

        let currentValue
        this.opts.store.subscribe(function(){
            let previousValue = currentValue;
            currentValue = store.getState()
            currentTab = window.location.hash.substr(1);
            if (JSON.stringify(previousValue) !== JSON.stringify(currentValue)) {
                if(currentTab == 'images') {
                    riot.update();
                }
            }
        })
});




riot.tag2('new-servergroup', '<div class="newSvrGrpInputs"> <fancy-dropdown tag="Type" input-id="servergroup-new-type"> <option value="kubernetes">Kubernetes</option> <option value="hypervisor">Bare-metal Hypervisor</option> <option value="pureos">Bare-metal OS</option> </fancy-dropdown> <fancy-input tag="Name" input-id="servergroup-new-name"> </fancy-input> </div> <fancy-button onclick="{createServerGroup}">Create</fancy-button> <fancy-button color="gray" onclick="{closeModal}">Cancel</fancy-button>', 'new-servergroup { text-align: left; } new-servergroup .newSvrGrpInputs,[data-is="new-servergroup"] .newSvrGrpInputs{ margin-bottom: 4px; }', '', function(opts) {
        this.closeModal = function() {
            document.getElementById('modal-shadow').style.display = 'None';
        }.bind(this)

        this.createServerGroup = function() {
            console.log('a')
        }.bind(this)
});
riot.tag2('server-overview', '<div id="server-list"> <div class="servergroup clearfloat" each="{categories}"> <h1 class="categoryHeader serverCat">{type}</h1> <servergroup-box onclick="route(\'hosts/{group.id}\')" each="{group in groups}" id="{group.id}" name="{group.name}" green="{group.green}" yellow="{group.yellow}" red="{group.red}" gray="{group.gray}"> </servergroup-box> </div> </div> <add-button onclick="{createSvrGroup}">Create new Server Group</add-button>', 'server-overview ucs-content,[data-is="server-overview"] ucs-content{ padding: 10px; } server-overview .server-type,[data-is="server-overview"] .server-type{ font-size: 0.7em; font-style: italic; } server-overview .add-group,[data-is="server-overview"] .add-group{ font-size: 6.5em; color: rgb(41,182,246); } server-overview .svrGrpCreationDialog,[data-is="server-overview"] .svrGrpCreationDialog{ text-align: center; background-color: white; padding: 10px 50px; margin-bottom: 20px; } server-overview .svrGrpCreationDialog span,[data-is="server-overview"] .svrGrpCreationDialog span{ margin-right: 50px; } server-overview .servergroup,[data-is="server-overview"] .servergroup{ position: relative; overflow:auto; padding-bottom: 5px; }', '', function(opts) {

        categories = [
           {
               'type': 'Kubernetes',
               'groups': [
                   {
                       'id': 1,
                       'name': 'Kub Prod',
                       'green': 20,
                       'yellow': 1,
                       'red': 1,
                       'gray': 2
                   },
                   {
                       'id': 2,
                       'name': 'Kub Test',
                        'green': 5,
                       'yellow': 0,
                       'red': 1,
                       'gray': 0
                   },
                   {
                       'id': 3,
                       'name': 'Kub Dev',
                       'green': 4,
                       'yellow': 0,
                       'red': 0,
                       'gray': 0
                   }
               ]
           },
           {
               'type': 'Bare-metal Hypervisor Servers',
               'groups': [
                   {
                       'id': 4,
                       'name': 'VMware 1',
                       'green': 40,
                       'yellow': 2,
                       'red': 2,
                       'gray': 0
                   },
                   {
                       'id': 5,
                       'name': 'VMware 2',
                       'green': 10,
                       'yellow': 0,
                       'red': 1,
                       'gray': 0
                   }
               ]
           },
           {
               'type': 'Bare-metal OS Servers',
               'groups': [
                   {
                       'id': 6,
                       'name': 'Legacy CentOS Accounting',
                       'green': 2,
                       'yellow': 0,
                       'red': 0,
                       'gray': 0
                   },
                   {
                       'id': 7,
                       'name': 'Legacy CentOS Production',
                       'green': 4,
                       'yellow': 4,
                       'red': 0,
                       'gray': 0
                   }
               ]
           }
        ]

        this.createSvrGroup = function() {
            var promise = new Promise(function(resolve, reject) {

              if (true) {
                  setTimeout(resolve("Stuff worked!"), 5000000000);
              }
              else {
                reject(Error("It broke"));
              }
            });

            promise.then(function(y) {
                setTimeout(console.log(y), 5000);
            });

            var modal_title = document.getElementById('modal-title');
            var modal_content = document.getElementById('modal-content');

            modal_title.innerHTML = 'Add a new Servergroup'

            modal_content.innerHTML = '';
            var tag = document.createElement("new-servergroup");
            modal_content.append(tag)
            riot.mount(tag, 'new-servergroup');

            var modal_shadow = document.getElementById('modal-shadow')
            modal_shadow.style.display = 'table'
        }.bind(this)
});
riot.tag2('servergroup-box', '<div class="svrGrpBox"> <div class="svrGrpTitle"> {this.opts.name} </div> <div class="svrGrpStatus"> <div class="svrGrpStatBox {green: this.opts.green>0} {group-passive: this.opts.green==0}">{this.opts.green}</div> <div class="svrGrpStatBox {yellow: this.opts.yellow>0} {group-passive: this.opts.yellow==0}">{this.opts.yellow}</div> <div class="svrGrpStatBox {red: this.opts.red>0} {group-passive: this.opts.red==0}">{this.opts.red}</div> <div class="svrGrpStatBox {gray: this.opts.gray>0} {group-passive: this.opts.gray==0}">{this.opts.gray}</div> </div> </div>', 'servergroup-box .svrGrpBox,[data-is="servergroup-box"] .svrGrpBox{ width: 400px; background-color: white; box-shadow: 0 1px 3px 0px #cecece; border-radius: 5px; cursor: pointer; margin-bottom: 10px; margin-right: 20px; border: 2px solid white; position: relative; float: left; } servergroup-box .svrGrpBox:hover,[data-is="servergroup-box"] .svrGrpBox:hover{ border: 2px solid #b5b5b5; box-shadow: 0 1px 3px 0px #b5b5b5; } servergroup-box .svrGrpBox:active,[data-is="servergroup-box"] .svrGrpBox:active{ border: 2px solid #b5b5b5; box-shadow: 0 1px 3px 0px #b5b5b5; } servergroup-box .svrGrpTitle,[data-is="servergroup-box"] .svrGrpTitle{ height: 36px; line-height: 36px; border-bottom: 1px solid #d6d6d6; padding: 0 7px; position: relative; } servergroup-box .svrGrpStatus,[data-is="servergroup-box"] .svrGrpStatus{ height: 50px; line-height: 50px; } servergroup-box .svrGrpStatBox,[data-is="servergroup-box"] .svrGrpStatBox{ color: white; width: 80px; height: 34px; line-height: 34px; text-align: center; margin-top: 8px; margin-left: 16px; background-color: black; float: left; } servergroup-box .group-passive,[data-is="servergroup-box"] .group-passive{ background-color: rgb(220,220,220); } servergroup-box .green,[data-is="servergroup-box"] .green{ background-color: rgb(131, 209, 131); } servergroup-box .yellow,[data-is="servergroup-box"] .yellow{ background-color: rgb(255, 195, 91); } servergroup-box .red,[data-is="servergroup-box"] .red{ background-color: rgb(255, 160, 160); } servergroup-box .gray,[data-is="servergroup-box"] .gray{ background-color: rgb(168, 168, 168); }', '', function(opts) {
});
riot.tag2('servergroup-view', '<h1 class="categoryHeader">GROUPNAME</h1> <div class="svrGrpSettings"> <fancy-input tag="Subnet" inputid="servergroup-view-subnet" class="floatleft marginright25px"> </fancy-input> <fancy-input tag="Netmask" inputid="servergroup-view-netmask" class="floatleft marginright25px"> </fancy-input> <fancy-input tag="VLAN" inputid="servergroup-view-vlan" class="floatleft marginright25px"> </fancy-input> <fancy-input tag="Router" inputid="servergroup-view-router" class="floatleft marginright25px"> </fancy-input> <fancy-input tag="Nameserver" inputid="servergroup-view-nameserver" class="floatleft marginright25px"> </fancy-input> <fancy-input tag="NTP Server" inputid="servergroup-view-ntpserver" class="floatleft marginright25px"> </fancy-input> <fancy-input tag="Kubernetes Cluster [KUB]" inputid="servergroup-view-kubernetes" class="floatleft marginright25px"> </fancy-input> <fancy-dropdown tag="Operating System [KUB+BM]" inputid="servergroup-view-os" class="floatleft marginright25px"> <option value="volvo">Pick an OS</option> </fancy-dropdown> <fancy-dropdown tag="Hypervisor [HYP]" inputid="servergroup-view-hypervisor" class="floatleft marginright25px"> <option value="volvo">Pick a hypervisor</option> </fancy-dropdown> </div> <div class="svrGrpServers"> <table-search></table-search> <div class="table"> <div class="tr"> <div class="th"><input type="checkbox"></div> <div class="th">Hostname</div> <div class="th">IP</div> <div class="th">Role [KUB]</div> <div class="th">UCS Server</div> <div class="th">Action</div> </div> <div class="tr" each="{servers}"> <div class="td"> <input type="checkbox"> </div> <div class="td"> <fancy-input inputid="servergroup-view-table-hostname" class="table-input"> </fancy-input> </div> <div class="td"> <fancy-input inputid="servergroup-view-table-hostname" class="table-input"> </fancy-input> </div> <div class="td"> <fancy-dropdown inputid="servergroup-view-table-role" class="table-input"> <option value="none">Pick a Role</option> <option value="master">Master</option> <option value="worker">Worker</option> </fancy-dropdown> </div> <div class="td"> SERVER </div> <div class="td"> <img src="./icons/build.svg" class="table-icon"> <img src="./icons/deploy.svg" class="table-icon"> <img src="./icons/delete.svg" class="table-icon"> </div> </div> </div> <fancy-button> Commit </fancy-button> <add-button></add-button> </div>', 'servergroup-view { padding-bottom: 20px; } servergroup-view .svrGrpSettings,[data-is="servergroup-view"] .svrGrpSettings{ background-color: white; padding: 25px; margin-bottom: 20px; clear: both; overflow:auto; } servergroup-view .table-input,[data-is="servergroup-view"] .table-input{ margin: 0; } servergroup-view .marginright25px,[data-is="servergroup-view"] .marginright25px{ margin-right: 25px; } servergroup-view .svrGrpServers,[data-is="servergroup-view"] .svrGrpServers{ background-color: white; padding: 20px; overflow:auto; } servergroup-view .filter-input,[data-is="servergroup-view"] .filter-input{ background-color: white; padding: 10px; font-size: 0.9em; } servergroup-view .filter-input input,[data-is="servergroup-view"] .filter-input input{ border-width: 0 0 1px 0; border-color: gainsboro; border-style: solid; width: 400px; margin-bottom: 5px; } servergroup-view .filter-input input:active,[data-is="servergroup-view"] .filter-input input:active,servergroup-view .filter-input input:focus,[data-is="servergroup-view"] .filter-input input:focus{ border-color: rgb(41,182,246); } servergroup-view .filter-input input:focus,[data-is="servergroup-view"] .filter-input input:focus{ outline: none; }', '', function(opts) {
        servers = ['a','b','a','b','a','b','a','b','a','b','a','b','a','b','a','b','a','b','a','b','a','b','a','b','a','b','a','b','a','b','a','b','a','b','a','b','a','b','a','b','a','b','a','b','a','b','a','b','a','b']
});
riot.tag2('new-setting', '<div class="settings-container"> <fancy-input tag="KUBAM IP Address" inputid="settings-view-ip"> </fancy-input> <fancy-input tag="Public Key" inputid="settings-view-key"> </fancy-input> </div> <fancy-button onclick="{addPublicKey}">Create</fancy-button> <fancy-button color="gray" onclick="{closeModal}">Cancel</fancy-button>', 'new-setting .settings-container,[data-is="new-setting"] .settings-container{ text-align: left; align-items: left; }', '', function(opts) {
        this.closeModal = function() {
            document.getElementById('modal-shadow').style.display = 'None';
        }.bind(this)

        this.addPublicKey = function() {
            passStore.dispatch({
                type: 'ADD_PUBLICKEY',
                data: {
                    'key': document.getElementById('settings-view-key').value
            }})
            this.closeModal()
        }.bind(this)
});
riot.tag2('settings', '<div class="settings-group"> <div class="settings-container-big"> <div class="table"> <div class="tr"> <div class="th">Public Key</div> </div> <div class="tr" each="{setting in this.opts.store.getState().settings}"> <div class="td">{public_key}</div> </div> </div> </div> </div> <add-button onclick="{addSetting}"> Add Setting </add-button>', 'settings .settings-group,[data-is="settings"] .settings-group{ padding: 15px; margin-bottom: 10px; background-color: white; } settings fancy-input,[data-is="settings"] fancy-input{ position: relative; float: left; top: -10px; } settings fancy-button,[data-is="settings"] fancy-button{ position: relative; top: 10px; }', '', function(opts) {
        this.addSetting = function() {
            var modal_title = document.getElementById('modal-title');
            var modal_content = document.getElementById('modal-content');

            modal_title.innerHTML = 'Add Settings'

            modal_content.innerHTML = '';
            var tag = document.createElement("new-setting");
            modal_content.append(tag)
            riot.mount(tag, 'new-setting');

            var modal_shadow = document.getElementById('modal-shadow')
            modal_shadow.style.display = 'table'
        }.bind(this)
});
riot.tag2('side-bar', '<div each="{menu}" onclick="route(\'{route}\')" class="sidebar-item" id="{route}-selector"> <div class="colorbar" style="background-color: #363c52;"></div> <img class="sidebar-image" riot-src="{img}"> <div class="sidebar-title">{title}</div> </div>', 'side-bar{ background-color: #363c52; color: white; width: 200px; height: 100%; position: fixed; z-index: 10; top: 0; left: 0; padding-top: 50px; } side-bar .sidebar-item,[data-is="side-bar"] .sidebar-item{ float: none; font-size:0.95em; height: 42px; line-height: 32px; cursor: pointer; } side-bar .sidebar-item:hover,[data-is="side-bar"] .sidebar-item:hover{ background-color: rgba(255,255,255,0.06); } side-bar .colorbar,[data-is="side-bar"] .colorbar{ width: 4px; height: 42px; float: left; top: 0; } side-bar .sidebar-image,[data-is="side-bar"] .sidebar-image{ float: left; padding-right: 5px; width: 18px; height: 18px; padding-top: 12px; padding-left: 14px; padding-right: 14px; } side-bar .sidebar-title,[data-is="side-bar"] .sidebar-title{ padding-top: 5px; }', '', function(opts) {
        menu=[
            { title: "Hosts", img:"./icons/host.png", route:"hosts" },
            { title: "Network",img:"./icons/network.png", route:"network" },
            { title: "Images",img:"./icons/serverimage.png", route:"images" },
            { title: "Infrastructure", img:"./icons/ucs.png", route:"infrastructure" },
            { title: "Settings", img:"./icons/settings.png", route:"settings" },
            { title: "Feedback", img:"./icons/feedback.png", route:"feedback" }
        ];

        route(function(id) {
            colorbars = document.getElementsByClassName('colorbar')

            for(i=0;i<colorbars.length;i++) {
                colorbars[i].style.backgroundColor = '';
            }

            for(i=0;i<menu.length;i++) {
                el = document.getElementById(menu[i].route + '-selector');
                el.style.backgroundColor = '';
            }

            if(id=="") {
                id = "images"
            }

            if(id=="tutorial") {

            } else {
                id = id + '-selector'
                parent = document.getElementById(id)

                parent.style.backgroundColor = 'rgba(255,255,255,0.1)'

                target = parent.getElementsByClassName("colorbar")[0];
                target.style.backgroundColor = '#2ab6f6';
            }
        })
});




riot.tag2('table-search', '<div class="table-search-container"> <img src="./icons/search.png"> <input type="text" class="search form-control" placeholder="Search"> </div>', 'table-search .table-search-container,[data-is="table-search"] .table-search-container{ margin-bottom: 2px; } table-search input,[data-is="table-search"] input{ border: none; border-bottom: 1px solid gray; font-size: 14px; width: 80%; } table-search input:focus,[data-is="table-search"] input:focus{ outline: none; } table-search img,[data-is="table-search"] img{ margin-left: 8px; margin-bottom: -4px; height: 16px; width: 16px; }', '', function(opts) {
});
riot.tag2('top-bar', '<div id="top-bar"> <div id="logo"> KUBAM </div> <div id="currentpage"> <router> <route path="network..">Network Groups</route> <route path="images..">Server Images</route> <route path="infrastructure..">Infrastructure</route> <route path="hosts..">Hosts</route> <route path="settings..">Settings</route> <route path="tutorial..">Tutorial</route> <route path="feedback..">Feedback</route> </router> </div> <div id="topright"> <div id="tutorial" onclick="route(\'tutorial\')"></div> <div id="github" onclick="window.open(\'https://github.com/CiscoUcs/KUBaM\')"></div> </div> </div>', 'top-bar #top-bar,[data-is="top-bar"] #top-bar{ background-color: #292d3e; color: white; height: 50px; line-height: 50px; position: fixed; left:0; z-index: 20; width: 100%; } top-bar #logo,[data-is="top-bar"] #logo{ background: url(./icons/cisco.png) no-repeat center left 28px; background-color: rgba(0,0,0,0.28); width: 100px; height: 50px; line-height: 55px; font-size: 1em; vertical-align: middle; padding-left: 100px; float: left; } top-bar #currentpage,[data-is="top-bar"] #currentpage{ margin-left: 228px; font-size: 0.8em; line-height: 52px; } top-bar #topright,[data-is="top-bar"] #topright{ position: absolute; top: 0; right: 0; height: 50px; border-left: 1px solid rgba(255,255,255,0.2); } top-bar #tutorial,[data-is="top-bar"] #tutorial{ cursor: pointer; background: url(./icons/tutorial.png) no-repeat center center; width: 24px; height: 50px; padding-left: 12px; padding-right: 12px; float: left; border-right: 1px solid rgba(255,255,255,0.2); } top-bar #github,[data-is="top-bar"] #github{ cursor: pointer; background: url(./icons/github.png) no-repeat center center; width: 24px; height: 50px; padding-left: 12px; padding-right: 12px; float: left; }', '', function(opts) {
});
riot.tag2('tutorial', '<form> <h5>Welcome to KUBAM. In the following links you will find all the necessary information to get started using our project.</h5> <hr> <div> <b>Youtube Demo:</b> <fancy-button class="btn btn-success" onclick=" window.open(\'http://www.youtube.com/watch?v=7QCrml8C-QI\',\'_blank\')"> Go </fancy-button> <hr> <b>dCloud Tutorial. Lab Steps:</b> <fancy-button class="btn btn-success" onclick=" window.open(\'https://github.com/vallard/KUBAM-Tutorial/blob/master/README.md\',\'_blank\')"> Go </fancy-button> <hr> <b>dCloud: Cisco Unified Computing System 3.2 v1 - DEV:</b> <fancy-button class="btn btn-success" onclick=" window.open(\'https://dcloud2-lon.cisco.com/dashboard/sessions\',\'_blank\')"> Go </fancy-button> <hr> <h5> Please, make sure to schedule the lab properly and once it is scheduled, click on View to start it. We hope you enjoy your KUBaM experience! </h5> </div> </form>', 'tutorial-content{ padding: 10px; position: fixed; } tutorial h5,[data-is="tutorial"] h5{ font-size: 12px; color:gray; font-weight: 400; padding-top: 5px; background-color: white; padding-left: 7px; padding-right: 7px; } tutorial form,[data-is="tutorial"] form{ margin-top: 8px; text-align: left; vertical-align: left; background-color: white; padding-top: 30px; padding-left: 45px; padding-right: 45px; padding-bottom: 30px; font-size: 14px; } tutorial fancy-button,[data-is="tutorial"] fancy-button{ margin-left: 10px; }', '', function(opts) {
});