/* Mesure de fréquentation de Coup de Main Provence, partagée par l'accueil, le devis et la confidentialité.
   PostHog, projet commun de Victor (UE), super-property product = coup-de-main-provence.
   Sans cookie ni stockage (persistence memory) : rien n'est déposé sur l'appareil, le bandeau
   ne concerne que le traceur de Meta. Les champs saisis et les adresses sont masqués dans les
   enregistrements de session. L'équipe se marque avec ?interne=1 (retour avec ?interne=0),
   puis filtre interne = true. Rien ne part depuis localhost.
   Événements : devis_etape, zone_verifiee, devis_envoye, contact_clic. */
(function(){
  "use strict";
  window.cdmMesure = function(){};
  if (/^(localhost|127\.|\[::1\])/.test(location.hostname)) return;

  var interne = false;
  try {
    var q = new URLSearchParams(location.search).get("interne");
    if (q === "1") localStorage.setItem("cdm_interne", "1");
    if (q === "0") localStorage.removeItem("cdm_interne");
    interne = localStorage.getItem("cdm_interne") === "1";
  } catch (e) {}

  !function (t, e) {
    var o, n, p, r; e.__SV || (window.posthog = e, e._i = [], e.init = function (i, s, a) {
      function g(t, e) { var o = e.split("."); 2 == o.length && (t = t[o[0]], e = o[1]);
        t[e] = function () { t.push([e].concat(Array.prototype.slice.call(arguments, 0))); }; }
      (p = t.createElement("script")).type = "text/javascript"; p.crossOrigin = "anonymous";
      p.async = !0; p.src = s.api_host + "/static/array.js";
      (r = t.getElementsByTagName("script")[0]).parentNode.insertBefore(p, r);
      var u = e; for (void 0 !== a ? u = e[a] = [] : a = "posthog", u.people = u.people || [],
        u.toString = function (t) { var e = "posthog"; return "posthog" !== a && (e += "." + a),
          t || (e += " (stub)"), e; }, u.people.toString = function () { return u.toString(1) + ".people (stub)"; },
        o = ("init capture register register_once register_for_session unregister unregister_for_session " +
          "getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment " +
          "getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey " +
          "canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags " +
          "resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id " +
          "getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording " +
          "sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile " +
          "opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug"
        ).split(" "), n = 0; n < o.length; n++) g(u, o[n]);
      e._i.push([i, s, a]); }, e.__SV = 1); }(document, window.posthog || []);

  posthog.init("phc_wdtN3Hmfuom8WwV2yXd9XoN7fuMPBqjJYREiTkeRiFRs", {
    api_host: "https://eu.i.posthog.com",
    ui_host: "https://eu.posthog.com",
    persistence: "memory",
    person_profiles: "identified_only",
    capture_pageview: true,   // site multipage : chaque page est un vrai chargement
    capture_pageleave: true,
    autocapture: true,
    // nom, téléphone, adresse : ni les champs ni les suggestions ni le récapitulatif
    session_recording: { maskAllInputs: true, maskTextSelector: "#sum, #acList, .ac, #merciSub" }
  });
  posthog.register({ product: "coup-de-main-provence", interne: interne });

  window.cdmMesure = function (ev, props) { try { posthog.capture(ev, props || {}); } catch (e) {} };
})();
