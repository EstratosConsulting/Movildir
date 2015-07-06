
Ext.define('Movildir.controller.Business', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            dataList: '#dataList',
            listCard: '#listCard',
            mainNav: 'mainnav',
            detailCard: 'detailpanel'
        },

        control: {
            "#dataList": {
                itemtap: 'onListItemTap'
            },
            "detailpanel button[text='Llamar']": {
                tap: 'onCallButtonTap'
            },
            "detailpanel > map": {
                activate: 'onMapActivate'
            }
        }
    },

    onListItemTap: function(dataview, index, target, record, e, eOpts) {
        var map,
            info,
            details;

        if (record) {
            details = Ext.create('Movildir.view.DetailPanel', {
                title: 'Detalles'
            });

            // set the map
            map = details.child('#detailMap');
            map._record = record;

            // set the info
            info = details.child('#contact').child('#info');
            info.child('#photo').setData(record.data);
            info.child('#data').setData(record.data);

            this.getMainNav().push(details);
        }
    },

    onCallButtonTap: function(button, e, eOpts) {
        alert('Llamando');
    },

    onMapActivate: function(newActiveItem, container, oldActiveItem, eOpts) {
        var map = newActiveItem,
            record = map._record,
            lat = record.get('latitude'),
            lng = record.get('longitude'),
            centerMap = Ext.Function.createDelayed(function() {
                map.setMapOptions({
                    zoom: 18
                });
                map.setMapCenter({
                    latitude: lat,
                    longitude: lng
                });
            }, 250),
            geocoder, loc;

        if (lat && lng) {
            centerMap();
        } else {
            geocoder = this._geocoder || (this._geocoder = new google.maps.Geocoder());
            geocoder.geocode(
            {address: [
                record.get('address1'),
                record.get('address2'),
                record.get('address3'),
                record.get('city'),
                record.get('state_code'),
                record.get('zip')
            ].join(', ')},
            function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    loc = results[0].geometry.location;
                    lat = loc.lat();
                    lng = loc.lng();
                    record.set('latitude', lat);
                    record.set('longitude', lng);
                    centerMap();
                } else {
                    Ext.Msg.alert("Could not find location: " + status);
                }
            }
            );
        }

    },

    getLocation: function(callback) {
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                callback(position);
            }, function(error) {
                // give a warning for error
            });
        }
    },

    getBusinesses: function(location, callback) {
        // include API Key
        
        var store = Ext.data.StoreManager.lookup('BusinessStore'),
            movildirKey = '', // enter your key here
            
            url = 'Business.json' 
            //url = 'Business.json' +
            //'?ywsid=' + movildirKey +
            //'&term=business' +
            //'&lat=' + location.coords.latitude +
            //'&long=' + location.coords.longitude;
            ;
        store.getProxy().setUrl(url);
        
        store.load(function() {
            callback(store);
        });
    },

    launch: function() {
        var me = this;

        Ext.Viewport.setMasked({ message: 'Cargando...' });
        // get the location, then...
        me.getLocation(function (location) {

            // use webservice to locate the business
            me.getBusinesses(location, function (store) {

                // then bind data to list and show it
                me.getDataList().setStore(store);

                Ext.Viewport.setMasked(false);
            });
        });
    }

});