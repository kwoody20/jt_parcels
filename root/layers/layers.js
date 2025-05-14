var wms_layers = [];


        var lyr_googlesatellite_0 = new ol.layer.Tile({
            'title': 'google satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_jt_parcels_1 = new ol.format.GeoJSON();
var features_jt_parcels_1 = format_jt_parcels_1.readFeatures(json_jt_parcels_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jt_parcels_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jt_parcels_1.addFeatures(features_jt_parcels_1);
var lyr_jt_parcels_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jt_parcels_1, 
                style: style_jt_parcels_1,
                popuplayertitle: 'jt_parcels',
                interactive: true,
                title: '<img src="styles/legend/jt_parcels_1.png" /> jt_parcels'
            });

lyr_googlesatellite_0.setVisible(true);lyr_jt_parcels_1.setVisible(true);
var layersList = [lyr_googlesatellite_0,lyr_jt_parcels_1];
lyr_jt_parcels_1.set('fieldAliases', {'gid': 'gid', 'lowparceli': 'lowparceli', 'hcad_num': 'hcad_num', 'currowner': 'currowner', 'locaddr': 'locaddr', 'city': 'city', 'zip': 'zip', 'parcel_typ': 'parcel_typ', 'stacked': 'stacked', 'mill_cd': 'mill_cd', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'acct': 'acct', 'tax year': 'tax year', 'property_use': 'property_use', 'market 1 dscr': 'market 1 dscr', 'market 2 dscr': 'market 2 dscr', 'yr_impr': 'yr_impr', 'yr_annexed': 'yr_annexed', 'splt_dt': 'splt_dt', 'total_land_area_sqft': 'total_land_area_sqft', 'total_land_area_acreage': 'total_land_area_acreage', 'market_land_val': 'market_land_val', 'building_value': 'building_value', 'extra_feature_value': 'extra_feature_value', 'tot_mkt_val': 'tot_mkt_val', 'prior_land_val': 'prior_land_val', 'prior_bld_val': 'prior_bld_val', 'prior_tot_mkt_val': 'prior_tot_mkt_val', 'total_new_construction_value': 'total_new_construction_value', 'total_bldng_replace_cost_value': 'total_bldng_replace_cost_value', 'rev_by': 'rev_by', 'new_own_dt': 'new_own_dt', 'lgl_1': 'lgl_1', 'jurs': 'jurs', 'neighborhood_desc': 'neighborhood_desc', 'ownership_duration': 'ownership_duration', 'mailto': 'mailto', 'mail_addr_1': 'mail_addr_1', 'mail_addr_2': 'mail_addr_2', 'mail_city': 'mail_city', 'mail_state': 'mail_state', 'mail_zip': 'mail_zip', });
lyr_jt_parcels_1.set('fieldImages', {'gid': 'Range', 'lowparceli': 'TextEdit', 'hcad_num': 'TextEdit', 'currowner': 'TextEdit', 'locaddr': 'TextEdit', 'city': 'TextEdit', 'zip': 'TextEdit', 'parcel_typ': 'TextEdit', 'stacked': 'Range', 'mill_cd': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'acct': 'TextEdit', 'tax year': 'TextEdit', 'property_use': 'TextEdit', 'market 1 dscr': 'TextEdit', 'market 2 dscr': 'TextEdit', 'yr_impr': 'TextEdit', 'yr_annexed': 'TextEdit', 'splt_dt': 'TextEdit', 'total_land_area_sqft': 'TextEdit', 'total_land_area_acreage': 'TextEdit', 'market_land_val': 'TextEdit', 'building_value': 'TextEdit', 'extra_feature_value': 'TextEdit', 'tot_mkt_val': 'TextEdit', 'prior_land_val': 'TextEdit', 'prior_bld_val': 'TextEdit', 'prior_tot_mkt_val': 'TextEdit', 'total_new_construction_value': 'TextEdit', 'total_bldng_replace_cost_value': 'TextEdit', 'rev_by': 'TextEdit', 'new_own_dt': 'TextEdit', 'lgl_1': 'TextEdit', 'jurs': 'TextEdit', 'neighborhood_desc': 'TextEdit', 'ownership_duration': 'Range', 'mailto': 'TextEdit', 'mail_addr_1': 'TextEdit', 'mail_addr_2': 'TextEdit', 'mail_city': 'TextEdit', 'mail_state': 'TextEdit', 'mail_zip': 'TextEdit', });
lyr_jt_parcels_1.set('fieldLabels', {'gid': 'hidden field', 'lowparceli': 'hidden field', 'hcad_num': 'hidden field', 'currowner': 'inline label - always visible', 'locaddr': 'inline label - always visible', 'city': 'inline label - always visible', 'zip': 'inline label - always visible', 'parcel_typ': 'hidden field', 'stacked': 'hidden field', 'mill_cd': 'hidden field', 'shape_leng': 'hidden field', 'shape_area': 'hidden field', 'acct': 'inline label - always visible', 'tax year': 'hidden field', 'property_use': 'hidden field', 'market 1 dscr': 'inline label - always visible', 'market 2 dscr': 'hidden field', 'yr_impr': 'hidden field', 'yr_annexed': 'hidden field', 'splt_dt': 'hidden field', 'total_land_area_sqft': 'hidden field', 'total_land_area_acreage': 'inline label - always visible', 'market_land_val': 'hidden field', 'building_value': 'hidden field', 'extra_feature_value': 'hidden field', 'tot_mkt_val': 'hidden field', 'prior_land_val': 'hidden field', 'prior_bld_val': 'hidden field', 'prior_tot_mkt_val': 'hidden field', 'total_new_construction_value': 'hidden field', 'total_bldng_replace_cost_value': 'hidden field', 'rev_by': 'hidden field', 'new_own_dt': 'inline label - always visible', 'lgl_1': 'hidden field', 'jurs': 'hidden field', 'neighborhood_desc': 'inline label - always visible', 'ownership_duration': 'inline label - always visible', 'mailto': 'inline label - always visible', 'mail_addr_1': 'inline label - always visible', 'mail_addr_2': 'hidden field', 'mail_city': 'hidden field', 'mail_state': 'hidden field', 'mail_zip': 'hidden field', });
lyr_jt_parcels_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});