<hosts>
    
    <div class="svrGrpServers">
        <div class="top-actions">
            <fancy-dropdown inputid="actions" class="table-input">
                <option value="none">Actions</option>
                <option value="buildimage">Build Image</option>
                <option value="deploy">Deploy</option>    
            </fancy-dropdown>
        </div>

       <table-search></table-search>
        <div class="table">
            <div class="tr">
                <div class="th checkbox_width">
                    <input type="checkbox" id="select_all" onclick={changeSelection}>     
                </div>
                <div class="th">Server</div>
                <div class="th hostname_width">Hostname</div>
                <div class="th dropdown_width">Operating System</div>
                <div class="th dropdown_width">Network</div>
                <div class="th ip_width">Server IP</div>
            </div>
            <div class="tr" each={host in this.opts.store.getState().hosts}>
                <div class="td-host checkbox_width">
                    <input type="checkbox" class="hostcheckboxes">
                </div>
                <div class="td-host server">
                    <div style="float:left;">
                        <div>Servergroup</div>
                        <div>Servername</div>
                    </div>
                    <div style="background-color: limegreen; font-size: 0.8em; width: 85px; height: 22px; text-align: center; line-height: 22px; color: white; float: left; border-radius: 25px; margin-left: 10px;">DEPLOYED</div>
                </div>
                <div class="td-host hostname_width">
                    <input type="text" placeholder="{host.name}" />
                </div>
                <div id="os_drop" class="td-host dropdown_width">
                    <table-dropdown default="Not selected!" top="" add="">
                        <li>
                            <a data-os="win2016" data-role="generic" onclick={switch_os}>Windows 2016</a>
                        </li>
                        <li><a onclick={switch_os}>RedHat</a>
                            <ul>
                                <li><a onclick={switch_os}>No Kubernetes</a></li>
                                <li><a onclick={switch_os}>Kubernetes Master</a></li>
                                <li><a onclick={switch_os}>Kubernetes Worker</a></li>
                            </ul>
                        </li>
                        <li><a onclick={switch_os}>CentOS</a>
                            <ul>
                                <li><a onclick={switch_os}>No Kubernetes</a></li>
                                <li><a onclick={switch_os}>Kubernetes Master</a></li>
                                <li><a onclick={switch_os}>Kubernetes Worker</a></li>
                            </ul>
                        </li>
                    </table-dropdown>
                </div>
                <div id="nw_drop" class="td-host dropdown_width">
                    <table-dropdown default="Not selected!" top="" add="">
                        <li>
                            <a data-nw="Network1" onclick={switch_network}>Network1</a>
                        </li>
                        <li>
                            <a data-nw="Network2" onclick={switch_network}>Network2</a>
                        </li>
                    </table-dropdown>
                </div>
                <div class="td-host ip_width">
                    <input type="text" placeholder="{host.ip}" />
                </div>
            </div>
        </div>
        
    <add-button onclick={addHost}>Add Host</add-button>
    
    <script>
        let currentValue
        let store = this.opts.store
        
        addHost() {
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
        }
                
        passStore.dispatch({
            type: 'FETCH_HOSTS'
        })
        
        this.opts.store.subscribe(function(){
            let previousValue = currentValue;
            currentValue = store.getState()
            currentTab = window.location.hash.substr(1);
            if (JSON.stringify(previousValue) !== JSON.stringify(currentValue)) {
                if(currentTab == 'hosts') {
                    riot.update();
                }
            }
        })
        
        deleteHost(e) {
            ds = e.target.dataset;
            store.dispatch({
                type: 'DELETE_HOST',
                data: ds.hostname
            })
        }
        closeModal() {
            document.getElementById('modal-shadow').style.display = 'None';
        }

        changeSelection() {
            hostcheckboxes = document.getElementsByClassName('hostcheckboxes')
            topbox = document.getElementById('select_all')
            for(i=0;i<hostcheckboxes.length;i++) {
                if(topbox.checked==true){
                hostcheckboxes[i].checked = true
                }
                else{
                    hostcheckboxes[i].checked = false
                }
            }
        }
    </script>
    
    <style>
        /* BASE TABLE DESIGN */
        .td-host {
            padding: 0;
            font-size: 0.8em;
            display: table-cell;
            border: 1px solid #ecedf1;
            background-color: #FFF;
        }
        
        /* TABLE COLUMNS */
        .checkbox_width {
            width: 20px;
        }
        
        .td-host input[type=checkbox] {
            position: relative;
            left: 12px;
        }
        
        .server {
            padding: 0;
            padding-left: 8px;
            vertical-align: middle;
        }
        
        .hostname_width {
            width: 140px;
        }
        
        .ip_width {
            width: 120px;
        }
        
        .dropdown_width {
            width: 136px;
            line-height: 1px;
        }
        
        /* TABLE INPUT HOVER */
        .hostname_width input:hover, .ip_width input:hover {
            background-image: url('icons/edit.svg');
            background-repeat: no-repeat;
            background-position: right;
        }
        
        .hostname_width input:focus, ip_width input:focus {
            background-image: none;
        }

        
        
        
        
        
        .top-actions {
            margin-bottom: 15px;
        }
        
        .svrGrpSettings {
            background-color: white;
            padding: 25px;
            margin-bottom: 20px;
            clear: both;
            overflow:auto;
        }
        
        .svrGrpServers {
            background-color: white;
            padding: 20px;
            overflow: hidden;
            min-height: 400px;
        }
        
        .table input[type=text] {
            border: none;
            outline:0;
            height: 45px;
            width: 90%;
            line-height: 45px;
            padding: 0;
            padding-left: 8px;
            margin: 0;
            font-size: 1em;
            cursor: pointer;
        }
    </style>
</hosts>