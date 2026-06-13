var wms_layers = [];

var format_UnidadesVegetacionChubut_0 = new ol.format.GeoJSON();
var features_UnidadesVegetacionChubut_0 = format_UnidadesVegetacionChubut_0.readFeatures(json_UnidadesVegetacionChubut_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UnidadesVegetacionChubut_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesVegetacionChubut_0.addFeatures(features_UnidadesVegetacionChubut_0);
var lyr_UnidadesVegetacionChubut_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesVegetacionChubut_0, 
                style: style_UnidadesVegetacionChubut_0,
                popuplayertitle: 'UnidadesVegetacionChubut',
                interactive: true,
    title: 'UnidadesVegetacionChubut<br />\
    <img src="styles/legend/UnidadesVegetacionChubut_0_0.png" /> Bosque caducifolio de Nothofagus spp. y Selva pluvial templada<br />\
    <img src="styles/legend/UnidadesVegetacionChubut_0_1.png" /> Estepa arbustiva alta y graminoso arbustiva<br />\
    <img src="styles/legend/UnidadesVegetacionChubut_0_2.png" /> Estepa arbustiva baja<br />\
    <img src="styles/legend/UnidadesVegetacionChubut_0_3.png" /> Estepa arbustiva con Chuquiraga avellanedae<br />\
    <img src="styles/legend/UnidadesVegetacionChubut_0_4.png" /> Estepa arbustiva ecotonal con Chuquiraga avellanedae<br />\
    <img src="styles/legend/UnidadesVegetacionChubut_0_5.png" /> Estepa arbustiva serrana con Colliguaja integerrima<br />\
    <img src="styles/legend/UnidadesVegetacionChubut_0_6.png" /> Estepa arbustivo graminosa<br />\
    <img src="styles/legend/UnidadesVegetacionChubut_0_7.png" /> Estepa baja de Senecio algens y Oxalis compacta<br />\
    <img src="styles/legend/UnidadesVegetacionChubut_0_8.png" /> Estepa de Zigofilaceas de baja cobertura<br />\
    <img src="styles/legend/UnidadesVegetacionChubut_0_9.png" /> Estepa graminosa de Festuca pallescens<br />\
    <img src="styles/legend/UnidadesVegetacionChubut_0_10.png" /> <br />' });
var format_LocalidadesCHUBUT_1 = new ol.format.GeoJSON();
var features_LocalidadesCHUBUT_1 = format_LocalidadesCHUBUT_1.readFeatures(json_LocalidadesCHUBUT_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocalidadesCHUBUT_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalidadesCHUBUT_1.addFeatures(features_LocalidadesCHUBUT_1);
var lyr_LocalidadesCHUBUT_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LocalidadesCHUBUT_1, 
                style: style_LocalidadesCHUBUT_1,
                popuplayertitle: 'LocalidadesCHUBUT',
                interactive: true,
                title: '<img src="styles/legend/LocalidadesCHUBUT_1.png" /> LocalidadesCHUBUT'
            });
var format_RiosDelChubut_2 = new ol.format.GeoJSON();
var features_RiosDelChubut_2 = format_RiosDelChubut_2.readFeatures(json_RiosDelChubut_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiosDelChubut_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiosDelChubut_2.addFeatures(features_RiosDelChubut_2);
var lyr_RiosDelChubut_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiosDelChubut_2, 
                style: style_RiosDelChubut_2,
                popuplayertitle: 'RiosDelChubut',
                interactive: true,
                title: '<img src="styles/legend/RiosDelChubut_2.png" /> RiosDelChubut'
            });

