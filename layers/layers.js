var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Indicadores_barrios_AMC_1 = new ol.format.GeoJSON();
var features_Indicadores_barrios_AMC_1 = format_Indicadores_barrios_AMC_1.readFeatures(json_Indicadores_barrios_AMC_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Indicadores_barrios_AMC_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Indicadores_barrios_AMC_1.addFeatures(features_Indicadores_barrios_AMC_1);
var lyr_Indicadores_barrios_AMC_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Indicadores_barrios_AMC_1, 
                style: style_Indicadores_barrios_AMC_1,
                popuplayertitle: 'Indicadores_barrios_AMC',
                interactive: false,
                title: '<img src="styles/legend/Indicadores_barrios_AMC_1.png" /> Indicadores_barrios_AMC'
            });
var format_Polgonos_Tursticos_2 = new ol.format.GeoJSON();
var features_Polgonos_Tursticos_2 = format_Polgonos_Tursticos_2.readFeatures(json_Polgonos_Tursticos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Polgonos_Tursticos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Polgonos_Tursticos_2.addFeatures(features_Polgonos_Tursticos_2);
var lyr_Polgonos_Tursticos_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Polgonos_Tursticos_2, 
                style: style_Polgonos_Tursticos_2,
                popuplayertitle: 'Polígonos_Turísticos ',
                interactive: true,
    title: 'Polígonos_Turísticos <br />\
    <img src="styles/legend/Polgonos_Tursticos_2_0.png" /> <br />\
    <img src="styles/legend/Polgonos_Tursticos_2_1.png" /> Cancha_Michaihue<br />\
    <img src="styles/legend/Polgonos_Tursticos_2_2.png" /> Cancha_Vega<br />\
    <img src="styles/legend/Polgonos_Tursticos_2_3.png" /> Cerro_Amarillo<br />\
    <img src="styles/legend/Polgonos_Tursticos_2_4.png" /> Club_Hípico<br />\
    <img src="styles/legend/Polgonos_Tursticos_2_5.png" /> E_Ester_Roa<br />\
    <img src="styles/legend/Polgonos_Tursticos_2_6.png" /> Ex_Coperhua<br />\
    <img src="styles/legend/Polgonos_Tursticos_2_7.png" /> L_Lo_Custodio<br />\
    <img src="styles/legend/Polgonos_Tursticos_2_8.png" /> L_Lo_Mendez<br />\
    <img src="styles/legend/Polgonos_Tursticos_2_9.png" /> Lagua_Las_T_Pascualas<br />\
    <img src="styles/legend/Polgonos_Tursticos_2_10.png" /> Laguna_Lo_Custodio<br />\
    <img src="styles/legend/Polgonos_Tursticos_2_11.png" /> Plaza_Belgica<br />\
    <img src="styles/legend/Polgonos_Tursticos_2_12.png" /> Plaza_Condell<br />\
    <img src="styles/legend/Polgonos_Tursticos_2_13.png" /> Plaza_Cruz<br />\
    <img src="styles/legend/Polgonos_Tursticos_2_14.png" /> Plaza_Homero<br />\
    <img src="styles/legend/Polgonos_Tursticos_2_15.png" /> Plaza_Indep_Ccp<br />\
    <img src="styles/legend/Polgonos_Tursticos_2_16.png" /> Plaza_Los_Bunkers<br />\
    <img src="styles/legend/Polgonos_Tursticos_2_17.png" /> Plaza_Thno<br />\
    <img src="styles/legend/Polgonos_Tursticos_2_18.png" /> Ruinas_Teatro_EMG<br />\
    <img src="styles/legend/Polgonos_Tursticos_2_19.png" /> Skatepark_LA<br />\
    <img src="styles/legend/Polgonos_Tursticos_2_20.png" /> Templo_CCP<br />\
    <img src="styles/legend/Polgonos_Tursticos_2_21.png" /> Laguna_Las_Tres_Pascualas<br />\
    <img src="styles/legend/Polgonos_Tursticos_2_22.png" /> Plaza independencia ccp<br />' });
