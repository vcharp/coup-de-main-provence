/* Zone d'intervention de Coup de Main Provence, partagée par index.html et devis.html.
   Communes dont le chef-lieu est à 30 minutes de voiture ou moins du centre d'Avignon, d'Aix-en-Provence ou de Marseille,
   hors embouteillages (temps OSRM sur OpenStreetMap, calculés le 20/10/2026),
   plus Cavaillon et ses voisines depuis le 29/10/2026.
   « En limite » : de 30 à 36 minutes. */
(function(){
  var HUBS=[{nom:'Avignon',lat:43.9493,lon:4.8059},{nom:'Aix-en-Provence',lat:43.5263,lon:5.4474},{nom:'Marseille',lat:43.2965,lon:5.3880}];
  /* [commune, latitude, longitude du chef-lieu] */
  var AVIGNON=[
    ["Avignon", 43.9493, 4.8053],
    ["Carpentras", 44.0556, 5.0488],
    ["Orange", 44.1375, 4.8072],
    ["Sorgues", 44.007, 4.8778],
    ["Le Pontet", 43.9591, 4.8638],
    ["Châteaurenard", 43.8821, 4.8556],
    ["Beaucaire", 43.8072, 4.6443],
    ["Tarascon", 43.806, 4.6575],
    ["Monteux", 44.0345, 4.9953],
    ["Villeneuve-lès-Avignon", 43.9637, 4.7972],
    ["Vedène", 43.978, 4.9041],
    ["Morières-lès-Avignon", 43.9426, 4.9052],
    ["Entraigues-sur-la-Sorgue", 44.0036, 4.9277],
    ["Les Angles", 43.9545, 4.7737],
    ["Le Thor", 43.9283, 4.9932],
    ["Rochefort-du-Gard", 43.9751, 4.6904],
    ["Courthézon", 44.0903, 4.883],
    ["Noves", 43.8754, 4.9018],
    ["Sarrians", 44.0831, 4.9719],
    ["Bédarrides", 44.0411, 4.8979],
    ["Caumont-sur-Durance", 43.8931, 4.9446],
    ["Roquemaure", 44.052, 4.7788],
    ["Saint-Saturnin-lès-Avignon", 43.9563, 4.9297],
    ["Jonquières", 44.1153, 4.9001],
    ["Graveson", 43.8511, 4.7733],
    ["Cabannes", 43.8605, 4.948],
    ["Eyragues", 43.8411, 4.8422],
    ["Barbentane", 43.8996, 4.7469],
    ["Rognonas", 43.8981, 4.803],
    ["Aramon", 43.8895, 4.6798],
    ["Pujaut", 44.0058, 4.7764],
    ["Châteauneuf-de-Gadagne", 43.9277, 4.944],
    ["Saint-Andiol", 43.8365, 4.9441],
    ["Montfrin", 43.8773, 4.5923],
    ["Saint-Laurent-des-Arbres", 44.0535, 4.6988],
    ["Althen-des-Paluds", 44.0051, 4.9572],
    ["Maillane", 43.8322, 4.7818],
    ["Caderousse", 44.1024, 4.757],
    ["Saint-Étienne-du-Grès", 43.7812, 4.7312],
    ["Loriol-du-Comtat", 44.0763, 5.0001],
    ["Remoulins", 43.9395, 4.5642],
    ["Saze", 43.9415, 4.6812],
    ["Tavel", 44.0135, 4.6983],
    ["Châteauneuf-du-Pape", 44.0563, 4.8316],
    ["Sauveterre", 44.0248, 4.7937],
    ["Saint-Geniès-de-Comolas", 44.0648, 4.7226],
    ["Comps", 43.8535, 4.6053],
    ["Jonquerettes", 43.9467, 4.9329],
    ["Boulbon", 43.8628, 4.6935],
    ["Montfaucon", 44.074, 4.7539],
    ["Vallabrègues", 43.8535, 4.6284],
    ["Saint-Hilaire-d'Ozilhan", 43.9701, 4.5913],
    ["Théziers", 43.8986, 4.6208],
    ["Fournès", 43.9265, 4.5999],
    ["Domazan", 43.929, 4.6514],
    ["Lirac", 44.0351, 4.6908],
    ["Saint-Bonnet-du-Gard", 43.9283, 4.5441],
    ["Verquières", 43.8399, 4.9195],
    ["Valliguières", 44.0067, 4.5787],
    ["Estézargues", 43.9407, 4.6377],
    ["Saint-Pierre-de-Mézoargues", 43.8593, 4.6513],
    /* Cavaillon et ses voisines, ajoutées le 29/10/2026 avec la pub Avignon Cavaillon */
    ["Cavaillon", 43.8355, 5.0375],
    ["L'Isle-sur-la-Sorgue", 43.9195, 5.0507],
    ["Cheval-Blanc", 43.8003, 5.0635],
    ["Robion", 43.8443, 5.1119],
    ["Taillades", 43.8342, 5.0932],
    ["Plan-d'Orgon", 43.8096, 4.9983],
    ["Orgon", 43.7905, 5.0403],
    ["Mollégès", 43.8061, 4.9488],
    ["Lagnes", 43.8923, 5.1135],
    ["Maubec", 43.844, 5.1403]
  ];
  var AIX_MARSEILLE=[
    ["Marseille", 43.2965, 5.3698],
    ["Aix-en-Provence", 43.5299, 5.4474],
    ["Aubagne", 43.2924, 5.5695],
    ["Vitrolles", 43.448, 5.2498],
    ["Marignane", 43.4172, 5.2155],
    ["Les Pennes-Mirabeau", 43.4003, 5.34],
    ["Gardanne", 43.4557, 5.4707],
    ["Allauch", 43.3362, 5.4817],
    ["Pertuis", 43.6947, 5.503],
    ["Châteauneuf-les-Martigues", 43.383, 5.1647],
    ["Bouc-Bel-Air", 43.4511, 5.4137],
    ["Auriol", 43.3693, 5.6346],
    ["Rognac", 43.4896, 5.2292],
    ["Septèmes-les-Vallons", 43.3991, 5.3661],
    ["Plan-de-Cuques", 43.3456, 5.4619],
    ["Trets", 43.4472, 5.6839],
    ["Gignac-la-Nerthe", 43.3934, 5.2357],
    ["Fuveau", 43.4539, 5.5609],
    ["Cabriès", 43.4412, 5.38],
    ["Lambesc", 43.6551, 5.2622],
    ["La Fare-les-Oliviers", 43.551, 5.1946],
    ["Velaux", 43.5311, 5.2544],
    ["Roquevaire", 43.3488, 5.604],
    ["Éguilles", 43.5686, 5.3543],
    ["Venelles", 43.5982, 5.4844],
    ["Carnoux-en-Provence", 43.2562, 5.5656],
    ["Meyreuil", 43.4868, 5.495],
    ["Saint-Victoret", 43.4205, 5.2328],
    ["Cassis", 43.2139, 5.5396],
    ["La Penne-sur-Huveaune", 43.2827, 5.5154],
    ["Gémenos", 43.2955, 5.6284],
    ["La Bouilladisse", 43.3941, 5.5932],
    ["Cuges-les-Pins", 43.2753, 5.6999],
    ["Saint-Cannat", 43.6209, 5.2981],
    ["Le Puy-Sainte-Réparade", 43.6631, 5.4348],
    ["Ventabren", 43.5387, 5.293],
    ["Roquefort-la-Bédoule", 43.2477, 5.5916],
    ["Simiane-Collongue", 43.4298, 5.4348],
    ["Peypin", 43.3842, 5.5775],
    ["Ensuès-la-Redonne", 43.3568, 5.2061],
    ["Rousset", 43.4806, 5.622],
    ["Peyrolles-en-Provence", 43.6483, 5.584],
    ["Le Rove", 43.3696, 5.2513],
    ["Rognes", 43.6632, 5.3491],
    ["Gréasque", 43.4314, 5.5444],
    ["Mimet", 43.414, 5.5047],
    ["La Destrousse", 43.3775, 5.6054],
    ["Meyrargues", 43.638, 5.5275],
    ["Coudoux", 43.5581, 5.2512],
    ["Peynier", 43.4475, 5.6395],
    ["Villelaure", 43.7101, 5.4332],
    ["Saint-Savournin", 43.4081, 5.526],
    ["Le Tholonet", 43.5217, 5.5124],
    ["Châteauneuf-le-Rouge", 43.489, 5.569],
    ["Cadolive", 43.3961, 5.5444],
    ["Belcodène", 43.4249, 5.5866],
    ["Puyloubier", 43.5254, 5.673],
    ["Saint-Marc-Jaumegarde", 43.5476, 5.5234],
    ["Vauvenargues", 43.5552, 5.5996],
    ["Beaurecueil", 43.5106, 5.5448],
    ["Saint-Estève-Janson", 43.6856, 5.3964],
    ["Saint-Antonin-sur-Bayon", 43.5189, 5.5831]
  ];
  var LIMITE_NOMS=["Salon-de-Provence", "La Ciotat", "Saint-Maximin-la-Sainte-Baume", "Berre-l'Étang", "Saint-Cyr-sur-Mer", "Pélissanne", "Pernes-les-Fontaines", "Lançon-Provence", "Saint-Rémy-de-Provence", "Sausset-les-Pins", "Sénas", "Laudun-l'Ardoise", "Mazan", "Aubignan", "Saint-Zacharie", "Piolenc", "Carry-le-Rouet", "Pourrières", "Grans", "Ceyreste", "Jouques", "Camaret-sur-Aigues", "La Tour-d'Aigues", "Cadenet", "Jonquières-Saint-Vincent", "Caromb", "Velleron", "Meynes", "Mornas", "Beaumes-de-Venise", "Saint-Victor-la-Coste", "Lamanon", "Sernhac", "Vers-Pont-du-Gard", "Castillon-du-Gard", "Lédenon", "Pourcieux", "Orsan", "Ansouis", "Saint-Paul-les-Fonts", "Chusclan", "La Bastidonne", "Saint-Paul-lès-Durance", "La Barben", "Pouzilhac", "Codolet", "Mas-Blanc-des-Alpilles", "Saint-Pierre-de-Vassols", "Modène", "Argilliers", "Sannes", "Saint-Hippolyte-le-Graveyron"];
  var COMMUNES=AVIGNON.concat(AIX_MARSEILLE), CENTER={lat:43.62,lon:5.1};
  /* comparaison des noms sans accents, apostrophes ni casse : l'API Adresse et l'IGN n'écrivent pas toujours pareil */
  function norm(s){ return String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[’']/g,"'").toLowerCase().trim(); }
  var SERVED=COMMUNES.map(function(c){ return norm(c[0]); }), LIMITE=LIMITE_NOMS.map(norm);
  function dist(h,lat,lon){ var r=Math.PI/180, dp=(lat-h.lat)*r, dl=(lon-h.lon)*r; var a=Math.sin(dp/2)*Math.sin(dp/2)+Math.cos(h.lat*r)*Math.cos(lat*r)*Math.sin(dl/2)*Math.sin(dl/2); return 12742*Math.asin(Math.sqrt(a)); }
  function nearest(lat,lon){ var best=null; HUBS.forEach(function(h){ var d=dist(h,lat,lon); if(!best||d<best.km) best={nom:h.nom,km:d}; }); return best; }
  function place(city,cp){ if(city==='Marseille' && /^130(0[1-9]|1[0-6])$/.test(cp||'')){ var n=+cp.slice(3); return 'Marseille '+n+(n===1?'er':'e'); } return city||'votre commune'; }
  /* ok : commune desservie ; warn : en limite (30 à 36 min, ou à moins de 7 km d'une commune desservie) ; far : au-delà */
  function check(lat,lon,city,cp){
    var lbl=place(city,cp), n=norm(city);
    if(SERVED.indexOf(n)>-1) return {cls:'ok',lbl:lbl};
    if(LIMITE.indexOf(n)>-1) return {cls:'warn',lbl:lbl};
    var dmin=Infinity; COMMUNES.forEach(function(c){ var d=dist({lat:c[1],lon:c[2]},lat,lon); if(d<dmin) dmin=d; });
    return {cls:dmin<=7?'warn':'far',lbl:lbl};
  }
  /* autocomplétion : Géoplateforme IGN, repli sur l'API Adresse ; adresses proches de nos trois villes en tête */
  async function geocode(q){
    var p='q='+encodeURIComponent(q)+'&limit=10&autocomplete=1&lat='+CENTER.lat+'&lon='+CENTER.lon;
    var urls=['https://data.geopf.fr/geocodage/search?'+p,'https://api-adresse.data.gouv.fr/search/?'+p];
    for(var i=0;i<urls.length;i++){
      try{
        var res=await fetch(urls[i]); if(!res.ok) continue;
        var j=await res.json();
        var list=(j.features||[]).map(function(f){ var pr=f.properties; return {label:pr.label,name:pr.name,city:pr.city||pr.municipality||'',postcode:pr.postcode||'',type:pr.type,lat:f.geometry.coordinates[1],lon:f.geometry.coordinates[0]}; });
        list.forEach(function(s){ s.d=nearest(s.lat,s.lon).km; });
        list.sort(function(a,b){ return (a.d<=35?0:1)-(b.d<=35?0:1); });
        return list.slice(0,5);
      }catch(e){}
    }
    return [];
  }
  window.CDM_ZONE={HUBS:HUBS,AVIGNON:AVIGNON,AIX_MARSEILLE:AIX_MARSEILLE,nearest:nearest,check:check,place:place,geocode:geocode};
})();