lyr_UnidadesVegetacionChubut_0.setVisible(true);lyr_LocalidadesCHUBUT_1.setVisible(true);lyr_RiosDelChubut_2.setVisible(true);
var layersList = [lyr_UnidadesVegetacionChubut_0,lyr_LocalidadesCHUBUT_1,lyr_RiosDelChubut_2];
lyr_UnidadesVegetacionChubut_0.set('fieldAliases', {'CODIGO': 'CODIGO', 'REGION': 'REGION', 'DOMINIO': 'DOMINIO', 'UNID_FITOG': 'UNID_FITOG', 'NOMFISONOM': 'unidades de vegetacion', 'NOMVULGAR': 'NOMVULGAR', 'SUP_HA': 'SUP_HA', 'X': 'X', 'Y': 'Y', 'ROTATION': 'ROTATION', });
lyr_LocalidadesCHUBUT_1.set('fieldAliases', {'gid': 'gid', 'nombre_geo': 'localidades', 'tipo_asent': 'tipo_asent', 'codigo_ase': 'codigo_ase', 'nombre_agl': 'nombre_agl', 'codigo_agl': 'codigo_agl', 'nombre_dep': 'nombre_dep', 'codigo_ind': 'codigo_ind', 'nombre_pro': 'nombre_pro', 'codigo_in0': 'codigo_in0', 'latitud_gr': 'latitud_gr', 'longitud_g': 'longitud_g', 'latitud_g0': 'latitud_g0', 'longitud_0': 'longitud_0', 'fuente_de_': 'fuente_de_', });
lyr_RiosDelChubut_2.set('fieldAliases', {'RIO_PER_': 'RIO_PER_', 'NOMBRE': 'NOMBRE', 'CUENCA': 'CUENCA', });
lyr_UnidadesVegetacionChubut_0.set('fieldImages', {'CODIGO': 'TextEdit', 'REGION': 'TextEdit', 'DOMINIO': 'TextEdit', 'UNID_FITOG': 'TextEdit', 'NOMFISONOM': 'TextEdit', 'NOMVULGAR': 'TextEdit', 'SUP_HA': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'ROTATION': 'TextEdit', });
lyr_LocalidadesCHUBUT_1.set('fieldImages', {'gid': 'Range', 'nombre_geo': 'TextEdit', 'tipo_asent': 'TextEdit', 'codigo_ase': 'TextEdit', 'nombre_agl': 'TextEdit', 'codigo_agl': 'TextEdit', 'nombre_dep': 'TextEdit', 'codigo_ind': 'TextEdit', 'nombre_pro': 'TextEdit', 'codigo_in0': 'TextEdit', 'latitud_gr': 'TextEdit', 'longitud_g': 'TextEdit', 'latitud_g0': 'TextEdit', 'longitud_0': 'TextEdit', 'fuente_de_': 'TextEdit', });
lyr_RiosDelChubut_2.set('fieldImages', {'RIO_PER_': 'TextEdit', 'NOMBRE': 'TextEdit', 'CUENCA': 'Range', });
lyr_UnidadesVegetacionChubut_0.set('fieldLabels', {'CODIGO': 'hidden field', 'REGION': 'hidden field', 'DOMINIO': 'hidden field', 'UNID_FITOG': 'hidden field', 'NOMFISONOM': 'inline label - always visible', 'NOMVULGAR': 'hidden field', 'SUP_HA': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'ROTATION': 'hidden field', });
lyr_LocalidadesCHUBUT_1.set('fieldLabels', {'gid': 'hidden field', 'nombre_geo': 'inline label - always visible', 'tipo_asent': 'header label - visible with data', 'codigo_ase': 'hidden field', 'nombre_agl': 'hidden field', 'codigo_agl': 'hidden field', 'nombre_dep': 'hidden field', 'codigo_ind': 'hidden field', 'nombre_pro': 'hidden field', 'codigo_in0': 'hidden field', 'latitud_gr': 'hidden field', 'longitud_g': 'hidden field', 'latitud_g0': 'hidden field', 'longitud_0': 'hidden field', 'fuente_de_': 'hidden field', });
lyr_RiosDelChubut_2.set('fieldLabels', {'RIO_PER_': 'no label', 'NOMBRE': 'no label', 'CUENCA': 'no label', });
lyr_RiosDelChubut_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});