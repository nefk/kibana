import visDebugSpyPanelTemplate from 'plugins/dev_mode/vis_debug_spy_panel.html';
import spyModesRegistry from 'ui/registry/spy_modes';

function VisDetailsSpyProvider(Notifier, $filter, $rootScope, config) {
  return {
    name: 'debug',
    display: 'Debug',
    template: visDebugSpyPanelTemplate,
    order: 5,
    link: function ($scope, $el) {
      $scope.$watch('vis.getEnabledState() | json', function (json) {
        $scope.visStateJson = json;
      });
    }
  };
}

// register the spy mode or it won't show up in the spys
spyModesRegistry.register(VisDetailsSpyProvider);