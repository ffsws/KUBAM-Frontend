<settings>    
    <div class="settings-group">
            <fancy-input tag="KUBAM IP Address"
                inputid="settings-view-ip"
                placeholder={this.opts.store.getState().kubam_ip}>
            </fancy-input>
            <fancy-button  onclick={updateIP}>Update</fancy-button>    
<!--
            <fancy-dropdown inputid="actions" class="table-input">
                <option value="none">Actions</option>
                <option value="Edit selected hosts">Edit selected hosts</option>
                <option value="Delete select hosts">Delete select hosts</option>    
            </fancy-dropdown>
-->
        
            <div class="settings-container-big">
                <div class="table keywidthtablelimit">
                    <div class="tr">
                        <div class="th">Public Keys</div>
                        <div class="th actionwidth">Actions</div>
                    </div>
                    <div class="tr" each={k in this.opts.store.getState().keys}>
                        <div class="td">{k}</div>
                        <div class="td actionwidth">
                            <img src="./icons/edit.svg" class="table-icon">
                            <img src="./icons/delete.svg" data-id={k} onclick={deleteKey} class="table-icon">
                        </div>
                    </div>
                </div>
            </div>
    </div>
    
    <add-button onclick={addSetting}>
        Add Setting
    </add-button>

    
    <style>
        .settings-group {
            padding: 15px;
            margin-bottom: 10px;
            background-color: white;
        }
        
        fancy-input {
            position: relative;
            float: left;
            top: -10px;
        }
        
        fancy-button{
            position: relative;
            top: 10px;
         }
        
        .keywidthtablelimit {
            width: 100%;
            table-layout: fixed;
            word-wrap: break-word;
        }
    </style>
    
    <script>
        let store = this.opts.store
        
        store.dispatch({
            type: 'FETCH_IP'
        })
        
        store.dispatch({
            type: 'FETCH_KEYS'
        })
        
        let currentValue
        this.opts.store.subscribe(function(){
            let previousValue = currentValue;
            currentValue = store.getState()
            currentTab = window.location.hash.substr(1);
            if (JSON.stringify(previousValue) !== JSON.stringify(currentValue)) {
                if(currentTab == 'settings') {
                    riot.update();
                }
            }
        })
        
        updateIP() {
            var new_ip = document.getElementById('settings-view-ip').value
            store.dispatch({
                type: 'UPDATE_IP',
                data: {
                    kubam_ip: new_ip
                }
            })
        }
        
        addSetting() {
            var modal_title = document.getElementById('modal-title');
            var modal_content = document.getElementById('modal-content');
            
            modal_title.innerHTML = 'Add New Public Key'
            
            modal_content.innerHTML = '';
            var tag = document.createElement("new-setting");
            modal_content.append(tag)
            riot.mount(tag, 'new-setting');
            
            var modal_shadow = document.getElementById('modal-shadow')
            modal_shadow.style.display = 'table'
        }
        
        deleteKey(e) {
            ds = e.target.dataset;
            store.dispatch({
                type: 'DELETE_KEY',
                data: {
                    id: ds.id
                }
            })
        }
    </script>
    
</settings>
