<content>
    <loading-spinner if="{this.opts.store.getState().isLoading}"></loading-spinner>
    
    <router>
        <!-- **** Dashboard **** -->
        <route path="/dashboard">
            <dashboard store={passStore}></dashboard>
        </route>
        
        <!-- **** Server Images **** -->
        <route path="/images">
            <serverimages-overview store={passStore}></serverimages-overview>
        </route>
        
        <!-- **** Infrastructure **** -->
        <route path="/infrastructure">
            <infra-overview store={passStore}></infra-overview>
        </route>
        
        <!-- **** Servers **** -->
        <route path="/servers">
            <server-overview store={passStore}></server-overview>
        </route>
        
        <route path="/servers/...">
            <servergroup-view></servergroup-view>
        </route>        
        
        <!-- **** Kubernetes **** -->
        <route path="/kubernetes">
            <kubernetes store={passStore}></kubernetes>
        </route>
        
        <!-- **** Feedback **** -->
        <route path="/feedback">
            <feedback store={passStore}></feedback>
        </route>
        
        <!-- **** Tutorial **** -->
        <route path="/tutorial">
            <tutorial store={passStore}></tutorial>
        </route>
    </router>
    
    <div id="modal-shadow" style="display:none;">
        <div id="modal-container">
            <div id="modal-box">
                <modal></modal>
            </div>
        </div>
    </div>
        
    <style>
        content {
            position: absolute;
            left: 200px;
            top: 50px;
            padding: 20px;
        }
        
        #modal-shadow {
            position: fixed;
            display: table;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            z-index: 9999;
            background-color: rgba(0,0,0,0.6);
        }
        
        #modal-container {
            display:table-cell;
            text-align:center;
            padding-top: 200px;
        }
        
        #modal-box {
            position: relative;
            display: inline-block;
            background-color: white;
            border-radius: 4px;
            padding: 34px;
        }
    </style>
    
    <script>
        passStore = this.opts.store
    </script>
</content>