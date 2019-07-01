angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.inicio', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/inicio.html',
        controller: 'inicioCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.indice'
      2) Using $state.go programatically:
        $state.go('tabsController.indice');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page3
      /page1/tab2/page3
  */
  .state('tabsController.indice', {
    url: '/page3',
    views: {
      'tab1': {
        templateUrl: 'templates/indice.html',
        controller: 'indiceCtrl'
      },
      'tab2': {
        templateUrl: 'templates/indice.html',
        controller: 'indiceCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.presentaciN'
      2) Using $state.go programatically:
        $state.go('tabsController.presentaciN');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page5
      /page1/tab2/page5
  */
  .state('tabsController.presentaciN', {
    url: '/page5',
    views: {
      'tab1': {
        templateUrl: 'templates/presentaciN.html',
        controller: 'presentaciNCtrl'
      },
      'tab2': {
        templateUrl: 'templates/presentaciN.html',
        controller: 'presentaciNCtrl'
      }
    }
  })

  .state('tabsController.contacto', {
    url: '/page9',
    views: {
      'tab1': {
        templateUrl: 'templates/contacto.html',
        controller: 'contactoCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.miTelFonoInteligente'
      2) Using $state.go programatically:
        $state.go('tabsController.miTelFonoInteligente');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page6
      /page1/tab2/page6
  */
  .state('tabsController.miTelFonoInteligente', {
    url: '/page6',
    views: {
      'tab1': {
        templateUrl: 'templates/miTelFonoInteligente.html',
        controller: 'miTelFonoInteligenteCtrl'
      },
      'tab2': {
        templateUrl: 'templates/miTelFonoInteligente.html',
        controller: 'miTelFonoInteligenteCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.QuSonLasAplicaciones'
      2) Using $state.go programatically:
        $state.go('tabsController.QuSonLasAplicaciones');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page7
      /page1/tab2/page7
  */
  .state('tabsController.QuSonLasAplicaciones', {
    url: '/page7',
    views: {
      'tab1': {
        templateUrl: 'templates/QuSonLasAplicaciones.html',
        controller: 'QuSonLasAplicacionesCtrl'
      },
      'tab2': {
        templateUrl: 'templates/QuSonLasAplicaciones.html',
        controller: 'QuSonLasAplicacionesCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.menDeConfiguraciN'
      2) Using $state.go programatically:
        $state.go('tabsController.menDeConfiguraciN');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page8
      /page1/tab2/page8
  */
  .state('tabsController.menDeConfiguraciN', {
    url: '/page8',
    views: {
      'tab1': {
        templateUrl: 'templates/menDeConfiguraciN.html',
        controller: 'menDeConfiguraciNCtrl'
      },
      'tab2': {
        templateUrl: 'templates/menDeConfiguraciN.html',
        controller: 'menDeConfiguraciNCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.QuPuedoModificar'
      2) Using $state.go programatically:
        $state.go('tabsController.QuPuedoModificar');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page15
      /page1/tab2/page15
  */
  .state('tabsController.QuPuedoModificar', {
    url: '/page15',
    views: {
      'tab1': {
        templateUrl: 'templates/QuPuedoModificar.html',
        controller: 'QuPuedoModificarCtrl'
      },
      'tab2': {
        templateUrl: 'templates/QuPuedoModificar.html',
        controller: 'QuPuedoModificarCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.internetConexiNPorRedWiFi'
      2) Using $state.go programatically:
        $state.go('tabsController.internetConexiNPorRedWiFi');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page12
      /page1/tab2/page12
  */
  .state('tabsController.internetConexiNPorRedWiFi', {
    url: '/page12',
    views: {
      'tab1': {
        templateUrl: 'templates/internetConexiNPorRedWiFi.html',
        controller: 'internetConexiNPorRedWiFiCtrl'
      },
      'tab2': {
        templateUrl: 'templates/internetConexiNPorRedWiFi.html',
        controller: 'internetConexiNPorRedWiFiCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.internetConexiNPorDatosMViles'
      2) Using $state.go programatically:
        $state.go('tabsController.internetConexiNPorDatosMViles');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page11
      /page1/tab2/page11
  */
  .state('tabsController.internetConexiNPorDatosMViles', {
    url: '/page11',
    views: {
      'tab1': {
        templateUrl: 'templates/internetConexiNPorDatosMViles.html',
        controller: 'internetConexiNPorDatosMVilesCtrl'
      },
      'tab2': {
        templateUrl: 'templates/internetConexiNPorDatosMViles.html',
        controller: 'internetConexiNPorDatosMVilesCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.aplicaciones'
      2) Using $state.go programatically:
        $state.go('tabsController.aplicaciones');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page10
      /page1/tab2/page10
  */
  .state('tabsController.aplicaciones', {
    url: '/page10',
    views: {
      'tab1': {
        templateUrl: 'templates/aplicaciones.html',
        controller: 'aplicacionesCtrl'
      },
      'tab2': {
        templateUrl: 'templates/aplicaciones.html',
        controller: 'aplicacionesCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.descargarDeNuevasAplicaciones'
      2) Using $state.go programatically:
        $state.go('tabsController.descargarDeNuevasAplicaciones');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page13
      /page1/tab2/page13
  */
  .state('tabsController.descargarDeNuevasAplicaciones', {
    url: '/page13',
    views: {
      'tab1': {
        templateUrl: 'templates/descargarDeNuevasAplicaciones.html',
        controller: 'descargarDeNuevasAplicacionesCtrl'
      },
      'tab2': {
        templateUrl: 'templates/descargarDeNuevasAplicaciones.html',
        controller: 'descargarDeNuevasAplicacionesCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.QuEsGooglePlayStore'
      2) Using $state.go programatically:
        $state.go('tabsController.QuEsGooglePlayStore');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page14
      /page1/tab2/page14
  */
  .state('tabsController.QuEsGooglePlayStore', {
    url: '/page14',
    views: {
      'tab1': {
        templateUrl: 'templates/QuEsGooglePlayStore.html',
        controller: 'QuEsGooglePlayStoreCtrl'
      },
      'tab2': {
        templateUrl: 'templates/QuEsGooglePlayStore.html',
        controller: 'QuEsGooglePlayStoreCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.conectarseAlMundoDeInternet'
      2) Using $state.go programatically:
        $state.go('tabsController.conectarseAlMundoDeInternet');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page22
      /page1/tab2/page22
  */
  .state('tabsController.conectarseAlMundoDeInternet', {
    url: '/page22',
    views: {
      'tab1': {
        templateUrl: 'templates/conectarseAlMundoDeInternet.html',
        controller: 'conectarseAlMundoDeInternetCtrl'
      },
      'tab2': {
        templateUrl: 'templates/conectarseAlMundoDeInternet.html',
        controller: 'conectarseAlMundoDeInternetCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.losNavegadores'
      2) Using $state.go programatically:
        $state.go('tabsController.losNavegadores');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page16
      /page1/tab2/page16
  */
  .state('tabsController.losNavegadores', {
    url: '/page16',
    views: {
      'tab1': {
        templateUrl: 'templates/losNavegadores.html',
        controller: 'losNavegadoresCtrl'
      },
      'tab2': {
        templateUrl: 'templates/losNavegadores.html',
        controller: 'losNavegadoresCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.losBuscadoresGoogle'
      2) Using $state.go programatically:
        $state.go('tabsController.losBuscadoresGoogle');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page17
      /page1/tab2/page17
  */
  .state('tabsController.losBuscadoresGoogle', {
    url: '/page17',
    views: {
      'tab1': {
        templateUrl: 'templates/losBuscadoresGoogle.html',
        controller: 'losBuscadoresGoogleCtrl'
      },
      'tab2': {
        templateUrl: 'templates/losBuscadoresGoogle.html',
        controller: 'losBuscadoresGoogleCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.CMoBuscoAlgoEnGoogle'
      2) Using $state.go programatically:
        $state.go('tabsController.CMoBuscoAlgoEnGoogle');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page20
      /page1/tab2/page20
  */
  .state('tabsController.CMoBuscoAlgoEnGoogle', {
    url: '/page20',
    views: {
      'tab1': {
        templateUrl: 'templates/CMoBuscoAlgoEnGoogle.html',
        controller: 'CMoBuscoAlgoEnGoogleCtrl'
      },
      'tab2': {
        templateUrl: 'templates/CMoBuscoAlgoEnGoogle.html',
        controller: 'CMoBuscoAlgoEnGoogleCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.comunicarseConAmigosWhatsApp'
      2) Using $state.go programatically:
        $state.go('tabsController.comunicarseConAmigosWhatsApp');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page21
      /page1/tab2/page21
  */
  .state('tabsController.comunicarseConAmigosWhatsApp', {
    url: '/page21',
    views: {
      'tab1': {
        templateUrl: 'templates/comunicarseConAmigosWhatsApp.html',
        controller: 'comunicarseConAmigosWhatsAppCtrl'
      },
      'tab2': {
        templateUrl: 'templates/comunicarseConAmigosWhatsApp.html',
        controller: 'comunicarseConAmigosWhatsAppCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.ParaQuSirveWhatsApp'
      2) Using $state.go programatically:
        $state.go('tabsController.ParaQuSirveWhatsApp');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page19
      /page1/tab2/page19
  */
  .state('tabsController.ParaQuSirveWhatsApp', {
    url: '/page19',
    views: {
      'tab1': {
        templateUrl: 'templates/ParaQuSirveWhatsApp.html',
        controller: 'ParaQuSirveWhatsAppCtrl'
      },
      'tab2': {
        templateUrl: 'templates/ParaQuSirveWhatsApp.html',
        controller: 'ParaQuSirveWhatsAppCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.CMoFuncionaWhatsApp'
      2) Using $state.go programatically:
        $state.go('tabsController.CMoFuncionaWhatsApp');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page23
      /page1/tab2/page23
  */
  .state('tabsController.CMoFuncionaWhatsApp', {
    url: '/page23',
    views: {
      'tab1': {
        templateUrl: 'templates/CMoFuncionaWhatsApp.html',
        controller: 'CMoFuncionaWhatsAppCtrl'
      },
      'tab2': {
        templateUrl: 'templates/CMoFuncionaWhatsApp.html',
        controller: 'CMoFuncionaWhatsAppCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.CMoEnvOUnMensajeDeWhatsApp'
      2) Using $state.go programatically:
        $state.go('tabsController.CMoEnvOUnMensajeDeWhatsApp');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page25
      /page1/tab2/page25
  */
  .state('tabsController.CMoEnvOUnMensajeDeWhatsApp', {
    url: '/page25',
    views: {
      'tab1': {
        templateUrl: 'templates/CMoEnvOUnMensajeDeWhatsApp.html',
        controller: 'CMoEnvOUnMensajeDeWhatsAppCtrl'
      },
      'tab2': {
        templateUrl: 'templates/CMoEnvOUnMensajeDeWhatsApp.html',
        controller: 'CMoEnvOUnMensajeDeWhatsAppCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.QuDebemosTenerEnCuentaEnWhatsApp'
      2) Using $state.go programatically:
        $state.go('tabsController.QuDebemosTenerEnCuentaEnWhatsApp');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page24
      /page1/tab2/page24
  */
  .state('tabsController.QuDebemosTenerEnCuentaEnWhatsApp', {
    url: '/page24',
    views: {
      'tab1': {
        templateUrl: 'templates/QuDebemosTenerEnCuentaEnWhatsApp.html',
        controller: 'QuDebemosTenerEnCuentaEnWhatsAppCtrl'
      },
      'tab2': {
        templateUrl: 'templates/QuDebemosTenerEnCuentaEnWhatsApp.html',
        controller: 'QuDebemosTenerEnCuentaEnWhatsAppCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.llamadasYVideollamadas'
      2) Using $state.go programatically:
        $state.go('tabsController.llamadasYVideollamadas');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page32
      /page1/tab2/page32
  */
  .state('tabsController.llamadasYVideollamadas', {
    url: '/page32',
    views: {
      'tab1': {
        templateUrl: 'templates/llamadasYVideollamadas.html',
        controller: 'llamadasYVideollamadasCtrl'
      },
      'tab2': {
        templateUrl: 'templates/llamadasYVideollamadas.html',
        controller: 'llamadasYVideollamadasCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.CMoAgregoUnContacto'
      2) Using $state.go programatically:
        $state.go('tabsController.CMoAgregoUnContacto');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page18
      /page1/tab2/page18
  */
  .state('tabsController.CMoAgregoUnContacto', {
    url: '/page18',
    views: {
      'tab1': {
        templateUrl: 'templates/CMoAgregoUnContacto.html',
        controller: 'CMoAgregoUnContactoCtrl'
      },
      'tab2': {
        templateUrl: 'templates/CMoAgregoUnContacto.html',
        controller: 'CMoAgregoUnContactoCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.CMoEnvOFotosWhatsApp'
      2) Using $state.go programatically:
        $state.go('tabsController.CMoEnvOFotosWhatsApp');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page31
      /page1/tab2/page31
  */
  .state('tabsController.CMoEnvOFotosWhatsApp', {
    url: '/page31',
    views: {
      'tab1': {
        templateUrl: 'templates/CMoEnvOFotosWhatsApp.html',
        controller: 'CMoEnvOFotosWhatsAppCtrl'
      },
      'tab2': {
        templateUrl: 'templates/CMoEnvOFotosWhatsApp.html',
        controller: 'CMoEnvOFotosWhatsAppCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.alertasEngaOsYEstafasEnWhatsApp'
      2) Using $state.go programatically:
        $state.go('tabsController.alertasEngaOsYEstafasEnWhatsApp');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page30
      /page1/tab2/page30
  */
  .state('tabsController.alertasEngaOsYEstafasEnWhatsApp', {
    url: '/page30',
    views: {
      'tab1': {
        templateUrl: 'templates/alertasEngaOsYEstafasEnWhatsApp.html',
        controller: 'alertasEngaOsYEstafasEnWhatsAppCtrl'
      },
      'tab2': {
        templateUrl: 'templates/alertasEngaOsYEstafasEnWhatsApp.html',
        controller: 'alertasEngaOsYEstafasEnWhatsAppCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.QuSonLasRedesSociales'
      2) Using $state.go programatically:
        $state.go('tabsController.QuSonLasRedesSociales');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page29
      /page1/tab2/page29
  */
  .state('tabsController.QuSonLasRedesSociales', {
    url: '/page29',
    views: {
      'tab1': {
        templateUrl: 'templates/QuSonLasRedesSociales.html',
        controller: 'QuSonLasRedesSocialesCtrl'
      },
      'tab2': {
        templateUrl: 'templates/QuSonLasRedesSociales.html',
        controller: 'QuSonLasRedesSocialesCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.twitter'
      2) Using $state.go programatically:
        $state.go('tabsController.twitter');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page28
      /page1/tab2/page28
  */
  .state('tabsController.twitter', {
    url: '/page28',
    views: {
      'tab1': {
        templateUrl: 'templates/twitter.html',
        controller: 'twitterCtrl'
      },
      'tab2': {
        templateUrl: 'templates/twitter.html',
        controller: 'twitterCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.facebook'
      2) Using $state.go programatically:
        $state.go('tabsController.facebook');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page37
      /page1/tab2/page37
  */
  .state('tabsController.facebook', {
    url: '/page37',
    views: {
      'tab1': {
        templateUrl: 'templates/facebook.html',
        controller: 'facebookCtrl'
      },
      'tab2': {
        templateUrl: 'templates/facebook.html',
        controller: 'facebookCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.youtube'
      2) Using $state.go programatically:
        $state.go('tabsController.youtube');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page61
      /page1/tab2/page61
  */
  .state('tabsController.youtube', {
    url: '/page61',
    views: {
      'tab1': {
        templateUrl: 'templates/youtube.html',
        controller: 'youtubeCtrl'
      },
      'tab2': {
        templateUrl: 'templates/youtube.html',
        controller: 'youtubeCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.CMoCreoUnaCuentaEnFacebook'
      2) Using $state.go programatically:
        $state.go('tabsController.CMoCreoUnaCuentaEnFacebook');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page60
      /page1/tab2/page60
  */
  .state('tabsController.CMoCreoUnaCuentaEnFacebook', {
    url: '/page60',
    views: {
      'tab1': {
        templateUrl: 'templates/CMoCreoUnaCuentaEnFacebook.html',
        controller: 'CMoCreoUnaCuentaEnFacebookCtrl'
      },
      'tab2': {
        templateUrl: 'templates/CMoCreoUnaCuentaEnFacebook.html',
        controller: 'CMoCreoUnaCuentaEnFacebookCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.CMoSuboUnaFotoYEtiquetoAUnAmigo'
      2) Using $state.go programatically:
        $state.go('tabsController.CMoSuboUnaFotoYEtiquetoAUnAmigo');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page59
      /page1/tab2/page59
  */
  .state('tabsController.CMoSuboUnaFotoYEtiquetoAUnAmigo', {
    url: '/page59',
    views: {
      'tab1': {
        templateUrl: 'templates/CMoSuboUnaFotoYEtiquetoAUnAmigo.html',
        controller: 'CMoSuboUnaFotoYEtiquetoAUnAmigoCtrl'
      },
      'tab2': {
        templateUrl: 'templates/CMoSuboUnaFotoYEtiquetoAUnAmigo.html',
        controller: 'CMoSuboUnaFotoYEtiquetoAUnAmigoCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.CMoHacemosUnaPublicaciN'
      2) Using $state.go programatically:
        $state.go('tabsController.CMoHacemosUnaPublicaciN');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page58
      /page1/tab2/page58
  */
  .state('tabsController.CMoHacemosUnaPublicaciN', {
    url: '/page58',
    views: {
      'tab1': {
        templateUrl: 'templates/CMoHacemosUnaPublicaciN.html',
        controller: 'CMoHacemosUnaPublicaciNCtrl'
      },
      'tab2': {
        templateUrl: 'templates/CMoHacemosUnaPublicaciN.html',
        controller: 'CMoHacemosUnaPublicaciNCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.QuInformaciNNoSeDebeCompartirEnFacebook'
      2) Using $state.go programatically:
        $state.go('tabsController.QuInformaciNNoSeDebeCompartirEnFacebook');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page57
      /page1/tab2/page57
  */
  .state('tabsController.QuInformaciNNoSeDebeCompartirEnFacebook', {
    url: '/page57',
    views: {
      'tab1': {
        templateUrl: 'templates/QuInformaciNNoSeDebeCompartirEnFacebook.html',
        controller: 'QuInformaciNNoSeDebeCompartirEnFacebookCtrl'
      },
      'tab2': {
        templateUrl: 'templates/QuInformaciNNoSeDebeCompartirEnFacebook.html',
        controller: 'QuInformaciNNoSeDebeCompartirEnFacebookCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.CMoConfigurarLaSeguridadEnFacebook'
      2) Using $state.go programatically:
        $state.go('tabsController.CMoConfigurarLaSeguridadEnFacebook');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page56
      /page1/tab2/page56
  */
  .state('tabsController.CMoConfigurarLaSeguridadEnFacebook', {
    url: '/page56',
    views: {
      'tab1': {
        templateUrl: 'templates/CMoConfigurarLaSeguridadEnFacebook.html',
        controller: 'CMoConfigurarLaSeguridadEnFacebookCtrl'
      },
      'tab2': {
        templateUrl: 'templates/CMoConfigurarLaSeguridadEnFacebook.html',
        controller: 'CMoConfigurarLaSeguridadEnFacebookCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.correoElectrNicoCrearUnaCuenta'
      2) Using $state.go programatically:
        $state.go('tabsController.correoElectrNicoCrearUnaCuenta');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page55
      /page1/tab2/page55
  */
  .state('tabsController.correoElectrNicoCrearUnaCuenta', {
    url: '/page55',
    views: {
      'tab1': {
        templateUrl: 'templates/correoElectrNicoCrearUnaCuenta.html',
        controller: 'correoElectrNicoCrearUnaCuentaCtrl'
      },
      'tab2': {
        templateUrl: 'templates/correoElectrNicoCrearUnaCuenta.html',
        controller: 'correoElectrNicoCrearUnaCuentaCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.CMoRedactarYEnviarUnCorreoElectrNico'
      2) Using $state.go programatically:
        $state.go('tabsController.CMoRedactarYEnviarUnCorreoElectrNico');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page40
      /page1/tab2/page40
  */
  .state('tabsController.CMoRedactarYEnviarUnCorreoElectrNico', {
    url: '/page40',
    views: {
      'tab1': {
        templateUrl: 'templates/CMoRedactarYEnviarUnCorreoElectrNico.html',
        controller: 'CMoRedactarYEnviarUnCorreoElectrNicoCtrl'
      },
      'tab2': {
        templateUrl: 'templates/CMoRedactarYEnviarUnCorreoElectrNico.html',
        controller: 'CMoRedactarYEnviarUnCorreoElectrNicoCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.contraseAs'
      2) Using $state.go programatically:
        $state.go('tabsController.contraseAs');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page52
      /page1/tab2/page52
  */
  .state('tabsController.contraseAs', {
    url: '/page52',
    views: {
      'tab1': {
        templateUrl: 'templates/contraseAs.html',
        controller: 'contraseAsCtrl'
      },
      'tab2': {
        templateUrl: 'templates/contraseAs.html',
        controller: 'contraseAsCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.menDeLaAplicaciNDeGmail'
      2) Using $state.go programatically:
        $state.go('tabsController.menDeLaAplicaciNDeGmail');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page51
      /page1/tab2/page51
  */
  .state('tabsController.menDeLaAplicaciNDeGmail', {
    url: '/page51',
    views: {
      'tab1': {
        templateUrl: 'templates/menDeLaAplicaciNDeGmail.html',
        controller: 'menDeLaAplicaciNDeGmailCtrl'
      },
      'tab2': {
        templateUrl: 'templates/menDeLaAplicaciNDeGmail.html',
        controller: 'menDeLaAplicaciNDeGmailCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protecciNParaNuestroCorreoElectrNico'
      2) Using $state.go programatically:
        $state.go('tabsController.protecciNParaNuestroCorreoElectrNico');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page50
      /page1/tab2/page50
  */
  .state('tabsController.protecciNParaNuestroCorreoElectrNico', {
    url: '/page50',
    views: {
      'tab1': {
        templateUrl: 'templates/protecciNParaNuestroCorreoElectrNico.html',
        controller: 'protecciNParaNuestroCorreoElectrNicoCtrl'
      },
      'tab2': {
        templateUrl: 'templates/protecciNParaNuestroCorreoElectrNico.html',
        controller: 'protecciNParaNuestroCorreoElectrNicoCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page2')


});