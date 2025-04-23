sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'hpe/av/managepo/test/integration/FirstJourney',
		'hpe/av/managepo/test/integration/pages/POsList',
		'hpe/av/managepo/test/integration/pages/POsObjectPage',
		'hpe/av/managepo/test/integration/pages/POItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, POsList, POsObjectPage, POItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('hpe/av/managepo') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePOsList: POsList,
					onThePOsObjectPage: POsObjectPage,
					onThePOItemsObjectPage: POItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);