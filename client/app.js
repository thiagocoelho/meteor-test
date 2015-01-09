Transform = null;

require("famous-polyfills");
require("famous/core/famous");

FView.ready(function() {
  Transform = famous.core.Transform;

  if (Package['raix:famono']) {
    famous.polyfills;
    famous.core.famous;
  }
});

FView.mainCtx = 'mainCtx';
Logger.setLevel("famous-views", "info");

FView.ready(function(require) {
  FView.registerView('ScrollContainer', famous.views.ScrollContainer);
});

Template.AppSectionItem.rendered = function() {
  console.log('AppSectionItem rendered', Template.parentData(1).name);
}