var format_Puntos_turisticos_3 = new ol.format.GeoJSON();
var features_Puntos_turisticos_3 = format_Puntos_turisticos_3.readFeatures(json_Puntos_turisticos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntos_turisticos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntos_turisticos_3.addFeatures(features_Puntos_turisticos_3);
var lyr_Puntos_turisticos_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puntos_turisticos_3, 
                style: style_Puntos_turisticos_3,
                popuplayertitle: 'Puntos_turisticos',
                interactive: true,
    title: 'Puntos_turisticos<br />\
    <img src="styles/legend/Puntos_turisticos_3_0.png" /> Caleta_Alto_Del_Rey<br />\
    <img src="styles/legend/Puntos_turisticos_3_1.png" /> Cancha_La_Vega<br />\
    <img src="styles/legend/Puntos_turisticos_3_2.png" /> Cancha_Michaihue<br />\
    <img src="styles/legend/Puntos_turisticos_3_3.png" /> Club de Rehab.<br />\
    <img src="styles/legend/Puntos_turisticos_3_4.png" /> Club_Hipico<br />\
    <img src="styles/legend/Puntos_turisticos_3_5.png" /> Estadio_Ester_Roa<br />\
    <img src="styles/legend/Puntos_turisticos_3_6.png" /> Ex-Coperhua<br />\
    <img src="styles/legend/Puntos_turisticos_3_7.png" /> Gimnasio_Cndelaria<br />\
    <img src="styles/legend/Puntos_turisticos_3_8.png" /> Laguna_Lo_Mendez<br />\
    <img src="styles/legend/Puntos_turisticos_3_9.png" /> Laguna_Tres_Pascuala<br />\
    <img src="styles/legend/Puntos_turisticos_3_10.png" /> Mirador_Cerro_Amaril<br />\
    <img src="styles/legend/Puntos_turisticos_3_11.png" /> Mirador_Cerro_Manq<br />\
    <img src="styles/legend/Puntos_turisticos_3_12.png" /> Mirador_H_Rocuant<br />\
    <img src="styles/legend/Puntos_turisticos_3_13.png" /> Paseo_Morro_Thno<br />\
    <img src="styles/legend/Puntos_turisticos_3_14.png" /> Plaza Los Bunkers<br />\
    <img src="styles/legend/Puntos_turisticos_3_15.png" /> Plaza_Belgica<br />\
    <img src="styles/legend/Puntos_turisticos_3_16.png" /> Plaza_Condell<br />\
    <img src="styles/legend/Puntos_turisticos_3_17.png" /> Plaza_Cruz<br />\
    <img src="styles/legend/Puntos_turisticos_3_18.png" /> Plaza_De_Armas_Thno<br />\
    <img src="styles/legend/Puntos_turisticos_3_19.png" /> Plaza_Homero<br />\
    <img src="styles/legend/Puntos_turisticos_3_20.png" /> Plaza_Indep_Concepci<br />\
    <img src="styles/legend/Puntos_turisticos_3_21.png" /> Plaza_Lo_Custodio<br />\
    <img src="styles/legend/Puntos_turisticos_3_22.png" /> Ruinas_Teatro_EMG<br />\
    <img src="styles/legend/Puntos_turisticos_3_23.png" /> SkatePark_Lorenzo_A<br />\
    <img src="styles/legend/Puntos_turisticos_3_24.png" /> Templo_Concepcion<br />\
    <img src="styles/legend/Puntos_turisticos_3_25.png" /> <br />' });

lyr_ESRIGraylight_0.setVisible(true);lyr_Indicadores_barrios_AMC_1.setVisible(true);lyr_Polgonos_Tursticos_2.setVisible(true);lyr_Puntos_turisticos_3.setVisible(true);
var layersList = [lyr_ESRIGraylight_0,lyr_Indicadores_barrios_AMC_1,lyr_Polgonos_Tursticos_2,lyr_Puntos_turisticos_3];
lyr_Indicadores_barrios_AMC_1.set('fieldAliases', {'Id': 'Id', 'Nombre': 'Nombre', 'Area': 'Area', 'hab_m2': 'hab_m2', 'Sum_Poblac': 'Sum_Poblac', 'av_hab': 'av_hab', 'Long_tLic': 'Long_tLic', 'Long_tNLic': 'Long_tNLic', 'Suma_Trans': 'Suma_Trans', 'porc_cober': 'porc_cober', 'Distance': 'Distance', 'LongcicloK': 'LongcicloK', 'Long_rvial': 'Long_rvial', });
lyr_Polgonos_Tursticos_2.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'X': 'X', 'Y': 'Y', });
lyr_Puntos_turisticos_3.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'X': 'X', 'Y': 'Y', 'Categoría': 'Categoría', 'Calle': 'Calle', 'MS.N.M.': 'MS.N.M.', 'Calle Aled': 'Calle Aled', 'Video': 'Video', });
lyr_Indicadores_barrios_AMC_1.set('fieldImages', {'Id': 'Range', 'Nombre': 'TextEdit', 'Area': 'TextEdit', 'hab_m2': 'TextEdit', 'Sum_Poblac': 'Range', 'av_hab': 'TextEdit', 'Long_tLic': 'TextEdit', 'Long_tNLic': 'TextEdit', 'Suma_Trans': 'TextEdit', 'porc_cober': 'TextEdit', 'Distance': 'TextEdit', 'LongcicloK': 'TextEdit', 'Long_rvial': 'TextEdit', });
lyr_Polgonos_Tursticos_2.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Puntos_turisticos_3.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Categoría': 'TextEdit', 'Calle': 'Range', 'MS.N.M.': 'TextEdit', 'Calle Aled': 'TextEdit', 'Video': 'TextEdit', });
lyr_Indicadores_barrios_AMC_1.set('fieldLabels', {'Id': 'no label', 'Nombre': 'no label', 'Area': 'no label', 'hab_m2': 'no label', 'Sum_Poblac': 'no label', 'av_hab': 'no label', 'Long_tLic': 'no label', 'Long_tNLic': 'no label', 'Suma_Trans': 'no label', 'porc_cober': 'no label', 'Distance': 'no label', 'LongcicloK': 'no label', 'Long_rvial': 'no label', });
lyr_Polgonos_Tursticos_2.set('fieldLabels', {'id': 'no label', 'Nombre': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Puntos_turisticos_3.set('fieldLabels', {'id': 'no label', 'Nombre': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'Categoría': 'inline label - always visible', 'Calle': 'hidden field', 'MS.N.M.': 'inline label - always visible', 'Calle Aled': 'inline label - always visible', 'Video': 'inline label - always visible', });
lyr_Puntos_turisticos_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});